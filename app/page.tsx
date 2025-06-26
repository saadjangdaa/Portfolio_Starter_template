'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--f1-black)]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="f1-stripe absolute top-0 left-0 w-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-[var(--f1-red)] drop-shadow-lg uppercase tracking-widest">
              Hi, I'm <span className="text-[var(--f1-yellow)]">Saad Jangda</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--f1-white)] mb-8 max-w-3xl mx-auto font-semibold">
              Full Stack Developer & Formula 1 Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/projects"
                className="bg-[var(--f1-red)] text-[var(--f1-white)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors shadow-lg border-2 border-[var(--f1-yellow)]"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[var(--f1-red)] text-[var(--f1-red)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--f1-red)] hover:text-[var(--f1-white)] transition-colors shadow-lg"
              >
                Get In Touch
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              {/* Ferrari F1 Car SVG or Emoji */}
              <span className="text-[120px] md:text-[180px] drop-shadow-xl" role="img" aria-label="Ferrari F1 Car">
                🏎️
              </span>
            </div>
          </motion.div>
        </div>
        <div className="f1-stripe absolute bottom-0 left-0 w-full" />
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--f1-red)] mb-4 uppercase tracking-widest">
              Skills & Technologies
            </h2>
            <p className="text-xl text-[var(--f1-white)]">
              I work with modern technologies to build amazing applications
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Python', icon: '🐍' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Docker', icon: '🐳' },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                className="bg-[var(--f1-white)] f1-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, type: 'spring' }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="font-bold text-[var(--f1-black)] uppercase tracking-wide">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-[var(--f1-gray)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--f1-red)] mb-4 uppercase tracking-widest">
              Featured Projects
            </h2>
            <p className="text-xl text-[var(--f1-black)]">
              Here are some of my recent works
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with payment integration',
                tech: 'React, Node.js, Stripe',
                image: '/project1.jpg'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management application',
                tech: 'Next.js, TypeScript, Prisma',
                image: '/project2.jpg'
              },
              {
                title: 'Portfolio Website',
                description: 'A modern portfolio website template',
                tech: 'Next.js, Tailwind CSS',
                image: '/project3.jpg'
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
              >
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-[var(--f1-red)] to-[var(--f1-yellow)]">
                  {/* Ferrari F1 car emoji or SVG */}
                  <span className="text-6xl" role="img" aria-label="Ferrari F1 Car">🏎️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--f1-black)] mb-2 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-[var(--f1-black)] mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-[var(--f1-red)] font-medium">
                    {project.tech}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-[var(--f1-red)] text-[var(--f1-white)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors shadow-lg border-2 border-[var(--f1-yellow)]"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--f1-red)] mb-4 uppercase tracking-widest"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            className="text-xl text-[var(--f1-white)] mb-8"
          >
            I'm always interested in new opportunities and exciting projects
          </motion.p>
          <Link
            href="/contact"
            className="bg-[var(--f1-red)] text-[var(--f1-white)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors shadow-lg border-2 border-[var(--f1-yellow)]"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
