
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
                <Link to="/courses">
                  <Button size="lg" className="text-lg px-8 py-3 w-full sm:w-auto">
                    Start Learning Today
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3 w-full sm:w-auto">
                    Explore Courses
                  </Button>
                </Link>
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
                <Link to="/applications">
                  <Button className="w-full">Apply Now</Button>
                </Link>
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
                <Link to="/applications">
                  <Button className="w-full">Apply Now</Button>
                </Link>
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
                <Link to="/applications">
                  <Button className="w-full">Apply Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programming Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Programming Courses
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master in-demand programming languages and frameworks with our comprehensive courses designed for beginners to advanced learners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white text-6xl font-bold">Py</div>
                </div>
                <CardTitle className="text-xl">Python Programming</CardTitle>
                <CardDescription>Complete Python course from basics to advanced</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹2,999</span>
                  <span className="text-sm text-gray-600">⭐ 4.8 (1,234 reviews)</span>
                </div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• Variables, Data Types & Control Structures</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• Web Development with Django/Flask</li>
                  <li>• Data Science & Machine Learning</li>
                </ul>
                <Link to="/courses">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white text-4xl font-bold">Java</div>
                </div>
                <CardTitle className="text-xl">Java Development</CardTitle>
                <CardDescription>Full-stack Java development course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹3,499</span>
                  <span className="text-sm text-gray-600">⭐ 4.7 (987 reviews)</span>
                </div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• Core Java Fundamentals</li>
                  <li>• Spring Boot Framework</li>
                  <li>• Database Integration</li>
                  <li>• REST API Development</li>
                </ul>
                <Link to="/courses">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white text-4xl font-bold">JS</div>
                </div>
                <CardTitle className="text-xl">JavaScript & React</CardTitle>
                <CardDescription>Modern web development with JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹2,799</span>
                  <span className="text-sm text-gray-600">⭐ 4.9 (1,567 reviews)</span>
                </div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• ES6+ JavaScript Features</li>
                  <li>• React.js & Component Architecture</li>
                  <li>• State Management with Redux</li>
                  <li>• Node.js Backend Development</li>
                </ul>
                <Link to="/courses">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View All Programming Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Free Study Materials
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access thousands of free study materials, important questions, and practice papers for all subjects and competitive exams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">EAPCET Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-sm text-gray-600 mb-4">Question Papers & Notes</p>
                <Link to="/study-materials">
                  <Button variant="outline" className="w-full">Browse Materials</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">JEE/NEET Prep</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600 mb-2">750+</p>
                <p className="text-sm text-gray-600 mb-4">Practice Questions</p>
                <Link to="/study-materials">
                  <Button variant="outline" className="w-full">Browse Materials</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Programming Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600 mb-2">300+</p>
                <p className="text-sm text-gray-600 mb-4">Code Examples & Tutorials</p>
                <Link to="/study-materials">
                  <Button variant="outline" className="w-full">Browse Materials</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Previous Papers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-orange-600 mb-2">1000+</p>
                <p className="text-sm text-gray-600 mb-4">Solved Question Papers</p>
                <Link to="/study-materials">
                  <Button variant="outline" className="w-full">Browse Materials</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Download Materials Instantly
                </h4>
                <p className="text-gray-600 mb-6">
                  Get instant access to high-quality study materials prepared by experienced teachers and subject experts. All materials are free to download and updated regularly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/study-materials">
                    <Button size="lg" className="w-full sm:w-auto">Browse All Materials</Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Request Material</Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600">2500+</p>
                  <p className="text-sm text-gray-600">Total Downloads</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">50+</p>
                  <p className="text-sm text-gray-600">Subjects Covered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600">4.9</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">100%</p>
                  <p className="text-sm text-gray-600">Free Access</p>
                </div>
              </div>
            </div>
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
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                View All Courses
              </Button>
            </Link>
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
