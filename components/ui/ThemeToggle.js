'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  // Prevent flash of wrong icon before hydration
  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low border border-outline-variant/30 opacity-0"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container transition-all active:scale-95 cursor-pointer"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon (shown in dark mode to switch to light) */}
      <span
        className={`material-symbols-outlined text-lg transition-all duration-300 ${
          dark ? 'opacity-100 scale-100' : 'opacity-0 scale-50 absolute'
        }`}
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
      >
        light_mode
      </span>
      {/* Moon icon (shown in light mode to switch to dark) */}
      <span
        className={`material-symbols-outlined text-lg transition-all duration-300 ${
          !dark ? 'opacity-100 scale-100' : 'opacity-0 scale-50 absolute'
        }`}
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
      >
        dark_mode
      </span>
    </button>
  );
}
