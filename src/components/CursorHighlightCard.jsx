import React, { useRef, useState } from 'react';

/**
 * EFFECT 09: Cursor-responsive project card highlight (Desktop only)
 * Creates a subtle architectural spotlight tracking the pointer over card surfaces.
 */
export default function CursorHighlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(182, 0, 12, 0.06)',
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden group bg-white border border-brand-border/60 transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Desktop Spotlight Highlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 hidden lg:block z-20"
        style={{
          background: isHovered
            ? `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 75%)`
            : 'none'
        }}
      />
      {children}
    </div>
  );
}
