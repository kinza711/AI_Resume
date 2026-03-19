import { MdBadge } from "react-icons/md";

export default function PersonalInfoCard() {
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
            className="w-full bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="text"
            value="Alex"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Last Name
          </label>
          <input
            className="w-full bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="text"
            value="Carter"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Email Address
          </label>
          <input
            className="w-full bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="email"
            value="alex.carter@design.io"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Phone Number
          </label>
          <input
            className="w-full bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
            type="tel"
            value="+1 (555) 000-1234"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold text-[#454652] uppercase tracking-widest ml-1">
            Location
          </label>
          <div className="relative">
            <input
              className="w-full bg-[#e6e8ea] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e]"
              type="text"
              value="San Francisco, CA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
