
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Laptop, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">TYC</h1>
              <span className="ml-2 text-gray-600">Telugu Youth Citizens</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-blue-600 font-medium">Home</Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</Link>
              <Link to="/study-materials" className="text-gray-700 hover:text-blue-600 transition-colors">Study Materials</Link>
              <Link to="/career-guidance" className="text-gray-700 hover:text-blue-600 transition-colors">Career Guidance</Link>
              <Link to="/applications" className="text-gray-700 hover:text-blue-600 transition-colors">Applications</Link>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Students with
                <span className="text-blue-600"> Academic Excellence</span> &
                <span className="text-purple-600"> Technical Skills</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your one-stop platform for academic support, technical training, career guidance, and affordable application services. Join thousands of students achieving their dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Learning Today
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Explore Courses
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Courses Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Student learning online"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Live Classes</div>
                    <div className="text-sm text-gray-600">Interactive Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From academic support to career guidance, we provide comprehensive resources to help you excel in your educational and professional journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 bg-blue-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Academic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-blue-700">
                  Comprehensive study materials, important questions, and budget-friendly resources for all subjects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-purple-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-purple-700">
                  Learn programming languages like Python, Java, and more with hands-on practical experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-green-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-green-700">
                  Expert advice on career paths, personalized guidance, and industry insights from professionals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-orange-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-900">Job Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-orange-700">
                  Regular updates on internships, job openings, and assistance with application processes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Affordable Application Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get professional help with your applications at just ₹50 per form - significantly lower than external services charging ₹100-150.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">EAPCET</CardTitle>
                <CardDescription>Engineering, Agriculture & Medical Common Entrance Test</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">₹50</div>
                <div className="text-sm text-gray-600 line-through mb-4">Others charge ₹150</div>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">KCET</CardTitle>
                <CardDescription>Karnataka Common Entrance Test</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">₹50</div>
                <div className="text-sm text-gray-600 line-through mb-4">Others charge ₹120</div>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">PAN Card</CardTitle>
                <CardDescription>Permanent Account Number Application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">₹50</div>
                <div className="text-sm text-gray-600 line-through mb-4">Others charge ₹100</div>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TYC Chatbot Section */}
      <ChatBot />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already started their journey towards academic excellence and career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-blue-400 mb-4">TYC</h4>
              <p className="text-gray-400 mb-4">
                Empowering students with academic support, technical skills, and career guidance.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link to="/study-materials" className="hover:text-white transition-colors">Study Materials</Link></li>
                <li><Link to="/career-guidance" className="hover:text-white transition-colors">Career Guidance</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/applications" className="hover:text-white transition-colors">Application Services</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Internships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Job Opportunities</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">
                Email: support@tyc.edu<br />
                Phone: +91 9876543210<br />
                Hyderabad, Telangana
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Telugu Youth Citizens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
