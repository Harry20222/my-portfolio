'use client';

import { useState } from 'react';
import { Mail, BriefcaseBusiness, GitBranch, Send, CheckCircle2, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/portfolioData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    try {
      const response = await fetch('https://formspree.io/f/boscodhy', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open to Spring 2027 Co-op opportunities, technical projects, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <h3 className="text-lg font-bold text-white mb-4">Contact Details</h3>
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                >
                  <BriefcaseBusiness className="w-5 h-5 text-cyan-400" />
                  <span>linkedin.com/in/harry-bosco-denis</span>
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                >
                  <GitBranch className="w-5 h-5 text-cyan-400" />
                  <span>github.com/Harry20222</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400 p-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>University of Cincinnati, Ohio</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-slate-400">
                  Thanks for reaching out. I'll respond as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Hi Harry, I'd like to connect regarding..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
