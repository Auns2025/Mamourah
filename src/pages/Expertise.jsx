import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Compass,
  Award,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import FinalCta from '../components/FinalCta';
import MagneticButton from '../components/MagneticButton';
import ClipRevealImage from '../components/ClipRevealImage';
import SEO from '../components/SEO';

const expertiseAreas = [
  {
    number: "01",
    title: "Civil & Structural Works",
    subtitle: "End-to-End Concrete & Structural Frameworks",
    description: "Mamourah executes complex civil and structural engineering packages for residential, commercial and industrial projects. Our specialized structural engineering protocols ensure foundation durability, load distribution compliance, and seismic considerations aligned with UAE codes.",
    image: "/images/service-general.jpg",
    points: [
      "Deep substructure works, retaining walls & foundation piling",
      "Post-tensioned and reinforced concrete slab systems",
      "Structural steel coordination, erection & industrial mezzanines",
      "High-durability concrete mix designs engineered for coastal salt air"
    ]
  },
  {
    number: "02",
    title: "Infrastructure Development",
    subtitle: "Civic Roadways, Coastal & Utility Networks",
    description: "Infrastructure forms the vital connective tissue of UAE communities. We construct internal road networks, interlock access ways, stormwater culverts, sub-grade utility trenches, and coastal boundary works built to endure harsh climatic exposure.",
    image: "/images/service-infrastructure.jpg",
    points: [
      "Access road grading, sub-base compaction & asphalt paving",
      "Heavy-duty interlocking paving and pedestrian walkways",
      "Stormwater drainage systems, detention channels & soakaways",
      "Coastal retaining walls and marine port civil improvements"
    ]
  },
  {
    number: "03",
    title: "Engineering Excellence",
    subtitle: "Technical Leadership & Project Governance",
    description: "Our technical teams bridge conceptual architectural design with on-site physical realization. Through advanced Critical Path Method (CPM) programming, value engineering, and daily site synchronization, we maintain absolute control over cost and schedule.",
    image: "/images/Engineers Reviewing Construction Plans On Site.jpg",
    points: [
      "Master construction programming using Primavera & MS Project",
      "Statutory municipal authority approvals and licensing",
      "Value engineering to optimize material costs and longevity",
      "Real-time site progress monitoring and client dashboards"
    ]
  },
  {
    number: "04",
    title: "Construction Management",
    subtitle: "Turnkey Execution & Resource Mobilization",
    description: "Managing multifaceted sites requires disciplined coordination of skilled labor, heavy plant machinery, specialized subcontractors, and material supply logistics. We maintain rigorous site management structures that prevent downtime.",
    image: "/images/about-main.jpg",
    points: [
      "Dedicated resident civil engineers and site superintendents",
      "Direct oversight of subcontractors and specialized trades",
      "Integrated health, safety, and environmental site controls",
      "Comprehensive material logistics and staging management"
    ]
  },
  {
    number: "05",
    title: "Technical Coordination",
    subtitle: "Architectural & MEP Systems Integration",
    description: "Preventing spatial clashes between structural elements, MEP conduit routing, architectural cladding, and interior ceiling voids. Our technical coordinators ensure every trade works from a synchronized master plan.",
    image: "/images/process-planning.jpg",
    points: [
      "Cross-disciplinary clash detection and architectural review",
      "MEP builder’s work and service penetration coordination",
      "Coordination with local utility providers (SEWA / FEWA / DEWA)",
      "Detailed shop drawings and as-built architectural modeling"
    ]
  },
  {
    number: "06",
    title: "Quality Monitoring",
    subtitle: "ISO 9001 Certified Quality Inspection",
    description: "Quality is never an afterthought at Mamourah. Our quality assurance framework mandates strict hold-point inspections, third-party laboratory material verification, concrete slump and cube tests, and continuous snagging prevention.",
    image: "/images/quality-inspection.jpg",
    points: [
      "Hold-point sign-offs prior to rebar cover and concrete pouring",
      "Accredited material testing for aggregate, steel rebar & asphalt",
      "Continuous snagging protocols to ensure pristine surface finishes",
      "Comprehensive inspection dossiers for handover compliance"
    ]
  }
];

export default function Expertise() {
  return (
    <>
      <SEO
        title="Expertise & Technical Capabilities"
        description="Comprehensive technical capabilities: Civil & Structural Works, Infrastructure Development, Engineering Excellence, and Quality Monitoring in the UAE."
        canonical="https://www.mamourah.ae/expertise"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-2.jpg"
            alt="Mamourah Technical Expertise"
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              CAPABILITIES &amp; SPECIALIZATIONS
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              PRECISION IN EVERY DETAIL.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">
              Applying deep engineering knowledge, contemporary construction methods, and disciplined coordination across the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="CORE ENGINEERING PILLARS"
            title="TECHNICAL DISCIPLINE &amp; EXECUTION"
            subtitle="Six integrated areas of contracting and engineering competence"
          />

          <div className="space-y-16 sm:space-y-24">
            {expertiseAreas.map((area, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={area.number}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-brand-red bg-brand-lightRed px-2.5 py-1">
                        PILLAR {area.number}
                      </span>
                      <span className="text-xs font-montserrat font-bold tracking-architectural uppercase text-brand-body">
                        {area.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold uppercase text-brand-black mb-4">
                      {area.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 font-poppins">
                      {area.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-border">
                      {area.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-black font-poppins">
                          <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                    <ClipRevealImage
                      src={area.image}
                      alt={area.title}
                      aspectRatio="aspect-[16/11]"
                      className="shadow-elevated"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
