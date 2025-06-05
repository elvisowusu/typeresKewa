import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Users,
  Eye,
  ShoppingCart,
  CheckCircle,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Effortless Quotation Workflow",
    description:
      "Get instant quotes for your projects with our automated pricing system.",
  },
  {
    icon: Users,
    title: "Creative Sourcing Matching",
    description:
      "Connect with the right vendors and suppliers for your specific needs.",
  },
  {
    icon: Eye,
    title: "Real-time Order Visibility",
    description: "Track your orders in real-time from production to delivery.",
  },
  {
    icon: ShoppingCart,
    title: "Quick & Easy Orders",
    description: "Place orders quickly with our streamlined ordering process.",
  },
  {
    icon: CheckCircle,
    title: "Supply & Transparent Approvals",
    description:
      "Clear approval processes with full transparency at every step.",
  },
  {
    icon: BarChart3,
    title: "Easy Design Management",
    description:
      "Manage all your designs and projects from one central dashboard.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We also provide clients and vendors with amazing features like
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center shadow-md">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {feature.title}
                </h3>
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
