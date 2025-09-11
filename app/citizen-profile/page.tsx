"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function CitizenProfile() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Settings - Smart Community Health</title>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head>
      <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root font-sans">
        <div className="flex-grow pb-24">
          <header className="sticky top-0 z-10 flex items-center justify-between bg-gray-50/80 p-4 backdrop-blur-sm">
            <button className="text-gray-800" onClick={() => router.back()}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Settings</h1>
            <div className="w-8"></div>
          </header>
          <main className="p-4 sm:p-6">
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-gray-500">Account</h2>
              <div className="space-y-2">
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Personal Information</p>
                    <p className="text-sm text-gray-500">Manage your personal information</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Contact Information</p>
                    <p className="text-sm text-gray-500">Manage your contact details</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Address Information</p>
                    <p className="text-sm text-gray-500">Manage your address details</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-gray-500">App Settings</h2>
              <div className="space-y-2">
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">notifications</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Notifications</p>
                    <p className="text-sm text-gray-500">Manage app notifications</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Language</p>
                    <p className="text-sm text-gray-500">Manage app language</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">contrast</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Theme</p>
                    <p className="text-sm text-gray-500">Manage app theme</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
              </div>
            </section>
            <section>
              <h2 className="mb-4 text-lg font-semibold text-gray-500">Support</h2>
              <div className="space-y-2">
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">help</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Help & Support</p>
                    <p className="text-sm text-gray-500">Get help and support</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">flag</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">Report an Issue</p>
                    <p className="text-sm text-gray-500">Report an issue</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
                <a className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-100/50" href="#">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <span className="material-symbols-outlined">info</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">About</p>
                    <p className="text-sm text-gray-500">About the app</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </a>
              </div>
            </section>
            <div className="mt-12 text-center">
              <button className="rounded-full bg-red-100 px-8 py-3 text-base font-semibold text-red-600 transition-colors hover:bg-red-200/70">
                Log Out
              </button>
            </div>
          </main>
        </div>
        <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-md justify-around">
            <a className="flex flex-1 flex-col items-center gap-1 py-3 text-gray-500 transition-colors hover:text-blue-800" href="/citizen-dashboard">
              <span className="material-symbols-outlined">home</span>
              <p className="text-xs font-medium">HOME</p>
            </a>
            <a className="flex flex-1 flex-col items-center gap-1 py-3 text-gray-500 transition-colors hover:text-blue-800" href="/report-sickness">
              <span className="material-symbols-outlined">summarize</span>
              <p className="text-xs font-medium">REPORTS</p>
            </a>
            <a className="flex flex-1 flex-col items-center gap-1 py-3 text-gray-500 transition-colors hover:text-blue-800" href="#">
              <span className="material-symbols-outlined">lightbulb</span>
              <p className="text-xs font-medium">HEALTH TIPS</p>
            </a>
            <a className="flex flex-1 flex-col items-center gap-1 py-3 text-blue-800 transition-colors hover:text-blue-800" href="/citizen-profile">
              <span className="material-symbols-outlined">person</span>
              <p className="text-xs font-bold">PROFILE</p>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
