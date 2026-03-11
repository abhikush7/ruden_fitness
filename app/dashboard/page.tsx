'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiLogout, HiPhotograph, HiChat, HiTrendingUp, HiCalendar } from 'react-icons/hi';
import useAuth from '@/hooks/useAuth';
import GlassCard from '@/components/ui/GlassCard';

type Tab = 'workout' | 'progress' | 'photos' | 'messages';

const workoutPlan = [
  { day: 'Monday', focus: 'Chest & Triceps', exercises: ['Bench Press 4×8', 'Incline DB Press 3×10', 'Cable Flyes 3×12', 'Tricep Pushdowns 3×12'] },
  { day: 'Tuesday', focus: 'Back & Biceps', exercises: ['Deadlifts 4×5', 'Pull-ups 3×8', 'Cable Rows 3×10', 'Barbell Curls 3×12'] },
  { day: 'Wednesday', focus: 'Rest / Cardio', exercises: ['30 min LISS cardio', 'Mobility work', 'Foam rolling'] },
  { day: 'Thursday', focus: 'Shoulders', exercises: ['OHP 4×8', 'Lateral Raises 4×15', 'Face Pulls 3×15', 'Rear Delt Flyes 3×12'] },
  { day: 'Friday', focus: 'Legs', exercises: ['Squats 4×8', 'Leg Press 3×12', 'Romanian Deadlift 3×10', 'Leg Curls 3×12', 'Calf Raises 4×20'] },
  { day: 'Saturday', focus: 'Arms & Core', exercises: ['Superset: Curls + Dips 4×10', 'Skull Crushers 3×12', 'Planks 3×60s', 'Ab Wheel 3×12'] },
  { day: 'Sunday', focus: 'Rest', exercises: ['Full recovery day', 'Light walk optional'] },
];

const messages = [
  { from: 'coach', text: 'Great work this week! I can see real progress in your form videos.', time: '2h ago' },
  { from: 'user', text: 'Thanks coach! The new shoulder program is really working. Felt stronger today.', time: '1h ago' },
  { from: 'coach', text: 'Perfect. Next week we\'ll increase the OHP by 2.5kg. Keep tracking your calories.', time: '45m ago' },
];

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('workout');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/dashboard/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-inter text-muted text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'workout', label: 'Workout Plan', icon: HiCalendar },
    { id: 'progress', label: 'Progress', icon: HiTrendingUp },
    { id: 'photos', label: 'Photos', icon: HiPhotograph },
    { id: 'messages', label: 'Messages', icon: HiChat },
  ];

  return (
    <div className="min-h-screen bg-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-bebas text-4xl text-white">
              CLIENT <span className="text-accent">DASHBOARD</span>
            </h1>
            <p className="font-inter text-muted text-sm mt-1">{user.email}</p>
          </div>
          <button
            onClick={signOut}
            className="flex items-center gap-2 font-inter text-sm text-muted hover:text-accent transition-colors duration-200 border border-accent/20 hover:border-accent px-4 py-2"
          >
            <HiLogout size={16} />
            Sign Out
          </button>
        </div>

        {/* Tab Nav */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-accent/20">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-3 font-inter text-sm font-medium border-b-2 transition-all duration-200 ${
                activeTab === id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-muted hover:text-white'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'workout' && (
          <div>
            <h2 className="font-bebas text-2xl text-white mb-6">YOUR WEEKLY PROGRAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {workoutPlan.map((day) => (
                <GlassCard key={day.day} className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bebas text-xl text-white">{day.day}</span>
                    <span className="font-inter text-xs text-accent border border-accent/30 px-2 py-0.5">
                      {day.focus}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {day.exercises.map((ex) => (
                      <li key={ex} className="font-inter text-xs text-white/70 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div>
            <h2 className="font-bebas text-2xl text-white mb-6">PROGRESS TRACKING</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Starting Weight', value: '85 kg' },
                { label: 'Current Weight', value: '79 kg' },
                { label: 'Weight Lost', value: '6 kg' },
                { label: 'Weeks Active', value: '8' },
              ].map((stat) => (
                <GlassCard key={stat.label} className="text-center p-5">
                  <p className="font-bebas text-3xl text-accent">{stat.value}</p>
                  <p className="font-inter text-xs text-muted mt-1">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
            <GlassCard className="p-6">
              <h3 className="font-bebas text-xl text-white mb-4">WEIGHT TREND</h3>
              <div className="h-32 flex items-end gap-2">
                {[85, 84.2, 83.1, 82.5, 81.8, 80.9, 80.1, 79].map((w, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-accent/30 hover:bg-accent/60 transition-colors duration-200 relative group"
                    style={{ height: `${((w - 75) / 12) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-inter text-accent opacity-0 group-hover:opacity-100 whitespace-nowrap">
                      {w}kg
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 font-inter text-xs text-muted">
                <span>Week 1</span><span>Week 8</span>
              </div>
            </GlassCard>
          </div>
        )}

        {activeTab === 'photos' && (
          <div>
            <h2 className="font-bebas text-2xl text-white mb-6">PROGRESS PHOTOS</h2>
            <div className="mb-6">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-accent/30 hover:border-accent cursor-pointer transition-colors duration-200">
                <HiPhotograph size={32} className="text-accent/50 mb-2" />
                <span className="font-inter text-sm text-muted">Upload progress photo</span>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square bg-surface border border-accent/10 flex items-center justify-center"
                >
                  <p className="font-inter text-xs text-muted text-center px-2">Photo Week {n * 2}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            <h2 className="font-bebas text-2xl text-white mb-6">MESSAGES WITH COACH</h2>
            <GlassCard className="p-6 mb-4">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 ${
                        msg.from === 'coach'
                          ? 'bg-surface border border-accent/20'
                          : 'bg-accent text-black'
                      }`}
                    >
                      {msg.from === 'coach' && (
                        <p className="font-inter text-xs text-accent font-semibold mb-1">
                          Coach Rudrendra
                        </p>
                      )}
                      <p className="font-inter text-sm">{msg.text}</p>
                      <p className={`font-inter text-xs mt-1 ${msg.from === 'coach' ? 'text-muted' : 'text-black/60'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-surface border border-accent/20 focus:border-accent outline-none px-4 py-3 font-inter text-sm text-white placeholder-muted transition-colors duration-200"
              />
              <button className="bg-gold-gradient text-black font-inter font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
