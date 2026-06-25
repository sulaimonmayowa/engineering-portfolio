import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import Icon from '@/components/ui/Icon';

const features = [
  {
    icon: 'rocket_launch',
    title: 'Fast Execution',
  },
  {
    icon: 'smart_toy',
    title: 'AI Integration',
  },
  {
    icon: 'trending_up',
    title: 'Scalability',
  },
  {
    icon: 'layers',
    title: 'Full Stack',
  },
];

export default function About() {
  return (
    <section className="py-section-gap" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionLabel>about</SectionLabel>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-section-gap mt-4">
          <ScrollReveal>
            <div>
              <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 mb-8">
                Bridging intelligence and architecture.
              </h2>
              <p className="font-body-lg text-body-lg text-secondary max-w-xl">
                I specialize in building production-ready applications that
                leverage the latest in AI and full-stack technologies. My focus
                is on creating autonomous workflows and interfaces that
                don&apos;t just work—they scale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="bg-surface-container border border-outline-variant/30 p-8 rounded-xl flex flex-col items-start gap-4 hover:border-indigo-accent/30 transition-colors">
                  <Icon
                    name={feature.icon}
                    size="text-3xl"
                    className="text-indigo-accent"
                  />
                  <div className="font-label-mono text-label-mono uppercase font-bold">
                    {feature.title}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
