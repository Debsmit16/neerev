"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function ReportSickness() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Reports - Smart Community Health</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>
      <div className="relative flex size-full min-h-screen flex-col group/design-root font-sans bg-white">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center p-4 border-b border-gray-200">
            <button className="text-gray-900" onClick={() => router.back()}>
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <h1 className="flex-1 text-center text-xl font-bold text-gray-900">Reports</h1>
            <div className="w-8"></div>
          </div>
        </header>
        <main className="flex-grow p-4 space-y-6 pb-24">
          {/* Upload Past Reports */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upload Past Reports</h2>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-gray-100 px-6 py-8 text-center">
              <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                <span className="material-symbols-outlined text-4xl">cloud_upload</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">Upload Your Reports</p>
              <p className="text-sm text-gray-500 max-w-xs">Keep a digital record of your past health reports for easy access and tracking.</p>
              <button className="mt-2 flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-blue-800 text-white text-base font-bold transition-transform active:scale-95">
                <span className="material-symbols-outlined">upload</span>
                <span className="truncate">Upload Files</span>
              </button>
            </div>
          </section>
          {/* Report If Sick */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Report If Sick</h2>
            <div className="group relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-blue-800 to-blue-400 shadow-lg">
              <div className="p-6 space-y-3 text-white">
                <h3 className="text-xl font-bold">Feeling Unwell?</h3>
                <p className="text-sm font-light">Report your symptoms to get timely assistance from health officials.</p>
                <button className="mt-4 flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-white text-blue-800 font-bold transition-transform active:scale-95">
                  <span className="material-symbols-outlined">emergency_heat</span>
                  <span className="truncate">Report Now</span>
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-20">
                <span className="material-symbols-outlined text-[160px] text-white">sick</span>
              </div>
            </div>
          </section>
          {/* Health History */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Health History</h2>
            <div className="space-y-4">
              {/* History Item 1 */}
              <div className="relative pl-8">
                <div className="absolute left-3 top-3 h-full border-l-2 border-dashed border-gray-200"></div>
                <div className="relative flex items-start gap-4">
                  <div className="absolute left-0 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-800">
                    <span className="material-symbols-outlined text-sm text-white">history</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500">June 15, 2024</p>
                    <div className="mt-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <p className="font-semibold text-gray-900">Fever and Cough</p>
                      <p className="text-sm text-gray-500">Reported high fever and persistent cough. Advised to rest and monitor symptoms.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* History Item 2 */}
              <div className="relative pl-8">
                <div className="absolute left-3 top-3 h-full border-l-2 border-dashed border-gray-200"></div>
                <div className="relative flex items-start gap-4">
                  <div className="absolute left-0 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-800">
                    <span className="material-symbols-outlined text-sm text-white">history</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500">May 28, 2024</p>
                    <div className="mt-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <p className="font-semibold text-gray-900">Routine Check-up</p>
                      <p className="text-sm text-gray-500">Blood pressure and sugar levels normal. General health is good.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* History Item 3 */}
              <div className="relative pl-8">
                <div className="relative flex items-start gap-4">
                  <div className="absolute left-0 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-800">
                    <span className="material-symbols-outlined text-sm text-white">history</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500">April 12, 2024</p>
                    <div className="mt-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <p className="font-semibold text-gray-900">Allergy Symptoms</p>
                      <p className="text-sm text-gray-500">Reported skin rash and itching. Prescribed anti-allergy medication.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Report Details */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Report Details</h2>
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base font-medium text-gray-500">Health Trends</p>
                  <p className="text-4xl font-bold leading-tight text-green-600">Good</p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                  <span className="material-symbols-outlined text-base">trending_up</span>
                  <span>+5%</span>
                </div>
              </div>
              <div className="h-48 -mx-6">
                {/* SVG Chart */}
                <svg fill="none" height="100%" preserveAspectRatio="xMidYMax meet" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1131_5935_new" x1="236" x2="236" y1="0" y2="150">
                      <stop stopColor="#1754cf" stopOpacity="0.2"></stop>
                      <stop offset="1" stopColor="#1754cf" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_1131_5935_new)"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#1754cf" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <p className="text-xs font-bold text-gray-500">Jan</p>
                <p className="text-xs font-bold text-gray-500">Feb</p>
                <p className="text-xs font-bold text-gray-500">Mar</p>
                <p className="text-xs font-bold text-gray-500">Apr</p>
                <p className="text-xs font-bold text-gray-500">May</p>
                <p className="text-xs font-bold text-gray-500">Jun</p>
              </div>
            </div>
          </section>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 z-10">
          <div className="flex justify-around border-t border-gray-200 bg-white/90 backdrop-blur-sm pb-safe">
            <a className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-gray-500 transition-colors" href="/citizen-dashboard">
              <span className="material-symbols-outlined">home</span>
              <p className="text-xs font-medium">Home</p>
            </a>
            <a className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-blue-800 transition-colors" href="#">
              <div className="relative">
                <span className="material-symbols-outlined">bar_chart</span>
                <div className="w-1.5 h-1.5 rounded-full bg-current absolute -top-0.5 right-0"></div>
              </div>
              <p className="text-xs font-bold">Reports</p>
            </a>
            <a className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-gray-500 transition-colors" href="#">
              <span className="material-symbols-outlined">lightbulb</span>
              <p className="text-xs font-medium">Health Tips</p>
            </a>
            <a className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-gray-500 transition-colors" href="#">
              <span className="material-symbols-outlined">person</span>
              <p className="text-xs font-medium">Profile</p>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
