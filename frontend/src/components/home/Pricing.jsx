import React from "react";
import { Link } from "react-router-dom";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect to explore the basics",
      path: "/login",
      features: [
        "1 Resume Upload",
        "Basic AI Suggestions",
        "Limited Downloads",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$9/mo",
      desc: "For serious job seekers",
      path: "/pro",
      // path: <PopupPage />,
      features: [
        "Unlimited Uploads",
        "Advanced AI Optimization",
        "ATS Score Insights",
        "Priority Processing",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$29/mo",
      desc: "For professionals & teams",
      path: "/pro",
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "Custom Templates",
        "Dedicated Support",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-[#f7f9fb] text-[#191c1e]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#000666] mb-4">
          Choose Your Path
        </h2>
        <p className="text-[#454652] max-w-2xl mx-auto mb-16">
          Simple pricing, powerful outcomes. Let AI sculpt your story into
          something unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 border ${
                plan.highlight
                  ? "bg-white shadow-[0_20px_40px_rgba(25,28,30,0.08)] scale-105 border-[#5f00e3]"
                  : "bg-white/70 backdrop-blur-xl border-[#e0e3e5]"
              }`}
            >
              <h3 className="text-xl font-bold text-[#000666] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#454652] mb-6">{plan.desc}</p>

              <div className="text-3xl font-extrabold text-[#000666] mb-6">
                {plan.price}
              </div>

              <ul className="space-y-3 mb-8 text-sm text-[#191c1e]">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#5f00e3]">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to={plan.path}>
                <button
                  className={`w-full py-3 rounded-full font-bold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white"
                      : "border border-[#000666] text-[#000666] hover:bg-[#000666] hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
