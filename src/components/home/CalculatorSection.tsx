import CurrencyConverter from "../calculator/CurrencyConverter";

export default function CalculatorSection() {
  return (
    <section className="w-full bg-accent py-24 px-6 text-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em] leading-[0.9] mb-6">
            100% transparent
          </h2>
          <p className="text-2xl text-primary/80 font-medium mb-12">
            Use our calculator to see how much more you&apos;d get when you send money with Wise.
          </p>

          <button className="w-full md:w-auto bg-primary hover:bg-slate-800 text-white px-8 py-3 md:py-4 rounded-full font-bold text-lg transition-colors">
            See our pricing
          </button>
        </div>

        <div className="flex-1 w-full max-w-[500px]">
          <CurrencyConverter />
        </div>

      </div>
    </section>
  );
}
