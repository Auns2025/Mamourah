import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { companyData } from '../data/companyData';

/**
 * SECTION 14: Final Call to Action
 * Large architectural CTA with high contrast, realistic photography, and direct CTAs.
 */
export default function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28 bg-brand-black overflow-hidden select-none">
      {/* Background Architectural Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt="Mamourah Development & Construction Architectural Perspective"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="text-xs font-montserrat font-bold tracking-architectural uppercase text-brand-red">
              INITIATE A PARTNERSHIP
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold uppercase text-white tracking-tight leading-[1.12]"
          >
            LET&apos;S BUILD A STRONGER TOMORROW.
          </motion.h2>

          {/* Supporting Text */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-neutral-300 font-poppins leading-relaxed max-w-2xl">
            Partner with Mamourah for construction and development solutions built on experience, quality and commitment.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Start a Conversation
            </MagneticButton>

            <MagneticButton
              to="/services"
              variant="white"
              size="lg"
            >
              Explore Our Services
            </MagneticButton>
          </div>

          {/* Direct Contact Quick Line */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-poppins">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="flex items-center gap-2 text-white hover:text-brand-red transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{companyData.phone}</span>
            </a>
            <span className="text-neutral-600 hidden sm:inline">&bull;</span>
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center gap-2 text-white hover:text-brand-red transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-red" />
              <span>{companyData.email}</span>
            </a>
            <span className="text-neutral-600 hidden sm:inline">&bull;</span>
            <span>{companyData.location}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
