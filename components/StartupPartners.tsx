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
      name: "NVIDIA Inception",
      logo: "/logos/nvidia-inception.svg",
    },
    {
      name: "AWS Activate",
      logo: "/logos/aws.svg",
    },
    {
      name: "MongoDB for Startups",
      logo: "/logos/mongodb.svg",
      className: "scale-[1.2] md:scale-[1.3]",
    },
    {
      name: "Cloudflare for Startups",
      logo: "/logos/cloudflare.svg",
      className: "scale-[1.05] md:scale-[1.1]",
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-6 lg:gap-x-4 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="group flex flex-col items-center justify-between h-20 w-full transition-all duration-300 opacity-80 hover:opacity-100 cursor-default"
            >
              <div className="flex items-center justify-center h-10 w-full">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className={`h-7 sm:h-8 max-w-[130px] w-auto object-contain transition-transform duration-300 ${partner.className || ''}`}
                />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-gray-500 group-hover:text-[#141413] transition-colors duration-300 text-center whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
