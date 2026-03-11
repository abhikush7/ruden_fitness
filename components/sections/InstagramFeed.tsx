'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const feedImages = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    alt: 'Gym training',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    alt: 'Physique training',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    alt: 'Fitness journey',
  },
  {
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80',
    alt: 'Weight training',
  },
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80',
    alt: 'Workout session',
  },
  {
    src: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=400&q=80',
    alt: 'Body transformation',
  },
];

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Instagram"
          title="FOLLOW THE JOURNEY"
          description="Stay motivated. Follow @ruden_s for daily training content, transformation stories, and nutrition tips."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-10">
          {feedImages.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/ruden_s"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                  <FaInstagram size={28} />
                  <span className="font-inter text-xs font-semibold uppercase tracking-wider">
                    View Post
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href="https://instagram.com/ruden_s"
            variant="secondary"
            size="md"
          >
            <FaInstagram size={18} />
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
