import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-green-100 text-green-800 font-normal rounded-full px-3 py-1.5 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900">
            Hear From Our Satisfied Users
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "David Johnson",
              role: "Creative Director",
              content:
                "The platform has revolutionized how we handle our design-to-product workflow. The quality and speed are unmatched.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              name: "Sarah Wilson",
              role: "Brand Manager",
              content:
                "Incredible service! From upload to delivery, everything was seamless. Our products turned out exactly as envisioned.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              name: "Michael Brown",
              role: "Product Designer",
              content:
                "The real-time tracking and quality assurance gave us complete confidence throughout the production process.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              name: "Emma Davis",
              role: "Marketing Director",
              content:
                "Outstanding results! The team's attention to detail and commitment to quality exceeded our expectations.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              name: "James Miller",
              role: "Creative Manager",
              content:
                "Fast, reliable, and professional. This platform has become an essential part of our creative workflow.",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              name: "Lisa Anderson",
              role: "Design Lead",
              content:
                "The simplified process and amazing features make it so easy to bring our designs to life. Highly recommended!",
              avatar: "/placeholder.svg?height=40&width=40",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-md">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {testimonial.content}
                </p>
                <div className="flex items-center space-x-3 justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
