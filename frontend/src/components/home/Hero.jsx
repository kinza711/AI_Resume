import { FaUpload } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaHeadSideVirus } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative px-6 py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-600">
              <BsStars /> Powered by AI
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Improve Your Resume <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                with AI Intelligence
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
              Optimize your resume for ATS systems and recruiters. Stand out,
              get noticed, and land your dream role faster.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition">
                <FaUpload />
                Upload Resume
              </button>

              <button className="px-8 py-4 rounded-xl border font-bold text-gray-700 hover:bg-gray-100 transition">
                View Sample
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <span>Joined by 10,000+ job seekers</span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-400/20 blur-3xl rounded-3xl"></div>

            <div className="relative bg-white border rounded-2xl shadow-2xl p-4 overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg relative overflow-hidden">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlxrFBfy4LIt-ZxleKCn3f4G_6MPua7lqgVPuVwFB6hZ3UuNxiHmgbIvloffdVZ3yI_PUXAcf7c0b6j3prLfqqxY_ZExON8tvVJbb6F6KUGF32HUCIprzeyYviHQ0darNRto59HJJgBo0hOQ3WU3w4BMIiBiEyvs-wwMMLzUjz2Hy9ymt5BEjrC_C5khCtN8h-cWNaJ5Et13Kg6s_hdfWxNC0aq_vxnyKPeNtBivuNJFg1Ys2yfWmHmRP3RXtm25ffTCIiiEileN3D')",
                  }}
                ></div>

                {/* Overlay content */}
                <div className="absolute inset-0 p-6 flex flex-col gap-4">
                  <div className="h-4 w-3/4 bg-purple-300/40 rounded animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-pink-300/40 rounded animate-pulse"></div>

                  <div className="mt-6 flex gap-4">
                    <div className="flex-1 h-28 border-2 border-dashed border-purple-300 rounded-lg flex flex-col items-center justify-center bg-white/50 backdrop-blur">
                      <span className="text-purple-500 text-xl">
                        <FaHeadSideVirus />
                      </span>
                      <span className="text-xs font-bold text-purple-500">
                        Analyzing...
                      </span>
                    </div>

                    <div className="flex-1 h-28 border-2 border-dashed border-cyan-300 rounded-lg flex flex-col items-center justify-center bg-white/50 backdrop-blur">
                      <span className="text-cyan-500 text-xl">
                        <FiTarget />
                      </span>
                      <span className="text-xs font-bold text-cyan-500">
                        ATS: 94%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
