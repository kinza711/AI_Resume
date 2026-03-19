export default function ProfileStrengthCard() {
  return (
    <section className="bg-white/70 backdrop-blur-[20px] rounded-lg p-8 shadow-sm border border-[#c6c5d4]/10">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle cx="48" cy="48" r="40" fill="transparent" stroke="#e0e3e5" strokeWidth="8"></circle>
            <circle cx="48" cy="48" r="40" fill="transparent" stroke="#5f00e3" strokeDasharray="251.2" strokeDashoffset="50.2" strokeWidth="8"></circle>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-headline font-extrabold text-xl text-[#000666]">80%</span>
        </div>
        <h3 className="font-headline font-bold text-lg text-[#000666]">Profile Score</h3>
        <p className="text-sm text-[#454652] mt-2 leading-relaxed">
          Your profile is looking strong! Add your latest certification to reach 100%.
        </p>
        <button className="mt-6 w-full py-2.5 rounded-full border-2 border-[#000666] text-[#000666] font-bold text-xs hover:bg-[#000666] hover:text-white transition-all">
          BOOST SCORE
        </button>
      </div>
    </section>
  );
}