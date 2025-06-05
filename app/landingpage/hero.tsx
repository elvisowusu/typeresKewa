// components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[640px] overflow-hidden gap-10 lg:gap-25 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <Badge className="bg-[rgba(76,171,81,0.22)] text-black font-normal lg:text-md rounded-full px-3 py-1.5 lg:w-[217px]">
              Design. Product. Deliver
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:w-[573px] font-bold text-gray-900 leading-tight">
              Simplifying Your Design-to-Product Journey
            </h1>
            <p className="text-lg lg:w-[573px] text-gray-600 leading-relaxed">
              Typeres is the ultimate platform for clients and vendors to
              create, customize, and produce products efficiently, from concept
              to delivery
            </p>
            <Button
              size="lg"
              className="bg-[#5ABA60] hover:bg-[#51a056] text-white rounded-full lg:px-8 lg:h-[52px] lg:w-[199px]"
            >
              Get Started
            </Button>
          </div>
          {/* Right Column - Image */}

          <div className="relative flex justify-center items-center">
            {" "}
            {/* Added flex for centering */}
            <Image
              src="/hero-image.png"
              alt="Product Mockup"
              width={477}
              height={640}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
