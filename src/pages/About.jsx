import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Target, Eye, HeartHandshake, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ValuesGrid from '../components/ValuesGrid';
import WhyChooseSection from '../components/WhyChooseSection';
import FinalCta from '../components/FinalCta';
import ClipRevealImage from '../components/ClipRevealImage';
import Counter from '../components/Counter';
import SEO from '../components/SEO';
import { companyData } from '../data/companyData';

export default function About() {
  return (
    <>
      <SEO
        title="About Mamourah"
        description="Learn about Mamourah Development & Construction L.L.C SP — Over two decades of engineering excellence, vision, mission and values in the UAE."
        canonical="https://www.mamourah.ae/about"
      />

      {/* Page Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-main.jpg"
            alt="Mamourah Corporate Architectural Heritage"
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              ABOUT MAMOURAH
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              A HERITAGE OF QUALITY &amp; INTEGRITY.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">
              Delivering integrated construction, civil infrastructure, and modern development solutions across the United Arab Emirates since 2003.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Background: Alternating Editorial Layout */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
            <div className="lg:col-span-6">
              <SectionHeader
                badge="OUR BACKGROUND"
                title="ESTABLISHED IN 2003."
                subtitle="Two decades of verified UAE construction experience"
              />
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-5 font-poppins">
                {companyData.aboutSummary}
              </p>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 font-poppins">
                Mamourah Development &amp; Construction L.L.C SP is an engineering and construction company delivering integrated construction and development solutions across the UAE. Headquartered in Khorfakkan, Sharjah Emirate, the company specializes in delivering projects through technical expertise, contemporary methods, professional coordination and an uncompromising commitment to quality.
              </p>
              <div className="p-5 bg-brand-ivory border-l-4 border-brand-red">
                <p className="text-xs sm:text-sm text-brand-black italic font-poppins">
                  &ldquo;{companyData.approach}&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ClipRevealImage
                src="/images/about-main.jpg"
                alt="Mamourah Construction Project Site"
                aspectRatio="aspect-[16/11]"
                className="shadow-elevated"
              />
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="p-8 sm:p-10 bg-brand-ivory border border-brand-border relative overflow-hidden group hover:border-brand-red transition-colors">
              <div className="w-12 h-12 bg-brand-red text-white flex items-center justify-center rounded-xs mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-montserrat font-black uppercase text-brand-black mb-4">
                OUR VISION
              </h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed font-poppins">
                {companyData.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 bg-brand-ivory border border-brand-border relative overflow-hidden group hover:border-brand-red transition-colors">
              <div className="w-12 h-12 bg-brand-black text-white flex items-center justify-center rounded-xs mb-6 group-hover:bg-brand-red transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-montserrat font-black uppercase text-brand-black mb-4">
                OUR MISSION
              </h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed font-poppins">
                {companyData.mission}
              </p>
            </div>
          </div>

          {/* Company Commitment Banner */}
          <div className="p-8 sm:p-12 bg-brand-black text-white border-l-4 border-brand-red">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-6 h-6 text-brand-red" />
              <span className="text-xs font-montserrat font-bold tracking-architectural uppercase text-neutral-400">
                COMPANY COMMITMENT
              </span>
            </div>
            <p className="text-lg sm:text-2xl font-montserrat font-bold text-white leading-relaxed">
              &ldquo;{companyData.commitment}&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-28 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="THE MAMOURAH STANDARD"
            title="CORE VALUES"
            subtitle="The principles that govern every engineering decision and site operation"
            align="center"
          />
          <ValuesGrid />
        </div>
      </section>

      {/* Why Choose Mamourah Section */}
      <section className="py-20 sm:py-28 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="STRATEGIC ADVANTAGES"
            title="WHY CHOOSE MAMOURAH"
            subtitle="Six pillars that differentiate our contracting and development execution"
          />
          <WhyChooseSection />
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
