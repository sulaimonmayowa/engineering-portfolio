'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    setIsTouch(prefersReducedMotion || isTouchDevice);
    
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow || prefersReducedMotion || isTouchDevice) return;

    const getIsDark = () => document.documentElement.classList.contains('dark');

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    const handleMouseLeave = () => {
      cursor.style.display = 'none';
      glow.style.display = 'none';
    };

    const handleMouseEnter = () => {
      cursor.style.display = 'block';
      glow.style.display = 'block';
    };

    // Scale cursor on interactive elements
    const handleMouseOver = (e) => {
      const isDark = getIsDark();
      const target = e.target.closest('a, button, .group, input, textarea, [role="button"]');
      if (target) {
        cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
        cursor.style.background = '#630ed4';
      } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = isDark ? '#ffffff' : '#000000';
      }
    };

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const isDark = getIsDark();
      cursor.style.background = isDark ? '#ffffff' : '#000000';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}
