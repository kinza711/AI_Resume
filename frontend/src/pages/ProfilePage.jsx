import Header from "../components/header/Header";
import SideNav from "../components/sidebar/Sidebar";
import PersonalInfoCard from "../components/profile/PersonalInfoCard";
import ProfessionalSummaryCard from "../components/profile/ProfessionalSummaryCard";
import SocialPresenceCard from "../components/profile/SocialPresenceCard";
import ProfileStrengthCard from "../components/profile/ProfileStrengthCard";
import { IoIosSave } from "react-icons/io";
import { HiMiniCheckBadge } from "react-icons/hi2";

export default function Profile() {
  return (
    <div className="bg-[#f7f9fb] font-body text-[#191c1e] min-h-screen">
      <Header />
      <SideNav />
      <main className="md:ml-64 pt-24 pb-12 px-8 min-h-screen">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-[3rem] font-headline font-extrabold text-[#000666] tracking-tight leading-none">
                Profile
              </h1>
              <p className="mt-4 text-lg text-[#454652] font-medium max-w-xl">
                Manage your professional identity and let Lumina AI craft the
                perfect summary for your next role.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#bdc2ff] px-4 py-2 rounded-full flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[#000767] text-xs"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  <HiMiniCheckBadge />
                </span>
                <span className="text-[#000767] text-xs font-bold uppercase tracking-wider">
                  Verified Talent
                </span>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <PersonalInfoCard />
              <ProfessionalSummaryCard />
            </div>
            <div className="lg:col-span-4 space-y-8">
              <SocialPresenceCard />
              <ProfileStrengthCard />
              {/* Action Buttons */}
              <div className="pt-4 sticky top-24">
                <button className="w-full bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white rounded-full py-4 font-headline font-extrabold text-lg shadow-xl transition-all flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                  <span className="material-symbols-outlined">
                    <IoIosSave />
                  </span>
                  Save Changes
                </button>
                <button className="w-full mt-4 py-4 text-[#454652] font-bold text-sm hover:text-[#000666] transition-colors">
                  Discard Edits
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background Accents */}
      <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#5f00e3]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#ff5e8e]/5 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}
