import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/sections/Footer';
import { getAllItems } from '@/lib/mdx';

export const metadata = {
  title: 'Projects',
  description:
    'A curated portfolio of full-stack engineering and AI automation projects delivering real business impact.',
};

export default function ProjectsPage() {
  const projects = getAllItems('projects');

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <ScrollReveal>
              <div className="max-w-2xl mb-20">
                <span className="font-label-mono text-label-mono text-secondary">
                  // portfolio
                </span>
                <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 mt-4 leading-tight">
                  Transforming Ideas Into{' '}
                  <span className="text-indigo-accent">Digital Reality</span>
                </h2>
              </div>
            </ScrollReveal>

            {projects.length === 0 ? (
              <div className="text-center py-32">
                <Icon name="folder_open" size="text-6xl" className="text-on-surface-variant/30 mb-6" />
                <h3 className="font-h3 text-h3 text-secondary mb-2">
                  More Projects Coming
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/60">
                  New case studies are being documented. Visit the homepage to
                  see featured work.
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 text-indigo-accent font-semibold hover:underline"
                >
                  Back to Home <Icon name="arrow_forward" size="text-sm" />
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                {projects.map((project, i) => (
                  <ScrollReveal key={project.slug} delay={i * 100}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group py-12 px-6 border-b border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between transition-colors hover:bg-surface-variant/40 cursor-pointer"
                    >
                      <div className="flex items-center gap-12">
                        <span className="font-label-mono text-label-mono text-secondary">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-h3 text-h3">{project.title}</h3>
                          <div className="flex gap-3 mt-2">
                            {(project.tags || []).slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="bg-surface-container px-3 py-1 rounded-full text-[12px] font-label-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 flex items-center gap-4 group-hover:translate-x-2 transition-transform">
                        <span className="font-label-mono text-label-mono">
                          View Project
                        </span>
                        <Icon name="north_east" size="text-lg" />
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
