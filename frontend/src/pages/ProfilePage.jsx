import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import PersonalInfoCard from "../components/profile/PersonalInfoCard";
import ProfessionalSummaryCard from "../components/profile/ProfessionalSummaryCard";
import SocialPresenceCard from "../components/profile/SocialPresenceCard";
import ProfileStrengthCard from "../components/profile/ProfileStrengthCard";
import { IoIosSave } from "react-icons/io";
import { HiMiniCheckBadge } from "react-icons/hi2";
import api from "../services/api";
import UpgradePro from "../components/popups/UpgradePro";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/profile`);
        setProfile(res.data.user);
      } catch (err) {
        console.error(err, "profile not found");
      }
    };
    fetchProfile();
  }, [id]);

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        location: profile.location || "",
        summery: profile.summery || "",
        heading: profile.heading || "",
        linkedIn: profile.linkedIn || "",
        github: profile.github || "",
        portfolio: profile.portfolio || "",
        role: profile.role || "user",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    try {
      const res = await api.put("/profile/update", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setProfile(res.data.user);
      setSuccess("Profile updated successfully");
    } catch (err) {
      console.error("Update Error:", err);
      //alert("Profile not updated");
      setError("Profile not updated");
    }
  };

  return (
    <div className="bg-[#f7f9fb] font-body text-[#191c1e] min-h-screen flex">
      {/* Desktop Sidebar */}
      {/* Header */}
      <Header
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <aside className="hidden lg:flex w-64 fixed left-0 top-0 h-full z-20">
        <Sidebar isOpen={true} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64 transition-all duration-300">
        {/* Header
        <Header
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        /> */}

        <main className="pt-24 pb-12 px-4 sm:px-6 md:px-8 min-h-screen">
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
                  <HiMiniCheckBadge className="text-[#000767] text-xs" />
                  <span className="text-[#000767] text-xs font-bold uppercase tracking-wider">
                    Verified Talent
                  </span>
                </div>
              </div>
            </div>
            {/* error or succes mesages */}
            {error ? (
              <p className="text-red-700 font-semibold">{error}</p>
            ) : (
              <p className="text-green-700 font-semibold">{success}</p>
            )}

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column */}

              <div className="lg:col-span-8 space-y-8">
                <PersonalInfoCard
                  formData={formData}
                  handleChange={handleChange}
                />
                <ProfessionalSummaryCard
                  formData={formData}
                  handleChange={handleChange}
                  onOpenPopup={() => setOpen(true)}
                />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 space-y-8">
                <SocialPresenceCard
                  formData={formData}
                  handleChange={handleChange}
                />
                <ProfileStrengthCard onOpenPopup={() => setOpen(true)} />

                {/* Action Buttons */}
                <div className="pt-4 sticky top-24">
                  <button
                    onClick={handleUpdateProfile}
                    className="w-full bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white rounded-full py-4 font-headline font-extrabold text-lg shadow-xl transition-all flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                  >
                    <IoIosSave />
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
        {/* MODAL */}
        {open && <UpgradePro onClose={() => setOpen(false)} />}
      </div>

      {/* Background Accents */}
      <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#5f00e3]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#ff5e8e]/5 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}
