export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = true,
}) {
  const variants = {
    default:
      'card-surface',
    featured:
      'bg-primary text-on-primary rounded-2xl',
    panel:
      'bg-surface-container-low border border-outline-variant/30 rounded-2xl',
    dark: 'bg-[#1b1b1b] text-white rounded-2xl border border-white/10',
  };

  return (
    <div
      className={`p-card-padding ${variants[variant] || variants.default} ${
        hover ? 'transition-all duration-300 hover-lift proximity-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
