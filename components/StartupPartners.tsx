export default function StartupPartners() {
  const partners = [
    {
      name: "Google for Startups",
      logo: "/logos/googlecloud.svg",
    },
    {
      name: "Microsoft for Startups",
      logo: "/logos/microsoft.svg",
    },
    {
      name: "AWS Activate",
      logo: "/logos/aws.svg",
    },
    {
      name: "MongoDB for Startups",
      logo: "/logos/mongodb.svg",
      className: "scale-[1.3] md:scale-[1.5]",
    },
    {
      name: "Cloudflare for Startups",
      logo: "/logos/cloudflare.svg",
      className: "scale-[1.1] md:scale-[1.2]",
    },
    {
      name: "Zoho for Startups",
      logo: "/logos/zoho.svg",
    },
  ];

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest text-gray-500 uppercase mb-8">
          Backed by leading startup programs
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="group flex flex-col items-center gap-4 transition-all duration-300 opacity-80 hover:opacity-100 cursor-default"
            >
              <div className="flex items-center justify-center h-10 md:h-12 w-full">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className={`h-8 md:h-10 w-auto object-contain ${partner.className || ''}`}
                />
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#141413] transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
