'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={clsx('mb-12 md:mb-16', centered && 'text-center')}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {subtitle && (
        <p className="font-inter text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-4">
        {title}
      </h2>
      <div
        className={clsx(
          'h-[2px] w-16 bg-gold-gradient mb-4',
          centered && 'mx-auto'
        )}
      />
      {description && (
        <p className="font-inter text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
