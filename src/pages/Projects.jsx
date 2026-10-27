import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import FinalCta from '../components/FinalCta';
import SEO from '../components/SEO';
import { projectsData, projectCategories } from '../data/projectsData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter(
          (p) => p.category === activeFilter || p.secondaryCategory === activeFilter
        );

  return (
    <>
      <SEO
        title="Project Portfolio & Public Sector Delivery"
        description="Explore Mamourah's verified project portfolio across civil, municipal, commercial, and government infrastructure in the UAE."
        canonical="https://www.mamourah.ae/projects"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/project-qasimi.jpg"
            alt="Mamourah Projects Portfolio"
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              PORTFOLIO OF EXCELLENCE
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              PROJECTS THAT DEFINE OUR COMMITMENT.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">
              Showcasing verified construction, renovation, municipal maintenance, and civil infrastructure delivery across Sharjah, Kalba, Khorfakkan and the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid with Instant Filters */}
      <section className="py-20 sm:py-28 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparency / Archival Note */}
          <div className="mb-8 p-4 bg-white border border-brand-border flex items-start gap-3">
            <Info className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
            <p className="text-xs text-brand-body font-poppins leading-relaxed">
              <strong className="text-brand-black font-semibold">Archival Transparency:</strong> In adherence to strict professional ethics, project records below document actual verified scopes executed by Mamourah. Where original archival site photographs are restricted or proprietary, high-fidelity representative architectural visuals are clearly indicated. Authentic contract archives and completion letters are maintained at our Khorfakkan headquarters.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-brand-border pb-4">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-xs font-montserrat font-bold uppercase tracking-wider transition-all rounded-xs focus:outline-none ${
                  activeFilter === category
                    ? 'bg-brand-black text-white shadow-subtle'
                    : 'bg-white text-brand-body hover:text-brand-black hover:bg-brand-ivory border border-brand-border/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filterable Grid with ANIMATION 04 Layout Transitions */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
