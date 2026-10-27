import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FinalCta from '../components/FinalCta';
import SEO from '../components/SEO';
import { companyData } from '../data/companyData';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy & Data Protection"
        description="Privacy policy and data governance practices of Mamourah Development & Construction L.L.C SP in the United Arab Emirates."
        canonical="https://www.mamourah.ae/privacy"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              LEGAL &amp; COMPLIANCE
            </div>
            <h1 className="text-3xl sm:text-5xl font-montserrat font-black uppercase tracking-tight">
              PRIVACY POLICY
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-poppins">
              Data governance and corporate privacy statement for {companyData.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-brand-body leading-relaxed font-poppins space-y-8">
            <div>
              <h2 className="text-lg font-montserrat font-bold uppercase text-brand-black mb-3">
                1. Overview
              </h2>
              <p>
                Mamourah Development &amp; Construction L.L.C SP (&ldquo;Mamourah&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to respecting the privacy and confidentiality of visitors to our website ({companyData.websiteUrl}) and all prospective clients, consultants, and suppliers who contact us regarding contracting and development solutions in the United Arab Emirates.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-montserrat font-bold uppercase text-brand-black mb-3">
                2. Information We Collect
              </h2>
              <p>
                When you submit an inquiry through our contact portal or contact us directly via email or phone, we collect:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                <li>Full name and corporate title</li>
                <li>Email address and telephone number</li>
                <li>Project scopes, tender inquiries, and attached technical specifications</li>
                <li>Standard server log telemetry (IP address, browser user-agent, timestamp) strictly for technical security and spam defense</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-montserrat font-bold uppercase text-brand-black mb-3">
                3. Purpose of Processing
              </h2>
              <p>
                Information provided to Mamourah is processed strictly for:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                <li>Evaluating project requirements and preparing formal commercial proposals</li>
                <li>Direct engineering and operational communication regarding active or upcoming contracts</li>
                <li>Fulfilling legal and municipal compliance obligations under UAE federal and Sharjah laws</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, lease, or monetize personal information to any third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-montserrat font-bold uppercase text-brand-black mb-3">
                4. Data Security &amp; Retention
              </h2>
              <p>
                We maintain appropriate administrative and technical controls to safeguard information against unauthorized access or disclosure. Project inquiries are retained in alignment with statutory UAE contracting document retention schedules.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-montserrat font-bold uppercase text-brand-black mb-3">
                5. Contacting Our Data Controller
              </h2>
              <p>
                For any inquiries regarding this policy or our data practices, please contact:
              </p>
              <div className="p-4 bg-brand-ivory border border-brand-border mt-3 not-italic">
                <div className="font-montserrat font-bold text-brand-black">{companyData.name}</div>
                <div>{companyData.address}</div>
                <div>Telephone: {companyData.phone}</div>
                <div>Email: {companyData.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
