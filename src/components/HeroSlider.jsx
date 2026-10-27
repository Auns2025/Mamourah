import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const slides = [
  {
    id: 1,
    tagline: "MAMOURAH DEVELOPMENT & CONSTRUCTION",
    headline: "BUILDING A STRONGER TOMORROW",
    subtext: "Integrated construction and development solutions built on experience, quality and commitment.",
    primaryCta: "Explore Our Projects",
    primaryLink: "/projects",
    secondaryCta: "Discover Mamourah",
    secondaryLink: "/about",
    image: "/images/Golden-Hour Skyline Construction Site.png",
    alt: "Modern architectural construction in the UAE with structural concrete and warm sunlight"
  },
  {
    id: 2,
    tagline: "CIVIL & INFRASTRUCTURE EXCELLENCE",
    headline: "ENGINEERING WITH PURPOSE",
    subtext: "Delivering resilient infrastructure, civil structures and specialized contracting across the Emirates.",
    primaryCta: "Our Capabilities",
    primaryLink: "/expertise",
    secondaryCta: "View Portfolio",
    secondaryLink: "/projects",
    image: "/images/hero-2.jpg",
    alt: "Professional civil engineering and infrastructure development in the UAE"
  },
  {
    id: 3,
    tagline: "SUSTAINABLE DEVELOPMENT SOLUTIONS",
    headline: "FROM VISION TO REALITY",
    subtext: "Executing turnkey construction, fit-out and modern urban developments from concept to completion.",
    primaryCta: "All Services",
    primaryLink: "/services",
    secondaryCta: "Start a Conversation",
    secondaryLink: "/contact",
    image: "/images/hero-3.jpg",
    alt: "High-quality modern architectural development project in the UAE"
  }
];

const AUTOPLAY_DURATION = 7000; // 7 seconds per slide

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Progress tracker ref taake interval mein state batching ka masla na ho
  const progressRef = useRef(0);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) setIsPlaying(false);
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Slide change karne ka function
  const changeSlide = useCallback((direction) => {
    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % slides.length;
      } else {
        return (prev - 1 + slides.length) % slides.length;
      }
    });
    // Progress reset karein
    progressRef.current = 0;
    setProgress(0);
  }, []);

  // Autoplay Effect
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalStep = 50; // 50ms per tick
    
    progressIntervalRef.current = setInterval(() => {
      // Ref ko barhayein
      progressRef.current += (intervalStep / AUTOPLAY_DURATION) * 100;
      
      if (progressRef.current >= 100) {
        // Agar 100 ho jaye toh agla slide change karein
        changeSlide('next');
      } else {
        // Warna UI ko update karein
        setProgress(progressRef.current);
      }
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, prefersReducedMotion, changeSlide]);

  // Manual controls ke liye
  const nextSlide = () => changeSlide('next');
  const prevSlide = () => changeSlide('prev');
  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    progressRef.current = 0;
    setProgress(0);
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full h-[100vh] min-h-[640px] max-h-[1080px] bg-brand-black overflow-hidden select-none"
      aria-label="Cinematic Hero Showcase"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => !prefersReducedMotion && setIsPlaying(true)}
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={slide.image}
            alt={slide.alt}
            initial={{ scale: 1.0 }}
            animate={{ scale: prefersReducedMotion ? 1.0 : 1.05 }}
            transition={{ duration: 8.0, ease: 'linear' }}
            className="w-full h-full object-cover object-center filter brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl pt-16 sm:pt-20 pb-24 sm:pb-32">
          
          {/* Tagline */}
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-brand-red/90 text-white rounded-xs mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] sm:text-xs font-montserrat font-bold tracking-architectural uppercase">
              {slide.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-black text-white uppercase tracking-tight leading-[1.08] mb-5 drop-shadow-sm"
          >
            {slide.headline}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            key={`text-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl text-neutral-200 font-poppins font-light leading-relaxed mb-8 max-w-2xl"
          >
            {slide.subtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton to={slide.primaryLink} variant="primary" size="lg" icon={ArrowRight}>
              {slide.primaryCta}
            </MagneticButton>
            <MagneticButton to={slide.secondaryLink} variant="white" size="lg">
              {slide.secondaryCta}
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-3 sm:bottom-5 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Indicators */}
          <div className="flex items-center gap-3 sm:gap-4" role="tablist">
            {slides.map((s, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(index)}
                  className="group flex flex-col items-start gap-2 py-1 text-left focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                  role="tab"
                >
                  <span className={`text-[10px] sm:text-xs font-montserrat font-bold transition-colors ${
                    isActive ? 'text-brand-red' : 'text-white/60 group-hover:text-white'
                  }`}>
                    0{index + 1}
                  </span>
                  <div className="w-12 sm:w-20 md:w-28 h-[2.5px] bg-white/20 relative overflow-hidden rounded-full">
                    {isActive && (
                      <div
                        className="absolute inset-y-0 left-0 bg-brand-red"
                        style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-sm border border-white/10 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={prevSlide}
              className="p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-sm border border-white/10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-sm border border-white/10 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}