import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import Icon from '@/components/ui/Icon';

const projects = [
  {
    num: '01',
    title: 'Smarts Magazine',
    slug: 'smarts-magazine',
    tags: ['WORDPRESS', 'ELEMENTOR PRO', 'SEO'],
  },
  {
    num: '02',
    title: 'Prime Booth Edu Advisory',
    slug: 'primebooth',
    tags: ['WORDPRESS', 'ELEMENTOR PRO', 'PAYMENTS'],
  },
  {
    num: '03',
    title: 'IEH Consult Ltd',
    slug: 'ie-hub',
    tags: ['WORDPRESS', 'CRM', 'SEO'],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-section-gap" id="work">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <SectionLabel>projects</SectionLabel>
              <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 mt-4">
                Selected Works
              </h2>
            </div>
            <Link
              href="/projects"
              className="font-label-mono text-label-mono border-b border-primary pb-1 mb-4 hover:text-indigo-accent hover:border-indigo-accent transition-colors hidden md:inline-flex"
            >
              View All Archive
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 100}>
              <Link
                href={`/projects/${project.slug}`}
                className="group py-8 md:py-12 px-4 md:px-6 border-b border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between transition-colors hover:bg-surface-variant/40 cursor-pointer touch-manipulation"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="font-label-mono text-label-mono text-secondary">
                    {project.num}
                  </span>
                  <div>
                    <h3 className="font-h3 text-h3 md:text-h3">{project.title}</h3>
                    <div className="flex gap-3 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-container px-2 md:px-3 py-1 rounded-full text-[11px] md:text-[12px] font-label-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4 group-hover:translate-x-2 transition-transform">
                  <span className="font-label-mono text-label-mono">
                    View Project
                  </span>
                  <Icon name="north_east" size="text-lg" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile view all */}
        <ScrollReveal>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="font-label-mono text-label-mono border-b border-primary pb-1 hover:text-indigo-accent hover:border-indigo-accent transition-colors"
            >
              View All Archive
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
