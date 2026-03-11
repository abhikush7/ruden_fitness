'use client';

import { HiCheck } from 'react-icons/hi';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const programs = [
  {
    id: 'online',
    name: 'Online Coaching',
    icon: '💻',
    description: 'World-class coaching delivered remotely. Achieve elite results from anywhere in the world.',
    features: [
      'Custom workout plan',
      'Nutrition guide',
      'Weekly check-ins',
      'Progress tracking',
      'Direct WhatsApp support',
    ],
    cta: 'Apply Now',
    ctaVariant: 'secondary' as const,
    popular: false,
  },
  {
    id: 'personal',
    name: 'Personal Training',
    icon: '🏋️',
    description: '1-on-1 in-person sessions with Rudrendra for maximum results and real-time feedback.',
    features: [
      '1-on-1 sessions',
      'Posture correction',
      'Muscle building',
      'Personalized nutrition',
      'Competition prep available',
    ],
    cta: 'Book Consultation',
    ctaVariant: 'primary' as const,
    popular: true,
  },
  {
    id: '90day',
    name: '90-Day Transformation',
    icon: '🔥',
    description: 'Complete body transformation in 90 days — documented with before/after photos.',
    features: [
      'Full workout program',
      'Nutrition strategy',
      'Weekly check-ins',
      'Before/after photos',
      'Lifetime program access',
    ],
    cta: 'Apply Now',
    ctaVariant: 'secondary' as const,
    popular: false,
  },
];

export default function ProgramCards() {
  return (
    <section className="section-padding bg-secondary relative">
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gold-gradient opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Offer"
          title="TRAINING PROGRAMS"
          description="Choose the program that fits your goals and lifestyle."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <ScrollReveal key={program.id} direction="up" delay={i * 0.15}>
              <GlassCard
                hover
                className={`relative h-full flex flex-col ${
                  program.popular ? 'border border-accent shadow-lg shadow-accent/20' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-black text-xs font-inter font-bold px-4 py-1 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="font-bebas text-3xl text-white mb-2">{program.name}</h3>
                <p className="font-inter text-muted text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-inter text-sm text-white/80">
                      <HiCheck className="text-accent shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant={program.ctaVariant} size="md" className="w-full">
                  {program.cta}
                </Button>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
