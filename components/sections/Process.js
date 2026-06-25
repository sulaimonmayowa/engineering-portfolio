import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const steps = [
  { num: '01', title: 'DISCOVERY', desc: 'Deep diving into your constraints, objectives, and technical ecosystem to find the optimal path.' },
  { num: '02', title: 'ARCHITECT', desc: 'Designing robust system schemas and choosing the right stack for longevity and performance.' },
  { num: '03', title: 'ENGINEERING', desc: 'Translating blueprints into clean, maintainable, and highly efficient code with unit testing.', featured: true },
  { num: '04', title: 'DEPLOY', desc: 'Launching with automated CI/CD and establishing monitoring to ensure constant uptime.' },
];

export default function Process() {
  return (
    <section className="py-section-gap" id="process">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionLabel>the path</SectionLabel>
          <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 mt-4 mb-12">
            How I deliver excellence.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100}>
              <div
                className={`relative ${
                  step.featured
                    ? 'bg-primary text-on-primary p-10 rounded-xl min-h-[260px] md:h-[300px] flex flex-col justify-between shadow-xl scale-105 z-10'
                    : 'bg-surface-container-lowest border border-outline-variant/30 p-10 rounded-xl min-h-[260px] md:h-[300px] flex flex-col justify-between'
                }`}
              >
                <span
                  className={`absolute top-4 right-6 font-h1 text-[100px] opacity-[0.03] select-none pointer-events-none`}
                >
                  {step.num}
                </span>
                <div>
                  <div
                    className={`font-label-mono text-label-mono font-bold ${
                      step.featured ? 'text-indigo-accent' : 'text-secondary'
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
                <p
                  className={`text-sm ${
                    step.featured ? 'text-on-primary/70' : 'text-secondary'
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
