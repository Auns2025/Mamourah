import React, { useState } from 'react';
import { ShieldCheck, Leaf, HardHat, Award, Building2, FileCheck, Info, ExternalLink, Download, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import FinalCta from '../components/FinalCta';
import SEO from '../components/SEO';
import { certificatesData } from '../data/certificatesData';

const iconMap = { ShieldCheck, Leaf, HardHat, Award, Building2, FileCheck };
const categories = [
  'International Management Systems',
  'Supplier & Manufacturer Authorizations',
  'Project & Client Approvals',
  'Government Registrations & Licenses',
  'Recognition & Other Certificates',
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <SEO title="Certifications & Commercial Approvals" description="Explore Mamourah's ISO management systems, commercial registrations, supplier and project approvals in the UAE." canonical="https://www.mamourah.ae/certificates" />
      {/* Original hero and brand styling preserved */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-1.jpg" alt="Mamourah Corporate Compliance and Certifications" className="w-full h-full object-cover filter brightness-[0.32]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">GOVERNANCE &amp; ACCREDITATION</div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">COMMITTED TO RECOGNIZED STANDARDS.</h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">Demonstrating technical compliance, international ISO management certification, and supplier and project approvals across the UAE.</p>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-28 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="COMPANY CREDENTIALS" title="CERTIFICATES & APPROVALS" subtitle="View original documents and certifications across management, suppliers, projects and commercial registrations" />
          {categories.map((category) => {
            const items = certificatesData.filter((cert) => cert.category === category);
            if (!items.length) return null;
            return (
              <div key={category} className="mb-16">
                <h2 className="text-xl sm:text-2xl font-montserrat font-bold uppercase text-brand-black mb-7 border-l-4 border-brand-red pl-4">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {items.map((cert) => {
                    const Icon = iconMap[cert.icon] || FileCheck;
                    return (
                      <article key={cert.id} className="bg-white border border-brand-border flex flex-col hover:border-brand-red/60 transition-all duration-300 hover:shadow-card group overflow-hidden">
                        <button type="button" onClick={() => setSelected(cert)} className="relative w-full h-64 bg-brand-ivory border-b border-brand-border overflow-hidden text-left" aria-label={`Preview ${cert.title}`}>
                          <img src={cert.preview} alt={`${cert.title} document preview`} loading="lazy" className="w-full h-full object-contain p-3 group-hover:scale-[1.025] transition-transform duration-300" />
                          <span className="absolute bottom-3 right-3 px-3 py-1 text-[10px] uppercase font-bold font-montserrat bg-brand-black text-white">View Certificate</span>
                        </button>
                        <div className="p-6 sm:p-7 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-11 h-11 bg-brand-ivory border border-brand-border flex items-center justify-center text-brand-red"><Icon className="w-5 h-5" /></div>
                            <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-lightRed px-2 py-0.5 border border-brand-red/20 uppercase">{cert.code}</span>
                          </div>
                          <h3 className="text-lg font-montserrat font-bold text-brand-black mb-3">{cert.title}</h3>
                          <p className="text-xs text-brand-body font-poppins leading-relaxed mb-5 flex-1">{cert.description}</p>
                          <div className="pt-4 border-t border-brand-border/60 flex flex-wrap gap-4 text-xs font-montserrat font-semibold uppercase">
                            <button type="button" onClick={() => setSelected(cert)} className="inline-flex gap-1.5 items-center text-brand-red"><ExternalLink size={15} /> Preview</button>
                            <a href={cert.file} download className="inline-flex gap-1.5 items-center text-brand-black hover:text-brand-red"><Download size={15} /> Download</a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="p-8 sm:p-10 bg-brand-black text-white border-l-4 border-brand-red">
            <h3 className="text-xl font-montserrat font-bold uppercase text-white mb-3">Supplier &amp; Government Pre-Qualification</h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-poppins leading-relaxed max-w-3xl">Browse the original supplier, contractor, project and registration documents above. Contact our team for confirmation of current registration status or additional supporting documentation.</p>
          </div>
        </div>
      </section>
      {selected && (
        <div className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-3 sm:p-8" role="dialog" aria-modal="true" aria-label={selected.title} onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
          <div className="bg-white w-full max-w-5xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center gap-3 px-4 py-3 border-b border-brand-border">
              <h3 className="font-montserrat text-brand-black font-bold text-sm sm:text-base truncate">{selected.title}</h3>
              <div className="flex items-center gap-3 shrink-0">
                <a href={selected.file} target="_blank" rel="noopener noreferrer" className="text-brand-red text-xs font-bold">Open Original</a>
                <button type="button" onClick={() => setSelected(null)} aria-label="Close preview" className="text-brand-black"><X size={24} /></button>
              </div>
            </div>
            {selected.fileType === 'pdf' ? (
              <iframe title={selected.title} src={`${selected.file}#toolbar=1`} className="w-full flex-1 border-0" />
            ) : (
              <div className="flex-1 min-h-0 overflow-auto bg-brand-ivory flex justify-center p-5"><img src={selected.file} alt={selected.title} className="max-w-full h-full object-contain" /></div>
            )}
          </div>
        </div>
      )}
      <FinalCta />
    </>
  );
}
