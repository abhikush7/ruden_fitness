'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

const programOptions = [
  { value: '', label: 'Select a program...' },
  { value: 'online', label: 'Online Coaching' },
  { value: 'personal', label: 'Personal Training' },
  { value: '90day', label: '90-Day Transformation' },
  { value: 'other', label: 'Other / Not sure yet' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    goals: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', program: '', goals: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '977XXXXXXXXXX';

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549476464-37392f717541?w=1920&q=80"
          alt="Contact hero"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            GET IN <span className="text-gold-gradient">TOUCH</span>
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading
                subtitle="Contact"
                title="START YOUR JOURNEY"
                description="Fill out the form and Rudrendra will personally reach out within 24 hours."
              />

              {status === 'success' ? (
                <div className="glass-dark p-8 border-l-4 border-accent">
                  <h3 className="font-bebas text-2xl text-accent mb-2">Message Sent!</h3>
                  <p className="font-inter text-white/80 text-sm">
                    Thanks for reaching out. Rudrendra will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200"
                      placeholder="+977 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                      Program Interest *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white transition-colors duration-200"
                    >
                      {programOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-surface">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                      Your Goals *
                    </label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200 resize-none"
                      placeholder="e.g. Lose 10kg, build muscle, compete in Men's Physique..."
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200 resize-none"
                      placeholder="Any additional information..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="font-inter text-sm text-red-400">
                      Something went wrong. Please try again or reach out via WhatsApp.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <SectionHeading
                  subtitle="Other ways to reach"
                  title="CONNECT DIRECTLY"
                />
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: HiMail,
                    label: 'Email',
                    value: 'coach@rudenfitness.com',
                    href: 'mailto:coach@rudenfitness.com',
                  },
                  {
                    icon: FaWhatsapp,
                    label: 'WhatsApp',
                    value: 'Chat with Rudrendra',
                    href: `https://wa.me/${whatsappNumber}`,
                  },
                  {
                    icon: FaInstagram,
                    label: 'Instagram',
                    value: '@ruden_s',
                    href: 'https://instagram.com/ruden_s',
                  },
                  {
                    icon: HiPhone,
                    label: 'Book a Call',
                    value: 'Schedule via Calendly',
                    href: process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#',
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 glass-dark p-4 hover:border-accent/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 border border-accent/30 group-hover:border-accent flex items-center justify-center text-accent transition-colors duration-200">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-muted uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="font-inter text-sm text-white group-hover:text-accent transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick actions */}
              <div className="mt-4 space-y-3">
                <Button
                  href={`https://wa.me/${whatsappNumber}`}
                  variant="secondary"
                  size="md"
                  className="w-full border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  <FaWhatsapp size={18} />
                  Chat on WhatsApp
                </Button>
                <Button href="/programs" variant="ghost" size="md" className="w-full">
                  View All Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
