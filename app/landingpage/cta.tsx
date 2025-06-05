import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/getstartedtoday-bg.png"
        alt="Background Pattern"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="absolute inset-0 z-0 opacity-40"
      />
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Get Started Today
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied clients and vendors who have simplified
            their design-to-product journey with Typeres. Start your project
            today—free to use, pay only when you produce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
