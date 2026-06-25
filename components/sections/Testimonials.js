import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import Icon from '@/components/ui/Icon';

const testimonials = [
  {
    quote:
      "Sulaimon's redesign of our website was on another level compared to our previous developer. The design is premium, the process was smooth, and the final result is exactly what we needed. Truly flawless work.",
    author: 'Kate.',
    role: 'M.D, IE-Hub Ltd',
  },
  {
    quote:
      'The task reduction we saw after implementing the AI agents Sulaimon built for us was exactly 50%. It transformed our entire operations.',
    author: 'Sarah Jenkins',
    role: 'COO, Global Logistics',
    featured: true,
  },
  {
    quote:
      'From the first discovery call to the final launch, the process was seamless. The final product feels incredibly premium and works flawlessly.',
    author: 'David O.',
    role: 'CEO, PrimeBooth Advisory Ltd',
  },
];

export default function Testimonials() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionLabel>feedback</SectionLabel>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 100}>
              <div
                className={`${
                  t.featured
                    ? 'bg-primary text-on-primary p-10 rounded-2xl shadow-2xl relative overflow-hidden'
                    : 'bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30'
                }`}
              >
                {t.featured && (
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Icon name="format_quote" size="text-4xl" />
                  </div>
                )}
                <p
                  className={`italic mb-8 relative z-10 ${
                    t.featured ? 'text-on-primary/80' : 'text-secondary'
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                      t.featured ? 'bg-white/20 text-on-primary' : 'bg-surface-container-highest text-on-surface'
                    }`}
                  >
                    {t.author
                      .replace(/\./g, '')
                      .split(' ')
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.author}</div>
                    <div
                      className={`text-[12px] ${
                        t.featured ? 'text-on-primary/60' : 'text-secondary'
                      }`}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
