import CurrencyConverter from "../calculator/CurrencyConverter";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 px-6 text-white min-h-[800px] flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between max-w-7xl mx-auto">
      {/* Left side text */}
      <div className="flex-1 pt-10 md:pt-20 z-10 max-w-[540px]">
        <h1 className="text-5xl md:text-[80px] font-extrabold tracking-tight leading-[1.05] mb-6">
          Save when you send worldwide
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-medium mb-10 pr-10">
          Get your money moving internationally. Save up to 2.5x when you send with Wise.
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-colors w-full sm:w-auto">
          Send money now
        </button>
      </div>

      {/* Right side calculator widget */}
      <div className="w-full md:w-[460px] mt-12 md:mt-0 z-10">
        <CurrencyConverter />
      </div>
    </section>
  );
}
