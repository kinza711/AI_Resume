import {
  FaArrowRight,
  FaTachometerAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e]">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 relative">
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-200 rounded-full blur-3xl"></div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* IMAGE SIDE */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 blur-2xl rounded-full"></div>

              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-xl shadow-2xl relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoJjXf1D3zvc1tY5s53puYv9qypDDci0B4CeyshOu6AQSeYh3T1JZf6ufBSBsMTfbxZAelQKuUl0cWiQgzu5sgw8pXQyLNtQqvEK9Ev-Qqt9TlE6L_MieObn2msKgRuAU_iC4cx8UGhhXCUd6EoV8zy7aRNvZ5IVrcJZSjjn5SB99W7aapsmvonWy7_G-k8v0n7ug9grVThRVC5d4mI3m8QnbhbjRaw3UAIAzIo5xkvzXijXt9qmIhJCyFD3GcaVx0Xipg8x1q-VcN"
                  alt=""
                  className="rounded-lg w-full max-w-md object-cover"
                />

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold shadow">
                  SIGNAL LOST
                </div>
              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left gap-8">
            <div>
              <h1 className="text-[7rem] md:text-[9rem] font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent leading-none">
                404
              </h1>

              <h2 className="text-3xl md:text-5xl font-bold text-[#000666] -mt-4">
                Oops! This page drifted away.
              </h2>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl max-w-md">
              <p className="text-gray-600 text-lg">
                Even smart systems lose their way sometimes. Let’s guide you
                back.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition">
                <FaTachometerAlt />
                Dashboard
              </button>

              <button className="bg-white border px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                <FaQuestionCircle />
                Help Center
              </button>
            </div>

            {/* LINKS */}
            <div className="pt-6 flex gap-4 text-gray-400 text-sm">
              <span>Career Blog</span>
              <span>•</span>
              <span>Resume Tips</span>
              <span>•</span>
              <span>API Status</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
