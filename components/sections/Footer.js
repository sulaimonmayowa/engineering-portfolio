import Link from 'next/link';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sulaimon-mayowa/' },
  { label: 'GitHub', href: 'https://github.com/sulaimonmayowa' },
  { label: 'X / Twitter', href: 'https://x.com/sulaimonmayowaA' },
  { label: 'Email', href: 'mailto:a.sulaimonmayowa@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/20 py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter">
        <Link
          href="/"
          className="font-h3 text-h3 font-bold text-primary"
        >
          sm.
        </Link>

        <div className="font-label-mono text-label-mono text-secondary text-center">
          &copy; {new Date().getFullYear()} Sulaimon Mayowa. Built for performance.
        </div>

        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
