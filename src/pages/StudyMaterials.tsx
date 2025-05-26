
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const StudyMaterials = () => {
  const materials = [
    {
      id: 1,
      title: "Class 10 Mathematics Important Questions",
      subject: "Mathematics",
      class: "10th",
      type: "Question Bank",
      downloads: 2500,
      rating: 4.8,
      price: "Free"
    },
    {
      id: 2,
      title: "Physics Formula Handbook - Class 12",
      subject: "Physics",
      class: "12th",
      type: "Reference",
      downloads: 1800,
      rating: 4.9,
      price: "₹99"
    },
    {
      id: 3,
      title: "English Grammar & Composition",
      subject: "English",
      class: "11th",
      type: "Study Guide",
      downloads: 1200,
      rating: 4.7,
      price: "₹149"
    },
    {
      id: 4,
      title: "Chemistry Practical Manual",
      subject: "Chemistry",
      class: "12th",
      type: "Practical",
      downloads: 950,
      rating: 4.6,
      price: "₹199"
    },
    {
      id: 5,
      title: "Biology Diagrams & Illustrations",
      subject: "Biology",
      class: "11th",
      type: "Visual Aid",
      downloads: 1500,
      rating: 4.8,
      price: "₹129"
    },
    {
      id: 6,
      title: "Computer Science Programming Guide",
      subject: "Computer Science",
      class: "12th",
      type: "Programming",
      downloads: 800,
      rating: 4.9,
      price: "₹249"
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
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</Link>
              <Link to="/study-materials" className="text-blue-600 font-medium">Study Materials</Link>
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

      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Study Materials & Resources
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Access comprehensive study materials, important questions, and budget-friendly resources for all subjects
          </p>
          <div className="max-w-md mx-auto">
            <Input 
              placeholder="Search study materials..." 
              className="bg-white"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Study Materials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Subjects Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">25,000+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">4.8⭐</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{material.subject}</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Class {material.class}</Badge>
                  </div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    {material.title}
                  </CardTitle>
                  <CardDescription>
                    Type: {material.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <span>⭐ {material.rating}</span>
                    <span>{material.downloads} downloads</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-green-600">
                      {material.price}
                    </div>
                    <Button>
                      {material.price === "Free" ? "Download" : "Purchase"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterials;
