
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-6 text-white bg-[var(--background-color)]" style={{ fontFamily: 'Manrope, var(--font-geist-sans), sans-serif', minHeight: 'max(884px, 100dvh)' }}>
      <div className="absolute inset-0 z-0">
        <img
          alt="Healthcare professionals"
          className="h-full w-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBszeYHWWC_VYqkricjfuVpmkKFNYt9K1-DBz11YJ6g1QOgIyunvF-we5MnS1nAML_9eC2bjSRRwv0ojIhzw8bgujSw7kcmSwFI107Y2ZvRpXROMy-lXQUeWo-cEi4xUt2K6A3NkOG31dkF0WPws9ObI-gmuO5VcBXPm1lqffOD5zy0SaKNIlcDkHtt1fPmzuaGv-fqG7NCCIFZ0ALGjz4wQV9GXmizZOTGIJ76iVA2ptvXOodlvoQiGUFc0EwM-B67EQeu_uL8low"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center">
        <div className="mb-4 rounded-full bg-blue-500/10 p-4 backdrop-blur-sm">
          <span className="material-symbols-outlined text-6xl text-[var(--primary-color)]">
            health_and_safety
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg">
          Smart Community <span className="text-[var(--primary-color)]">Health</span>
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-md pb-8">
        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-[var(--primary-color)] text-white text-lg font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:bg-blue-600 active:scale-95">
          <span>Get Started</span>
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
