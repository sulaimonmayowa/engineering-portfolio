import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

/**
 * Get all slugs for a content type.
 */
export function getAllSlugs(type) {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get frontmatter and slug for all items of a content type.
 */
export function getAllItems(type) {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(dir, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);
      return { slug, ...data };
    })
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

/**
 * Get a single item's frontmatter and content by slug.
 */
export function getItemBySlug(type, slug) {
  const filePath = path.join(contentDir, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  return { slug, frontmatter: data, content };
}
