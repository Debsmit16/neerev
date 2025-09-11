
"use client";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";

const roles = [
  { label: "ASHA Worker", icon: "health_and_safety" },
  { label: "Citizen", icon: "family_restroom" },
  { label: "Health Official", icon: "local_hospital" },
];

export default function Login() {
  const [selectedRole, setSelectedRole] = useState(roles[0].label);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole === "ASHA Worker") {
      router.push("/asha-dashboard");
    } else if (selectedRole === "Citizen") {
      router.push("/citizen-dashboard");
    } else {
      alert(`Login for ${selectedRole} coming soon!`);
    }
  };

  return (
    <>
      <Head>
        <title>Smart Community Health - Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>

      <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-blue-100 via-white to-teal-100 text-gray-900">
        {/* Online badge */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 rounded-full bg-green-100/80 px-3 py-1.5 text-xs font-medium text-green-800 backdrop-blur-sm shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span>Online</span>
        </div>

        {/* Hero image with overlay */}
        <div className="relative h-72 w-full">
          <img
            alt="Healthcare worker smiling at a patient in a village setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBBzUPnPb9XEV4KO72CYnKxqlClxsS4rVjPSxl5y0CSmGRWhoIdTI1lxs63d88DJl8Z2wwOUe_wWI9cng1dWZFbS2R-5Fg3eBfrourParsnX3VNhEVsfcdEjASNyLiCrL1Kf0AJ8XrnPlzifdDMkMSMPKzrJ_4Bc8kv14_wTu5saP9fb88N3xMZGc4oDlTL2Mm3gNqFGbjh1xKT0OI3tIbDtBttXeU7vG1cWsRdrEU7tC-jQXws4OxkOVeNvMI-3qyHdG46JcSXJc"
            className="absolute h-full w-full object-cover rounded-b-3xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-b-3xl"></div>
          <div className="absolute bottom-8 left-6 right-6">
            <h1 className="font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg">
              Smart Community Health
            </h1>
            <p className="mt-2 text-base text-gray-200 drop-shadow">
              Your health, our priority.
            </p>
          </div>
        </div>

        {/* Form content */}
        <form className="flex-grow p-6 pb-8" onSubmit={handleLogin}>
          <div className="space-y-8 max-w-xl mx-auto bg-white/80 rounded-2xl shadow-xl p-8 mt-[-4rem] backdrop-blur-md">
            {/* Role Selection */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Select Your Role
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {roles.map((role) => (
                  <label
                    key={role.label}
                    className={`relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border bg-white p-4 text-center text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md ${selectedRole === role.label ? "border-teal-600 bg-teal-600 text-white shadow-lg shadow-teal-200" : "border-gray-200"}`}
                  >
                    <span
                      className="material-symbols-outlined mb-2 text-4xl"
                      style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                    >
                      {role.icon}
                    </span>
                    <span className="text-sm font-semibold">{role.label}</span>
                    <input
                      type="radio"
                      name="role"
                      className="absolute invisible"
                      checked={selectedRole === role.label}
                      onChange={() => setSelectedRole(role.label)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Login Methods */}
            <div className="space-y-5">
              {/* Mobile Number */}
              <div className="relative">
                <label
                  htmlFor="mobile-number"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    style={{ fontVariationSettings: "'wght' 300" }}
                  >
                    phone_iphone
                  </span>
                  <input
                    id="mobile-number"
                    placeholder="Enter your 10-digit mobile number"
                    className="form-input h-14 w-full resize-none rounded-xl border-gray-300 bg-gray-50 py-4 pl-12 pr-4 text-base font-normal text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    style={{ fontVariationSettings: "'wght' 300" }}
                  >
                    mail
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input h-14 w-full resize-none rounded-xl border-gray-300 bg-gray-50 py-4 pl-12 pr-4 text-base font-normal text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Language */}
              <div className="relative">
                <label
                  htmlFor="language"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Language
                </label>
                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    style={{ fontVariationSettings: "'wght' 300" }}
                  >
                    language
                  </span>
                  <select
                    id="language"
                    name="language"
                    className="form-select h-14 w-full resize-none rounded-xl border-gray-300 bg-gray-50 py-4 pl-12 pr-10 text-base font-normal text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Assamese</option>
                    <option>Bengali</option>
                    <option>Marathi</option>
                    <option>Tamil</option>
                  </select>
                  <span
                    className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    style={{ fontVariationSettings: "'wght' 300" }}
                  >
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4 pt-2">
              <button type="submit" className="flex h-14 w-full max-w-[480px] items-center justify-center rounded-full bg-teal-600 px-5 text-lg font-semibold tracking-wide text-white shadow-lg shadow-teal-500/40 transition-colors duration-300 hover:bg-teal-700 active:bg-teal-800">
                <span>Login / Sign Up</span>
              </button>
              <button type="button" className="flex h-14 w-full max-w-[480px] items-center justify-center rounded-full bg-white border border-gray-300 px-5 text-lg font-semibold tracking-wide text-gray-800 shadow-lg shadow-gray-200 transition-colors duration-300 hover:bg-gray-100 active:bg-gray-200">
                <span className="material-symbols-outlined mr-2 text-2xl text-[#4285F4]">account_circle</span>
                <span>Continue with Google</span>
              </button>
              <div className="text-center">
                <a
                  href="/guest"
                  className="text-sm font-medium text-gray-600 hover:text-teal-600"
                >
                  Continue as Guest
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}