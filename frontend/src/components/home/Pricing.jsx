import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpgradePro from "../popups/UpgradePro";

export default function PricingSection() {
  const [showPopup, setShowPopup] = useState(false);

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
        "Limited Cover latter",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$9/mo",
      desc: "For serious job seekers",
      type: "popup",
      features: [
        "Unlimited Uploads",
        "Advanced AI Optimization",
        "ATS Score Insights",
        "Priority Processing",
        "10 Cover latter/day",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$29/mo",
      desc: "For professionals & teams",
      type: "popup",
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "Custom Templates",
        "Dedicated Support",
        "unlimited Cover latter",
        "job Interview Practice",
      ],
      highlight: false,
    },
  ];

  return (
    <>
      <section id="pricing" className="py-24 px-6 bg-[#f7f9fb] text-[#191c1e]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#000666] mb-4">
            Choose Your Path
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${
                  plan.highlight
                    ? "bg-white shadow-xl scale-105 border-[#5f00e3]"
                    : "bg-white/70 border-[#e0e3e5]"
                }`}
              >
                <h3 className="text-xl font-bold text-[#000666]">
                  {plan.name}
                </h3>

                <p className="text-sm text-[#454652] mb-4">{plan.desc}</p>

                <div className="text-3xl font-extrabold mb-6">{plan.price}</div>

                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>

                {/* 🌟 Button Logic */}
                {plan.type === "popup" ? (
                  <button
                    onClick={() => setShowPopup(true)}
                    className={`w-full py-3 rounded-full font-bold ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white"
                        : "border border-[#000666] text-[#000666]"
                    }`}
                  >
                    Get Started
                  </button>
                ) : (
                  <Link to={plan.path}>
                    <button className="w-full py-3 rounded-full font-bold border border-[#000666]">
                      Get Started
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌙 Popup */}
      {showPopup && <UpgradePro onClose={() => setShowPopup(false)} />}
    </>
  );
}
