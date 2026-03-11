'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold-gradient text-black font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40',
  secondary:
    'border border-accent text-accent bg-transparent hover:bg-accent/10',
  ghost:
    'text-white bg-transparent hover:text-accent',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2 rounded-none font-inter tracking-wide transition-all duration-200 cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={baseClasses}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </motion.button>
  );
}
