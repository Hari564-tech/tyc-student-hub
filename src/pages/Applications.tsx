
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Applications = () => {
  const applications = [
    {
      id: 1,
      name: "EAPCET",
      fullName: "Engineering, Agriculture & Medical Common Entrance Test",
      price: "₹50",
      originalPrice: "₹150",
      description: "Apply for engineering, agriculture, and medical courses in Telangana and Andhra Pradesh",
      features: ["Complete form filling", "Document verification", "Payment assistance", "Status tracking"],
      deadline: "March 15, 2024",
      category: "Entrance Exam"
    },
    {
      id: 2,
      name: "KCET",
      fullName: "Karnataka Common Entrance Test",
      price: "₹50",
      originalPrice: "₹120",
      description: "Apply for engineering and medical courses in Karnataka state",
      features: ["Form completion", "Document upload", "Fee payment", "Admit card download"],
      deadline: "February 28, 2024",
      category: "Entrance Exam"
    },
    {
      id: 3,
      name: "PAN Card",
      fullName: "Permanent Account Number",
      price: "₹50",
      originalPrice: "₹100",
      description: "Apply for new PAN card or make corrections to existing PAN details",
      features: ["Form 49A completion", "Document verification", "Address proof", "Photo upload"],
      deadline: "Ongoing",
      category: "Government Document"
    },
    {
      id: 4,
      name: "Passport",
      fullName: "Indian Passport Application",
      price: "₹50",
      originalPrice: "₹200",
      description: "Apply for fresh passport or renewal of existing passport",
      features: ["Online form filling", "Appointment booking", "Document checklist", "Status tracking"],
      deadline: "Ongoing",
      category: "Government Document"
    },
    {
      id: 5,
      name: "JEE Main",
      fullName: "Joint Entrance Examination Main",
      price: "₹50",
      originalPrice: "₹180",
      description: "Apply for JEE Main for admission to NITs, IIITs, and other engineering colleges",
      features: ["Application form", "Category verification", "Exam center selection", "Fee payment"],
      deadline: "January 31, 2024",
      category: "Entrance Exam"
    },
    {
      id: 6,
      name: "NEET",
      fullName: "National Eligibility cum Entrance Test",
      price: "₹50",
      originalPrice: "₹160",
      description: "Apply for NEET for admission to medical and dental colleges",
      features: ["Medical form completion", "Photo specifications", "Signature upload", "Center preference"],
      deadline: "March 7, 2024",
      category: "Entrance Exam"
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
              <a href="/career-guidance" className="text-gray-700 hover:text-blue-600 transition-colors">Career Guidance</a>
              <a href="/applications" className="text-blue-600 font-medium">Applications</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Application Services
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Professional assistance with your applications at just ₹50 per form - Save up to 70% compared to other services
          </p>
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white">₹50</div>
                <div className="text-purple-100">Our Price</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white line-through">₹150</div>
                <div className="text-purple-100">Others Charge</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">70%</div>
                <div className="text-purple-100">You Save</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Application Services?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Assistance</h3>
              <p className="text-gray-600">Professional guidance throughout the application process</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Document Verification</h3>
              <p className="text-gray-600">Thorough checking of all required documents</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Status Tracking</h3>
              <p className="text-gray-600">Real-time updates on your application status</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Available Application Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <Card key={app.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{app.category}</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{app.price}</div>
                      <div className="text-sm text-gray-500 line-through">{app.originalPrice}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{app.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-700">
                    {app.fullName}
                  </CardDescription>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4 text-sm">
                    <span className="font-medium">Deadline: </span>
                    <span className={app.deadline === "Ongoing" ? "text-green-600" : "text-orange-600"}>
                      {app.deadline}
                    </span>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;
