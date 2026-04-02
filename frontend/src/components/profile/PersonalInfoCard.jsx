import { MdBadge } from "react-icons/md";

export default function PersonalInfoCard({ formData, handleChange }) {
  return (
    <section className="bg-white/70 backdrop-blur-[20px] rounded-lg p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-headline font-bold text-[#000666] flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ff5e8e]">
            <MdBadge />
          </span>
          Personal Information
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            First Name
          </label>
          <input
            className="w-full placeholder:text-gray-400  bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Professional Heading
          </label>
          <input
            className="w-full placeholder:text-gray-400 bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="text"
            name="heading"
            value={formData?.heading}
            onChange={handleChange}
            placeholder="UI/UX Design"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Email Address
          </label>
          <input
            className="w-full placeholder:text-gray-400 bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Phone Number
          </label>
          <input
            className="w-full placeholder:text-gray-400 bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="tel"
            name="phone"
            value={formData?.phone}
            onChange={handleChange}
            placeholder="+920876554444"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Location
          </label>
          <div className="relative">
            <input
              className="w-full placeholder:text-gray-400 bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
              type="text"
              name="location"
              value={formData?.location}
              onChange={handleChange}
              placeholder="Lahore , punjab , pakistan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
