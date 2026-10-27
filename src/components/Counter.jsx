import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * ANIMATION 05: Verified experience number counter animation
 * Computes years from 2003 and animates smoothly on scroll into viewport.
 */
export default function Counter({
  from = 0,
  to,
  duration = 1800,
  suffix = '+',
  prefix = '',
  className = ''
}) {
  const [current, setCurrent] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-40px' });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(to);
      return;
    }

    let startTime = null;
    const startVal = from;
    const endVal = to;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth out-cubic easing
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(startVal + (endVal - startVal) * easeProgress);
      setCurrent(val);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrent(endVal);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef} className={`tabular-nums font-montserrat font-bold ${className}`}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
