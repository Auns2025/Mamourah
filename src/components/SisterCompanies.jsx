import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AccentLine from './AccentLine';
import './SisterCompanies.css';

/**
 * Three Sister Companies in Mamourah Group
 * Exactly three unique company entries as per specification.
 */
const sisterCompanies = [
  {
    id: 'capital-trading',
    name: 'Capital Trading',
    sector: 'Smart irrigation & landscaping solutions',
    logo: '/images/Capital Trading Abstract Emblem Logo.png'
  },
  {
    id: 'risan',
    name: 'Risan Electromechanical Contg',
    sector: 'Electromechanical Contracting',
    logo: '/images/RISAN Industrial Lightning Logo.png'
  },
  {
    id: 'naqsh-alfirooz',
    name: 'Naqsh Alfirooz Paints',
    sector: 'Painting Solutions & Coatings',
    logo: '/images/Nafsh Al-Fairooz 3D Logo.png'
  },
  {
    id: 'Tatweer-solution',
    name: 'Tatweer smart solution',
    sector: 'IT & Software Solutions',
    logo: '/images/Smart Solutions Loop Logo.png'
  }
];

export default function SisterCompanies() {
  const [imageErrors, setImageErrors] = useState({});
  const [isPaused, setIsPaused] = useState(false);

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Repeated sets of 3 for smooth continuous loop across ultra-wide viewports
  const trackItems = [
    ...sisterCompanies,
    ...sisterCompanies,
    ...sisterCompanies
  ];

  return (
    <section
      className="py-20 sm:py-28 bg-brand-surface border-t border-brand-border/70 overflow-hidden"
      aria-labelledby="sister-companies-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mx-auto max-w-3xl mb-12 sm:mb-16"
        >
          {/* Category Pill with Brand Accent */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-red/30 bg-brand-lightRed text-brand-red text-xs font-montserrat font-bold tracking-architectural uppercase mb-4 shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>OUR GROUP</span>
          </div>

          {/* Main Heading */}
          <h2
            id="sister-companies-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-montserrat font-extrabold uppercase leading-[1.15] tracking-tight text-brand-black"
          >
            Our Sister Companies
          </h2>

          <AccentLine align="center" />

          {/* Supporting Description */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-brand-body font-poppins max-w-2xl mx-auto">
            Working together across trading, electromechanical contracting, and painting solutions to deliver excellence throughout the UAE.
          </p>
        </motion.div>

      </div>

      {/* Infinite Logo-Card Marquee Slider */}
      <div
        className="sister-slider-container"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        role="region"
        aria-label="Sister Companies horizontal showcase"
      >
        {/* Subtle Edge Gradients for Soft Visual Transition */}
        <div className="sister-fade-left" aria-hidden="true" />
        <div className="sister-fade-right" aria-hidden="true" />

        <div className="sister-slider-track">
          
          {/* Primary Track (Accessible & Focusable) */}
          <div
            className={`sister-slider-group ${isPaused ? 'is-paused' : ''}`}
            role="list"
          >
            {trackItems.map((company, index) => {
              const hasError = imageErrors[company.id];
              const isEnlarged = company.id === 'risan' || company.id === 'naqsh-alfirooz';

              return (
                <div
                  key={`primary-${company.id}-${index}`}
                  role="listitem"
                  tabIndex={0}
                  className="w-[280px] sm:w-[320px] md:w-[360px] h-[255px] sm:h-[275px] bg-brand-card rounded-xl border border-brand-border p-6 sm:p-7 flex flex-col justify-between mr-5 sm:mr-7 shrink-0 shadow-card hover:shadow-elevated hover:border-brand-red/50 hover:-translate-y-1 transition-all duration-300 ease-out group outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  {/* Logo Container */}
                  <div className="w-full h-32 sm:h-36 flex items-center justify-center p-3 sm:p-4 bg-brand-surface/40 rounded-lg border border-brand-border/40 group-hover:bg-brand-surface/70 transition-colors">
                    {hasError ? (
                      /* Clean Typographic Fallback */
                      <div className="flex flex-col items-center justify-center text-center p-2">
                        <div className="w-11 h-11 rounded-lg bg-brand-lightRed border border-brand-red/25 flex items-center justify-center mb-2 shadow-subtle group-hover:border-brand-red/40 transition-colors">
                          <span className="font-montserrat font-black text-brand-red text-sm tracking-wider">
                            NA
                          </span>
                        </div>
                        <span className="font-montserrat font-bold text-xs sm:text-sm text-brand-black uppercase tracking-tight">
                          Naqsh Alfirooz
                        </span>
                        <span className="text-[10px] font-montserrat font-semibold tracking-architectural uppercase text-brand-red mt-0.5">
                          Paints
                        </span>
                      </div>
                    ) : (
                      /* Authenticated Company Logo */
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className={
                          isEnlarged
                            ? "h-[105px] sm:h-[126px] max-w-[92%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            : "max-h-20 sm:max-h-24 max-w-[85%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        }
                        loading="lazy"
                        onError={() => handleImageError(company.id)}
                      />
                    )}
                  </div>

                  {/* Company Name & Sector Tagline */}
                  <div className="pt-4 border-t border-brand-border/60 text-center">
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-brand-black uppercase tracking-wide group-hover:text-brand-red transition-colors line-clamp-1">
                      {company.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-body font-poppins mt-1 line-clamp-1">
                      {company.sector}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary Track (Duplicated for visual seamless loop — aria-hidden & non-focusable) */}
          <div
            className={`sister-slider-group ${isPaused ? 'is-paused' : ''}`}
            aria-hidden="true"
            role="presentation"
          >
            {trackItems.map((company, index) => {
              const hasError = imageErrors[company.id];
              const isEnlarged = company.id === 'risan' || company.id === 'naqsh-alfirooz';

              return (
                <div
                  key={`duplicate-${company.id}-${index}`}
                  role="presentation"
                  tabIndex={-1}
                  className="w-[280px] sm:w-[320px] md:w-[360px] h-[255px] sm:h-[275px] bg-brand-card rounded-xl border border-brand-border p-6 sm:p-7 flex flex-col justify-between mr-5 sm:mr-7 shrink-0 shadow-card hover:shadow-elevated hover:border-brand-red/50 hover:-translate-y-1 transition-all duration-300 ease-out group"
                >
                  {/* Logo Container */}
                  <div className="w-full h-32 sm:h-36 flex items-center justify-center p-3 sm:p-4 bg-brand-surface/40 rounded-lg border border-brand-border/40 group-hover:bg-brand-surface/70 transition-colors">
                    {hasError ? (
                      <div className="flex flex-col items-center justify-center text-center p-2">
                        <div className="w-11 h-11 rounded-lg bg-brand-lightRed border border-brand-red/25 flex items-center justify-center mb-2 shadow-subtle group-hover:border-brand-red/40 transition-colors">
                          <span className="font-montserrat font-black text-brand-red text-sm tracking-wider">
                            NA
                          </span>
                        </div>
                        <span className="font-montserrat font-bold text-xs sm:text-sm text-brand-black uppercase tracking-tight">
                          Naqsh Alfirooz
                        </span>
                        <span className="text-[10px] font-montserrat font-semibold tracking-architectural uppercase text-brand-red mt-0.5">
                          Paints
                        </span>
                      </div>
                    ) : (
                      <img
                        src={company.logo}
                        alt=""
                        className={
                          isEnlarged
                            ? "h-[105px] sm:h-[126px] max-w-[92%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            : "max-h-20 sm:max-h-24 max-w-[85%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        }
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Company Name & Sector Tagline */}
                  <div className="pt-4 border-t border-brand-border/60 text-center">
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-brand-black uppercase tracking-wide group-hover:text-brand-red transition-colors line-clamp-1">
                      {company.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-body font-poppins mt-1 line-clamp-1">
                      {company.sector}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
