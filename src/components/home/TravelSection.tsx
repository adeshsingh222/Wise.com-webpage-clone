import { ArrowRightLeft, CreditCard } from "lucide-react";

export default function TravelSection() {
  return (
    <section className="w-full bg-white py-20 px-6 text-primary border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6">
            Save on your travels abroad
          </h2>
          <p className="text-xl text-slate-600 font-medium mb-12 max-w-lg">
            Make spending around the world simple when you pack your Wise Travel card.
          </p>

          <div className="flex flex-col gap-10 border-t border-slate-200 pt-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <ArrowRightLeft size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Get the mid-market exchange rate every time</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Pay at the rate you can usually check on Google, with no hidden fees.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                <CreditCard size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">40+ currencies, 160+ countries</h3>
                <p className="text-slate-600 font-medium leading-relaxed">One card for pounds, pesos, ringgit, dollars and more. Our smart conversions work worldwide.</p>
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto mt-12 bg-accent hover:bg-[#bce65f] text-primary px-8 py-3 md:py-4 rounded-full font-bold text-lg transition-colors">
            Learn about the Wise Travel card
          </button>
        </div>

        <div className="flex-1 w-full flex justify-end">
          <div className="w-full max-w-[600px] h-[400px] md:h-[700px] rounded-[40px] flex items-center justify-center text-slate-400 font-bold border border-slate-200 overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
