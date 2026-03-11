'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        alt="Gym background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="font-inter text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Men&apos;s Physique Athlete &amp; Personal Trainer
        </motion.p>

        <motion.h1
          className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          TRANSFORM YOUR BODY.{' '}
          <span className="text-gold-gradient">BUILD ELITE</span>{' '}
          DISCIPLINE.
        </motion.h1>

        <motion.p
          className="font-inter text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Join Rudrendra Shrestha — elite fitness coach and Men&apos;s Physique competitor — and unlock the physique you&apos;ve always wanted through world-class training and precision nutrition.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button href="/contact" variant="primary" size="lg">
            Start Personal Training
          </Button>
          <Button href="/transformations" variant="secondary" size="lg">
            View Transformations
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <HiChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
