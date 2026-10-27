import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import FinalCta from '../components/FinalCta';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services & Core Disciplines"
        description="Explore the six core engineering and construction services delivered by Mamourah Development & Construction across the UAE."
        canonical="https://www.mamourah.ae/services"
      />

      {/* Page Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/service-general.jpg"
            alt="Mamourah Services & Engineering Disciplines"
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              INTEGRATED DISCIPLINES
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              SERVICES ENGINEERED FOR EXCELLENCE.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">
              From general contracting and real estate development to specialized fit-out, renovation and civil infrastructure works across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 sm:py-28 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ALL DISCIPLINES"
            title="EXPERTISE THAT BUILDS THE FUTURE."
            subtitle="Integrated solutions for construction, development and infrastructure"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
