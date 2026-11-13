import raw from "./posts.json";

export type Paragraph = { tag: string; html: string };
export type Category = { name: string; slug: string };

export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  categories: Category[];
  image: string | null;
  videoId: string | null;
  excerpt: string;
  paragraphs: Paragraph[];
};

export const posts = raw as Post[];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
