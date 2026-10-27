import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle,
  Users,
  Leaf,
  Globe2,
  HardHat
} from 'lucide-react';
import { companyData } from '../data/companyData';

const valueIcons = [
  ShieldCheck,
  CheckCircle,
  Users,
  Globe2,
  Leaf,
  HardHat
];

export default function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {companyData.coreValues.map((value, index) => {
        const Icon = valueIcons[index] || ShieldCheck;
        return (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative p-7 sm:p-8 bg-white border border-brand-border/70 hover:border-brand-red/60 transition-all duration-300 hover:shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-sm bg-brand-ivory border border-brand-border flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-concrete group-hover:text-brand-red transition-colors">
                  0{value.id}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-montserrat font-bold text-brand-black mb-3">
                {value.title}
              </h3>

              <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                {value.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between text-[11px] font-montserrat font-semibold tracking-wider text-brand-concrete group-hover:text-brand-red uppercase transition-colors">
              <span>MAMOURAH CORE PILLAR</span>
              <span className="w-2 h-2 rounded-full bg-brand-border group-hover:bg-brand-red transition-colors" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
