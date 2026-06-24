import { Users, Shield, Landmark } from "lucide-react";

export default function SecuritySection() {
  return (
    <section className="w-full bg-white pt-24 pb-12 px-6 text-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6">
            Safe at every step
          </h2>
          <p className="text-xl text-slate-600 font-medium mb-12 max-w-lg">
            100,000 new customers join Wise every month. Here&apos;s how we keep their rupees secure.
          </p>

          <div className="flex flex-col gap-10 border-t border-slate-200 pt-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <Users size={20} />
              </div>
              <div>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  With our <span className="text-primary font-bold underline decoration-2 underline-offset-4 cursor-pointer hover:text-green-600">dedicated team in India</span>, your money is protected from your doorstep.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  Our specialist anti-fraud and security teams partner with cutting-edge tech to beat thieves.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <Landmark size={20} />
              </div>
              <div>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  Regulated nationwide, with 70 licences worldwide to keep your money moving.
                </p>
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto mt-12 bg-accent hover:bg-[#bce65f] text-primary px-8 py-3 md:py-4 rounded-full font-bold text-lg transition-colors">
            How we keep your money safe
          </button>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-[300px] sm:w-[400px] aspect-square relative transform rotate-12 hover:rotate-6 transition-transform duration-700">
            {/* Padlock mockup graphic */}
            <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply filter brightness-110 sepia-[.3] hue-rotate-[170deg] saturate-200" alt="Lock icon stylized" />
            {/* Adding a blue lock proxy in case mask doesn't work */}
            <div className="absolute inset-0 z-[-1] drop-shadow-2xl flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] text-cyan-600 fill-current opacity-30 blur-md"><path d="M25,45 V35 A25,25 0 0,1 75,35 V45 H85 V95 H15 V45 Z M45,65 A5,5 0 1,0 55,65 V75 H45 Z" /></svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
