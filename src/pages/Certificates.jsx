import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Leaf,
  HardHat,
  Truck,
  CheckCircle,
  Award,
  Building2,
  FileCheck,
  Info
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import FinalCta from '../components/FinalCta';
import SEO from '../components/SEO';
import { certificatesData } from '../data/certificatesData';

const iconMap = {
  ShieldCheck,
  Leaf,
  HardHat,
  Truck,
  CheckCircle,
  Award,
  Building2
};

export default function Certificates() {
  return (
    <>
      <SEO
        title="Certifications & Commercial Approvals"
        description="Explore Mamourah's certified ISO management standards (9001, 14001, 45001), commercial registrations, and supplier approvals in the UAE."
        canonical="https://www.mamourah.ae/certificates"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-1.jpg"
            alt="Mamourah Corporate Compliance and Certifications"
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              GOVERNANCE &amp; ACCREDITATION
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              COMMITTED TO RECOGNIZED STANDARDS.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">
              Demonstrating technical compliance, international ISO management certification, and approved supplier status across public and private sectors in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Main Certificates Grid */}
      <section className="py-20 sm:py-28 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparency Card */}
          <div className="mb-10 p-5 bg-white border border-brand-border flex items-start gap-3">
            <Info className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
            <p className="text-xs text-brand-body font-poppins leading-relaxed">
              <strong className="text-brand-black font-semibold">Compliance Note:</strong> Mamourah operates under verified ISO certifications displayed in its official company credentials. In strict adherence to integrity and confidentiality guidelines, certified physical documentation, registration numbers, and official municipality pre-qualification certificates are verified with clients and procurement authorities upon request.
            </p>
          </div>

          <SectionHeader
            badge="VERIFIED CREDENTIALS"
            title="INTERNATIONAL MANAGEMENT SYSTEMS"
            subtitle="Audited standards governing our engineering, quality, environmental, and occupational safety practices"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {certificatesData.map((cert) => {
              const Icon = iconMap[cert.icon] || FileCheck;
              return (
                <div
                  key={cert.id}
                  className="bg-white border border-brand-border p-7 sm:p-8 flex flex-col justify-between hover:border-brand-red/60 transition-all duration-300 hover:shadow-card group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 bg-brand-ivory border border-brand-border rounded-xs flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-lightRed px-2 py-0.5 border border-brand-red/20 uppercase">
                        {cert.code}
                      </span>
                    </div>

                    <span className="text-[10px] font-montserrat font-bold tracking-architectural uppercase text-brand-body">
                      {cert.category}
                    </span>

                    <h3 className="text-lg font-montserrat font-bold text-brand-black mt-1 mb-3">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-brand-body font-poppins leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60">
                    <div className="text-[11px] font-poppins text-brand-body">
                      <span className="font-semibold text-brand-black block mb-0.5">Verified Scope:</span>
                      {cert.scope}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Corporate Authorizations Bar */}
          <div className="p-8 sm:p-10 bg-brand-black text-white border-l-4 border-brand-red">
            <h3 className="text-xl font-montserrat font-bold uppercase text-white mb-3">
              Supplier &amp; Government Pre-Qualification
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-poppins leading-relaxed max-w-3xl mb-6">
              Mamourah maintains active registered supplier and contractor relationships with key UAE departments, including the Sharjah Department of Public Works (DPW), Kalba City Municipality, and other governmental entities.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-montserrat font-semibold tracking-wider text-brand-concrete uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                Sharjah DPW Approved
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                Kalba Municipality Registered
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                Sole Proprietorship L.L.C SP (UAE)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
