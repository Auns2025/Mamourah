import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  FileText,
  Layers,
  Hammer,
  CheckCircle2,
  Award
} from 'lucide-react';
import { processSteps } from '../data/processData';

const iconMap = {
  ClipboardCheck,
  FileText,
  Layers,
  Hammer,
  CheckCircle2,
  Award
};

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Central architectural progression line on desktop */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand-border -translate-x-1/2" />

      <div className="space-y-10 lg:space-y-16">
        {processSteps.map((step, index) => {
          const Icon = iconMap[step.icon] || ClipboardCheck;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className="w-full lg:w-1/2">
                <div
                  className={`bg-white border border-brand-border p-6 sm:p-8 shadow-subtle hover:border-brand-red/50 transition-colors ${
                    isEven ? 'lg:ml-auto lg:text-left' : 'lg:mr-auto'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-mono font-bold text-brand-red bg-brand-lightRed px-2.5 py-1">
                      STEP {step.step}
                    </span>
                    <span className="text-xs font-montserrat font-bold tracking-architectural uppercase text-brand-body">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-brand-black mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 border-t border-brand-border/40 pt-4">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-brand-black font-poppins">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Step Badge / Node on Desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-brand-ivory border-2 border-brand-red text-brand-red z-10 shadow-sm">
                <Icon className="w-5 h-5" />
              </div>

              {/* Complementary Image or Visual Balance Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[16/10] overflow-hidden border border-brand-border bg-brand-ivory group">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-montserrat font-semibold tracking-wide">
                    Phase {step.step} &mdash; {step.title}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
