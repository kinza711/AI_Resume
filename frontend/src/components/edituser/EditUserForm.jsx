import React from "react";
import {
  MdArrowBack,
  MdExpandMore,
  MdLockReset,
  MdAutoAwesome,
  MdSave,
} from "react-icons/md";

export default function EditUserForm() {
  return (
    <div className="w-full flex justify-center">
      {/* Center Container */}
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Back */}
        <div className="mb-6">
          <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition">
            <MdArrowBack />
            <span className="text-sm font-medium">Back to Users</span>
          </button>
        </div>

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A237E]">
              Edit Profile
            </h2>
            <p className="text-gray-500 mt-2">
              Managing account details for Jordan Smith
            </p>
          </div>

          <div className="px-4 py-1.5 bg-indigo-100 rounded-full flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            <span className="text-xs font-bold text-indigo-700 uppercase">
              Active Analysis
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-8">
          {/* Main Card */}
          <section className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <div className="grid gap-6">
              {/* Name */}
              <div>
                <label className="text-sm font-bold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Jordan Smith"
                  className="mt-2 w-full px-5 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="jordan.smith@example.com"
                    className="mt-2 w-full px-5 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 234-5678"
                    className="mt-2 w-full px-5 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
                  />
                </div>
              </div>

              {/* Role + Status */}
              <div className="grid md:grid-cols-2 gap-6 items-end">
                {/* Role */}
                <div>
                  <label className="text-sm font-bold text-gray-700">
                    Role
                  </label>

                  <div className="relative mt-2">
                    <select className="w-full appearance-none px-5 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none">
                      <option>Premium User</option>
                      <option>Standard User</option>
                      <option>Enterprise Admin</option>
                      <option>Content Reviewer</option>
                    </select>

                    <MdExpandMore className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between px-5 py-3 bg-gray-100 rounded-xl">
                  <span className="text-sm font-bold text-gray-700">
                    Account Status
                  </span>

                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-10 h-5 accent-purple-600"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h3 className="text-lg font-bold text-[#1A237E] mb-3">Security</h3>

            <div className="bg-gray-100 p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600">
                  <MdLockReset />
                </div>

                <div>
                  <p className="font-semibold">Password Security</p>
                  <p className="text-sm text-gray-500">
                    Last changed 4 months ago
                  </p>
                </div>
              </div>

              <button className="px-5 py-2 bg-white text-purple-600 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                Reset Password
              </button>
            </div>
          </section>

          {/* Plan */}
          <section>
            <h3 className="text-lg font-bold text-[#1A237E] mb-3">
              Plan Management
            </h3>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                    <MdAutoAwesome />
                  </div>

                  <div>
                    <p className="font-bold text-lg text-[#1A237E]">
                      Lumina Pro Plan
                    </p>
                    <p className="text-sm text-gray-500 max-w-xs">
                      Unlimited AI revisions and premium templates.
                    </p>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-xs text-gray-500 uppercase">
                    Renewal Date
                  </p>
                  <p className="text-lg font-bold text-purple-600">
                    Oct 12, 2024
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3 flex-wrap">
                <button className="px-4 py-2 bg-[#1A237E] text-white rounded-full text-xs font-bold">
                  Change Plan
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button className="text-gray-500 font-semibold hover:text-[#1A237E]">
              Discard
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition">
              <MdSave />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
