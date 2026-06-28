"use client";

export default function LogoTicker() {
  const logos = [
    { icon: "Φ", name: "Global Finance" },
    { icon: "Ω", name: "Central Banks" },
    { icon: "Σ", name: "Treasuries" },
    { icon: "⨂", name: "Defense" },
    { icon: "⬡", name: "Supply Chain" },
    { icon: "⊛", name: "Telecom" },
  ];

  return (
    <div className="bg-white border-y-2 border-black overflow-hidden relative">
      {/* Decorative math background lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gray-200"></div>
              <p className="text-center text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-gray-400">
                Securing infrastructure for
              </p>
              <div className="h-px w-8 bg-gray-200"></div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 w-full px-4">
              {logos.map((logo, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-black transition-all duration-300 cursor-default group"
                  >
                    <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center group-hover:bg-black group-hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <span className="font-serif text-lg leading-none text-black group-hover:text-[#C4ED5F] transition-colors">
                        {logo.icon}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-[9px] tracking-widest uppercase">
                      {logo.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
