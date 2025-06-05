import { Badge } from "@/components/ui/badge"; // Ensure Badge is imported
import Image from "next/image"; // Import Next.js Image component

export function ProductShowcase() {
  // Data for the checklist items to avoid repetition
  const checklistItems = [
    "Manage your designs and track progress with real-time updates",
    "Cost-effective solutions",
    "Ensure high-quality designs and products with dedicated quality control",
    "Fast turnaround times",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Image & Decorative Elements */}
          <div className="relative flex justify-center items-center h-full min-h-[300px] lg:min-h-[450px]">
            {/* Background green shapes - positioned absolutely */}
            {/* Example: A large, soft green blob/oval */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-green-200 opacity-30 blur-xl"></div>
            {/* Example: A smaller, darker green blob */}
            <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-green-400 opacity-20 blur-lg"></div>

            {/* Main Product Image (e.g., T-shirt and book) */}
            <Image
              src="/product-showcase-mockup.png" // IMPORTANT: Place your actual image here in the `public` folder
              alt="Product Showcase Mockup"
              width={600} // Adjust based on your image's intrinsic width
              height={500} // Adjust based on your image's intrinsic height
              className="relative z-10 w-full h-auto max-w-lg rounded-lg shadow-xl object-contain"
              priority // Consider priority if this image is above the fold (it often is for hero/showcase)
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <Badge className="bg-[rgba(76,171,81,0.22)] text-black font-normal rounded-full px-3 py-1.5 mb-4">
              Product Showcase
            </Badge>
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Achieve Flawless Products, Faster
            </h2>
            {/* Description Paragraph */}
            <p className="text-gray-600 leading-relaxed">
              Our advanced production process ensures that every product meets
              the highest quality standards while maintaining fast turnaround
              times.
            </p>
            {/* Checklist */}
            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>{" "}
                  {/* Adjusted mt */}
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
