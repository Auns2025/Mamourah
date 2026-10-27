import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-white border border-brand-border/70 hover:border-brand-red/60 transition-all duration-500 hover:shadow-card overflow-hidden 
                 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-brand-red after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
    >
      {/* Background Hover Fill Overlay */}
      <div className="absolute inset-0 bg-brand-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Top Image Container with Subtle Zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-ivory z-10">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Architectural overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Category Number Badge */}
        <div className="absolute top-4 left-4 z-10 bg-brand-black/90 backdrop-blur-xs text-white text-xs font-mono font-bold px-2.5 py-1 border-l-2 border-brand-red">
          {service.number}
        </div>

        {/* Dynamic Top-Right Floating Badge (Har card ke liye alag value) */}
        {service.badgeValue && (
          <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-brand-border/60 shadow-lg translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out flex flex-col items-end">
            <span className="text-xs font-montserrat font-bold text-brand-red leading-tight">
              {service.badgeValue}
            </span>
            <span className="text-[10px] font-mono text-brand-black/80 font-medium">
              {service.badgeLabel}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white group-hover:bg-brand-ivory/40 transition-colors duration-500 z-10">
        <div>
          <h3 className="text-lg sm:text-xl font-montserrat font-bold text-brand-black group-hover:text-brand-red transition-colors duration-200">
            {service.title}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-brand-body leading-relaxed line-clamp-3">
            {service.shortDesc}
          </p>
        </div>

        {/* Card Footer Link */}
        <div className="pt-6 mt-4 border-t border-brand-border/50 flex items-center justify-between">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold tracking-architectural uppercase text-brand-black group-hover:text-brand-red transition-colors"
            aria-label={`Explore ${service.title} service details`}
          >
            <span>Explore Discipline</span>
            <ArrowUpRight className="w-4 h-4 text-brand-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-[11px] font-mono text-brand-concrete font-medium">
            MAMOURAH
          </span>
        </div>
      </div>
    </motion.article>
  );
}