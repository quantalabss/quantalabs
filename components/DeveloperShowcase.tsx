"use client";

export default function DeveloperShowcase() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Content Left */}
            <div className="lg:col-span-5 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center bg-[#C4ED5F] relative">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/60 uppercase font-bold">
                  Developer Experience
                </span>
              </div>

              <h2 className="text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter leading-[0.95] text-black mb-6 relative z-10">
                Integrate PQC
                <br />
                in minutes.
              </h2>

              <p className="text-sm text-black/70 font-medium leading-relaxed mb-8 relative z-10">
                Drop-in replacements for OpenSSL and WebCrypto APIs. SDKs
                available in Rust, Go, Python, and TypeScript.
              </p>

              <div className="space-y-4">
                {[
                  "Zero-knowledge proofs for key rotation",
                  "Constant-time implementations",
                  "Automated memory safety checks",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-black flex items-center justify-center bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div className="w-1.5 h-1.5 bg-black"></div>
                    </div>
                    <span className="text-xs font-bold text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Right */}
            <div className="lg:col-span-7 bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl text-gray-500 leading-none">
                    ⊢
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    bash // install
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="font-mono text-xs sm:text-sm leading-relaxed flex-grow">
                <div className="text-gray-400 mb-2">
                  <span className="text-[#C4ED5F] mr-2">$</span>
                  <span className="text-white">cargo</span> add quantalabs-pqc
                </div>
                <div className="text-gray-500 mb-6">
                  Updating crates.io index
                  <br />
                  Adding quantalabs-pqc v2.1.0 to dependencies.
                </div>

                <div className="text-gray-400 mb-2">
                  <span className="text-[#C4ED5F] mr-2">$</span>
                  <span className="text-white">cat</span> src/main.rs
                </div>
                <div className="text-gray-300 border-l-2 border-white/10 pl-4 py-2 bg-white/5 space-y-1">
                  <div>
                    <span className="text-purple-400">use</span>{" "}
                    quantalabs_pqc::ml_kem;
                  </div>
                  <br />
                  <div>
                    <span className="text-purple-400">fn</span>{" "}
                    <span className="text-blue-400">main</span>() {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-500">
                      {"// Generate NIST FIPS 203 keys"}
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">let</span> (pk, sk) =
                    ml_kem::
                    <span className="text-blue-400">generate_keypair</span>();
                  </div>
                  <br />
                  <div className="pl-4">
                    <span className="text-purple-400">let</span> (shared_secret,
                    ciphertext) = ml_kem::
                    <span className="text-blue-400">encapsulate</span>(&amp;pk);
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
