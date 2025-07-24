import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Bot, User, Key, Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🚀 EXCITING NEWS! We just launched our Python Programming Complete Course for only ₹2,000 (regular price ₹2,999)!\n\nCourse includes:\n✅ Basic Python Programming\n✅ Advanced Python Concepts\n✅ Data Structures & Algorithms in Python\n✅ 10 weeks of comprehensive training\n✅ Hands-on projects and assignments\n\nThis is a limited-time launch offer! Ask me about Python or any other programming language, technical subjects, courses, study materials, applications, and career guidance.\n\n🤖 Enhanced with AI: I can now provide more intelligent and detailed responses!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini-api-key') || '');
  const [showApiDialog, setShowApiDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (userMessage: string): Promise<string> => {
    if (!apiKey) {
      return "🔑 Please set up your Gemini API key in settings to use AI-enhanced responses!";
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are TYC (Telugu Youth Citizens) Technical Assistant. You help with programming languages, technical subjects, career guidance, and courses. Our current offerings include:

NEW LAUNCH: Python Complete Course - ₹2,000 (Basic + Advanced + DSA)
- Java Full Stack: ₹4,999
- Web Development: ₹5,999  
- Data Science: ₹6,999
- Mobile Development: ₹4,499
- Cybersecurity: ₹6,499
- Career Guidance: ₹1,999

Study materials: ₹99-299 per subject
Application assistance: ₹50 per form

Always promote our courses when relevant. Be helpful, technical, and professional.

User question: ${userMessage}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || getFallbackResponse(userMessage);
    } catch (error) {
      console.error('Gemini API error:', error);
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Programming Languages - Python (Updated with new course info)
    if (message.includes('python') || message.includes('py')) {
      return '🐍 GREAT NEWS! We just launched our Python Programming Complete Course!\n\n🎉 **SPECIAL LAUNCH OFFER: ₹2,000 only** (Regular price: ₹2,999)\n\n📚 **Course Coverage:**\n• **Basic Python:** Variables, data types, loops, functions, file handling\n• **Advanced Python:** OOP, decorators, generators, exception handling\n• **DSA in Python:** Arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms\n• **Libraries:** NumPy, Pandas, Matplotlib basics\n• **Projects:** Real-world applications and portfolio building\n\n⏰ **Duration:** 10 weeks with hands-on practice\n🎓 **Level:** Beginner to Advanced\n👥 **Already enrolled:** 1800+ students\n⭐ **Rating:** 4.9/5\n\n🔥 This is a limited-time launch price! Perfect for beginners and those wanting to master DSA concepts.';
    }

    // Java Programming
    if (message.includes('java') && !message.includes('javascript')) {
      return 'Java is excellent for enterprise development! Our Java course includes:\n\n• Core Java: Syntax, OOP concepts, inheritance\n• Advanced Java: Collections, multithreading, exception handling\n• Frameworks: Spring, Spring Boot, Hibernate\n• Database: JDBC, MySQL integration\n• Projects: Full-stack applications, REST APIs\n\nJava Full Stack course: ₹4,999 for 12 weeks with industry projects!';
    }

    // JavaScript & Web Development
    if (message.includes('javascript') || message.includes('js') || message.includes('web development') || message.includes('frontend') || message.includes('react') || message.includes('node')) {
      return 'JavaScript is the backbone of web development! TYC covers:\n\n• Frontend: HTML5, CSS3, JavaScript ES6+\n• Frameworks: React.js, Vue.js, Angular\n• Backend: Node.js, Express.js\n• Database: MongoDB, PostgreSQL\n• Tools: Git, Webpack, npm/yarn\n• Projects: Responsive websites, SPAs, full-stack apps\n\nWeb Development Bootcamp: ₹5,999 for 16 weeks!';
    }

    // C++ Programming
    if (message.includes('c++') || message.includes('cpp') || message.includes('c plus')) {
      return 'C++ is powerful for system programming and competitive coding! Our curriculum:\n\n• Fundamentals: Syntax, pointers, memory management\n• OOP: Classes, objects, inheritance, polymorphism\n• STL: Containers, algorithms, iterators\n• Advanced: Templates, exception handling\n• Applications: Game development, system programming\n• Problem Solving: Data structures, algorithms\n\nC++ course: ₹3,499 for 10 weeks with coding practice!';
    }

    // Data Science & Analytics
    if (message.includes('data science') || message.includes('machine learning') || message.includes('ml') || message.includes('ai') || message.includes('analytics')) {
      return 'Data Science is the future! TYC offers comprehensive training:\n\n• Python for Data Science: Pandas, NumPy, Matplotlib\n• Statistics & Mathematics for DS\n• Machine Learning: Scikit-learn, algorithms\n• Deep Learning: TensorFlow, PyTorch\n• Tools: Jupyter, Git, SQL databases\n• Projects: Real datasets, predictive models\n\nData Science course: ₹6,999 for 14 weeks with industry projects!';
    }

    // Mobile App Development
    if (message.includes('mobile') || message.includes('android') || message.includes('ios') || message.includes('app development') || message.includes('flutter') || message.includes('react native')) {
      return 'Mobile app development is in high demand! We teach:\n\n• Android: Java/Kotlin, Android Studio\n• iOS: Swift, Xcode development\n• Cross-platform: Flutter, React Native\n• UI/UX: Material Design, Human Interface Guidelines\n• Backend: Firebase, REST APIs\n• Deployment: Play Store, App Store publishing\n\nMobile Development course: ₹4,499 for 12 weeks!';
    }

    // Database & Backend
    if (message.includes('database') || message.includes('sql') || message.includes('mysql') || message.includes('mongodb') || message.includes('backend')) {
      return 'Database skills are essential for any developer! Our coverage:\n\n• SQL Databases: MySQL, PostgreSQL, SQLite\n• NoSQL: MongoDB, Firebase\n• Database Design: Normalization, relationships\n• Backend Development: APIs, server-side logic\n• Cloud Databases: AWS RDS, Google Cloud SQL\n• Performance: Indexing, query optimization\n\nDatabase & Backend course: ₹3,999 for 10 weeks!';
    }

    // DevOps & Cloud
    if (message.includes('devops') || message.includes('cloud') || message.includes('aws') || message.includes('docker') || message.includes('kubernetes')) {
      return 'DevOps and Cloud computing are crucial modern skills!\n\n• Cloud Platforms: AWS, Google Cloud, Azure\n• Containerization: Docker, Kubernetes\n• CI/CD: Jenkins, GitHub Actions\n• Infrastructure: Terraform, Ansible\n• Monitoring: Prometheus, Grafana\n• Security: Best practices, compliance\n\nDevOps course: ₹5,499 for 12 weeks with hands-on labs!';
    }

    // Cybersecurity
    if (message.includes('cybersecurity') || message.includes('security') || message.includes('ethical hacking') || message.includes('penetration testing')) {
      return 'Cybersecurity is a growing field with excellent opportunities!\n\n• Network Security: Firewalls, VPNs, protocols\n• Ethical Hacking: Penetration testing, vulnerability assessment\n• Tools: Kali Linux, Wireshark, Metasploit\n• Cryptography: Encryption, digital signatures\n• Compliance: GDPR, ISO 27001\n• Incident Response: Forensics, recovery\n\nCybersecurity course: ₹6,499 for 14 weeks with practical labs!';
    }

    // Game Development
    if (message.includes('game development') || message.includes('unity') || message.includes('unreal') || message.includes('game design')) {
      return 'Game development combines creativity with technical skills!\n\n• Game Engines: Unity, Unreal Engine\n• Programming: C#, C++, scripting\n• 2D/3D Graphics: Sprites, models, animations\n• Physics: Collision detection, movement\n• UI/UX: Game interfaces, user experience\n• Publishing: Steam, mobile app stores\n\nGame Development course: ₹4,999 for 12 weeks with game projects!';
    }

    // Academic Subjects - Mathematics
    if (message.includes('mathematics') || message.includes('math') || message.includes('calculus') || message.includes('algebra')) {
      return 'Mathematics is fundamental for engineering and computer science!\n\n• Engineering Mathematics: Calculus, linear algebra, differential equations\n• Discrete Mathematics: Logic, sets, combinatorics\n• Statistics & Probability: Data analysis, distributions\n• Study Materials: Formula sheets, solved examples\n• Practice: Previous year questions, mock tests\n\nMath study materials: ₹149-299 per subject with video explanations!';
    }

    // Physics for Engineering
    if (message.includes('physics') || message.includes('mechanics') || message.includes('thermodynamics')) {
      return 'Physics concepts are essential for engineering students!\n\n• Classical Mechanics: Motion, forces, energy\n• Thermodynamics: Heat, entropy, cycles\n• Electromagnetics: Fields, waves, circuits\n• Modern Physics: Quantum mechanics, relativity\n• Lab Work: Experiments, measurements\n• Applications: Real-world engineering problems\n\nPhysics materials: ₹199 with practical examples and simulations!';
    }

    // Electronics & Electrical
    if (message.includes('electronics') || message.includes('electrical') || message.includes('circuits') || message.includes('embedded')) {
      return 'Electronics and Electrical engineering have diverse applications!\n\n• Circuit Analysis: Ohm\'s law, Kirchhoff\'s laws\n• Digital Electronics: Logic gates, flip-flops\n• Microcontrollers: Arduino, Raspberry Pi\n• Power Systems: Generation, transmission, distribution\n• Control Systems: Feedback, stability\n• Projects: IoT devices, automation systems\n\nElectronics course: ₹3,999 for 10 weeks with hands-on projects!';
    }

    // Competitive Programming
    if (message.includes('competitive programming') || message.includes('coding contest') || message.includes('algorithm') || message.includes('data structure')) {
      return 'Competitive programming enhances problem-solving skills!\n\n• Data Structures: Arrays, trees, graphs, heaps\n• Algorithms: Sorting, searching, dynamic programming\n• Problem Solving: Logical thinking, optimization\n• Platforms: CodeChef, Codeforces, LeetCode\n• Interview Prep: Technical interviews, coding rounds\n• Practice: Regular contests, mock interviews\n\nDSA course: ₹3,999 for 10 weeks with 200+ problems!';
    }

    // Career and Interview Preparation
    if (message.includes('interview') || message.includes('job preparation') || message.includes('resume') || message.includes('career switch')) {
      return 'TYC provides comprehensive career guidance and interview preparation!\n\n• Technical Interviews: Coding rounds, system design\n• Resume Building: ATS-friendly formats, project highlighting\n• Mock Interviews: Real-time practice sessions\n• Soft Skills: Communication, leadership, teamwork\n• Industry Insights: Current trends, salary negotiations\n• Placement Support: Job referrals, company connections\n\nCareer Guidance package: ₹1,999 for 6 weeks with personalized mentoring!';
    }

    // Course and pricing queries
    if (message.includes('course') || message.includes('programming') || message.includes('learn coding')) {
      return '🚀 TYC offers comprehensive courses in all major programming languages and technologies:\n\n🔥 **NEW LAUNCH - SPECIAL OFFER:**\n🐍 Python Complete Course (₹2,000) - Basic + Advanced + DSA - 10 weeks\n\n**Other Popular Courses:**\n☕ Java Full Stack (₹4,999) - 12 weeks\n🌐 Web Development (₹5,999) - 16 weeks\n📊 Data Science (₹6,999) - 14 weeks\n📱 Mobile Development (₹4,499) - 12 weeks\n🛡️ Cybersecurity (₹6,499) - 14 weeks\n🎯 Career Guidance (₹1,999) - 6 weeks\n\nAll courses include projects, certifications, and placement assistance!';
    }

    // Study materials queries
    if (message.includes('study material') || message.includes('notes') || message.includes('important question')) {
      return 'We provide comprehensive study materials for all technical subjects:\n\n📚 Programming Notes: Python, Java, C++, JavaScript\n🔬 Engineering Subjects: Math, Physics, Electronics\n📝 Important Questions: Previous year papers, mock tests\n💡 Project Ideas: Complete implementation guides\n🎯 Interview Questions: Technical and HR rounds\n\nMost materials: ₹99-299 with regular updates and video explanations!';
    }

    // Application services queries
    if (message.includes('application') || message.includes('eapcet') || message.includes('kcet') || message.includes('gate') || message.includes('placement')) {
      return 'TYC offers application assistance for various technical and competitive exams:\n\n🎓 Engineering Entrance: EAPCET, KCET, JEE\n🏢 Job Applications: Placement drives, internships\n📄 Document Services: Resume formatting, cover letters\n💳 Government Forms: PAN Card, scholarships\n📋 Project Submissions: Academic and professional\n\nApplication assistance: ₹50 per form - much cheaper than external services!';
    }

    // Contact/enrollment queries
    if (message.includes('how to join') || message.includes('enroll') || message.includes('contact') || message.includes('register')) {
      return 'Ready to start your coding journey with TYC?\n\n🚀 Quick Enrollment: Click "Get Started" on our homepage\n📞 Contact: +91 9876543210\n📧 Email: support@tyc.edu\n🏢 Location: Hyderabad, Telangana\n💬 Live Chat: Available 24/7 for instant support\n💰 Payment: Flexible EMI options available\n\nJoin thousands of successful students who started their tech careers with TYC!';
    }

    // General greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! Welcome to TYC (Telugu Youth Citizens) - Your gateway to tech excellence! 🚀\n\nI can help you with:\n\n💻 Programming Languages (Python, Java, JavaScript, C++)\n📊 Data Science & AI/ML\n🌐 Web & Mobile Development\n🛡️ Cybersecurity & DevOps\n📚 Study Materials & Academic Support\n🎯 Career Guidance & Interview Prep\n\nWhat would you like to explore today?';
    }

    // Default response
    return 'I\'m here to help with all your technical and academic queries! I can assist with:\n\n💻 Programming: Python, Java, JavaScript, C++, and more\n📊 Data Science, AI/ML, and Analytics\n🌐 Web Development and Mobile Apps\n🛡️ Cybersecurity and DevOps\n📚 Study Materials for Engineering subjects\n🎯 Career guidance and interview preparation\n💼 Application assistance for exams and jobs\n\n🔥 **Don\'t miss our NEW Python Course launch offer - ₹2,000 only!**\n\nPlease ask me about any specific programming language, course, or technical topic you\'re interested in!';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const botResponseText = apiKey ? 
        await callGeminiAPI(inputMessage) : 
        getFallbackResponse(inputMessage);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const saveApiKey = () => {
    localStorage.setItem('gemini-api-key', apiKey);
    setShowApiDialog(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">
            TYC Technical Assistant
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get expert guidance on programming languages, technical subjects, career advice, and course recommendations. Your 24/7 coding mentor!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl h-[500px]">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-6 h-6" />
                  TYC Technical Assistant - AI Enhanced {apiKey ? '🤖' : ''}
                </div>
                
                <Dialog open={showApiDialog} onOpenChange={setShowApiDialog}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-600">
                      <Settings className="w-4 h-4 mr-2" />
                      {apiKey ? 'AI Enabled' : 'Enable AI'}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Configure Gemini AI</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Enter your Google Gemini API key to enable AI-enhanced responses:
                      </p>
                      <Input
                        type="password"
                        placeholder="Your Gemini API key..."
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Button onClick={saveApiKey} className="flex-1">
                          <Key className="w-4 h-4 mr-2" />
                          Save API Key
                        </Button>
                        <Button variant="outline" onClick={() => setShowApiDialog(false)}>
                          Cancel
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500">
                        Your API key is stored locally and never shared.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex flex-col h-[420px] p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {message.sender === 'bot' && (
                          <Bot className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                        )}
                        {message.sender === 'user' && (
                          <User className="w-5 h-5 mt-1 text-white flex-shrink-0" />
                        )}
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] p-4 rounded-lg bg-gray-100 text-gray-900">
                      <div className="flex items-start space-x-3">
                        <Bot className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                        <p className="text-sm">🤖 AI is thinking...</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t bg-gray-50">
                <div className="flex space-x-3">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our NEW Python course or any programming topic..."
                    className="flex-1 bg-white"
                  />
                  <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
