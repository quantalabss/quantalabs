"use client";

export default function QuantaCipherShowcase() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Component Grid Wrapper */}
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          {/* HEADER ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black bg-gray-50/50">
            <div className="lg:col-span-8 px-8 py-10 md:py-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Core Infrastructure // QuantaCipher API
                </span>
              </div>
              <h2 className="text-[2.5rem] md:text-[4rem] font-black tracking-tighter leading-[0.95] text-black">
                The standard for
                <br />
                quantum safety.
              </h2>
            </div>

            <div className="lg:col-span-4 px-8 py-10 flex flex-col justify-end bg-gray-100/50 relative overflow-hidden">
              {/* Decorative math/code block */}
              <div className="absolute top-8 right-8 font-mono text-[10px] text-gray-400 opacity-50 select-none text-right space-y-1">
                <div>let ctx = QuantaCipher::init();</div>
                <div>ctx.load_keys(pk, sk);</div>
                <div>ctx.encrypt(payload, ALGO_ML_KEM);</div>
              </div>
              <p className="text-sm text-gray-600 font-medium relative z-10 mt-16">
                A high-performance cryptographic co-processor accessible via
                REST and gRPC. Instantly upgrade any stack to post-quantum
                readiness.
              </p>
            </div>
          </div>

          {/* FEATURES GRID ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white">
            {/* Feature 1 */}
            <div className="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black group hover:bg-[#C4ED5F] transition-colors">
              <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 group-hover:bg-black transition-all">
                <span className="font-serif text-xl leading-none text-black group-hover:text-[#C4ED5F] transition-colors">
                  ⊕
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                FIPS 203 & 204
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Strict adherence to finalized NIST lattice-based ML-KEM and
                ML-DSA standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black group hover:bg-[#C4ED5F] transition-colors">
              <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 group-hover:bg-black transition-all">
                <span className="font-serif text-xl leading-none text-black group-hover:text-[#C4ED5F] transition-colors">
                  ⇌
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                Hybrid Modes
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Combine classical ECC with PQC for zero-regression security
                during migration.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black group hover:bg-[#C4ED5F] transition-colors">
              <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 group-hover:bg-black transition-all">
                <span className="font-serif text-xl leading-none text-black group-hover:text-[#C4ED5F] transition-colors">
                  ∝
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                Sub-millisecond
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Optimized C++ and Rust core for high-frequency trading and
                low-latency networks.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 group hover:bg-[#C4ED5F] transition-colors">
              <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 group-hover:bg-black transition-all">
                <span className="font-serif text-xl leading-none text-black group-hover:text-[#C4ED5F] transition-colors">
                  Ξ
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                HSM Integration
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Native support for PKCS#11 and major cloud HSMs to protect root
                keys.
              </p>
            </div>
          </div>

          {/* BOTTOM CODE PREVIEW ROW */}
          <div className="border-t-2 border-black bg-black text-white p-6 overflow-hidden relative">
            {/* Subtle grid in black bg */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="font-mono text-xs text-gray-400">
                <span className="text-[#C4ED5F]">import</span> {"{"}{" "}
                QuantaCipher {"}"} <span className="text-[#C4ED5F]">from</span>{" "}
                &apos;@quantalabs/sdk&apos;;
                <br />
                <span className="text-white">const</span> qc ={" "}
                <span className="text-white">new</span> QuantaCipher({"{"} mode:{" "}
                <span className="text-[#C4ED5F]">&apos;FIPS-203-HYBRID&apos;</span> {"}"}
                );
              </div>

              <a
                href="https://quantacipher.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] bg-transparent"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
