import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | QuantaLabs",
  description: "Privacy policy for QuantaLabs Private Limited.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold mb-4 block">
            Legal
          </span>
          <h1 className="text-[3rem] md:text-[4rem] font-black tracking-tighter leading-none text-black">
            Privacy Policy.
          </h1>
          <p className="mt-6 text-sm text-gray-500 font-mono uppercase tracking-widest font-bold">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-12 text-black/80 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="mb-4">
              QuantaLabs Private Limited ("QuantaLabs", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (quantalabs.cc), use our post-quantum cryptography APIs, or engage with our enterprise services.
            </p>
            <p>
              As a cryptography engineering company, we believe in data minimization. We only collect the data necessary to provide our services and secure our infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Data We Collect</h2>
            <p className="mb-4">We may collect, use, store, and transfer different kinds of data about you, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity and Contact Data:</strong> Name, email address, company name, and job title when you book a consultation or contact us.</li>
              <li><strong>Technical Data:</strong> IP addresses, browser type, time zone setting, and operating system when you interact with our website.</li>
              <li><strong>Usage Data:</strong> Information about how you use our APIs, website, and services. We do not inspect the contents of encrypted payloads passing through our infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Data</h2>
            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage your access to our services and APIs.</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>To administer and protect our business and website (including troubleshooting, data analysis, testing, system maintenance, support, reporting, and hosting of data).</li>
              <li>To deliver relevant website content to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Cryptographic Security</h2>
            <p className="mb-4">
              While we engineer solutions designed to protect data against Cryptographically Relevant Quantum Computers (CRQCs), please note that standard website communications may utilize classical cryptography (such as TLS 1.3) unless otherwise specified. For secure transmission of vulnerability reports, please utilize our provided PGP key on the Contact page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at:
              <br /><br />
              <strong>Email:</strong> privacy@quantalabs.cc<br />
              <strong>Address:</strong> QuantaLabs Private Limited, Coimbatore, Tamil Nadu, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
