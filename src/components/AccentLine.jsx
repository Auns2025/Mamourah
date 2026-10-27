import React from 'react';
import { motion } from 'framer-motion';

/**
 * EFFECT 07: Section accent line reveal
 * Red architectural line grows horizontally when visible.
 */
export default function AccentLine({
  width = 'w-16 sm:w-24',
  height = 'h-1',
  align = 'left', // 'left' | 'center' | 'right'
  className = '',
  color = 'bg-brand-red'
}) {
  const alignClasses = {
    left: 'origin-left mr-auto',
    center: 'origin-center mx-auto',
    right: 'origin-right ml-auto'
  };

  return (
    <div className={`overflow-hidden my-3 ${alignClasses[align]} ${width}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`${height} ${color} ${className}`}
      />
    </div>
  );
}
