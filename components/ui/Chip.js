export default function Chip({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-surface-container text-on-surface-variant',
    primary: 'bg-primary/10 text-primary',
    dark: 'border border-white/20 text-white bg-white/5',
    accent: 'bg-indigo-accent/10 text-indigo-accent',
  };

  return (
    <span
      className={`px-3 py-1 rounded-full font-label-mono text-label-mono ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}
