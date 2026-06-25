import Link from 'next/link';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  icon,
  className = '',
  target,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-label-mono text-label-mono font-semibold transition-all duration-200 rounded-full';

  const variants = {
    primary:
      'bg-primary text-on-primary hover:bg-indigo-accent active:scale-95',
    secondary:
      'bg-transparent border border-outline-variant/30 text-on-surface hover:border-outline-variant',
    outline:
      'bg-transparent border border-primary/20 text-primary hover:bg-primary/5',
    ghost:
      'text-on-surface-variant hover:text-primary hover:bg-surface-container/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-label-mono',
    lg: 'px-12 py-6 text-lg',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.default} ${className}`;

  const iconEl = icon && <span className="material-symbols-outlined text-[1.2em]">{icon}</span>;

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {iconEl}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {iconEl}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {iconEl}
      {children}
    </button>
  );
}
