import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#f7f9fb] text-[#191c1e]">
      {/* LEFT SIDE */}
      <section className="hidden md:flex md:w-1/2 lg:w-3/5 relative bg-[#000666] items-center justify-center p-12 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0pH4OPty7o7hdnSvEq3_7rehSIyXE2Ji3bEjj-PYAOw4kLZGkOoAAisSxhZq8aC4mue68JOFUomF5gdCMMvp-DLIu0QavbLoo9NIYlu4SRIhKmkfiDNxoqX-po6CjJk2ymRd7MW3b35Bp6apnWsPenHvWWbvlBeHUgTcF9XlCP5ji7ExUf4WXhqomjPsE_SXJ9-Y5BDjmJFph_Unq0bspbWS1ELCiWf1qZN5JebcSuoYoJaaC1Zv9z1gzt2sPfbNEP3BCRNNYYyA7"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#000666] via-[#000666]/80 to-transparent"></div>

        <div className="relative z-10 max-w-xl text-white">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/10 text-on-primary-container font-label text-sm font-semibold tracking-wide border border-blue-500/20">
            <span className=" text-sm animate-pulse text-blue-400">
              <BsStars />
            </span>
            AI-POWERED CAREER ARCHITECT
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Engineer your <span className="text-purple-300">future</span>{" "}
            trajectory.
          </h1>

          <p className="text-lg opacity-80">
            Transform your resume into a living blueprint for success.
          </p>

          {/* Feature Card */}
          <div className="mt-12 bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/10">
            <p className="font-bold flex gap-2 items-center justify-start">
              {" "}
              <span className="h-auto w-auto bg-gradient-to-r from-purple-600 to-pink-500 rounded-full p-2 ">
                <FaHeadSideVirus size={35} />
              </span>
              Predictive Analysis
            </p>
            <p className="text-sm opacity-70">
              Resume optimized for 98% ATS compatibility
            </p>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="flex-1 flex flex-col justify-center items-center p-8 md:p-16 lg:p-24">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                R
              </div>
              <span className="text-2xl font-extrabold text-[#000666]">
                ResumeAI
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-500">
              Continue building your professional legacy.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm font-bold text-[#000666] mb-2 block">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 py-4 rounded-xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-[#000666]">
                  Password
                </label>
                <span className="text-xs text-purple-600 cursor-pointer hover:underline">
                  Forgot password?
                </span>
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 py-4 rounded-xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition"
                />
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-purple-600" />
              <span className="text-sm text-gray-500">
                Keep me logged in for 30 days
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition"
            >
              Sign In
              <FaArrowRight />
            </button>
          </form>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-xs uppercase text-gray-400 font-bold">
              Or connect with
            </span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-4 rounded-xl border hover:bg-gray-100 transition">
              <FcGoogle size={20} />
              <span className="font-bold text-sm">Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 py-4 rounded-xl border hover:bg-gray-100 transition">
              <FaLinkedin className="text-blue-600" />
              <span className="font-bold text-sm">LinkedIn</span>
            </button>
          </div>

          {/* Footer */}
          <p className="mt-10 text-center text-gray-500">
            New to ResumeAI?
            <span className="text-purple-600 font-semibold ml-1 cursor-pointer">
              Create an account
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
