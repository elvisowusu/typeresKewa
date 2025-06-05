import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Ensure Badge component is imported
import {
  FileText, // For Effortless Design Workflow
  Users, // For Curated Vendor Matching
  Eye, // For Real-time Order Visibility
  Briefcase, // For Direct & Clear Orders
  ShieldCheck, // For Secure & Transparent Payments
  LayoutDashboard, // For Free Design Management
} from "lucide-react";

// Define the features data as an array of objects
const features = [
  {
    icon: FileText,
    title: "Effortless Design Workflow",
    description:
      "Upload, customize, and send your designs seamlessly, eliminating manual back-and-forth communication.",
  },
  {
    icon: Users,
    title: "Curated Vendor Matching",
    description:
      "Clients easily connect with ideal vendors based on location, expertise, and specific production needs.",
  },
  {
    icon: Eye,
    title: "Real-time Order Visibility",
    description:
      "Track your order's progress with automatically calculated delivery times, from design approval to shipment.",
  },
  {
    icon: Briefcase,
    title: "Direct & Clear Orders",
    description:
      "Vendors receive precise design instructions and direct orders, ensuring accurate and efficient fulfillment.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent Payments",
    description:
      "Enjoy payment security for vendors and complete cost transparency for clients, who pay only upon production.",
  },
  {
    icon: LayoutDashboard,
    title: "Free Design Management",
    description:
      "Organize your designs and connect with vendors at no cost. You only pay when your order is ready for production.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="text-center mb-12 md:mb-16">
          {/* Features Badge */}
          <Badge className="bg-[#D8EDD9] text-black font-normal rounded-full px-3 py-1.5 mb-4">
            Features
          </Badge>
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We also provide clients and vendors with amazing features like
          </h2>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-md">
              <CardContent className="space-y-4 flex flex-col items-start">
                {/* Icon Container - REMOVED mx-auto */}
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                {/* Feature Title */}
                <h3 className="font-semibold text-lg text-gray-900">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}