"use client";
import Head from "next/head";
import { useState } from "react";

function ReportNewCase() {
  return (
    <div className="p-5 space-y-8">
      {/* ...existing report new case form code... */}
      {/* Disease / Symptom */}
      <div className="space-y-6">
        <div>
          <label className="block text-gray-900 text-lg font-semibold leading-tight mb-3" htmlFor="disease-select">Disease / Symptom</label>
          <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-800 focus:outline-0 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border-gray-300 bg-white focus:border-teal-500 h-14 placeholder:text-gray-400 p-4 text-base font-normal leading-normal" id="disease-select" defaultValue="">
            <option disabled value="">e.g., Dengue, Malaria</option>
            <option value="diarrhea">Diarrhea</option>
            <option value="typhoid">Typhoid</option>
            <option value="fever">Fever</option>
            <option value="jaundice">Jaundice</option>
            <option value="cholera">Cholera</option>
            <option value="malaria">Malaria</option>
            <option value="dengue">Dengue</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Citizen ID */}
        <div className="relative">
          <label className="block text-gray-900 text-lg font-semibold leading-tight mb-3" htmlFor="citizen-id">Citizen ID</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">badge</span>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-800 focus:outline-0 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border-gray-300 bg-white focus:border-teal-500 h-14 placeholder:text-gray-400 p-4 pl-12 text-base font-normal leading-normal" id="citizen-id" placeholder="Enter or Scan Citizen's ID number" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" type="button">
              <span className="material-symbols-outlined">qr_code_scanner</span>
            </button>
          </div>
        </div>
        {/* Location */}
        <div className="relative">
          <label className="block text-gray-900 text-lg font-semibold leading-tight mb-3" htmlFor="location">Location</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">location_on</span>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-800 focus:outline-0 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border-gray-300 bg-white focus:border-teal-500 h-14 placeholder:text-gray-400 p-4 pl-12 text-base font-normal leading-normal" id="location" placeholder="e.g., Sector 15, Sonipat" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" type="button">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
        </div>
        {/* Additional Notes */}
        <div className="relative">
          <label className="block text-gray-900 text-lg font-semibold leading-tight mb-3" htmlFor="notes">Additional Notes</label>
          <textarea className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-800 focus:outline-0 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border-gray-300 bg-white focus:border-teal-500 min-h-[120px] placeholder:text-gray-400 p-4 text-base font-normal leading-normal" id="notes" placeholder="e.g., Patient has a history of..."></textarea>
        </div>
        {/* Unsafe Water Source */}
        <div>
          <h2 className="text-gray-900 text-lg font-semibold leading-tight mb-3">Unsafe Water Source</h2>
          <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-800 focus:outline-0 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border-gray-300 bg-white focus:border-teal-500 h-14 placeholder:text-gray-400 p-4 text-base font-normal leading-normal appearance-none">
            <option value="one">💧 Select Water Source</option>
            <option value="two">🚰 Tap</option>
            <option value="three">⛲ Well</option>
            <option value="four">🏞️ Pond</option>
            <option value="five">🔩 Hand Pump</option>
          </select>
        </div>
      </div>
      {/* Patient Symptoms */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-900 text-lg font-semibold leading-tight">Patient Symptoms</h2>
          <button className="flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-700 hover:bg-teal-200 transition-colors" type="button">
            <span className="material-symbols-outlined">add_circle</span>
            <span>Add Symptom</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {['Vomiting','Dehydration','Abdominal Pain','High Fever','Headache','Fatigue'].map(symptom => (
            <label key={symptom} className="flex items-center gap-x-3 p-3 rounded-xl bg-white border border-gray-200/80 shadow-sm has-[:checked]:bg-teal-50 has-[:checked]:border-teal-300 transition-colors">
              <input className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-teal-600 checked:bg-teal-600 checked:border-teal-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-white focus:ring-teal-500 focus:outline-none" type="checkbox" />
              <p className="text-gray-800 text-sm font-medium leading-normal flex-1">{symptom}</p>
            </label>
          ))}
        </div>
      </div>
      {/* Take Photo */}
      <div>
        <h2 className="text-gray-900 text-lg font-semibold leading-tight mb-4">Take Photo</h2>
        <button className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl h-32 px-4 bg-white text-gray-500 text-base font-medium leading-normal tracking-[0.015em] gap-2 border-2 border-dashed border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors" type="button">
          <span className="material-symbols-outlined text-4xl text-teal-600">add_a_photo</span>
          <span className="truncate text-gray-700">Upload Photo of Patient / Area</span>
        </button>
      </div>
      {/* Bottom Bar for form */}
      <div className="flex gap-3 p-4 justify-between">
        <button className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-gray-200 text-gray-800 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 transition-colors">
          <span className="truncate">Save Draft</span>
        </button>
        <button className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-teal-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30 gap-2">
          <span className="material-symbols-outlined">send</span>
          <span className="truncate">Submit</span>
        </button>
      </div>
    </div>
  );
}

function History() {
  // Example static data, replace with real data as needed
  const reports = [
    { id: 1, citizen: 'Amit Kumar', disease: 'Dengue', date: '2025-09-01', location: 'Sector 15, Sonipat' },
    { id: 2, citizen: 'Sunita Devi', disease: 'Malaria', date: '2025-08-28', location: 'Village Rampur' },
    { id: 3, citizen: 'Ravi Singh', disease: 'Typhoid', date: '2025-08-20', location: 'Sector 7, Sonipat' },
  ];
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-teal-700">Previous Reported Cases</h2>
      <div className="space-y-4">
        {reports.length === 0 ? (
          <p className="text-gray-500">No previous reports found.</p>
        ) : (
          reports.map((report) => (
            <div key={report.id} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-100">
              <div>
                <p className="font-semibold text-lg text-gray-800">{report.citizen}</p>
                <p className="text-sm text-gray-500">{report.disease} &bull; {report.location}</p>
              </div>
              <div className="text-sm text-gray-400 mt-2 md:mt-0">{report.date}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Profile() {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const router = require('next/navigation').useRouter();
  const handleEditProfile = () => alert('Edit Profile clicked!');
  const handleChangePassword = () => alert('Change Password clicked!');
  const handleHelp = () => alert('Help & Support clicked!');
  const handleAbout = () => alert('About App clicked!');
  const handleLogout = () => {
    router.push('/login');
  };
  return (
    <main className="p-6 space-y-10">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img alt="ASHA Worker Profile Picture" className="w-28 h-28 rounded-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3FYxQ-RSVo37XpF0euTkcyoBa0Y5Q5_Tsjnsjc56sceFz_MZctH0zXx3voL5csQ-26Kx2W0TmW0GIkSh6OP_F8eUaBmE3QN31aU4QSX-pCgVtzdVNYqrDfctLSHA4-1eC5m4o5IjRcMdPHypMwZ6wX-FHBP0v9x5jLZzoTnDCTTcX3Z1toFUZPI0Jerk2Ts8m0XjMfWqoT3JSuX0TRm8mx1c56-0i8abOJaVEpJqMoftgLkbSc6SCT6uw5fjzL7szPmnWXDPnYKg" />
          <button className="absolute bottom-0 right-0 bg-teal-400 h-8 w-8 rounded-full flex items-center justify-center border-2 border-white" onClick={handleEditProfile}>
            <span className="material-symbols-outlined text-white text-lg">edit</span>
          </button>
        </div>
  <h2 className="text-xl font-bold text-gray-800">Priya Sharma</h2>
  <p className="text-sm text-gray-500">ASHA Worker</p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 px-4 pb-2 pt-4">Profile</h3>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="flex w-full items-center gap-4 px-5 py-4 border-b border-gray-100 transition-colors hover:bg-gray-50 text-left" onClick={handleEditProfile}>
            <span className="material-symbols-outlined text-gray-500">account_circle</span>
            <p className="flex-1 truncate text-base font-medium">Edit Profile</p>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
          <button className="flex w-full items-center gap-4 px-5 py-4 transition-colors hover:bg-gray-50 text-left" onClick={handleChangePassword}>
            <span className="material-symbols-outlined text-gray-500">lock</span>
            <p className="flex-1 truncate text-base font-medium">Change Password</p>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 px-4 pb-2 pt-4">Preferences</h3>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="relative">
            <button className="flex w-full items-center gap-4 px-5 py-4 border-b border-gray-100 transition-colors hover:bg-gray-50 text-left" onClick={() => setShowLanguageDropdown((v) => !v)}>
              <span className="material-symbols-outlined text-gray-500">language</span>
              <p className="flex-1 truncate text-base font-medium">Language</p>
              <div className="flex items-center gap-2">
                <p className="text-gray-500">{selectedLanguage}</p>
                <span className="material-symbols-outlined text-gray-400">expand_more</span>
              </div>
            </button>
            {showLanguageDropdown && (
              <div className="absolute left-0 right-0 z-10 bg-white border border-gray-200 rounded-b-xl shadow-lg">
                {['English','Hindi','Assamese','Bengali','Marathi','Tamil'].map(lang => (
                  <button key={lang} className={`w-full text-left px-5 py-2 hover:bg-gray-100 ${selectedLanguage === lang ? 'font-bold text-teal-600' : ''}`} onClick={() => { setSelectedLanguage(lang); setShowLanguageDropdown(false); }}>
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 px-4 pb-2 pt-4">More</h3>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="flex w-full items-center gap-4 px-5 py-4 border-b border-gray-100 transition-colors hover:bg-gray-50 text-left" onClick={handleHelp}>
            <span className="material-symbols-outlined text-gray-500">help_outline</span>
            <p className="flex-1 truncate text-base font-medium">Help & Support</p>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
          <button className="flex w-full items-center gap-4 px-5 py-4 border-b border-gray-100 transition-colors hover:bg-gray-50 text-left" onClick={handleAbout}>
            <span className="material-symbols-outlined text-gray-500">info</span>
            <p className="flex-1 truncate text-base font-medium">About App</p>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
          <button className="flex w-full items-center gap-4 px-5 py-4 transition-colors hover:bg-red-50 text-left" onClick={handleLogout}>
            <span className="material-symbols-outlined text-red-500">logout</span>
            <p className="flex-1 truncate text-base font-medium text-red-500">Logout</p>
          </button>
        </div>
      </div>
      <div className="text-center pt-4">
        <p className="text-xs text-gray-400">App Version 1.2.3</p>
      </div>
    </main>
  );
}

export default function AshaDashboard() {
  const [tab, setTab] = useState<'report' | 'history' | 'profile'>('report');
  return (
    <>
      <Head>
        <title>ASHA Worker Dashboard</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden bg-gray-50 text-gray-800 transition-colors duration-500">
        <div className="flex-grow">
          <header className="flex items-center p-4 pb-3 justify-between">
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-200">
              <span className="material-symbols-outlined text-gray-600">arrow_back_ios_new</span>
            </button>
            <h1 className="text-2xl font-bold tracking-tight flex-1 text-center pr-10 font-serif">ASHA Dashboard</h1>
          </header>
          <nav className="flex justify-center gap-4 border-b border-gray-200 bg-white/80 sticky top-0 z-10">
            <button onClick={() => setTab('report')} className={`px-6 py-3 font-semibold text-base transition-colors border-b-2 ${tab === 'report' ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-500 hover:text-teal-600'}`}>Report New Case</button>
            <button onClick={() => setTab('history')} className={`px-6 py-3 font-semibold text-base transition-colors border-b-2 ${tab === 'history' ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-500 hover:text-teal-600'}`}>History</button>
            <button onClick={() => setTab('profile')} className={`px-6 py-3 font-semibold text-base transition-colors border-b-2 ${tab === 'profile' ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-500 hover:text-teal-600'}`}>Profile</button>
          </nav>
          <div className="bg-[var(--background-light)] min-h-[60vh]">
            {tab === 'report' && <ReportNewCase />}
            {tab === 'history' && <History />}
            {tab === 'profile' && <Profile />}
          </div>
        </div>
      </div>
    </>
  );
}
