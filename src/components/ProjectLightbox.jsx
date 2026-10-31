import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Full-screen image preview lightbox for Projects page.
 * Displays uncropped project image (object-contain), project title, looping navigation,
 * Font Awesome arrow and close controls, and keyboard navigation.
 */
export default function ProjectLightbox({
  isOpen,
  projects = [],
  currentIndex = 0,
  onClose,
  onNavigate
}) {
  const touchStartXRef = useRef(null);

  const total = projects.length;
  const currentProject = projects[currentIndex] || projects[0];

  const handlePrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (total <= 1) return;
      const prevIndex = (currentIndex - 1 + total) % total;
      onNavigate(prevIndex);
    },
    [currentIndex, total, onNavigate]
  );

  const handleNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (total <= 1) return;
      const nextIndex = (currentIndex + 1) % total;
      onNavigate(nextIndex);
    },
    [currentIndex, total, onNavigate]
  );

  // Keyboard navigation: Escape to close, Left to prev, Right to next
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Lock background scrolling while open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  if (!isOpen || !currentProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="project-lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 select-none"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Project image preview: ${currentProject.title}`}
      >
        {/* Close Button — Top Right */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red cursor-pointer shadow-lg backdrop-blur-xs"
          aria-label="Close image preview"
        >
          <i className="fa-solid fa-xmark text-lg sm:text-xl" aria-hidden="true" />
        </button>

        {/* Previous Navigation Arrow — Left */}
        {total > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="fixed left-2 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red cursor-pointer shadow-lg backdrop-blur-xs"
            aria-label="Previous project image"
          >
            <i className="fa-solid fa-chevron-left text-base sm:text-lg" aria-hidden="true" />
          </button>
        )}

        {/* Next Navigation Arrow — Right */}
        {total > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="fixed right-2 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red cursor-pointer shadow-lg backdrop-blur-xs"
            aria-label="Next project image"
          >
            <i className="fa-solid fa-chevron-right text-base sm:text-lg" aria-hidden="true" />
          </button>
        )}

        {/* Main Content Area: Image + Title */}
        <div
          className="relative flex flex-col items-center justify-center max-w-full max-h-full"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Uncropped Image Display */}
          <div className="relative flex items-center justify-center overflow-hidden">
            <motion.img
              key={currentProject.image}
              src={currentProject.image}
              alt={currentProject.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[72vh] sm:max-h-[76vh] md:max-h-[78vh] w-auto max-w-[85vw] sm:max-w-[80vw] object-contain shadow-2xl rounded-xs select-none"
            />
          </div>

          {/* Project Title below Image */}
          <div className="mt-3 sm:mt-4 text-center max-w-2xl px-4 select-text">
            <h3 className="text-white font-montserrat font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase line-clamp-2">
              {currentProject.title}
            </h3>
            {total > 1 && (
              <p className="text-white/60 font-poppins text-[11px] sm:text-xs mt-1 tracking-wider uppercase">
                {currentIndex + 1} of {total}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
