"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

export default function CitizenDashboard() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Smart Community Health</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>
  <div className="relative flex size-full min-h-screen flex-col group/design-root bg-green-50">
        <div className="flex-grow flex flex-col">
          <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <img
                  alt="User avatar"
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt81_d3yC5BdfKsoPqg8GxtS1L4r6tU-F0H4BvL1sKqgI-f6j_N7n3dJ-aA5i-t3c9sQ8oV2j8_gH6l3b7b8m9k0n1j0c8h4b5n2_g"
                />
                <div>
                  <p className="text-sm text-gray-500">Welcome back,</p>
                  <h1 className="text-lg font-bold text-gray-900">Anjali Sharma</h1>
                </div>
              </div>
              <button className="relative flex items-center justify-center rounded-full h-11 w-11 bg-white shadow-md text-gray-900">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 block h-2.5 w-2.5 rounded-full bg-red-600 border-2 border-white"></span>
              </button>
            </div>
          </header>
          <main className="flex-grow p-6 space-y-8 pb-24 bg-green-50">
            <div className="rounded-2xl bg-blue-800 text-white p-6 shadow-xl flex flex-col gap-4">
              <h2 className="text-xl font-bold">Feeling Unwell?</h2>
              <p className="text-sm opacity-80">If you're feeling sick, please report your symptoms to help us monitor community health.</p>
              <button
                className="w-full flex items-center justify-center gap-3 rounded-xl h-14 mt-2 bg-white text-blue-800 text-lg font-bold shadow-lg hover:bg-gray-100 transition-colors"
                onClick={() => router.push("/report-sickness")}
              >
                <span className="material-symbols-outlined text-2xl">medical_services</span>
                <span>Report Sickness</span>
              </button>
            </div>
            <div>
              <h2 className="text-gray-900 text-xl font-bold px-1 pb-4">Community Alerts</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl p-4 bg-red-50/50 border border-red-200 text-red-600 shadow-sm">
                  <div className="flex items-center justify-center rounded-full bg-red-100 shrink-0 size-12 border-4 border-red-50/70">
                    <span className="material-symbols-outlined text-red-600">water_drop</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-red-800">Water Unsafe in Your Area</h3>
                    <p className="text-sm text-red-700 opacity-90">Please boil water before drinking.</p>
                  </div>
                  <span className="material-symbols-outlined text-red-400">chevron_right</span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-4 bg-orange-50/50 border border-orange-200 text-orange-600 shadow-sm">
                  <div className="flex items-center justify-center rounded-full bg-orange-100 shrink-0 size-12 border-4 border-orange-50/70">
                    <span className="material-symbols-outlined text-orange-600">warning</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-orange-800">Disease Outbreak Risk</h3>
                    <p className="text-sm text-orange-700 opacity-90">High fever reported in your vicinity.</p>
                  </div>
                  <span className="material-symbols-outlined text-orange-400">chevron_right</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center px-1 pb-4 pt-4">
                <h2 className="text-gray-900 text-xl font-bold">Health Tips</h2>
                <button className="flex items-center gap-1 text-sm font-medium text-blue-700">
                  <span>View All</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
                <div className="flex items-stretch space-x-4">
                  <div className="flex flex-col gap-3 rounded-2xl w-48 snap-start bg-white p-3 shadow-md border border-gray-100">
                    <div className="relative w-full aspect-[4/3]">
                      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnvEkonyvGqmmmDgntdOj5NVR5Av37cosgFGtKNvpqDFYJIgRhtOf13yp97bffAj2GwA_Neaoxq9o_9bCxYs68enjjK3u6a3PVelZD45V0_w2R-srjDNFmRbv8cgc7_MOzJMuKpj30jy9wloRZXC7lMHNio_nVaxG4YiO0t840uknZijSqY-fPvHpZakSSpStg0z4MofNh_54-xXv4wUB2jkXSHpSqA9-_BE40bSe6bhcsAiz4Pn3qxR_Z1bgM9QAbVOIKmvqqg_c")'}}></div>
                      <div className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full"><span className="material-symbols-outlined text-sm">water_ph</span></div>
                    </div>
                    <p className="text-gray-900 text-sm font-semibold text-left px-1">शुद्ध पिउने पानी</p>
                    <p className="text-gray-500 text-xs text-left px-1 -mt-2">Boil water before drinking</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl w-48 snap-start bg-white p-3 shadow-md border border-gray-100">
                    <div className="relative w-full aspect-[4/3]">
                      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7gyj3U9hNpFr6Lc1tBNzn-rsdbXVOHtIiUySDTRHmvQ4S_XFGvXi_ckrzHErNFeKzfn8wQ2fyJHm5tA0m7tfzzVdc2WfN2GhjQwsMFmSBpUGU1TApiJ9YyeuoWYk6ZvPLCHaZEXo4PKsmBjBj6YP5mg8iHoIWMZX5pGmNCTm_H2gYdDm9V8QBKCL7E-SwSEQehfErHRo91Tkr-HbfGQNLbnEDOMIxoWP5LJWTGez_tYPxhv5EksehIdAkg5jOqB5tPUF9zBRf_6s")'}}></div>
                      <div className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full"><span className="material-symbols-outlined text-sm">wash</span></div>
                    </div>
                    <p className="text-gray-900 text-sm font-semibold text-left px-1">हात धुने</p>
                    <p className="text-gray-500 text-xs text-left px-1 -mt-2">Wash hands before eating</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl w-48 snap-start bg-white p-3 shadow-md border border-gray-100">
                    <div className="relative w-full aspect-[4/3]">
                      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYPgi7HrgSQFmbLduwvwv0XgV_8vNGbZDMU7TKaRXG5GG_qaE8sSYELmEpPeqpusFbU_wFGhM15_rBEImhUiqHmAIA8bVfBosVlc5uEIAlySooYAVKKbHPX32O_Ph22bf6OPwl5gBghb6nqoiv-pxq6laafuEGF03nWBzVF8GQ3wfE0nOm046R9io1s3CFF9VbfHM2EnXVTbzCmaFZn2N3WHoQ2PsM_YH22_r2rO6LY1knvsd2zdkJ_mvWcFdgsK7Bx4RJ1EoKkYY")'}}></div>
                      <div className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full"><span className="material-symbols-outlined text-sm">masks</span></div>
                    </div>
                    <p className="text-gray-900 text-sm font-semibold text-left px-1">मास्क लगाउनुहोस्</p>
                    <p className="text-gray-500 text-xs text-left px-1 -mt-2">Wear a mask in crowds</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
  <footer className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-2xl">
          <nav className="flex justify-around py-3">
            <a className="flex flex-col items-center justify-center gap-1 rounded-lg text-blue-800 w-24 h-16" href="/citizen-dashboard">
              <span className="material-symbols-outlined text-3xl">home</span>
              <p className="text-xs font-bold tracking-wide">Home</p>
            </a>
            <a className="flex flex-col items-center justify-center gap-1 text-gray-500 w-24 h-16" href="#">
              <span className="material-symbols-outlined text-3xl">bar_chart</span>
              <p className="text-xs font-medium tracking-wide">Reports</p>
            </a>
            <a className="flex flex-col items-center justify-center gap-1 text-gray-500 w-24 h-16" href="#">
              <span className="material-symbols-outlined text-3xl">health_and_safety</span>
              <p className="text-xs font-medium tracking-wide">Health Tips</p>
            </a>
            <a className="flex flex-col items-center justify-center gap-1 text-blue-800 w-24 h-16" href="/citizen-profile">
              <span className="material-symbols-outlined text-3xl">person</span>
              <p className="text-xs font-bold tracking-wide">Profile</p>
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
