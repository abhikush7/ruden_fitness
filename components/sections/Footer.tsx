'use client';

import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Transformations', href: '/transformations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com/ruden_s', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/977XXXXXXXXXX', label: 'WhatsApp' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-bebas text-3xl text-white tracking-wider">
                RUDEN <span className="text-accent">FITNESS</span>
              </span>
            </Link>
            <p className="font-inter text-muted text-sm leading-relaxed max-w-xs mb-6">
              Elite personal training by Rudrendra Shrestha — Men&apos;s Physique Athlete. Transform your body. Build elite discipline.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-accent/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:coach@rudenfitness.com"
                  className="flex items-center gap-2 font-inter text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  <HiMail size={16} />
                  coach@rudenfitness.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/977XXXXXXXXXX"
                  className="flex items-center gap-2 font-inter text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  <HiPhone size={16} />
                  WhatsApp Available
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ruden_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-inter text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  <FaInstagram size={16} />
                  @ruden_s
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-sm text-muted">
            © 2024 Ruden Fitness. All rights reserved.
          </p>
          <p className="font-inter text-sm text-muted">
            Built for{' '}
            <span className="text-accent">Rudrendra Shrestha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
