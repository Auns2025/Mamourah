import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Award, Building } from 'lucide-react';
import { companyData } from '../data/companyData';

/**
 * SECTION 03: Credibility Strip
 * Elegant horizontal corporate strip using verified company milestones.
 */
export default function CredibilityStrip() {
  const items = [
    {
      title: "ESTABLISHED IN 2003",
      subtitle: `${companyData.yearsOfExperience} Years of UAE Construction Heritage`,
      icon: Calendar
    },
    {
      title: "UAE CONSTRUCTION & DEVELOPMENT",
      subtitle: "Operating across Khorfakkan, Sharjah & UAE",
      icon: Building
    },
    {
      title: "QUALITY-DRIVEN EXECUTION",
      subtitle: "ISO 9001:2015 Certified Standards",
      icon: ShieldCheck
    },
    {
      title: "COMMITMENT TO EXCELLENCE",
      subtitle: "Sustainable & Future-Ready Solutions",
      icon: Award
    }
  ];

  return (
    <section className="bg-brand-ivory border-y border-brand-border py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-brand-border">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-3.5 pt-4 sm:pt-0 ${
                  index > 0 ? 'lg:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-sm bg-brand-white border border-brand-border flex items-center justify-center shrink-0 text-brand-red shadow-subtle">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xs sm:text-sm text-brand-black tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-brand-body font-poppins mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
