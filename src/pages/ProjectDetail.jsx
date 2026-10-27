import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Building2,
  CheckCircle2,
  Info,
  Calendar,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import FinalCta from '../components/FinalCta';
import SEO from '../components/SEO';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Related projects
  const relatedProjects = projectsData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${project.title} | Projects`}
        description={project.summary}
        canonical={`https://www.mamourah.ae/projects/${project.slug}`}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-neutral-400 hover:text-white uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-2.5 py-1 bg-emerald-600/90 text-white text-xs font-mono font-medium uppercase">
                {project.status}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-montserrat font-black uppercase tracking-tight leading-[1.15]">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-neutral-300 font-poppins mt-4">
              <MapPin className="w-4 h-4 text-brand-red shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 8 cols: Detailed verified project record */}
            <div className="lg:col-span-8">
              
              {/* Image Presentation */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-ivory border border-brand-border mb-8 shadow-elevated">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.isRepresentativeImage && (
                  <div className="absolute bottom-3 left-4 right-4 bg-black/75 backdrop-blur-xs text-white text-xs px-3 py-2 flex items-center gap-2 border-l-2 border-brand-red">
                    <Info className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{project.imageCaption}</span>
                  </div>
                )}
              </div>

              <SectionHeader
                badge="PROJECT OVERVIEW"
                title="VERIFIED EXECUTION"
                subtitle={project.summary}
              />

              <div className="prose prose-neutral max-w-none text-sm sm:text-base text-brand-body leading-relaxed mb-10 font-poppins">
                <p>{project.description}</p>
              </div>

              {/* Scope of Work */}
              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-montserrat font-bold uppercase text-brand-black mb-5 border-b border-brand-border pb-3">
                  Documented Scope of Works
                </h3>
                <div className="space-y-3">
                  {project.scopeOfWork.map((item, idx) => (
                    <div key={idx} className="p-4 bg-brand-ivory border border-brand-border flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-poppins text-brand-black leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Highlights */}
              <div className="p-8 bg-brand-ivory border border-brand-border">
                <h4 className="text-xs font-montserrat font-bold uppercase tracking-architectural text-brand-black mb-4">
                  Verified Delivery Highlights
                </h4>
                <ul className="space-y-2">
                  {project.verifiedHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-poppins text-brand-black">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right 4 cols: Project Meta Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 sm:p-8 bg-brand-ivory border border-brand-border">
                <h3 className="text-xs font-montserrat font-bold uppercase tracking-architectural text-brand-black mb-6 border-b border-brand-border pb-3">
                  Record Metadata
                </h3>

                <dl className="space-y-4 text-xs font-poppins">
                  <div>
                    <dt className="text-brand-body font-semibold">Entity / Client</dt>
                    <dd className="font-montserrat font-bold text-brand-black mt-1">
                      {project.clientOrEntity}
                    </dd>
                  </div>

                  <div className="border-t border-brand-border/60 pt-3">
                    <dt className="text-brand-body font-semibold">Location</dt>
                    <dd className="font-montserrat font-bold text-brand-black mt-1">
                      {project.location}
                    </dd>
                  </div>

                  <div className="border-t border-brand-border/60 pt-3">
                    <dt className="text-brand-body font-semibold">Primary Discipline</dt>
                    <dd className="font-montserrat font-bold text-brand-black mt-1">
                      {project.category}
                    </dd>
                  </div>

                  <div className="border-t border-brand-border/60 pt-3">
                    <dt className="text-brand-body font-semibold">Project Status</dt>
                    <dd className="font-montserrat font-bold text-emerald-700 mt-1">
                      {project.status} (Verified)
                    </dd>
                  </div>

                  <div className="border-t border-brand-border/60 pt-3">
                    <dt className="text-brand-body font-semibold">Contractor Entity</dt>
                    <dd className="font-montserrat font-bold text-brand-black mt-1">
                      Mamourah Development &amp; Construction L.L.C SP
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 pt-6 border-t border-brand-border">
                  <MagneticButton
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon={ArrowRight}
                  >
                    Inquire About Similar Works
                  </MagneticButton>
                </div>
              </div>

              {/* Archival Note Box */}
              <div className="p-5 bg-white border border-brand-border text-xs text-brand-body font-poppins leading-relaxed">
                <p>
                  Official documents, handover certificates and engineer log records are retained in compliance with UAE corporate governance at our headquarters in Khorfakkan.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="PORTFOLIO"
            title="RELATED WORKS"
            subtitle="Explore additional documented projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedProjects.map((p) => (
              <div key={p.id} className="h-full">
                <Link to={`/projects/${p.slug}`} className="block h-full group">
                  <div className="bg-white border border-brand-border overflow-hidden h-full flex flex-col justify-between hover:border-brand-red transition-colors">
                    <div className="aspect-[16/10] overflow-hidden bg-brand-ivory">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-montserrat font-bold text-brand-red uppercase tracking-wider">
                        {p.category}
                      </span>
                      <h4 className="text-base font-montserrat font-bold text-brand-black mt-2 group-hover:text-brand-red transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                      <p className="text-xs text-brand-body mt-2 line-clamp-2">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
