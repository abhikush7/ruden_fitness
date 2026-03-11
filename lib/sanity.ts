import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: { asset: { url: string }; alt?: string };
  publishedAt: string;
  categories?: { title: string }[];
  body?: unknown[];
}

export async function getAllPosts(): Promise<SanityPost[]> {
  if (!projectId) return [];
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage { asset->{ url }, alt },
    publishedAt,
    "categories": categories[]->{ title }
  }`;
  return sanityClient.fetch<SanityPost[]>(query);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!projectId) return null;
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage { asset->{ url }, alt },
    publishedAt,
    "categories": categories[]->{ title },
    body
  }`;
  return sanityClient.fetch<SanityPost>(query, { slug });
}
