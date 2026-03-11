'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const stats = [
  { value: '100+', label: 'Clients Coached' },
  { value: '5+', label: 'Years Training' },
  { value: "Men's", label: 'Physique Athlete' },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Gold accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
                {/* Gold border frame */}
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent z-0" />
                <div className="relative z-10 w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                    alt="Rudrendra Shrestha - Personal Trainer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-4 right-0 lg:-right-6 glass-dark px-5 py-3 border-l-2 border-accent"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-bebas text-2xl text-accent">@ruden_s</p>
                <p className="font-inter text-xs text-muted">Instagram</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal direction="right">
              <p className="font-inter text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                Meet Your Coach
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-4">
                RUDRENDRA{' '}
                <span className="text-gold-gradient">SHRESTHA</span>
              </h2>
              <div className="h-[2px] w-16 bg-gold-gradient mb-6" />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <p className="font-inter text-white/80 text-base md:text-lg leading-relaxed mb-5">
                I&apos;m Rudrendra Shrestha — a certified personal trainer, competitive Men&apos;s Physique athlete, and passionate advocate for transformative fitness. My journey began with a drive to push human performance to its absolute limits.
              </p>
              <p className="font-inter text-muted text-base leading-relaxed mb-8">
                With over 5 years of hands-on coaching experience, I&apos;ve helped 100+ clients achieve their fitness goals through science-backed training methodologies, precision nutrition, and an unwavering commitment to excellence. Whether you&apos;re stepping into a gym for the first time or preparing for your first competition — I build programs that deliver real results.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-accent/30 p-4 text-center hover:border-accent transition-colors duration-200"
                  >
                    <p className="font-bebas text-3xl md:text-4xl text-gold-gradient">{stat.value}</p>
                    <p className="font-inter text-xs text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <Button href="/about" variant="primary" size="md">
                Full Story
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
