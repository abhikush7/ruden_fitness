'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        'glass-dark rounded-none p-6',
        hover && 'cursor-pointer',
        className
      )}
      whileHover={
        hover
          ? {
              borderColor: 'rgba(200,169,90,0.5)',
              boxShadow: '0 0 30px rgba(200,169,90,0.15)',
              y: -4,
            }
          : undefined
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
