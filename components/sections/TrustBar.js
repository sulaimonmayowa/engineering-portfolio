import ScrollReveal from '@/components/ui/ScrollReveal';

const technologies = [
  'React', 'Next.js', 'Tailwind CSS', 'TypeScript',
  'Node.js', 'Python', 'PostgreSQL', 'LangChain',
  'OpenAI', 'Supabase', 'Docker', 'AWS',
];

export default function TrustBar() {
  return (
    <section className="py-section-gap border-y border-outline-variant/20 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Tech Stack */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-30 hover:opacity-100 transition-all duration-700">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="font-label-mono text-label-mono text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
