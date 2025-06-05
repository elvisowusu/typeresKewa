"use client"; // This component needs to be a Client Component to use framer-motion

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

const testimonials = [
  {
    image: "/profile-micheal-1.png", // Ensure these paths are correct in your public folder
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
  // Add more testimonials if you want a longer scroll effect.
  // For a truly infinite loop, you'd typically duplicate the list content
  // so there's no visual "jump" when it resets.
  // For demonstration, we'll use the existing 6 and assume they loop.
];

function TestimonialCard({
  image,
  name,
  role,
  content,
}: (typeof testimonials)[0]) {
  return (
    <Card className="p-6 bg-[#F8F9FB] border-none shadow-none rounded-2xl break-inside-avoid mb-6 flex-shrink-0 w-80 md:w-96 mx-2"> {/* Added flex-shrink-0 and fixed width for scrolling */}
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
  const topRowTestimonials = testimonials.slice(0, 3); // First half for top row
  const bottomRowTestimonials = testimonials.slice(3, 6); // Second half for bottom row

  // To make the scroll seamless, you'd typically duplicate the content
  // For example:
  // const topRowContent = [...topRowTestimonials, ...topRowTestimonials];
  // const bottomRowContent = [...bottomRowTestimonials, ...bottomRowTestimonials];
  // Using just the slices for now to show the concept.

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-[rgba(76,171,81,0.22)] text-black font-normal rounded-full px-3 py-1.5 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900">
            Hear From Our Satisfied Users
          </h2>
        </div>

        {/* Top Row - Scrolling Right to Left */}
        <motion.div
          className="flex flex-row flex-nowrap mb-6" // Use flex-nowrap to keep cards on one line
          animate={{
            x: ['0%', '-100%'], // Animate from 0% to -100% of its width
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust duration for speed
                ease: "linear",
              },
            },
          }}
        >
          {/* Duplicate content to create a seamless loop effect if you have few items */}
          {topRowTestimonials.concat(topRowTestimonials).map((testimonial, index) => (
            <TestimonialCard key={`top-${index}`} {...testimonial} />
          ))}
        </motion.div>

        {/* Bottom Row - Scrolling Left to Right */}
        <motion.div
          className="flex flex-row flex-nowrap justify-end" // Use justify-end to start from the right
          animate={{
            x: ['-100%', '0%'], // Animate from -100% to 0% of its width
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust duration for speed (can be different from top row)
                ease: "linear",
              },
            },
          }}
        >
          {/* Duplicate content to create a seamless loop effect if you have few items */}
          {bottomRowTestimonials.concat(bottomRowTestimonials).map((testimonial, index) => (
            <TestimonialCard key={`bottom-${index}`} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}