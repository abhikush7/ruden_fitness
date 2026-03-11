'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '977XXXXXXXXXX';

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-36">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1000] to-black" />
        <div className="absolute inset-0 bg-gold-gradient opacity-10" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,169,90,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,90,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="font-inter text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Take the first step
        </motion.p>

        <motion.h2
          className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          READY TO{' '}
          <span className="text-gold-gradient">TRANSFORM</span>{' '}
          YOUR LIFE?
        </motion.h2>

        <motion.p
          className="font-inter text-white/70 text-base md:text-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Start your journey with elite personal coaching today. Your best physique is one decision away.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button href="/contact" variant="primary" size="lg">
            Book Consultation
          </Button>
          <Button
            href={`https://wa.me/${whatsappNumber}`}
            variant="secondary"
            size="lg"
            className="border-green-500 text-green-400 hover:bg-green-500/10"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
