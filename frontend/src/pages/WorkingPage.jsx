import React from "react";
import {
  MdVerified,
  MdAutoAwesome,
  MdAnalytics,
  MdRocketLaunch,
  MdArchitecture,
} from "react-icons/md";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
export default function MaintenancePage() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      {/* Main Content */}
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="inline-flex animate-pulse items-center px-4 py-1.5 rounded-full bg-[#E0E0FF] text-on-primary-fixed font-label text-xs font-bold tracking-wider uppercase">
                Coming Back Soon
              </div>
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] -tracking-[0.03em]">
                We're{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text aspirations-gradient">
                  Building
                </span>{" "}
                Your Career Future.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
                Our AI engine is undergoing a scheduled upgrade to serve you
                better. We'll be back online shortly with a brand new way to
                engineer your trajectory.
              </p>
            </div>

            {/* Notify Me Form */}
            <div className="w-full max-w-lg">
              <form className="relative flex p-1.5 rounded-full bg-[#E6E8EA] focus-within:bg-surface-container-lowest transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="flex-grow bg-transparent  px-6 py-3 text-on-surface font-medium placeholder:text-slate-400"
                />
                <button
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white px-8 py-3 rounded-full font-label font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-secondary/30"
                  type="submit"
                >
                  Notify Me
                </button>
              </form>
              <p className="mt-3 ml-6 text-xs text-[#9C003F] font-medium flex items-center gap-2">
                <MdVerified className="text-sm" /> Join 2,400+ professionals
                waiting for the v2.0 launch.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <FeatureCard
                icon={<MdAutoAwesome />}
                title="Neural Rewriting"
                desc="Context-aware job optimization."
              />
              <FeatureCard
                icon={<MdAnalytics />}
                title="ATS Blueprint"
                desc="Beat the filters with intelligence."
              />
              <FeatureCard
                icon={<MdRocketLaunch />}
                title="Career Velocity"
                desc="Automated growth projections."
              />
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl hero-glow aspect-square md:aspect-video lg:aspect-square">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP1dVkOwSue-p0xU4cY9hx4BOa4aBLlxEZVaFfssvf4_d5kPijey7LM4xrE57BqSa3TMfv-jfpj3YFeiY_KYvwAMYcKUcBjlE3nYrC_GQH9MOVa8dupuCtDZM-q9Jjq_xVMJlSqvn87R5TzGPqeaOTQIze-2Nvjx7is-CC2rVCXsG17myMM2e6Aeomt8nz0pNkCHDljkMKscKXhfWQhHJpymczagsRx5uRjtUa3-TZf49TgPyKbLxnLJJIzyY8MuXg-ruW3Qtvvqyd"
                alt="Professional Architecting Future"
                className="w-full h-full object-cover"
              />

              {/* Glass Panel Overlay */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5F00E3] flex items-center justify-center">
                    <MdArchitecture className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">
                      Engineering in Progress
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Deploying new LLM parameters for resume scoring.
                    </p>
                  </div>
                </div>
                <div className="mt-4 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500  h-full w-[84%] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-bold text-[#5F00E3] uppercase tracking-widest">
                    Model Training
                  </span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    84% Complete
                  </span>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-on-tertiary-container/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Reusable Feature Card
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-3xl bg-[#F2F3F6] flex flex-col space-y-3 transition-colors hover:bg-[#D7D7D7]">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5F00E3]">
        {icon}
      </div>
      <h3 className="font-headline font-bold text-primary">{title}</h3>
      <p className="text-sm text-on-surface-variant leading-snug">{desc}</p>
    </div>
  );
}
