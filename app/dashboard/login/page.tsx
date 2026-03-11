'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebase';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const auth = getFirebaseAuth();
      if (!auth) {
        setError('Authentication is not configured. Please set up Firebase credentials.');
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Invalid credentials. Please try again.';
      setError(message.includes('auth/') ? 'Invalid email or password.' : message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="font-bebas text-3xl text-white tracking-wider">
            RUDEN <span className="text-accent">FITNESS</span>
          </span>
          <p className="font-inter text-muted text-sm mt-2">Client Dashboard</p>
        </div>

        <GlassCard className="p-8">
          <h1 className="font-bebas text-3xl text-white text-center mb-6">SIGN IN</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="font-inter text-xs text-muted uppercase tracking-wider block mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="font-inter text-sm text-red-400 bg-red-400/10 px-4 py-3 border border-red-400/30">
                {error}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </GlassCard>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="font-inter text-sm text-muted hover:text-accent transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
