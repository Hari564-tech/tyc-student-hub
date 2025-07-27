import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Laptop, GraduationCap, Briefcase, FileText, Video, Code2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary">TYC</h1>
                  <p className="text-xs text-muted-foreground">Telugu Youth Citizens</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-primary font-medium">Home</Link>
              <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Online Courses</Link>
              <Link to="/study-materials" className="text-muted-foreground hover:text-primary transition-colors">Study Materials</Link>
              <Link to="/applications" className="text-muted-foreground hover:text-primary transition-colors">Exam Application Help</Link>
              <Link to="/career-guidance" className="text-muted-foreground hover:text-primary transition-colors">Freelancing Services</Link>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              🎓 Student Startup for Youth Empowerment
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Empowering Futures Through
              <span className="text-primary block">Innovation and Learning</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A student startup dedicated to empowering youth through education, freelancing, and innovation. 
              Join thousands of students achieving their dreams with affordable, quality services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/courses">
                <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                  View Courses
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-sm text-muted-foreground">Students Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Courses Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹50</div>
                <div className="text-sm text-muted-foreground">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About TYC Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Telugu Youth Citizens (TYC)
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate student startup dedicated to empowering youth through education, freelancing opportunities, and innovation. Our mission is to make quality education and services accessible to everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Online Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Python Programming Course now live for ₹2,000/- with comprehensive curriculum and hands-on projects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Study Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Free downloadable materials for Intermediate and B.Tech students including notes, assignments, and practice papers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Exam Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Professional help with exam applications. We'll contact you and help apply online for various competitive exams.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Freelancing Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Video editing, B.Tech projects, assignment writing, and more professional services to boost your career.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Course - Python Programming */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              🔥 Now Live
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Python Programming Course
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master Python programming from basics to advanced with our comprehensive course designed for beginners and professionals.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border border-border">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Python Programming</h3>
                    <p className="text-muted-foreground">Complete Course</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-primary">₹2,000/-</span>
                      <span className="text-sm text-muted-foreground">⭐ 4.9 (500+ reviews)</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Duration: 6 weeks | Live classes + Recorded sessions
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground">What you'll learn:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Python basics and syntax</li>
                      <li>• Object-oriented programming</li>
                      <li>• Web development with Django/Flask</li>
                      <li>• Data structures and algorithms</li>
                      <li>• Real-world projects and assignments</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/courses">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                    <Link to="/courses">
                      <Button variant="outline" className="w-full">View Curriculum</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are already transforming their careers with TYC. 
            Get access to quality education, study materials, and professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                Start Learning Today
              </Button>
            </Link>
            <Link to="/applications">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Application Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TYC Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;