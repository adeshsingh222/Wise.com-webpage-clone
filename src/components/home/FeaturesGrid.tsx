import { Star, Building2, HeadphonesIcon } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-white pt-[250px] md:pt-[400px] pb-24 px-6 text-primary">
      <h2 className="text-4xl md:text-6xl font-black text-center uppercase tracking-tight max-w-3xl mx-auto mb-20 leading-[0.9]">
        Take Control Of Your Money
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8">
        <div className="flex flex-row items-center gap-4 md:gap-6 text-left flex-1">
          <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center shrink-0">
            <Star size={28} className="text-primary md:hidden" />
            <Star size={40} className="text-primary hidden md:block" />
          </div>
          <p className="text-base md:text-xl font-bold">Winner of <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-green-600 transition-colors">Best Cross-Border Fintech 2025</span></p>
        </div>

        <div className="flex flex-row items-center gap-4 md:gap-6 text-left flex-1">
          <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-[#B2EBF2] flex items-center justify-center shrink-0">
            <Building2 size={28} className="text-primary md:hidden" />
            <Building2 size={40} className="text-primary hidden md:block" />
          </div>
          <p className="text-base md:text-xl font-bold">Regulated by the <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-green-600 transition-colors">Reserve Bank of India</span></p>
        </div>

        <div className="flex flex-row items-center gap-4 md:gap-6 text-left flex-1">
          <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-[#B2F2D1] flex items-center justify-center shrink-0">
            <HeadphonesIcon size={28} className="text-primary md:hidden" />
            <HeadphonesIcon size={40} className="text-primary hidden md:block" />
          </div>
          <p className="text-base md:text-xl font-bold">24/7 customer support</p>
        </div>
      </div>
    </section>
  );
}
