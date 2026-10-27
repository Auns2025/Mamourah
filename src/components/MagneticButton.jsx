import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * EFFECT 03: Magnetic-style CTA button hover
 * Desktop-only subtle movement with keyboard-safe fallback and reduced-motion detection.
 */
export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'white'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || window.innerWidth < 1024 || disabled) return;
    const { clientX, clientY } = e;
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const { left, top, width, height } = rect;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    // Subdued magnetic displacement: max ~6px
    setPosition({
      x: distanceX * 0.18,
      y: distanceY * 0.18
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  // Variant styling
  const variantStyles = {
    primary:
      'bg-brand-red text-white hover:bg-brand-deepRed active:bg-brand-deepRed shadow-subtle hover:shadow-redGlow border border-brand-red hover:border-brand-deepRed',
    secondary:
      'bg-brand-black text-white hover:bg-neutral-800 active:bg-neutral-900 border border-brand-black shadow-subtle',
    outline:
      'bg-transparent text-brand-black hover:text-brand-red border border-brand-concrete hover:border-brand-red hover:bg-brand-lightRed/30',
    white:
      'bg-white text-brand-black hover:text-brand-red hover:bg-brand-ivory border border-white/80 shadow-card'
  };

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 tracking-wide font-semibold',
    md: 'text-xs sm:text-sm px-6 py-3 tracking-wide font-semibold uppercase',
    lg: 'text-sm sm:text-base px-8 py-4 tracking-architectural font-bold uppercase'
  };

  const baseClasses = `relative inline-flex items-center justify-center gap-2.5 font-montserrat transition-all duration-300 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`;

  const transformStyle =
    !prefersReducedMotion && isHovered
      ? {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.15s ease-out'
        }
      : {
          transform: 'translate(0px, 0px)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
        className={baseClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
}
