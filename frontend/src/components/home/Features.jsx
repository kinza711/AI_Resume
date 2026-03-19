import { FaMagic, FaFilePdf, FaBullseye, FaBarcode } from "react-icons/fa";

const features = [
  {
    icon: <FaMagic />,
    title: "AI Improved Bullets",
    desc: "Turn passive duties into active achievements with metric-driven phrasing that commands attention.",
    color: "bg-indigo-100 text-indigo-600",
    border: "hover:border-indigo-300",
  },
  {
    icon: <FaFilePdf />,
    title: "PDF Download",
    desc: "Export your perfected resume in high-fidelity, designer-grade PDF formats ready for immediate submission.",
    color: "bg-pink-100 text-pink-600",
    border: "hover:border-pink-300",
  },
  {
    icon: <FaBullseye />,
    title: "Job Tailoring",
    desc: "Instantly align your experience with specific job descriptions to highlight the exact skills recruiters seek.",
    color: "bg-indigo-100 text-indigo-600",
    border: "hover:border-indigo-300",
  },
  {
    icon: <FaBarcode />,
    title: "ATS Scan",
    desc: "Run your resume through our proprietary parser to ensure compatibility with modern hiring systems.",
    color: "bg-pink-100 text-pink-600",
    border: "hover:border-pink-300",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#000666] mb-6">
            Engineered for Excellence
          </h2>
          <p className="text-lg text-gray-500">
            We don't just fix typos. We shape your professional story with
            intelligence and intent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-sm border border-transparent ${feature.border} transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 text-xl ${feature.color} group-hover:scale-110 transition`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#000666] mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
