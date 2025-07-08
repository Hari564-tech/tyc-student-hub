
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Laptop, User, Calendar } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Python Programming Complete Course",
      description: "Master Python from basics to advanced concepts including Data Structures & Algorithms",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      duration: "10 weeks",
      level: "Beginner to Advanced",
      price: "₹2,000",
      originalPrice: "₹2,999",
      rating: 4.9,
      students: 1800,
      category: "Programming",
      topics: ["Basic Python", "Advanced Python", "DSA in Python"],
      isNew: true
    },
    {
      id: 2,
      title: "Java Full Stack Development",
      description: "Complete Java development course covering frontend and backend",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹4,999",
      rating: 4.9,
      students: 1200,
      category: "Programming"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Master DSA concepts essential for technical interviews",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹3,999",
      rating: 4.7,
      students: 980,
      category: "Programming"
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      description: "Complete web development with HTML, CSS, JavaScript, and React",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      duration: "16 weeks",
      level: "Beginner",
      price: "₹5,999",
      rating: 4.9,
      students: 2100,
      category: "Web Development"
    },
    {
      id: 5,
      title: "Career Guidance & Interview Prep",
      description: "Comprehensive career guidance with mock interviews and resume building",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      duration: "6 weeks",
      level: "All Levels",
      price: "₹1,999",
      rating: 4.8,
      students: 850,
      category: "Career"
    },
    {
      id: 6,
      title: "Mathematics for Engineering",
      description: "Essential mathematics concepts for engineering students",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹2,499",
      rating: 4.6,
      students: 1300,
      category: "Academic"
    }
  ];

  const categories = ["All", "Programming", "Web Development", "Career", "Academic"];

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
              <a href="/courses" className="text-blue-600 font-medium">Courses</a>
              <a href="/study-materials" className="text-gray-700 hover:text-blue-600 transition-colors">Study Materials</a>
              <a href="/career-guidance" className="text-gray-700 hover:text-blue-600 transition-colors">Career Guidance</a>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Master new skills with our comprehensive courses designed for students and professionals
          </p>
        </div>
      </section>

      {/* New Course Announcement */}
      <section className="py-8 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <Badge className="mb-4 bg-red-500 text-white text-lg px-4 py-2">NEW LAUNCH</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              🐍 Python Programming Complete Course - Now Live!
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Special Launch Price: <span className="text-2xl font-bold text-green-600">₹2,000</span>
              <span className="text-lg text-gray-500 line-through ml-2">₹2,999</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="outline" className="bg-blue-50">Basic Python</Badge>
              <Badge variant="outline" className="bg-purple-50">Advanced Python</Badge>
              <Badge variant="outline" className="bg-green-50">DSA in Python</Badge>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Enroll Now - Limited Time Offer!
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className={`hover:shadow-lg transition-shadow overflow-hidden ${course.isNew ? 'ring-2 ring-green-500' : ''}`}>
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                    {course.category}
                  </Badge>
                  {course.isNew && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      NEW!
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                      {course.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                  
                  {course.topics && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {course.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <span>⭐ {course.rating}</span>
                    <span>{course.students} students</span>
                    <span>{course.duration}</span>
                  </div>
                  <Button className={`w-full ${course.isNew ? 'bg-green-600 hover:bg-green-700' : ''}`}>
                    {course.isNew ? 'Enroll Now - Special Price!' : 'Enroll Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
