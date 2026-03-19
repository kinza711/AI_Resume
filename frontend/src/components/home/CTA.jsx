export default function CTA() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 p-12 lg:p-20 text-center relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
            Ready to engineer your future?
          </h2>

          <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of professionals transforming their careers with
            AI-powered precision.
          </p>

          <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 active:scale-95 transition">
            Get Started Free
          </button>
        </div>

        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        {/* Glow Blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/20 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-300/20 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
}
