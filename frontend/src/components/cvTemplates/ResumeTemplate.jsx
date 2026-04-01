import React from "react";
import {
  Mail,
  Phone,
  LocationOn,
  Link as LinkIcon,
  Psychology,
  ArrowRightAlt,
} from "@mui/icons-material";

const ResumeUI = () => {
  return (
    <div className="bg-[#fffeff]  text-[#191c1e] min-h-screen pt-4 pb-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-80">
        <div className="bg-[#f2f4f6] rounded-lg p-8 flex flex-col gap-8 sticky top-28">
          {/* Profile */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9e2N3t5c7IENeRN_VmuKZRK6COPcux6vDfQwPn_aOv1tiityaHGtnA2Mr131-iRyDsFjA_NYOT15cOXdLl-5oft7AYJMBq3k4IwYaMCpN7Xp4M4C-ckooOzdiCgpn4__8QWMtawtpTGYI5k31oWiFie7trT-2nyiNDGHScGwVnmzRkV8dCzfitnB18uB0x7n-iiHCUjQjBFWRhiB6mGd9fnHhuk6SHHR_-Ih5e27qO_t9QhrDZ_YUaSTz3MUfob-ojO6HTH-GNu4Y"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-extrabold text-[#000666]">
              Alex Rivera
            </h1>
            <p className="text-sm text-[#454652] font-medium">
              Senior Architect
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#ff5e8e] mb-3">
              Contact Details
            </h3>
            <div className="space-y-3 text-sm text-[#454652]">
              <div className="flex gap-3 items-center">
                <Mail className="text-[#5f00e3]" fontSize="small" />
                alex.rivera@kinetic.io
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-[#5f00e3]" fontSize="small" />
                +1 (555) 0123-4567
              </div>
              <div className="flex gap-3 items-center">
                <LocationOn className="text-[#5f00e3]" fontSize="small" />
                San Francisco, CA
              </div>
              <div className="flex gap-3 items-center">
                <LinkIcon className="text-[#5f00e3]" fontSize="small" />
                linkedin.com/in/arivera
              </div>
            </div>
          </div>

          {/* Additional Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#ff5e8e] mb-3">
              Additional Experience
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-[#000666] text-sm">
                  M.Arch Architecture
                </p>
                <p className="text-xs text-[#454652]">UC Berkeley • 2016</p>
              </div>
              <div>
                <p className="font-bold text-[#000666] text-sm">
                  B.S. Design Strategy
                </p>
                <p className="text-xs text-[#454652]">
                  Stanford University • 2014
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#ff5e8e] mb-3">
              Education
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-[#000666] text-sm">
                  M.Arch Architecture
                </p>
                <p className="text-xs text-[#454652]">UC Berkeley • 2016</p>
              </div>
              <div>
                <p className="font-bold text-[#000666] text-sm">
                  B.S. Design Strategy
                </p>
                <p className="text-xs text-[#454652]">
                  Stanford University • 2014
                </p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#ff5e8e] mb-3">
              Certificates
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-[#000666] text-sm">
                  M.Arch Architecture
                </p>
                <p className="text-xs text-[#454652]">UC Berkeley • 2016</p>
              </div>
              <div>
                <p className="font-bold text-[#000666] text-sm">
                  B.S. Design Strategy
                </p>
                <p className="text-xs text-[#454652]">
                  Stanford University • 2014
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#ff5e8e] mb-3">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["English (Native)", "Spanish (Fluent)", "German (Basic)"].map(
                (lang) => (
                  <span
                    key={lang}
                    className="bg-white px-3 py-1 rounded-full text-xs font-medium text-[#000666] shadow-sm"
                  >
                    {lang}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Button */}
          <button className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[#e0e0ff] text-[#000767] rounded-full text-sm font-bold hover:translate-x-1 transition">
            <Psychology fontSize="small" />
            Optimize with AI
          </button>
        </div>
      </aside>

      {/* Main */}
      <section className="flex-1 flex flex-col gap-10">
        {/* Summary */}
        <div className="bg-white rounded-3xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5f00e3] to-[#ff5e8e] opacity-10 rounded-bl-full"></div>

          <h2 className="text-2xl font-extrabold text-[#000666] mb-1">
            Professional Summary
          </h2>

          <p className="text-lg text-[#454652] leading-relaxed">
            Innovative Senior Architect with 8+ years of experience in designing
            sustainable, high-performance urban infrastructure. Specialized in
            computational design and AI-integrated workflows to reduce carbon
            footprint while maximizing spatial utility. Proven track record of
            leading multi-disciplinary teams through complex $100M+
            developments.
          </p>
        </div>

        {/* Technical Architectures */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-[#000666]">
            Technical Skills
          </h2>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#f2f4f6] p-4 rounded-lg flex flex-col gap-2 hover:shadow-md">
              <Architecture className="text-[#5f00e3]" />
              <span className="text-sm font-bold text-[#000666]">
                Revit & Rhino
              </span>
            </div>

            <div className="bg-[#f2f4f6] p-4 rounded-lg flex flex-col gap-2 hover:shadow-md">
              <Code className="text-[#ff5e8e]" />
              <span className="text-sm font-bold text-[#000666]">
                Grasshopper
              </span>
            </div>

            <div className="bg-[#f2f4f6] p-4 rounded-lg flex flex-col gap-2 hover:shadow-md">
              <AutoAwesome className="text-[#5f00e3]" />
              <span className="text-sm font-bold text-[#000666]">
                Generative AI
              </span>
            </div>

            <div className="bg-[#f2f4f6] p-4 rounded-lg flex flex-col gap-2 hover:shadow-md">
              <Landscape className="text-[#ff5e8e]" />
              <span className="text-sm font-bold text-[#000666]">BIM/VDC</span>
            </div>
          </div> */}

          <div className="flex flex-wrap gap-2">
            {[
              "Sustainable Design",
              "Project Management",
              "Urban Planning",
              "Leed Certified",
              "3D Modeling",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-[#e0e0ff] text-[#000767] px-4 py-1.5 rounded-full text-xs font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-extrabold text-[#000666]">
            Work Experience
          </h2>

          <div className="relative space-y-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e0e3e5]"></div>

            {/* Role 1 */}
            <div className="relative pl-10">
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#5f00e3] to-[#ff5e8e]"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#000666]">
                    Senior Project Architect
                  </h3>
                  <p className="text-[#ff5e8e] text-sm font-bold">
                    Skyline Innovations Group
                  </p>
                </div>
                <span className="text-sm text-gray-400 font-bold">
                  2019 — Present
                </span>
              </div>

              <ul className="mt-4 space-y-3 text-[#454652]">
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Lead architect for the $140M "Neo-Plaza" development,
                  utilizing generative design to optimize sun exposure by 40%.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Reduced material waste by 15% through the implementation of
                  advanced BIM coordination and VR design reviews.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Managed a cross-functional team of 12 designers, engineers,
                  and consultants across 3 time zones.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="relative pl-10">
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#5f00e3] to-[#ff5e8e]"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#000666]">
                    Associate Architect
                  </h3>
                  <p className="text-[#ff5e8e] text-sm font-bold">
                    Prism Design Studio
                  </p>
                </div>
                <span className="text-sm text-gray-400 font-bold">
                  2016 — 2019
                </span>
              </div>

              <ul className="mt-4 space-y-3 text-[#454652]">
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Developed concept designs for 5 major commercial projects,
                  winning 2 prestigious international design competitions.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Spearheaded the studio's transition to Revit-centric
                  workflows, increasing design phase efficiency by 25%.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Developed concept designs for projects,Developed concept
                  designs for 5 major commercial projects,
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projetcs  */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-extrabold text-[#000666]">Projetcs</h2>

          <div className="relative space-y-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e0e3e5]"></div>

            {/* Role 1 */}
            <div className="relative pl-10">
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#5f00e3] to-[#ff5e8e]"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#000666]">
                    Senior Project Architect
                  </h3>
                  <p className="text-[#ff5e8e] text-sm font-bold">
                    Skyline Innovations Group
                  </p>
                </div>
                <span className="text-sm text-gray-400 font-bold">
                  2019 — Present
                </span>
              </div>

              <ul className="mt-4 space-y-3 text-[#454652]">
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Lead architect for the $140M "Neo-Plaza" development,
                  utilizing generative design to optimize sun exposure by 40%.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Reduced material waste by 15% through the implementation of
                  advanced BIM coordination and VR design reviews.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Managed a cross-functional team of 12 designers, engineers,
                  and consultants across 3 time zones.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="relative pl-10">
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#5f00e3] to-[#ff5e8e]"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#000666]">
                    Associate Architect
                  </h3>
                  <p className="text-[#ff5e8e] text-sm font-bold">
                    Prism Design Studio
                  </p>
                </div>
                <span className="text-sm text-gray-400 font-bold">
                  2016 — 2019
                </span>
              </div>

              <ul className="mt-4 space-y-3 text-[#454652]">
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Developed concept designs for 5 major commercial projects,
                  winning 2 prestigious international design competitions.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Spearheaded the studio's transition to Revit-centric
                  workflows, increasing design phase efficiency by 25%.
                </li>
                <li className="flex gap-2">
                  <ArrowRightAlt className="text-[#5f00e3]" />
                  Developed concept designs for projects,Developed concept
                  designs for 5 major commercial projects,
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeUI;
