
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, BookOpen } from "lucide-react";

const CareerGuidance = () => {
  const services = [
    {
      id: 1,
      title: "One-on-One Career Counseling",
      description: "Personalized career guidance sessions with industry experts",
      duration: "60 minutes",
      price: "₹999",
      features: ["Career assessment", "Goal setting", "Action plan", "Follow-up support"],
      expert: "Dr. Rajesh Kumar",
      expertise: "Software Engineering",
      rating: 4.9
    },
    {
      id: 2,
      title: "Resume Building Workshop",
      description: "Learn to create professional resumes that stand out",
      duration: "90 minutes",
      price: "₹499",
      features: ["Resume templates", "ATS optimization", "Cover letter guide", "LinkedIn profile"],
      expert: "Priya Sharma",
      expertise: "HR Specialist",
      rating: 4.8
    },
    {
      id: 3,
      title: "Mock Interview Sessions",
      description: "Practice interviews with real-time feedback",
      duration: "45 minutes",
      price: "₹799",
      features: ["Technical questions", "HR round prep", "Video analysis", "Improvement tips"],
      expert: "Arun Reddy",
      expertise: "Tech Interviewer",
      rating: 4.9
    },
    {
      id: 4,
      title: "Industry Insights Program",
      description: "Learn about different career paths and industry trends",
      duration: "2 hours",
      price: "₹1,299",
      features: ["Industry overview", "Skill requirements", "Growth prospects", "Networking tips"],
      expert: "Meera Patel",
      expertise: "Career Coach",
      rating: 4.7
    }
  ];

  const careerPaths = [
    {
      field: "Software Development",
      roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile App Developer"],
      skills: ["Programming Languages", "Frameworks", "Databases", "Version Control"],
      avgSalary: "₹4-15 LPA"
    },
    {
      field: "Data Science",
      roles: ["Data Analyst", "Data Scientist", "ML Engineer", "Business Analyst"],
      skills: ["Python/R", "Statistics", "Machine Learning", "Data Visualization"],
      avgSalary: "₹5-20 LPA"
    },
    {
      field: "Engineering",
      roles: ["Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Chemical Engineer"],
      skills: ["Technical Drawing", "Project Management", "Problem Solving", "Industry Software"],
      avgSalary: "₹3-12 LPA"
    },
    {
      field: "Digital Marketing",
      roles: ["SEO Specialist", "Social Media Manager", "Content Marketer", "PPC Expert"],
      skills: ["Analytics", "Content Creation", "SEO/SEM", "Social Media"],
      avgSalary: "₹2-10 LPA"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">TYC</h1>
              <span className="ml-2 text-gray-600">Telugu Youth Citizens</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</a>
              <a href="/study-materials" className="text-gray-700 hover:text-blue-600 transition-colors">Study Materials</a>
              <a href="/career-guidance" className="text-blue-600 font-medium">Career Guidance</a>
              <a href="/applications" className="text-gray-700 hover:text-blue-600 transition-colors">Applications</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Career Guidance & Counseling
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Get expert advice on career paths, personalized guidance, and industry insights to make informed decisions about your future
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Career Guidance Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{service.duration}</Badge>
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">{service.expert}</span>
                    </div>
                    <span className="text-sm text-gray-600">⭐ {service.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">{service.expertise}</div>
                  <Button className="w-full">Book Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Career Paths
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{path.field}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-green-600">
                    {path.avgSalary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Popular Roles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.roles.map((role, roleIndex) => (
                        <Badge key={roleIndex} variant="outline" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} className="text-xs bg-blue-100 text-blue-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Career?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a personalized career counseling session and get expert guidance on your career path
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CareerGuidance;
