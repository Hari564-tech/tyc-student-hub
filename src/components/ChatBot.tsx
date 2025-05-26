
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m TYC Assistant. How can I help you today? You can ask me about courses, study materials, applications, or career guidance.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Course-related queries
    if (message.includes('course') || message.includes('programming') || message.includes('python') || message.includes('java')) {
      return 'We offer comprehensive courses in Python, Java, Web Development, Data Science, and more. Our courses include hands-on projects and industry-relevant skills. Would you like to know about specific course details or pricing?';
    }

    // Study materials queries
    if (message.includes('study material') || message.includes('notes') || message.includes('important question')) {
      return 'We provide study materials for Class 10th, 11th, and 12th including important questions, formula handbooks, and practice guides for Math, Physics, Chemistry, Biology, and more. Most materials are available for free or at very affordable prices starting from ₹99.';
    }

    // Application services queries
    if (message.includes('application') || message.includes('eapcet') || message.includes('kcet') || message.includes('pan card')) {
      return 'We offer application assistance for EAPCET, KCET, PAN Card, and other forms at just ₹50 per application - much cheaper than external services charging ₹100-150. Our experts will help you fill and submit applications correctly.';
    }

    // Career guidance queries
    if (message.includes('career') || message.includes('guidance') || message.includes('job') || message.includes('internship')) {
      return 'Our career guidance includes personalized counseling, industry insights, resume building, interview preparation, and regular updates on internships and job opportunities. We help bridge the gap between academia and industry.';
    }

    // Pricing queries
    if (message.includes('price') || message.includes('cost') || message.includes('fee') || message.includes('affordable')) {
      return 'TYC offers very affordable services: Application assistance at ₹50 per form, study materials starting from ₹99, and competitive course fees. We believe in making quality education accessible to all students.';
    }

    // Contact/enrollment queries
    if (message.includes('how to join') || message.includes('enroll') || message.includes('contact') || message.includes('register')) {
      return 'You can join TYC by clicking "Get Started" on our homepage. For specific queries, contact us at support@tyc.edu or call +91 9876543210. Our team in Hyderabad is ready to help you!';
    }

    // General greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! Welcome to TYC (Telugu Youth Citizens). I\'m here to help you with information about our courses, study materials, career guidance, and application services. What would you like to know?';
    }

    // Default response
    return 'I can help you with information about TYC courses, study materials, career guidance, application services, and pricing. Could you please be more specific about what you\'d like to know?';
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputMessage),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border">
          <Card className="h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-sm font-medium">TYC Assistant</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-white hover:bg-blue-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="w-4 h-4 mt-1 text-blue-600" />
                        )}
                        {message.sender === 'user' && (
                          <User className="w-4 h-4 mt-1 text-white" />
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about TYC..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;
