import { GraduationCap, Plane, HeartPulse } from "lucide-react";

export default function TransferSection() {
  return (
    <section className="w-full bg-white py-20 px-6 text-primary border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

        <div className="flex-1 w-full flex justify-start">
          <div className="w-full max-w-[600px] h-[400px] md:h-[700px]  rounded-[40px] flex items-center justify-center text-slate-400 font-bold border border-slate-200 overflow-hidden shadow-sm relative">
            <img src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=1000" alt="" className="w-full h-full object-cover" />
            {/* Mock floating cards */}
            <div className="absolute inset-x-4 md:inset-x-6 lg:inset-x-12 bottom-4 md:bottom-6 lg:bottom-12 bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-2xl flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-[52px] md:h-[52px] rounded-full overflow-hidden mb-2 md:mb-3 border border-slate-100 relative">
                  <div className="w-full h-1/3 bg-[#FF9933]"></div>
                  <div className="w-full h-1/3 bg-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full border border-blue-800"></div>
                  </div>
                  <div className="w-full h-1/3 bg-[#138808]"></div>
                </div>
                <div className="text-lg md:text-[26px] text-black tracking-tight leading-none mb-1">₹80,000</div>
                <div className="text-xs md:text-[15px] font-medium text-slate-500">Sent to Priya</div>
              </div>

              <div className="w-8 h-8 md:w-[42px] md:h-[42px] rounded-full bg-[#E5F7F3] flex items-center justify-center flex-shrink-0 z-10 -translate-y-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#10A37F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-[52px] md:h-[52px] rounded-full overflow-hidden mb-2 md:mb-3 border border-slate-100 relative flex flex-col justify-between py-1 bg-white">
                  <div className="absolute top-0 left-0 w-[45%] h-[50%] bg-blue-800 z-10 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full"></div>
                  </div>
                  <div className="h-0.5 md:h-1 bg-red-500 w-full mb-0.5"></div>
                  <div className="h-0.5 md:h-1 bg-red-500 w-full mb-0.5"></div>
                  <div className="h-0.5 md:h-1 bg-red-500 w-full mb-0.5"></div>
                  <div className="h-0.5 md:h-1 bg-red-500 w-full"></div>
                </div>
                <div className="text-lg md:text-[26px] text-black tracking-tight leading-none mb-1">$878.15</div>
                <div className="text-xs md:text-[15px] font-medium text-slate-500">Received from Maa</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6">
            Make your transfer count
          </h2>
          <p className="text-xl text-slate-600 font-medium mb-12 max-w-lg">
            Save up to 45% when you send money globally. Lightning-fast. Completely transparent.
          </p>

          <div className="flex flex-col gap-10 border-t border-slate-200 pt-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pay international education costs</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Open doors for your loved ones&apos; future</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <Plane size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Make travelling simple</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Sort vacation and travel expenses</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <HeartPulse size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Support with medical bills</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Give a helping hand when it&apos;s needed</p>
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto mt-12 bg-accent hover:bg-[#bce65f] text-primary px-8 py-3 md:py-4 rounded-full font-bold text-lg transition-colors">
            Learn about sending money
          </button>
        </div>

      </div>
    </section>
  );
}
