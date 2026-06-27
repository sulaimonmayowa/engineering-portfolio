import { notFound } from 'next/navigation';
import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import { getItemBySlug, getAllSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllSlugs('projects');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getItemBySlug('projects', slug);
  if (!project) return { title: 'Not Found' };

  return {
    title: `${project.frontmatter.title} — Sulaimon Mayowa`,
    description: project.frontmatter.excerpt || project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getItemBySlug('projects', slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  // Get all project slugs for Next/Previous navigation
  const allSlugs = getAllSlugs('projects');
  const currentIndex = allSlugs.indexOf(slug);
  const nextProject = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        {/* Back to Work Link */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-secondary hover:text-indigo-accent transition-colors font-label-mono text-label-mono group"
          >
            <Icon name="arrow_back" size="text-lg" />
            <span>Back to Work</span>
          </Link>
        </div>

        <article className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            {/* Hero */}
            <ScrollReveal>
              <div className="mb-4">
                <div className="flex items-center gap-3 font-label-mono text-label-mono text-secondary mb-4">
                  <span className="bg-indigo-accent/10 text-indigo-accent px-3 py-1 rounded-full font-semibold">
                    {frontmatter.category || 'Case Study'}
                  </span>
                  <span>{frontmatter.industry}</span>
                  <span>·</span>
                  <span>{frontmatter.year}</span>
                </div>
                <h1 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 leading-tight mb-6">
                  {frontmatter.title}
                </h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-8">
                  {frontmatter.excerpt}
                </p>
                <div className="flex flex-wrap gap-4">
                  {frontmatter.liveUrl && (
                    <a
                      href={frontmatter.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-label-mono text-label-mono hover:bg-indigo-accent transition-all"
                    >
                      Visit Live Site
                      <Icon name="open_in_new" size="text-base" />
                    </a>
                  )}
                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-label-mono text-label-mono border border-outline-variant/30 text-on-surface hover:border-outline-variant transition-all"
                  >
                    <Icon name="arrow_back" size="text-base" />
                    Back to Work
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Project Image */}
            <ScrollReveal delay={100}>
              <div className="auto-scroll-container mt-12 mb-20 h-[450px] bg-surface-container-high border border-outline-variant/30 rounded-3xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  className="auto-scroll-img"
                />
              </div>
            </ScrollReveal>

            {/* Content + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                {frontmatter.sections && (
                  <div className="space-y-10">
                    {frontmatter.sections.map((section, i) => (
                      <div key={i} className={i > 0 ? 'pt-8 border-t border-outline-variant/20' : ''}>
                        <p className="font-body-lg text-body-lg font-semibold text-on-surface mb-3">{section.heading}</p>
                        <p className="font-body-md text-body-md text-secondary leading-relaxed">{section.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <aside className="lg:col-span-1">
                <div className="bg-white border border-outline-variant/30 p-8 rounded-3xl space-y-8 sticky top-32">
                  <div className="space-y-5">
                    {frontmatter.client && (
                      <div>
                        <div className="font-label-mono text-label-mono text-secondary mb-1">Client</div>
                        <div className="font-semibold">{frontmatter.client}</div>
                      </div>
                    )}
                    {frontmatter.industry && (
                      <div>
                        <div className="font-label-mono text-label-mono text-secondary mb-1">Industry</div>
                        <div className="font-semibold">{frontmatter.industry}</div>
                      </div>
                    )}
                    {frontmatter.service && (
                      <div>
                        <div className="font-label-mono text-label-mono text-secondary mb-1">Service</div>
                        <div className="font-semibold">{frontmatter.service}</div>
                      </div>
                    )}
                    {frontmatter.year && (
                      <div>
                        <div className="font-label-mono text-label-mono text-secondary mb-1">Year</div>
                        <div className="font-semibold">{frontmatter.year}</div>
                      </div>
                    )}
                  </div>

                  {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className="pt-5 border-t border-outline-variant/20">
                      <div className="font-label-mono text-label-mono text-secondary mb-3">Built With</div>
                      <div className="flex flex-wrap gap-2">
                        {frontmatter.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-surface-container font-label-mono text-label-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {frontmatter.liveUrl && (
                    <div className="pt-5 border-t border-outline-variant/20">
                      <a
                        href={frontmatter.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-on-primary rounded-full font-label-mono text-label-mono hover:bg-indigo-accent transition-all"
                      >
                        Visit Live Site
                        <Icon name="open_in_new" size="text-base" />
                      </a>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* CTA — Right after case study, when intent is highest */}
        <section className="relative bg-[#0d0d0d] text-white overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6366f1]/30 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6366f1]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-[120px] md:py-[160px]">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto space-y-10">
                {/* Label */}
                <p className="font-label-mono text-label-mono text-[#6366f1] tracking-wider">
                  // work together
                </p>

                {/* Heading */}
                <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 leading-tight">
                  Let&apos;s build the{' '}
                  <span className="text-[#6366f1]">next one.</span>
                </h2>

                {/* Subtext */}
                <p className="font-body-lg text-body-lg text-white/50 max-w-lg mx-auto leading-relaxed">
                  No commitment. Just a conversation about your goals and how
                  we can make them happen. Currently accepting select projects.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <a
                    href="https://calendar.app.google/1KCkejPsY4t9R9bX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#6366f1] text-white rounded-full font-label-mono text-[16px] hover:bg-[#818cf8] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#6366f1]/30 hover:shadow-[#6366f1]/50"
                  >
                    <span className="material-symbols-outlined">calendar_today</span>
                    Book a Discovery Call
                  </a>
                  <a
                    href="mailto:a.sulaimonmayowa@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-label-mono text-[16px] border border-white/20 text-white hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-200"
                  >
                    <span className="material-symbols-outlined">mail</span>
                    Send an Email
                  </a>
                </div>

                {/* Trust footnote */}
                <p className="font-label-mono text-label-mono text-white/25 tracking-wider uppercase">
                  Trusted by 10+ growing businesses
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Next Project */}
        {nextProject && (
          <section className="border-t border-outline-variant/20">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
              <Link
                href={`/projects/${nextProject}`}
                className="group flex items-center justify-between"
              >
                <div>
                  <div className="font-label-mono text-label-mono text-secondary mb-2">Next Project</div>
                  <h3 className="font-h3 text-h3 group-hover:text-indigo-accent transition-colors">
                    {nextProject.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h3>
                </div>
                <Icon name="arrow_forward" size="text-3xl" className="text-secondary group-hover:text-indigo-accent group-hover:translate-x-2 transition-all" />
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
