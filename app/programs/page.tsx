'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiCheck, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CTASection from '@/components/sections/CTASection';

const programs = [
  {
    id: 'online',
    name: 'Online Coaching',
    icon: '💻',
    description:
      'World-class coaching delivered entirely online. Get elite results from the comfort of your home gym or any gym worldwide.',
    features: [
      'Custom periodized workout plan',
      'Personalized nutrition guide',
      'Weekly video check-ins',
      'Daily progress tracking app',
      'Direct WhatsApp/chat support',
      'Form review via video',
      'Supplement guidance',
      'Mindset coaching sessions',
    ],
    cta: 'Apply Now',
    ctaVariant: 'secondary' as const,
    popular: false,
  },
  {
    id: 'personal',
    name: 'Personal Training',
    icon: '🏋️',
    description:
      '1-on-1 in-person sessions with Rudrendra. Maximum intensity, real-time corrections, and personalized attention every session.',
    features: [
      '1-on-1 training sessions',
      'Real-time form correction',
      'Posture & movement assessment',
      'Muscle-specific hypertrophy programming',
      'Personalized nutrition coaching',
      'Weekly measurements & photos',
      'Competition prep available',
      'Priority scheduling',
    ],
    cta: 'Book Consultation',
    ctaVariant: 'primary' as const,
    popular: true,
  },
  {
    id: '90day',
    name: '90-Day Transformation',
    icon: '🔥',
    description:
      'The complete body transformation package. 90 days of focused programming designed to deliver visible, measurable results.',
    features: [
      'Full 90-day workout program',
      'Complete nutrition strategy',
      'Weekly progress check-ins',
      'Official before/after photos',
      'Lifetime program access',
      'Community support group',
      'Monthly 1:1 calls',
      'Results guarantee',
    ],
    cta: 'Apply Now',
    ctaVariant: 'secondary' as const,
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: 'Custom Workout Plan', online: true, personal: true, ninetyDay: true },
  { feature: 'Nutrition Coaching', online: true, personal: true, ninetyDay: true },
  { feature: 'Progress Tracking', online: true, personal: true, ninetyDay: true },
  { feature: 'In-Person Sessions', online: false, personal: true, ninetyDay: false },
  { feature: 'Form Correction', online: false, personal: true, ninetyDay: false },
  { feature: 'Competition Prep', online: false, personal: true, ninetyDay: false },
  { feature: 'Before/After Photos', online: false, personal: false, ninetyDay: true },
  { feature: 'Lifetime Access', online: false, personal: false, ninetyDay: true },
];

const faqs = [
  {
    q: 'How do I get started?',
    a: 'Simply click "Apply Now" or "Book Consultation" to fill out a short intake form. Rudrendra will review your goals and recommend the best program for you.',
  },
  {
    q: 'Do I need gym equipment for online coaching?',
    a: 'Programs are adaptable to your available equipment — from fully-equipped commercial gyms to home setups. Your plan will be customized accordingly.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most clients see visible changes in 4-8 weeks with consistent adherence. The 90-Day Transformation is designed to deliver dramatic results in 3 months.',
  },
  {
    q: 'Is nutrition coaching included?',
    a: 'Yes! All programs include personalized nutrition guidance tailored to your goals, dietary preferences, and lifestyle.',
  },
  {
    q: 'What if I have injuries or physical limitations?',
    a: 'Every program is built around your body. Rudrendra will account for any injuries or limitations and provide safe, effective alternatives.',
  },
  {
    q: 'How do check-ins work for online coaching?',
    a: 'Weekly check-ins are conducted via WhatsApp or video call. You will share progress photos, measurements, and discuss any adjustments needed.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-accent/20">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-inter font-semibold text-white pr-4">{q}</span>
        {open ? (
          <HiChevronUp className="text-accent shrink-0" size={20} />
        ) : (
          <HiChevronDown className="text-accent shrink-0" size={20} />
        )}
      </button>
      {open && (
        <p className="font-inter text-muted text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
          alt="Programs hero"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-inter text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            Choose Your Path
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            TRAINING <span className="text-gold-gradient">PROGRAMS</span>
          </h1>
        </div>
      </section>

      {/* Program Cards */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Programs"
            title="FIND YOUR FIT"
            description="Three distinct pathways to elite fitness — each designed to meet you where you are and take you where you want to be."
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
                      <li
                        key={feature}
                        className="flex items-center gap-3 font-inter text-sm text-white/80"
                      >
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

      {/* Comparison Table */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Compare" title="PROGRAM COMPARISON" centered />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-accent/30">
                  <th className="text-left font-inter text-sm text-muted py-4 pr-6 w-1/2">
                    Feature
                  </th>
                  <th className="font-bebas text-lg text-accent text-center py-4 px-4">Online</th>
                  <th className="font-bebas text-lg text-accent text-center py-4 px-4">
                    Personal
                  </th>
                  <th className="font-bebas text-lg text-accent text-center py-4 px-4">90-Day</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="font-inter text-sm text-white/80 py-4 pr-6">{row.feature}</td>
                    {[row.online, row.personal, row.ninetyDay].map((val, i) => (
                      <td key={i} className="text-center py-4 px-4">
                        {val ? (
                          <HiCheck className="text-accent mx-auto" size={18} />
                        ) : (
                          <span className="text-muted text-lg">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" title="COMMON QUESTIONS" centered />
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
