'use client';

import { useState } from 'react';
import { Mail, Link2, FolderGit2, Send, CheckCircle2, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/portfolioData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);

    const form = e.currentTarget;
    try {
      const response = await fetch('https://formspree.io/f/boscodhy', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        setSubmitError(false);
        form.reset();
      } else {
        setSubmitted(false);
        setSubmitError(true);
      }
    } catch {
      setSubmitted(false);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f0f6ff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
            Get in touch
          </h2>
          <p className="font-serif text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            If you want to contact me, fill out the following form and I will do my best to get back to you as soon as I can!
          </p>
          <div className="w-16 h-0.5 bg-neutral-800 mt-3 mx-auto sm:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Details Box */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-mono text-base font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-100">
                Contact Details
              </h3>
              <div className="space-y-4 font-serif text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <Mail className="w-4 h-4 text-neutral-800" />
                  <span>{contactInfo.email}</span>
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">Phone:</span>
                  <span>{contactInfo.phone}</span>
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <Link2 className="w-4 h-4 text-neutral-800" />
                  <span>linkedin.com/in/harry-bosco-denis</span>
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <FolderGit2 className="w-4 h-4 text-neutral-800" />
                  <span>github.com/Harry20222</span>
                </a>
                <div className="flex items-center gap-3 text-neutral-600">
                  <MapPin className="w-4 h-4 text-neutral-800" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-mono text-xl font-bold text-neutral-900">Message Sent!</h3>
                <p className="font-serif text-sm text-neutral-600">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-wider mt-4 px-4 py-2 border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-sm"
                >
                  Send another message
                </button>
              </div>
            ) : submitError ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 mx-auto flex items-center justify-center font-mono text-lg font-bold">
                  !
                </div>
                <h3 className="font-mono text-xl font-bold text-neutral-900">Something went wrong</h3>
                <p className="font-serif text-sm text-neutral-600">
                  The form couldn't be submitted right now. Please try again or reach out directly by email.
                </p>
                <button
                  onClick={() => setSubmitError(false)}
                  className="font-mono text-xs uppercase tracking-wider mt-4 px-4 py-2 border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-sm"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs font-bold text-neutral-700 uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-md bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 font-serif text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs font-bold text-neutral-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-md bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 font-serif text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-mono text-xs font-bold text-neutral-700 uppercase mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-2.5 rounded-md bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 font-serif text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs font-bold text-neutral-700 uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Hi Harry, I'd like to get in touch regarding..."
                    className="w-full px-4 py-2.5 rounded-md bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 font-serif text-sm focus:outline-none focus:border-neutral-800 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto font-mono text-xs uppercase tracking-widest font-bold border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-3 transition-colors rounded-sm shadow-sm flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : 'SEND MESSAGE'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
