import { IoLink } from "react-icons/io5";
import { MdOutlinePublic } from "react-icons/md";

export default function SocialPresenceCard() {
  return (
    <section className="bg-[#f2f4f6] rounded-lg p-8">
      <h2 className="text-xl font-headline font-bold text-[#000666] mb-6">
        Social Presence
      </h2>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-extrabold text-[#454652] uppercase tracking-[0.2em] ml-1">
            LinkedIn URL
          </label>
          <div className="flex items-center gap-3 p-3 bg-[#ffffff] rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-[#0077b5]">
              <IoLink />
            </span>
            <input
              className="bg-transparent border-none p-0 text-sm font-medium w-full focus:ring-0"
              type="text"
              value="linkedin.com/in/alexcarter"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-extrabold text-[#454652] uppercase tracking-[0.2em] ml-1">
            Portfolio
          </label>
          <div className="flex items-center gap-3 p-3 bg-[#ffffff] rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-[#ff5e8e]">
              <MdOutlinePublic />
            </span>
            <input
              className="bg-transparent border-none p-0 text-sm font-medium w-full focus:ring-0"
              type="text"
              value="alexcarter.design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
