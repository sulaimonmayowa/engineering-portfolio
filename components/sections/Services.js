import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import Icon from '@/components/ui/Icon';

const services = [
  {
    icon: 'terminal',
    title: 'Web Engineering',
    desc: 'Building high-performance React applications with pixel-perfect precision and server-side optimization.',
  },
  {
    icon: 'psychology',
    title: 'AI Solutions',
    desc: 'Architecting custom LLM pipelines, autonomous agents, and RAG systems for enterprise automation.',
    featured: true,
  },
  {
    icon: 'hub',
    title: 'Workflow Arch',
    desc: 'Streamlining complex business logic through automated integrations and serverless infrastructure.',
  },
];

export default function Services() {
  return (
    <section className="py-section-gap" id="services">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionLabel>services</SectionLabel>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div
                className={`relative group overflow-hidden ${
                  service.featured
                    ? 'bg-primary text-on-primary p-10 rounded-2xl min-h-[340px] md:h-[400px] flex flex-col justify-end shadow-2xl'
                    : 'bg-surface-container-low border border-outline-variant/30 p-10 rounded-2xl min-h-[340px] md:h-[400px] flex flex-col justify-end'
                }`}
              >
                {/* Background glow */}
                <div
                  className={`absolute ${
                    service.featured
                      ? 'bottom-0 left-0 w-48 h-48 bg-indigo-accent/20 rounded-full blur-[80px]'
                      : 'top-0 right-0 w-32 h-32 bg-indigo-accent/5 rounded-full blur-3xl group-hover:bg-indigo-accent/20 transition-all'
                  }`}
                />

                <Icon
                  name={service.icon}
                  size="text-4xl"
                  className={`mb-6 ${
                    service.featured ? 'text-indigo-accent' : ''
                  }`}
                />
                <h3 className="font-h3 text-h3 mb-4">{service.title}</h3>
                <p
                  className={`${
                    service.featured ? 'text-on-primary/70' : 'text-secondary'
                  }`}
                >
                  {service.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
