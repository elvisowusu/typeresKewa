import { CTA } from "./cta";
import { Features } from "./features";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Process } from "./processSection";
import { ProductShowcase } from "./product";
import { Testimonials } from "./testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {" "}
        {/* Use a <main> tag for semantic content */}
        <Hero />
        <Process />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
