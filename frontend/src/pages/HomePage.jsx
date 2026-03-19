import Navbar from "../components/partials/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import Footer from "../components/partials/Footer";
import PricingSection from "../components/home/Pricing";

export default function Home() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Features />
        <PricingSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
