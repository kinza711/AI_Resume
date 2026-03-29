import React from "react";
import { MdVerified, MdAutoAwesome } from "react-icons/md";
import AdminLoginForm from "../forms/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left Side Visual */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ backgroundColor: "#000666" }}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5UiTjrPUyJvyM28hSFLbZKO0O0aTdvnP26q2HE9TnlGI3xNGHmEvv16GfZbganFcf6vRR4qUp4seljJFLQisAS-LIOl2Z4Ymvyl2vZIJPn3EicF-JMW3MJ9hjB97BO1FAW8GSNbOEHxnUpqKCvTHOHcowv1Wmk7KBb5QVfhFd-KyHhMqqbuwrfsNQyKdpDiwWKdzZvplafs0_sgXk3KCptKkJpTdx3YoISEsWmZjYVEtjjOAKSFoRQ-uquL20ZBv6kyMbBFSzrj74"
          alt="Modern high-tech office"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a237eCC, transparent, #65002a4D)",
          }}
        ></div>

        <div className="relative z-10 flex flex-col justify-between w-full h-full p-16 text-white">
          <div>
            <h1 className="text-4xl font-headline font-extrabold mb-2">
              ResumeArchitect AI
            </h1>
            <div
              className="h-1 w-20"
              style={{
                background: "linear-gradient(135deg, #5f00e3 0%, #ff5e8e 100%)",
              }}
              className="rounded-full"
            ></div>
          </div>
          <div className="max-w-md">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MdAutoAwesome style={{ color: "#ff5e8e", fontSize: "14px" }} />
              <span className="text-xs font-bold tracking-widest uppercase">
                Career Engineering
              </span>
            </div>
            <h2 className="text-5xl font-headline font-bold leading-tight mb-6">
              Master your administrative control center.
            </h2>
            <p style={{ color: "#bdc2ff" }} className="text-xl leading-relaxed">
              Secure access to the next generation of career development
              infrastructure.
            </p>
          </div>
          <div
            className="flex items-center gap-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <MdVerified />
            <span>System Status: Fully Operational</span>
          </div>
        </div>
      </div>

      {/* Right Side Login Form */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-8"
        style={{ backgroundColor: "#f7f9fb" }}
      >
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Header */}
          <div className="w-full mb-10 text-center">
            <h3
              className="text-3xl font-headline font-bold mb-2"
              style={{ color: "#000666" }}
            >
              Welcome back, Administrator
            </h3>
            <p style={{ color: "#454652" }} className="font-medium">
              Please enter your credentials to access the portal
            </p>
          </div>

          {/* Form */}
          <AdminLoginForm />

          {/* Footer / Badge */}
          <div className="mt-16">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                backgroundColor: "#eceef0",
                border: "1px solid rgba(198,197,212,0.1)",
              }}
            >
              <div
                className="flex items-center justify-center w-6 h-6 rounded-full"
                style={{ backgroundColor: "#cfbcff" }}
              >
                <MdVerified style={{ color: "#22005d", fontSize: "16px" }} />
              </div>
              <span
                className="text-xs font-bold tracking-wide"
                style={{ color: "#454652" }}
              >
                Security verified by Lumina AI
              </span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 flex gap-6">
            <a
              href="#"
              style={{ color: "#767683" }}
              className="text-xs font-medium hover:text-[#000666] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ color: "#767683" }}
              className="text-xs font-medium hover:text-[#000666] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{ color: "#767683" }}
              className="text-xs font-medium hover:text-[#000666] transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
