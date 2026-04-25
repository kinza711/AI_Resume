import { FaGlobe, FaAt, FaTerminal } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-900 flex flex-col items-center py-16 px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">ResumAI</h3>

          <p className="text-slate-400 mb-6">
            Building the next generation of professional identity through
            AI-driven engineering.
          </p>

          <div className="flex gap-4 text-slate-400">
            <FaGlobe className="hover:text-cyan-400 cursor-pointer transition" />
            <FaAt className="hover:text-cyan-400 cursor-pointer transition" />
            <FaTerminal className="hover:text-cyan-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="hover:text-cyan-400 cursor-pointer">Features</li>
            <li className="hover:text-cyan-400 cursor-pointer">Templates</li>
            <li className="hover:text-cyan-400 cursor-pointer">Pricing</li>
            <li className="hover:text-cyan-400 cursor-pointer">API</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Careers</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
            <li className="hover:text-cyan-400 cursor-pointer">GitHub</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="hover:text-cyan-400 cursor-pointer">Privacy</li>
            <li className="hover:text-cyan-400 cursor-pointer">Terms</li>
            <li className="hover:text-cyan-400 cursor-pointer">Security</li>
            <li className="hover:text-cyan-400 cursor-pointer">
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-400 text-sm">
          © 2026 Reserved by Kinza. MERN Dev AI - Integration
        </p>
      </div>
    </footer>
  );
}
