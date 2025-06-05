import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image"; // Import Image for profile pictures

const testimonials = [
  {
    image: "/profile-micheal-1.png",
    name: "Micheal Johnson",
    role: "Event manager",
    content:
      "Typeres empowers both clients and vendors with a unified, transparent platform designed to deliver high-quality products efficiently and professionally, every single time.", // Consistent content
  },
  {
    image: "/profile-micheal-2.png",
    name: "Micheal Johnson",
    role: "Event manager",
    content:
      "Typeres empowers both clients and vendors with a unified, transparent platform designed to deliver high-quality products efficiently and professionally, every single time.",
  },
  {
    image: "/profile-micheal-3.png",
    name: "Micheal Johnson",
    role: "Event manager",
    content:
      "Typeres empowers both clients and vendors with a unified, transparent platform designed to deliver high-quality products efficiently and professionally, every single time.",
  },
  {
    image: "/profile-micheal-4.png",
    name: "Micheal Johnson",
    role: "Event manager",
    content:
      "Typeres empowers both clients and vendors with a unified, transparent platform designed to deliver high-quality products efficiently and professionally, every single time.",
  },
  {
    image: "/profile-micheal-5.png",
    name: "Micheal Johnson",
    role: "Event manager",
    content:
      "Typeres empowers both clients and vendors with a unified, transparent platform designed to deliver high-quality products efficiently and professionally, every single time.",
  },
  {
    image: "/profile-micheal-6.png",
    name: "Micheal Johnson",
    role: "Event manager",
    content:
      "Typeres empowers both clients and vendors with a unified, transparent platform designed to deliver high-quality products efficiently and professionally, every single time.",
  },
];

function TestimonialCard({
  image,
  name,
  role,
  content,
}: (typeof testimonials)[0]) {
  return (
    <Card className="p-6 bg-[#1D386E0A] border-none shadow-none">
      <CardContent className="space-y-4 flex flex-col items-start">
        {" "}
        <div className="flex items-center space-x-3 mb-4">
          {" "}
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-sm">{name}</div>
            <div className="text-xs">{role}</div>
          </div>
        </div>
        <p className=" text-sm leading-relaxed text-left">{content}</p>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-[rgba(76,171,81,0.22)] text-black font-normal rounded-full px-3 py-1.5 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900">
            Hear From Our Satisfied Users
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
