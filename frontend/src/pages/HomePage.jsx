import Navbar from "../components/partials/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import Footer from "../components/partials/Footer";
import PricingSection from "../components/home/Pricing";
import { useState } from "react";

export default function Home({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
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
