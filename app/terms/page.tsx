import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | QuantaLabs",
  description: "Terms of service for QuantaLabs Private Limited.",
};

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold mb-4 block">
            Legal
          </span>
          <h1 className="text-[3rem] md:text-[4rem] font-black tracking-tighter leading-none text-black">
            Terms of Service.
          </h1>
          <p className="mt-6 text-sm text-gray-500 font-mono uppercase tracking-widest font-bold">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-12 text-black/80 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              1. Agreement to Terms
            </h2>
            <p className="mb-4">
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity (&quot;you&quot;)
              and QuantaLabs Private Limited (&quot;QuantaLabs&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;), concerning your access to and use of the quantalabs.cc
              website as well as any other media form, API, or service related
              or connected thereto (collectively, the &quot;Services&quot;).
            </p>
            <p>
              By accessing the Services, you agree that you have read,
              understood, and agreed to be bound by all of these Terms of
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              2. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              Unless otherwise indicated, the Services are our proprietary
              property and all source code, databases, functionality, software,
              website designs, audio, video, text, photographs, and graphics on
              the Services (collectively, the &quot;Content&quot;) and the trademarks,
              service marks, and logos contained therein (the &quot;Marks&quot;) are owned
              or controlled by us or licensed to us.
            </p>
            <p>
              Our open-source cryptographic implementations (such as
              Algo-PQC-Kit) are distributed under their respective open-source
              licenses (e.g., MIT or Apache 2.0). Please refer to the specific
              repositories for license details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              3. QuantaCipher API Usage
            </h2>
            <p className="mb-4">
              If you utilize our QuantaCipher SaaS or related APIs, you agree
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Not exceed the rate limits specified in your enterprise
                agreement.
              </li>
              <li>
                Not use the APIs for any unlawful, unauthorized, or malicious
                purpose.
              </li>
              <li>Secure your API keys and authentication credentials.</li>
              <li>
                Acknowledge that while our implementations adhere to NIST FIPS
                203, 204, and 206 standards, cryptographic research is an
                evolving field.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              4. Disclaimer of Warranties
            </h2>
            <p className="mb-4 uppercase text-sm tracking-wide font-bold text-black">
              The services are provided on an as-is and as-available basis. You
              agree that your use of the services and our cryptographic
              implementations will be at your sole risk.
            </p>
            <p>
              To the fullest extent permitted by law, we disclaim all
              warranties, express or implied, in connection with the services
              and your use thereof, including, without limitation, the implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement. We make no warranties or representations
              about the accuracy or completeness of the site’s content or the
              mathematical absolute security of cryptographic algorithms against
              unforeseen future cryptanalysis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              5. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and defined following the laws of
              India. QuantaLabs Private Limited and yourself irrevocably consent
              that the courts of Coimbatore, Tamil Nadu, India shall have
              exclusive jurisdiction to resolve any dispute which may arise in
              connection with these terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
