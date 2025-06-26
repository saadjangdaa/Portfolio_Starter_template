'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-[var(--f1-black)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--f1-red)] mb-6 uppercase tracking-widest">
            Contact Me
          </h1>
          <p className="text-xl text-[var(--f1-white)] max-w-xl mx-auto">
            Have a question, want to work together, or just want to say hi? Fill out the form below or email me directly.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md p-8"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--f1-black)]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-[var(--f1-gray)] shadow-sm focus:border-[var(--f1-red)] focus:ring-[var(--f1-red)]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--f1-black)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-[var(--f1-gray)] shadow-sm focus:border-[var(--f1-red)] focus:ring-[var(--f1-red)]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--f1-black)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full rounded-md border-[var(--f1-gray)] shadow-sm focus:border-[var(--f1-red)] focus:ring-[var(--f1-red)]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--f1-red)] text-[var(--f1-white)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors shadow-lg border-2 border-[var(--f1-yellow)]"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-[var(--f1-black)]">
            Or email me at{' '}
            <Link href="mailto:your.email@example.com" className="text-[var(--f1-red)] hover:underline">
              your.email@example.com
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 