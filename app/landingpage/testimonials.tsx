import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const testimonials = [
  {
    image: "/profile-micheal-1.png",
    name: "Micheal Johnson",
    role: "Event manager",
    content:
      "Typeres empowers both clients and vendors with a unified, transparent platform designed to deliver high-quality products efficiently and professionally, every single time.",
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
    <Card className="p-6 bg-[#F8F9FB] border-none shadow-none rounded-2xl break-inside-avoid mb-6">
      <CardContent className="p-0">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-base text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{role}</div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-gray-700">{content}</p>
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

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}