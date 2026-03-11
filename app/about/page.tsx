import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Rudrendra Shrestha | Ruden Fitness',
  description: "Learn about Rudrendra Shrestha — Men's Physique Athlete, certified personal trainer, and elite fitness coach.",
};

const stats = [
  { value: '100+', label: 'Clients Coached' },
  { value: '5+', label: 'Years Experience' },
  { value: "Men's", label: 'Physique Athlete' },
  { value: '90', label: 'Day Transformation' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
          alt="About hero"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-inter text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            The Coach
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            ABOUT RUDRENDRA <span className="text-gold-gradient">SHRESTHA</span>
          </h1>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] overflow-hidden border border-accent/30">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                  alt="Rudrendra Shrestha"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <div>
              <SectionHeading
                subtitle="My Journey"
                title="FROM PASSION TO PURPOSE"
                description=""
              />
              <ScrollReveal direction="right">
                <div className="space-y-4 font-inter text-white/80 leading-relaxed">
                  <p>
                    My fitness journey started not in a polished gym, but from a personal struggle with body image and self-confidence. I was determined to change — and that determination transformed into an obsession with understanding the human body.
                  </p>
                  <p>
                    After years of self-taught training, I pursued formal certifications and immersed myself in sports science, nutrition, and physiology. Competing in Men&apos;s Physique showed me what true discipline and peak conditioning looks like — and I wanted to give others that same feeling.
                  </p>
                  <p>
                    Today, I apply everything I&apos;ve learned — from stage prep to everyday fat loss — to craft programs that work for real people with real lives. Every client gets a personalized approach because no two bodies are the same.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} direction="up" delay={i * 0.1}>
                <div className="border border-accent/30 p-6 text-center hover:border-accent transition-colors duration-200">
                  <p className="font-bebas text-4xl md:text-5xl text-gold-gradient">{stat.value}</p>
                  <p className="font-inter text-sm text-muted mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            subtitle="Coaching Philosophy"
            title="DISCIPLINE IS THE BRIDGE"
            description="Between goals and accomplishments. My approach combines science-backed training with the mental fortitude of a competitor."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { emoji: '🧬', title: 'Science-Based', desc: 'Every program is grounded in exercise science, not bro-science.' },
              { emoji: '🎯', title: 'Goal-Specific', desc: 'Whether cutting, bulking, or competing — your program is built for your goal.' },
              { emoji: '🔄', title: 'Progressive', desc: 'Consistent adaptation and progression ensure you never plateau.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 0.1}>
                <div className="glass-dark p-6 text-center">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-bebas text-2xl text-white mb-2">{item.title}</h3>
                  <p className="font-inter text-sm text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Gallery" title="IN THE GYM" centered />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="flex justify-center py-16 bg-secondary">
        <Button href="/contact" variant="primary" size="lg">
          Book a Consultation
        </Button>
      </div>

      <CTASection />
    </>
  );
}
