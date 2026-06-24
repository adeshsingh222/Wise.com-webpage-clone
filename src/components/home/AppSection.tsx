export default function AppSection() {
  return (
    <section className="w-full bg-white pt-12 pb-24 px-6 text-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        <div className="flex-1 w-full">
          <div className="w-full h-[400px] md:h-[600px] bg-slate-100 rounded-[40px] flex items-center justify-center text-slate-400 font-bold border border-slate-200 overflow-hidden shadow-sm relative">
            <img src="https://wise.com/static-assets/app/_next/static/media/app-lg.f897f08e.jpg" alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.85] mb-12">
            Take Wise everywhere you go
          </h2>

          <div className="flex items-center gap-6 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm w-fit">
            <span className="text-[17px] font-bold leading-tight max-w-[100px] pl-2">
              Scan to get the New World app
            </span>
            <div className="w-[84px] h-[84px] bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden outline outline-1 outline-slate-200 outline-offset-[-1px]">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wise.com" className="w-[74px] h-[74px] mix-blend-multiply" alt="QR Code" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
