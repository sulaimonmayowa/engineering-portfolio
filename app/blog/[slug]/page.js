import { notFound } from 'next/navigation';
import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import MDXContent from '@/components/ui/MDXContent';
import Icon from '@/components/ui/Icon';
import { getItemBySlug, getAllSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getItemBySlug('blog', slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt || post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getItemBySlug('blog', slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        {/* Back link */}
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-indigo-accent transition-colors font-label-mono text-label-mono group"
          >
            <Icon name="arrow_back" size="text-lg" />
            <span>Back to Blog</span>
          </Link>
        </div>

        <article className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <div className="font-label-mono text-label-mono text-indigo-accent mb-3">
                {post.frontmatter.category || 'Article'} &middot;{' '}
                {post.frontmatter.date}
              </div>
              <h1 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 font-semibold leading-tight mb-4">
                {post.frontmatter.title}
              </h1>
              {post.frontmatter.excerpt && (
                <p className="font-body-lg text-body-lg text-secondary">
                  {post.frontmatter.excerpt}
                </p>
              )}
            </div>

            <div className="prose-custom">
              <MDXContent source={post.content} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
