import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Leaf,
  Layers,
  Award,
  Building2,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CredibilityStrip from '../components/CredibilityStrip';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ProcessTimeline from '../components/ProcessTimeline';
import ValuesGrid from '../components/ValuesGrid';
import WhyChooseSection from '../components/WhyChooseSection';
import FinalCta from '../components/FinalCta';
import MagneticButton from '../components/MagneticButton';
import ClipRevealImage from '../components/ClipRevealImage';
import Counter from '../components/Counter';
import SEO from '../components/SEO';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import { projectsData, projectCategories } from '../data/projectsData';
import { certificatesData } from '../data/certificatesData';

export default function Home() {
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');

  // Filter projects for Section 07
  const filteredProjects =
    activeProjectFilter === 'All'
      ? projectsData.slice(0, 6)
      : projectsData
          .filter(
            (p) =>
              p.category === activeProjectFilter ||
              p.secondaryCategory === activeProjectFilter
          )
          .slice(0, 6);

  return (
    <>
      <SEO
        title="Today, We Built the Future"
        description="Mamourah Development & Construction L.L.C SP — Integrated construction and development solutions across the UAE since 2003."
        canonical="https://www.mamourah.ae/"
      />

      {/* SECTION 02: Cinematic Hero */}
      <HeroSlider />

      {/* SECTION 03: Credibility Strip */}
      <CredibilityStrip />

      {/* SECTION 04: About Mamourah — Editorial Two-Column */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <SectionHeader
                badge="ABOUT MAMOURAH"
                title="A LEGACY BUILT ON TRUST."
                subtitle="Delivering engineering excellence across the UAE since 2003"
              />

              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 font-poppins">
                Since 2003, Mamourah Development &amp; Construction has been delivering integrated construction and development solutions, combining experience, technical expertise and a commitment to long-term value.
              </p>

              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-8 font-poppins">
                Headquartered in Khorfakkan, Sharjah, the company approaches every project as a unique success story. We combine rigorous engineering knowledge, practical craftsmanship, advanced methods, and client-focused coordination to shape enduring civil and commercial landmarks.
              </p>

              {/* Verified Mini Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8 pt-4 border-t border-brand-border/60">
                <div>
                  <div className="text-2xl sm:text-3xl font-montserrat font-bold text-brand-red">
                    <Counter to={companyData.yearsOfExperience} suffix="+" />
                  </div>
                  <div className="text-xs font-montserrat font-semibold text-brand-black uppercase tracking-wide mt-1">
                    Years Established
                  </div>
                  <div className="text-[11px] text-brand-body">Since 2003 in the UAE</div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-montserrat font-bold text-brand-black">
                    ISO
                  </div>
                  <div className="text-xs font-montserrat font-semibold text-brand-black uppercase tracking-wide mt-1">
                    9001 / 14001 / 45001
                  </div>
                  <div className="text-[11px] text-brand-body">Certified Management Systems</div>
                </div>
              </div>

              <div>
                <MagneticButton
                  to="/about"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                >
                  More About Us
                </MagneticButton>
              </div>
            </div>

            {/* Right Images: Architectural photography with subtle secondary overlap */}
            <div className="lg:col-span-6 relative">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Primary Image */}
                <ClipRevealImage
                  src="/images/Blueprints to Skyline_ Engineering in Progress.jpg"
                  alt="Mamourah Development & Construction project delivery"
                  aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                  enableParallax={true}
                  className="shadow-elevated"
                />

                {/* Secondary Overlapping Image */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-2/3 max-w-[300px] border-4 border-white shadow-elevated hidden sm:block overflow-hidden"
                >
                  <img
                    src="/images/about-main.jpg"
                    alt="Architectural details and engineering coordination"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-brand-black text-white p-2 text-center text-[10px] font-montserrat font-bold tracking-architectural uppercase">
                    TECHNICAL RIGOR
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 05: Our Services */}
      <section className="py-20 sm:py-28 bg-brand-surface border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeader
              badge="CORE CAPABILITIES"
              title="EXPERTISE THAT BUILDS THE FUTURE."
              subtitle="Integrated solutions for construction, development and infrastructure."
              className="mb-0 md:max-w-xl"
            />
            <div className="mt-6 md:mt-0">
              <MagneticButton
                to="/services"
                variant="outline"
                size="md"
                icon={ArrowRight}
              >
                View All Disciplines
              </MagneticButton>
            </div>
          </div>

          {/* 6 Image-based Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 06: Our Experience */}
      <section className="py-20 sm:py-24 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="INDUSTRY TRACK RECORD"
            title="BUILT ON EXPERIENCE. DRIVEN BY EXCELLENCE."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="p-8 bg-brand-ivory border border-brand-border text-center">
              <div className="text-4xl sm:text-5xl font-montserrat font-black text-brand-red">
                <Counter to={companyData.yearsOfExperience} suffix="+" />
              </div>
              <h3 className="text-sm font-montserrat font-bold uppercase tracking-wider text-brand-black mt-3">
                Established 2003
              </h3>
              <p className="text-xs text-brand-body mt-2 leading-relaxed font-poppins">
                Continuous engineering operations across the UAE over two decades.
              </p>
            </div>

            <div className="p-8 bg-white border border-brand-border text-center hover:border-brand-red/50 transition-colors">
              <Building2 className="w-10 h-10 text-brand-black mx-auto mb-3" />
              <h3 className="text-sm font-montserrat font-bold uppercase tracking-wider text-brand-black">
                Civil &amp; Structural Works
              </h3>
              <p className="text-xs text-brand-body mt-2 leading-relaxed font-poppins">
                End-to-end structural engineering, concrete frames and substructures.
              </p>
            </div>

            <div className="p-8 bg-white border border-brand-border text-center hover:border-brand-red/50 transition-colors">
              <Compass className="w-10 h-10 text-brand-black mx-auto mb-3" />
              <h3 className="text-sm font-montserrat font-bold uppercase tracking-wider text-brand-black">
                Infrastructure Development
              </h3>
              <p className="text-xs text-brand-body mt-2 leading-relaxed font-poppins">
                Access roads, external drainage networks and civil interfaces.
              </p>
            </div>

            <div className="p-8 bg-white border border-brand-border text-center hover:border-brand-red/50 transition-colors">
              <Award className="w-10 h-10 text-brand-black mx-auto mb-3" />
              <h3 className="text-sm font-montserrat font-bold uppercase tracking-wider text-brand-black">
                Engineering Excellence
              </h3>
              <p className="text-xs text-brand-body mt-2 leading-relaxed font-poppins">
                Qualified civil engineers, site managers and certified QA/QC protocols.
              </p>
            </div>

          </div>
        </div>
      </section>

    

      {/* SECTION 08: Expertise & Capabilities */}
      <section className="py-20 sm:py-28 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ENGINEERING MASTERY"
            title="PRECISION IN EVERY DETAIL."
            subtitle="Specialized capabilities built on technical discipline"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Capability 01 */}
            <div className="bg-brand-ivory border border-brand-border p-8 flex flex-col justify-between group hover:border-brand-red transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-brand-red">01</span>
                <h3 className="text-xl font-montserrat font-black uppercase text-brand-black mt-3 mb-4">
                  CIVIL &amp; STRUCTURAL WORKS
                </h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-6 font-poppins">
                  High-quality construction solutions for residential, commercial and industrial projects. Precision concrete formwork, deep substructures, heavy-load floor slabs, and high-specification architectural masonry.
                </p>
                <ul className="space-y-2 text-xs text-brand-black font-poppins border-t border-brand-border/60 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Reinforced concrete superstructures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Commercial &amp; residential developments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Industrial warehouses &amp; logistics yards</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border/40">
                <Link to="/expertise" className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-brand-black group-hover:text-brand-red uppercase tracking-wide">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Capability 02 */}
            <div className="bg-brand-ivory border border-brand-border p-8 flex flex-col justify-between group hover:border-brand-red transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-brand-red">02</span>
                <h3 className="text-xl font-montserrat font-black uppercase text-brand-black mt-3 mb-4">
                  INFRASTRUCTURE DEVELOPMENT
                </h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-6 font-poppins">
                  Execution of essential infrastructure with precision, durability and compliance with industry standards. Delivering access roads, external drainage systems, retaining boundary walls, and coastal civil enhancements.
                </p>
                <ul className="space-y-2 text-xs text-brand-black font-poppins border-t border-brand-border/60 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Asphalt and interlock access roads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Stormwater drainage &amp; retention systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Coastal &amp; maritime port civil facilities</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border/40">
                <Link to="/expertise" className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-brand-black group-hover:text-brand-red uppercase tracking-wide">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Capability 03 */}
            <div className="bg-brand-ivory border border-brand-border p-8 flex flex-col justify-between group hover:border-brand-red transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-brand-red">03</span>
                <h3 className="text-xl font-montserrat font-black uppercase text-brand-black mt-3 mb-4">
                  ENGINEERING EXCELLENCE
                </h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-6 font-poppins">
                  Skilled teams, modern equipment and proven processes to ensure quality delivery. From advanced CPM scheduling and material QA to rigorous on-site supervision and zero-compromise safety protocols.
                </p>
                <ul className="space-y-2 text-xs text-brand-black font-poppins border-t border-brand-border/60 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Master project scheduling &amp; cost control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>ISO 9001 certified quality audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Municipal authority &amp; consultant liaison</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border/40">
                <Link to="/expertise" className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-brand-black group-hover:text-brand-red uppercase tracking-wide">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 09: Our Process */}
      <section className="py-20 sm:py-28 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="EXECUTION METHODOLOGY"
            title="FROM CONCEPT TO COMPLETION."
            subtitle="Six disciplined stages of turnkey project delivery"
            align="center"
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* SECTION 10: Quality & Safety */}
      <section className="py-20 sm:py-28 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="UNCOMPROMISING STANDARDS"
            title="QUALITY IS OUR FOUNDATION."
            subtitle="Integrated Quality Assurance and Health, Safety & Environmental protocols"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Left: Quality Assurance Pillars */}
            <div className="p-8 sm:p-10 bg-brand-ivory border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-7 h-7 text-brand-red" />
                <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold uppercase text-brand-black">
                  Quality Assurance
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-6 font-poppins">
                At Mamourah, quality is systematically planned and verified at every construction phase rather than inspected at the end.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white border border-brand-border">
                  <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-1">
                    Quality Planning
                  </h4>
                  <p className="text-xs text-brand-body font-poppins leading-relaxed">
                    Detailed project quality plans (PQP), inspection and test plans (ITP), and alignment with client specifications.
                  </p>
                </div>

                <div className="p-4 bg-white border border-brand-border">
                  <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-1">
                    Material Standards
                  </h4>
                  <p className="text-xs text-brand-body font-poppins leading-relaxed">
                    Rigorous testing of ready-mix concrete, reinforcing steel rebar, and waterproofing coatings by accredited laboratories.
                  </p>
                </div>

                <div className="p-4 bg-white border border-brand-border">
                  <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-1">
                    Site Supervision
                  </h4>
                  <p className="text-xs text-brand-body font-poppins leading-relaxed">
                    Experienced resident civil engineers conducting multi-stage hold-point inspections prior to every concrete pour.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: HSE Subsection */}
            <div className="p-8 sm:p-10 bg-brand-ivory border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <HardHat className="w-7 h-7 text-brand-red" />
                <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold uppercase text-brand-black">
                  Health, Safety &amp; Environment (HSE)
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-6 font-poppins">
                Our ISO 45001 and ISO 14001 frameworks guarantee safe sites for our workforce and responsible stewardship of natural resources.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white border border-brand-border">
                  <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-1">
                    Safe Workplaces
                  </h4>
                  <p className="text-xs text-brand-body font-poppins leading-relaxed">
                    Mandatory daily toolbox talks, strict PPE enforcement, fall protection systems, and proactive risk assessments.
                  </p>
                </div>

                <div className="p-4 bg-white border border-brand-border">
                  <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-1">
                    Environmental Responsibility
                  </h4>
                  <p className="text-xs text-brand-body font-poppins leading-relaxed">
                    Structured construction waste segregation, dust mitigation, and adherence to UAE municipal environmental mandates.
                  </p>
                </div>

                <div className="p-4 bg-white border border-brand-border">
                  <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-1">
                    People First
                  </h4>
                  <p className="text-xs text-brand-body font-poppins leading-relaxed">
                    Empowering our craftspeople, technicians, and engineers with training, fair treatment, and wellness oversight.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <MagneticButton to="/quality-hse" variant="outline" size="md" icon={ArrowRight}>
              Explore Full Quality &amp; HSE Framework
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* SECTION 11: Our Values */}
      <section className="py-20 sm:py-28 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="GUIDING PRINCIPLES"
            title="THE PRINCIPLES BEHIND EVERY PROJECT."
            subtitle="Core corporate values driving sustainable delivery and lasting trust"
            align="center"
          />

          <ValuesGrid />
        </div>
      </section>

      {/* SECTION 12: Certifications & Approvals */}
      <section className="py-20 sm:py-28 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="COMPLIANCE & GOVERNANCE"
            title="COMMITTED TO RECOGNIZED STANDARDS."
            subtitle="Verified ISO Management Systems and commercial authorizations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.slice(0, 6).map((cert) => (
              <div
                key={cert.id}
                className="p-7 bg-brand-ivory border border-brand-border hover:border-brand-red/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-brand-red bg-brand-lightRed px-2 py-0.5 border border-brand-red/20">
                      {cert.code}
                    </span>
                    <span className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-brand-body">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-montserrat font-bold text-brand-black mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-brand-body font-poppins leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60 text-[11px] text-brand-body font-poppins">
                  <span className="font-semibold text-brand-black">Scope:</span> {cert.scope}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <MagneticButton to="/certificates" variant="outline" size="md" icon={ArrowRight}>
              View All Certifications &amp; Commercial Approvals
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* SECTION 13: Why Choose Mamourah */}
      <section className="py-20 sm:py-28 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="WHY PARTNER WITH US"
            title="A PARTNER YOU CAN BUILD ON."
            subtitle="Six strategic advantages behind over two decades of successful delivery"
          />

          <WhyChooseSection />
        </div>
      </section>

      {/* SECTION 14: Final CTA */}
      <FinalCta />
    </>
  );
}
