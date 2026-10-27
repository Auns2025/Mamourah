import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import MagneticButton from './MagneticButton';
import Counter from './Counter';

/**
 * SECTION 13: Why Choose Mamourah
 * Visually engaging split composition combining architectural photography,
 * animated experience counter, and 6 structured corporate advantages.
 */
export default function WhyChooseSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      
      {/* Left Column: Visual & Heritage Focal Point */}
      <div className="lg:col-span-5 relative">
        <div className="relative">
          {/* Main Visual */}
          <div className="relative overflow-hidden aspect-[4/5] bg-brand-ivory shadow-elevated group">
            <img
              src="/images/Architectural Plans Overlooking a Cityscape.png"
              alt="Mamourah Development & Construction on-site engineering team"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/hero-1.jpg';
              }}
              className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle architectural concrete vignette */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Overlapping Years of Experience Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-brand-black text-white p-6 sm:p-8 shadow-elevated border-b-4 border-brand-red max-w-[240px] sm:max-w-[280px] z-10"
          >
            <div className="text-4xl sm:text-5xl font-montserrat font-black text-white tracking-tight">
              <Counter to={companyData.yearsOfExperience} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-montserrat font-bold uppercase tracking-architectural mt-2 text-neutral-300">
              Years of UAE Construction Heritage
            </div>
            <div className="text-[11px] text-brand-concrete font-poppins mt-1">
              Established 2003 &bull; Khorfakkan, UAE
            </div>
          </motion.div>
        </div>

        {/* Small subtle brand mark */}
        <div className="hidden sm:block mt-12 pl-2">
          <p className="text-xs text-brand-body italic font-poppins">
            &ldquo;Building strong relationships with clients, partners and communities by delivering reliable, sustainable and future-ready solutions.&rdquo;
          </p>
        </div>
      </div>

      {/* Right Column: Six Verified Advantages */}
      <div className="lg:col-span-7">
        <div className="space-y-6 sm:space-y-7">
          {companyData.whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 sm:gap-5 pb-6 border-b border-brand-border/60 last:border-b-0 group"
            >
              {/* Architectural Number */}
              <div className="text-sm font-mono font-bold text-brand-red bg-brand-ivory px-2.5 py-1.5 shrink-0 border border-brand-border">
                {item.id}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base sm:text-lg font-montserrat font-bold text-brand-black group-hover:text-brand-red transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-4">
          <MagneticButton
            to="/about"
            variant="outline"
            size="md"
            icon={ArrowRight}
          >
            Read Our Full Company Profile
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
