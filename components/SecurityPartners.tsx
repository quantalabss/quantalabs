import Link from 'next/link';

export default function SecurityPartners() {
  return (
    <section className="pb-24 pt-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest text-gray-500 uppercase mb-8">
          Security Audited & Trusted By
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <Link 
            href="https://quantakrypto.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <div className="flex items-center justify-center h-12 w-full">
              <img 
                src="/partners/quantakrypto-logo-dark.svg" 
                alt="Quantakrypto logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-gray-500 group-hover:text-[#141413] transition-colors duration-300">
              QuantaCipher Audit Partner
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
