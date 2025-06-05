import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function ProductShowcase() {
  const checklistItems = [
    "Manage your designs and connect with vendors at no cost. ",
    "Eliminate manual processes and reduce downtime.",
    "Ensure high-quality designs and products with precise instructions. ",
    "Track orders and communicate effortlessly with clients. ",
    "Pay only when you’re ready to produce—no hidden fees. ",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/product-showcase-mockup.png"
            alt="Product Showcase Mockup"
            width={579}
            height={529}
            className="relative z-10 w-full h-auto max-w-lg rounded-lg shadow-xl object-contain"
            priority
          />
          <div className="space-y-6 lg:w-[589px]">
            <Badge className="bg-[rgba(76,171,81,0.22)] text-black font-normal rounded-full px-3 py-1.5 mb-4">
              Why choose us
            </Badge>
            <h2 className="text-3xl lg:text-[3rem] font-bold text-gray-900 lg:w-[449px] leading-tight">
              Achieve Flawless Products, Faster
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Typeres empowers both clients and vendors with a unified,
              transparent platform designed to deliver high-quality products
              efficiently and professionally, every single time.
            </p>
            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
