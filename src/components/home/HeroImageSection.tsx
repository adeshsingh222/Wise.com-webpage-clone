export default function HeroImageSection() {
  return (
    <section className="w-full bg-accent flex justify-center pb-20">
      {/* We use a colored placeholder for the bike/phone image since we lack the high-res asset */}
      <div className="w-full h-[400px] md:h-[600px] rounded-[20px] md:rounded-[30px] overflow-hidden relative shadow-2xl mx-4 md:mx-10 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
        <img src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=2000" alt="" />
      </div>
    </section>
  );
}
