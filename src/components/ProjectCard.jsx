import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Building2, Info } from 'lucide-react';
import CursorHighlightCard from './CursorHighlightCard';

/**
 * EFFECT 09: Cursor-responsive project card highlight (desktop)
 * EFFECT 10: Project image gradient overlay transition
 * ANIMATION 04: Filter layout transitions
 */
export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <CursorHighlightCard className="h-full flex flex-col justify-between">
        {/* Project Image & EFFECT 10 Gradient Transition */}
        <div className="relative aspect-[16/11] overflow-hidden bg-brand-ivory">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* EFFECT 10: Project image gradient overlay transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Category Pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block bg-white/95 backdrop-blur-xs text-brand-black text-[10px] font-montserrat font-bold uppercase tracking-wider px-2.5 py-1 border border-brand-border shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Representative Visual Label if applicable */}
          {project.isRepresentativeImage && (
            <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center gap-1.5 text-[10px] text-white/80 bg-black/50 backdrop-blur-xs px-2 py-1 rounded-xs">
              <Info className="w-3 h-3 text-brand-red shrink-0" />
              <span className="truncate">Representative Architectural Visual</span>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6 flex-1 flex flex-col justify-between bg-white">
          <div>
            {/* Location & Client/Authority */}
            <div className="flex items-center gap-2 text-xs text-brand-body mb-2.5 font-poppins">
              <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>

            <h3 className="text-base sm:text-lg font-montserrat font-bold text-brand-black group-hover:text-brand-red transition-colors duration-200 line-clamp-2">
              {project.title}
            </h3>

            <p className="mt-2.5 text-xs text-brand-body leading-relaxed line-clamp-2">
              {project.summary}
            </p>
          </div>

          {/* Card Action Link */}
          <div className="pt-4 mt-4 border-t border-brand-border/40 flex items-center justify-between">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-xs font-montserrat font-bold tracking-architectural uppercase text-brand-black group-hover:text-brand-red transition-colors"
              aria-label={`View verified record for ${project.title}`}
            >
              <span>Verified Record</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
              {project.status}
            </span>
          </div>
        </div>
      </CursorHighlightCard>
    </motion.div>
  );
}
