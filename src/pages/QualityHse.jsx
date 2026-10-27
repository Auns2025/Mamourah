import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  HardHat,
  Leaf,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  Award
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import FinalCta from '../components/FinalCta';
import ClipRevealImage from '../components/ClipRevealImage';
import SEO from '../components/SEO';

export default function QualityHse() {
  return (
    <>
      <SEO
        title="Quality Assurance & Health, Safety & Environment (HSE)"
        description="Mamourah's Quality Assurance, Site Safety, and Environmental Management protocols in compliance with ISO 9001, ISO 14001, and ISO 45001."
        canonical="https://www.mamourah.ae/quality-hse"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/quality-inspection.jpg"
            alt="Mamourah Quality and HSE Supervision"
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              GOVERNANCE &amp; SAFETY
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              QUALITY IS OUR FOUNDATION.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">
              Operating under international ISO standards to guarantee structural excellence, zero-harm workplaces, and responsible environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-6">
              <SectionHeader
                badge="ZERO-COMPROMISE STANDARDS"
                title="QUALITY ASSURANCE"
                subtitle="Systematic verification from foundation to final touch"
              />
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 font-poppins">
                At Mamourah, quality is engineered into every task rather than checked at completion. Our ISO 9001:2015 certified Quality Management System enforces structured procedures for design verification, supplier qualification, material acceptance testing, and on-site inspection.
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-brand-ivory border-l-4 border-brand-red">
                  <h4 className="text-sm font-montserrat font-bold text-brand-black uppercase">
                    1. Quality Planning
                  </h4>
                  <p className="text-xs text-brand-body font-poppins mt-1">
                    Formulation of comprehensive Project Quality Plans (PQP), Method Statements, and Inspection &amp; Test Plans (ITP) for every civil package.
                  </p>
                </div>

                <div className="p-5 bg-brand-ivory border-l-4 border-brand-red">
                  <h4 className="text-sm font-montserrat font-bold text-brand-black uppercase">
                    2. Material Standards
                  </h4>
                  <p className="text-xs text-brand-body font-poppins mt-1">
                    Strict laboratory sampling of ready-mix concrete, tensile steel testing, aggregate gradation analysis, and certified supplier batch records.
                  </p>
                </div>

                <div className="p-5 bg-brand-ivory border-l-4 border-brand-red">
                  <h4 className="text-sm font-montserrat font-bold text-brand-black uppercase">
                    3. Site Supervision
                  </h4>
                  <p className="text-xs text-brand-body font-poppins mt-1">
                    Resident civil QA/QC inspectors executing hold-point sign-offs prior to each concrete pour, rebar concealment, or MEP closure.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ClipRevealImage
                src="/images/quality-inspection.jpg"
                alt="Engineer conducting precision quality inspection on construction site"
                aspectRatio="aspect-[16/11]"
                className="shadow-elevated"
              />
            </div>
          </div>

          {/* Health, Safety & Environment (HSE) Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-brand-border">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ClipRevealImage
                src="/images/hse-safety.jpg"
                alt="HSE on-site safety supervision with protective equipment"
                aspectRatio="aspect-[16/11]"
                className="shadow-elevated"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <SectionHeader
                badge="PROTECTING OUR PEOPLE & PLANET"
                title="HEALTH, SAFETY &amp; ENVIRONMENT"
                subtitle="Certified ISO 45001:2018 and ISO 14001:2015 management"
              />
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 font-poppins">
                Our workforce is our greatest asset. Mamourah enforces an uncompromising occupational health and safety culture backed by rigorous risk assessments, mandatory daily briefings, and certified safety personnel on every active site.
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-brand-ivory border-l-4 border-brand-black">
                  <h4 className="text-sm font-montserrat font-bold text-brand-black uppercase">
                    Safe Workplaces
                  </h4>
                  <p className="text-xs text-brand-body font-poppins mt-1">
                    Zero-harm mission, mandatory PPE enforcement, scaffold safety tag systems, edge protection, and certified plant equipment operators.
                  </p>
                </div>

                <div className="p-5 bg-brand-ivory border-l-4 border-brand-black">
                  <h4 className="text-sm font-montserrat font-bold text-brand-black uppercase">
                    Environmental Responsibility
                  </h4>
                  <p className="text-xs text-brand-body font-poppins mt-1">
                    Structured on-site waste segregation, dust suppression barriers, safe hazardous material storage, and conservation of municipal water resources.
                  </p>
                </div>

                <div className="p-5 bg-brand-ivory border-l-4 border-brand-black">
                  <h4 className="text-sm font-montserrat font-bold text-brand-black uppercase">
                    People First
                  </h4>
                  <p className="text-xs text-brand-body font-poppins mt-1">
                    Comprehensive welfare facilities, hydration protocols during UAE summer mid-day break hours, and continuous safety training workshops.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Project Execution & Management & Commitment to Excellence */}
      <section className="py-20 sm:py-28 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Project Execution */}
            <div className="p-8 sm:p-10 bg-white border border-brand-border shadow-subtle">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-red text-white flex items-center justify-center rounded-xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-montserrat font-extrabold uppercase text-brand-black">
                  Project Execution &amp; Management
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm font-poppins text-brand-body">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-black block">Planning &amp; Coordination:</strong>
                    Harmonizing design consultants, statutory entities, and field crews into a cohesive schedule.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-black block">Efficient Implementation:</strong>
                    Lean material flow, advanced machinery deployment, and agile problem solving on site.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-black block">Timely Delivery:</strong>
                    Milestone-driven accountability ensuring contractual handovers meet client deadlines.
                  </div>
                </li>
              </ul>
            </div>

            {/* Commitment to Excellence */}
            <div className="p-8 sm:p-10 bg-white border border-brand-border shadow-subtle">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-black text-white flex items-center justify-center rounded-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-montserrat font-extrabold uppercase text-brand-black">
                  Commitment to Excellence
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm font-poppins text-brand-body">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-black block">Sustainable Growth:</strong>
                    Building enduring structures that create long-term social and economic value for UAE communities.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-black block">Client Focus:</strong>
                    Transparent reporting, fair contractual partnerships, and responsive post-handover support.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-black block">Innovation in Construction:</strong>
                    Adopting contemporary engineering methods and high-performance sustainable materials.
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
