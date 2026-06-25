import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/sections/Footer';
import { getAllItems } from '@/lib/mdx';

export const metadata = {
  title: 'Blog',
  description:
    'Insights on full-stack engineering, AI agent development, workflow automation, and scaling technology.',
};

export default function BlogPage() {
  const posts = getAllItems('blog');

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
                  // insights
                </span>
                <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 mt-4 leading-tight">
                  Thoughts on Engineering{' '}
                  <span className="text-indigo-accent">&amp; AI</span>
                </h2>
              </div>
            </ScrollReveal>

            {posts.length === 0 ? (
              <div className="text-center py-32">
                <Icon name="edit_note" size="text-6xl" className="text-on-surface-variant/30 mb-6" />
                <h3 className="font-h3 text-h3 text-secondary mb-2">
                  Coming Soon
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/60">
                  Blog posts are on the way. Check back for insights on
                  engineering, AI, and automation.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={i * 100}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block group bg-white border border-outline-variant/30 rounded-2xl p-8 hover:border-indigo-accent/30 transition-all hover-lift"
                    >
                      <div className="font-label-mono text-label-mono text-indigo-accent mb-3">
                        {post.category || 'Article'}
                      </div>
                      <h4 className="font-h3 text-h3 mb-3 group-hover:text-indigo-accent transition-colors">
                        {post.title}
                      </h4>
                      <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3">
                        {post.excerpt || post.description}
                      </p>
                      <div className="flex items-center justify-between font-label-mono text-label-mono text-secondary">
                        <span>{post.date}</span>
                        <span className="text-indigo-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read <Icon name="arrow_forward" size="text-sm" />
                        </span>
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
