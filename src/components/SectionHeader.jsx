import React from 'react';
import { motion } from 'framer-motion';
import AccentLine from './AccentLine';

/**
 * ANIMATION 02: Scroll-triggered fade and translate section reveal
 * Architectural heading component with category eyebrow, main title, accent line, and description.
 */
export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = 'left', // 'left' | 'center'
  className = '',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <span className="text-[11px] sm:text-xs font-montserrat font-bold tracking-architectural uppercase text-brand-red">
            {badge}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-montserrat font-extrabold uppercase leading-[1.15] tracking-tight ${
            light ? 'text-white' : 'text-brand-black'
          }`}
        >
          {title}
        </h2>
      )}

      <AccentLine align={align} />

      {subtitle && (
        <p
          className={`text-base sm:text-lg font-montserrat font-semibold mt-2 ${
            light ? 'text-brand-concrete' : 'text-brand-red'
          }`}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            light ? 'text-white/80' : 'text-brand-body'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
