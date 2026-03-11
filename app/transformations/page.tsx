import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Client Transformations | Ruden Fitness',
  description: 'See real before and after transformations achieved through elite coaching by Rudrendra Shrestha.',
};

const transformations = [
  {
    id: 1,
    client: 'Arjun M.',
    result: 'Lost 15kg in 3 months',
    duration: '90 days',
    program: 'Online Coaching',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    story: 'Arjun came in with no gym experience. Through structured programming and nutrition coaching, he lost 15kg while gaining significant muscle.',
  },
  {
    id: 2,
    client: 'Siddharth K.',
    result: 'Gained 8kg muscle',
    duration: '6 months',
    program: 'Personal Training',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    story: 'Siddharth wanted to build serious mass. Through hypertrophy-focused training and a caloric surplus plan, he gained 8kg of quality muscle.',
  },
  {
    id: 3,
    client: 'Pratik R.',
    result: 'Complete physique overhaul',
    duration: '6 months',
    program: '90-Day Transformation',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    story: 'Pratik achieved a complete body recomposition, losing fat while simultaneously gaining muscle through precision training and diet.',
  },
  {
    id: 4,
    client: 'Rahul S.',
    result: 'Lost 20kg',
    duration: '5 months',
    program: 'Online Coaching',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    story: 'Rahul used online coaching and lost 20kg in 5 months. His consistency and adherence to the plan made his results exceptional.',
  },
  {
    id: 5,
    client: 'Vikram T.',
    result: 'Competition ready',
    duration: '4 months',
    program: 'Personal Training',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    story: 'Vikram aimed to compete for the first time. Rudrendra guided him through peak week protocols, posing, and stage-ready conditioning.',
  },
  {
    id: 6,
    client: 'Deepak B.',
    result: 'Lost 12kg, gained strength',
    duration: '3 months',
    program: '90-Day Transformation',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    story: 'Deepak transformed his body in just 90 days, dramatically improving both his aesthetics and functional strength.',
  },
];

export default function TransformationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
          alt="Transformations hero"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-inter text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            Before &amp; After
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            REAL TRANSFORMATIONS.{' '}
            <span className="text-gold-gradient">REAL RESULTS.</span>
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Client Results"
            title="BEFORE & AFTER"
            description="Drag the slider to reveal each transformation. These are real clients with real results."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((t, i) => (
              <ScrollReveal key={t.id} direction="up" delay={i * 0.1}>
                <div className="glass-dark overflow-hidden group">
                  <div className="aspect-[3/4] relative">
                    <ReactCompareSlider
                      itemOne={
                        <ReactCompareSliderImage
                          src={t.beforeSrc}
                          alt={`Before - ${t.client}`}
                          style={{ objectFit: 'cover' }}
                        />
                      }
                      itemTwo={
                        <ReactCompareSliderImage
                          src={t.afterSrc}
                          alt={`After - ${t.client}`}
                          style={{ objectFit: 'cover' }}
                        />
                      }
                      style={{ height: '100%', width: '100%' }}
                    />
                    <div className="absolute top-3 left-3 bg-black/70 px-2 py-1 text-xs font-inter font-semibold text-white/70 uppercase tracking-wider">
                      Before
                    </div>
                    <div className="absolute top-3 right-3 bg-accent/90 px-2 py-1 text-xs font-inter font-semibold text-black uppercase tracking-wider">
                      After
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bebas text-2xl text-white">{t.client}</h3>
                      <span className="font-inter text-xs text-accent border border-accent/40 px-2 py-1">
                        {t.program}
                      </span>
                    </div>
                    <p className="font-inter text-sm font-semibold text-accent mb-2">{t.result}</p>
                    <p className="font-inter text-xs text-muted leading-relaxed">{t.story}</p>
                    <div className="mt-3 flex items-center gap-1 text-muted">
                      <span className="font-inter text-xs">Duration:</span>
                      <span className="font-inter text-xs text-white/70">{t.duration}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
