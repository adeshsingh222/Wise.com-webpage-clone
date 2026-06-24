"use client";

import { useAuth } from "@/context/AuthContext";

export default function HeroSection() {
  const { openAuthModal } = useAuth();

  return (
    <section className="w-full bg-accent text-primary flex flex-col items-center">

      {/* ── Text block ── */}
      <div className="w-full flex flex-col items-center text-center px-6 pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 font-medium text-sm md:text-base">
          <div className="flex items-center gap-2">
            {/* Apple App Store icon */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="w-6 h-6 rounded-full flex-shrink-0"
            />
            <span><strong>4.8 ★ on App Store</strong> 152K reviews</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {/* Google Play icon */}
            <span className="bg-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 border border-slate-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-4 h-4 ml-0.5" />
            </span>
            <span><strong>4.8 ★ on Google Play</strong> 1.3M reviews</span>
          </div>
        </div>

        <h1 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[120px] font-black tracking-[-0.04em] leading-[0.85] max-w-[1200px] mx-auto mb-8 uppercase">
          Send and Spend Money Worldwide
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-medium">
          Save on hidden conversion fees when you use your Wise Travel card, or send money abroad.
        </p>

        <button
          onClick={() => openAuthModal()}
          className="w-full cursor-pointer md:w-auto bg-btn-bg hover:bg-slate-800 text-accent px-10 py-3 md:py-4 rounded-full font-bold text-lg transition-colors"
        >
          Sign up in minutes
        </button>
      </div>

      {/* ── Hero image — top 65% over green, bottom 35% over white ── */}
      <div className="w-full px-4 md:px-10 -mb-[160px] md:-mb-[300px] relative z-10">
        <div className="w-full h-[240px] md:h-[760px] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=2000"
            alt="Person using Wise app"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
