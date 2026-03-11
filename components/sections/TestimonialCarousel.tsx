'use client';

import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Arjun M.',
    result: 'Lost 15kg',
    quote:
      'Training with Rudrendra completely transformed my physique and confidence. His methods are unmatched — I finally have the body I always wanted.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    stars: 5,
  },
  {
    id: 2,
    name: 'Siddharth K.',
    result: 'Gained 8kg muscle',
    quote:
      "The 90-day program gave me a body I never thought possible. Rudrendra's programming and nutrition guidance are elite-level.",
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&q=80',
    stars: 5,
  },
  {
    id: 3,
    name: 'Pratik R.',
    result: 'Complete transformation',
    quote:
      'Best investment I have ever made for my health and fitness journey. The accountability and support are unlike any other program.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    stars: 5,
  },
  {
    id: 4,
    name: 'Rahul S.',
    result: 'Lost 20kg',
    quote:
      "His discipline and knowledge is unmatched. Highly recommend to anyone serious about changing their body and lifestyle!",
    photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&q=80',
    stars: 5,
  },
  {
    id: 5,
    name: 'Vikram T.',
    result: 'Competition ready',
    quote:
      'I competed in my first physique competition thanks to Rudrendra. He knew exactly how to peak me at the right time.',
    photo: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=120&q=80',
    stars: 5,
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="font-bebas text-[20rem] text-accent leading-none select-none absolute -top-10 -left-10 opacity-30">
          &ldquo;
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Client Stories"
          title="WHAT CLIENTS SAY"
          centered
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-[0_0_100%] min-w-0 px-4"
              >
                <div className="glass-dark p-8 md:p-12 text-center">
                  {/* Quote mark */}
                  <div className="font-bebas text-6xl text-accent leading-none mb-4">&ldquo;</div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <HiStar key={i} className="text-accent" size={20} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-inter text-white/90 text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Client */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                      <Image
                        src={t.photo}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-inter font-semibold text-white">{t.name}</p>
                      <p className="font-inter text-sm text-accent">{t.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 border border-accent/50 text-accent flex items-center justify-center hover:bg-accent hover:text-black transition-colors duration-200"
            aria-label="Previous"
          >
            <HiChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  selectedIndex === i ? 'bg-accent w-6' : 'bg-accent/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-10 h-10 border border-accent/50 text-accent flex items-center justify-center hover:bg-accent hover:text-black transition-colors duration-200"
            aria-label="Next"
          >
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
