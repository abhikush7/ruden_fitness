'use client';

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const transformations = [
  {
    id: 1,
    client: 'Arjun M.',
    result: 'Lost 15kg in 3 months',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  },
  {
    id: 2,
    client: 'Siddharth K.',
    result: 'Gained 8kg muscle',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  },
  {
    id: 3,
    client: 'Pratik R.',
    result: 'Complete transformation',
    beforeSrc: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    afterSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  },
];

export default function TransformationGallery() {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Client Results"
          title="REAL RESULTS"
          description="Slide to see the incredible before & after transformations achieved through elite coaching."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <ScrollReveal key={t.id} direction="up" delay={i * 0.15}>
              <div className="relative group overflow-hidden border border-accent/20 hover:border-accent/50 transition-colors duration-300">
                <div className="aspect-[3/4]">
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
                </div>

                {/* Labels */}
                <div className="absolute top-3 left-3 bg-black/70 px-2 py-1 text-xs font-inter font-semibold text-white/70 uppercase tracking-wider">
                  Before
                </div>
                <div className="absolute top-3 right-3 bg-accent/90 px-2 py-1 text-xs font-inter font-semibold text-black uppercase tracking-wider">
                  After
                </div>

                {/* Client info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="font-bebas text-xl text-white">{t.client}</p>
                  <p className="font-inter text-sm text-accent">{t.result}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
