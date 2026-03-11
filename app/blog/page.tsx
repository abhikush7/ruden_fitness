import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Fitness Blog | Ruden Fitness',
  description: 'Training tips, nutrition insights, and mindset strategies from elite coach Rudrendra Shrestha.',
};

type Category = 'Nutrition' | 'Training' | 'Mindset' | 'Lifestyle';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    slug: 'progressive-overload-guide',
    title: 'Progressive Overload: The Foundation of Every Successful Training Program',
    excerpt:
      "If you're not progressing, you're regressing. Learn how to implement progressive overload correctly to ensure continuous muscle growth and strength gains.",
    category: 'Training',
    date: 'Nov 20, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
  },
  {
    slug: 'protein-intake-muscle-building',
    title: 'How Much Protein Do You Actually Need to Build Muscle?',
    excerpt:
      'Protein is the building block of muscle, but how much is enough? We break down the science and provide practical targets for every goal.',
    category: 'Nutrition',
    date: 'Nov 12, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    slug: 'discipline-vs-motivation',
    title: 'Discipline Over Motivation: The Mindset of Elite Athletes',
    excerpt:
      "Motivation is fleeting. Discipline is permanent. Here's how to build the mental framework that separates champions from average gym-goers.",
    category: 'Mindset',
    date: 'Nov 5, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    slug: 'sleep-recovery-performance',
    title: 'Why Sleep is the Most Underrated Performance Tool',
    excerpt:
      "You can optimize every workout and meal, but without quality sleep, you're leaving massive gains on the table. Here's the science and the fix.",
    category: 'Lifestyle',
    date: 'Oct 28, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
  },
  {
    slug: 'cutting-diet-strategies',
    title: '5 Evidence-Based Strategies for Successful Fat Loss',
    excerpt:
      "Crash diets don't work. Sustainable fat loss requires smart strategy. Here are 5 methods backed by research and real-world coaching results.",
    category: 'Nutrition',
    date: 'Oct 18, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80',
  },
  {
    slug: 'mens-physique-competition-prep',
    title: "Preparing for Your First Men's Physique Competition: A Complete Guide",
    excerpt:
      "Thinking about stepping on stage? Here's everything you need to know about peak week, posing, tanning, and getting competition-ready.",
    category: 'Training',
    date: 'Oct 5, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
  },
];

const categoryColors: Record<Category, string> = {
  Nutrition: 'text-green-400 border-green-400/40',
  Training: 'text-blue-400 border-blue-400/40',
  Mindset: 'text-purple-400 border-purple-400/40',
  Lifestyle: 'text-orange-400 border-orange-400/40',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&q=80"
          alt="Blog hero"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-inter text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            Knowledge Hub
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            FITNESS INSIGHTS <span className="text-gold-gradient">&amp; TIPS</span>
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Articles"
            title="LATEST POSTS"
            description="Evidence-based training, nutrition, and mindset content from a competitive athlete and elite coach."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} direction="up" delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="glass-dark overflow-hidden h-full flex flex-col hover:border-accent/40 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`font-inter text-xs font-semibold uppercase tracking-wider border px-2 py-0.5 ${categoryColors[post.category]}`}
                        >
                          {post.category}
                        </span>
                        <span className="font-inter text-xs text-muted">{post.readTime}</span>
                      </div>
                      <h2 className="font-inter font-semibold text-white text-base leading-snug mb-3 group-hover:text-accent transition-colors duration-200 flex-1">
                        {post.title}
                      </h2>
                      <p className="font-inter text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-inter text-xs text-muted">{post.date}</span>
                        <span className="font-inter text-xs text-accent font-semibold group-hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
