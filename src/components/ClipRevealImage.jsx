import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * EFFECT 02: Clip-path image reveal on scroll
 * EFFECT 04: Architectural image parallax (low-intensity desktop-only parallax)
 * EFFECT 05: Premium image hover zoom without layout shift
 */
export default function ClipRevealImage({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  direction = 'left-to-right', // 'left-to-right' | 'bottom-to-top' | 'fade-zoom'
  enableParallax = false,
  enableHoverZoom = true,
  aspectRatio = 'aspect-[16/10]',
  priority = false
}) {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Parallax hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax && !prefersReducedMotion ? [-15, 15] : [0, 0]
  );

  const initialClip =
    direction === 'bottom-to-top'
      ? { clipPath: 'inset(100% 0% 0% 0%)' }
      : { clipPath: 'inset(0% 100% 0% 0%)' };

  const targetClip = { clipPath: 'inset(0% 0% 0% 0%)' };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} bg-brand-ivory ${containerClassName}`}
    >
      <motion.div
        initial={prefersReducedMotion ? { opacity: 0 } : { ...initialClip, opacity: 0.9 }}
        whileInView={prefersReducedMotion ? { opacity: 1 } : { ...targetClip, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: parallaxY }}
        className="w-full h-full relative"
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          className={`w-full h-full object-cover select-none transition-transform duration-700 ease-out ${
            enableHoverZoom ? 'group-hover:scale-105' : ''
          } ${className}`}
        />
        {/* Subtle architectural concrete vignette */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5" />
      </motion.div>
    </div>
  );
}
