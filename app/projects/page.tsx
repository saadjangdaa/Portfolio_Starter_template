'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { getProjects, getFeaturedProjects } from '../../lib/actions/projects';
import { Project, ProjectCategory } from '../../lib/types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps'];

  useEffect(() => {
    loadProjects();
  }, [selectedCategory]);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load featured projects
      const featuredResponse = await getFeaturedProjects();
      if (featuredResponse.success && featuredResponse.data) {
        setFeaturedProjects(featuredResponse.data);
      }

      // Load all projects with category filter
      const filters = selectedCategory !== 'All' ? { category: selectedCategory } : undefined;
      const projectsResponse = await getProjects(filters);
      
      if (projectsResponse.success && projectsResponse.data) {
        setProjects(projectsResponse.data);
      } else {
        setError(projectsResponse.error || 'Failed to load projects');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Error loading projects:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 bg-[var(--f1-black)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[var(--f1-red)] mx-auto mb-4"></div>
          <p className="text-[var(--f1-white)] text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 bg-[var(--f1-black)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--f1-red)] text-lg mb-4">Error: {error}</p>
          <button 
            onClick={loadProjects}
            className="bg-[var(--f1-red)] text-[var(--f1-white)] px-6 py-2 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-[var(--f1-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--f1-red)] mb-6 uppercase tracking-widest">
            My Projects
          </h1>
          <p className="text-xl text-[var(--f1-white)] max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[var(--f1-red)] text-[var(--f1-white)]'
                  : 'bg-[var(--f1-white)] text-[var(--f1-black)] hover:bg-[var(--f1-yellow)]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring' }}
              className="text-3xl font-extrabold text-[var(--f1-red)] mb-8 uppercase tracking-widest"
            >
              Featured Projects
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                  className="bg-[var(--f1-white)] f1-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-[var(--f1-red)] to-[var(--f1-yellow)]">
                    <span className="text-8xl" role="img" aria-label="Ferrari F1 Car">🏎️</span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[var(--f1-red)] text-[var(--f1-white)] px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        {project.live_url && (
                          <>
                            <Link
                              href={project.live_url}
                              className="text-[var(--f1-red)] hover:text-[var(--f1-yellow)] font-medium text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </Link>
                            <span className="text-[var(--f1-gray)]">|</span>
                          </>
                        )}
                        {project.github_url && (
                          <Link
                            href={project.github_url}
                            className="text-[var(--f1-black)] hover:text-[var(--f1-red)] font-medium text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </Link>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--f1-black)] mb-3">{project.title}</h3>
                    <p className="text-[var(--f1-black)] mb-4">
                      {project.long_description || project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech_stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[var(--f1-gray)] text-[var(--f1-black)] px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="text-3xl font-extrabold text-[var(--f1-red)] mb-8 uppercase tracking-widest"
          >
            {selectedCategory === 'All' ? 'All Projects' : `${selectedCategory} Projects`}
          </motion.h2>
          
          {projects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-[var(--f1-white)] text-lg mb-4">
                No projects found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-[var(--f1-red)] text-[var(--f1-white)] px-6 py-2 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors"
              >
                View All Projects
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5, type: 'spring' }}
                  className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 flex items-center justify-center bg-gradient-to-br from-[var(--f1-red)] to-[var(--f1-yellow)]">
                    <span className="text-6xl" role="img" aria-label="Ferrari F1 Car">🏎️</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[var(--f1-red)] text-[var(--f1-white)] px-2 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        {project.live_url && (
                          <>
                            <Link
                              href={project.live_url}
                              className="text-[var(--f1-red)] hover:text-[var(--f1-yellow)] font-medium text-xs"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Demo
                            </Link>
                            <span className="text-[var(--f1-gray)]">|</span>
                          </>
                        )}
                        {project.github_url && (
                          <Link
                            href={project.github_url}
                            className="text-[var(--f1-black)] hover:text-[var(--f1-red)] font-medium text-xs"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code
                          </Link>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--f1-black)] mb-2">{project.title}</h3>
                    <p className="text-[var(--f1-black)] mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech_stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-[var(--f1-gray)] text-[var(--f1-black)] px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech_stack.length > 3 && (
                        <span className="bg-[var(--f1-gray)] text-[var(--f1-black)] px-2 py-1 rounded text-xs">
                          +{project.tech_stack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-extrabold text-[var(--f1-red)] mb-4 uppercase tracking-widest">
            Have a project in mind?
          </h2>
          <p className="text-[var(--f1-white)] mb-6">
            I'm always interested in new opportunities and exciting projects
          </p>
          <Link
            href="/contact"
            className="bg-[var(--f1-red)] text-[var(--f1-white)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors shadow-lg border-2 border-[var(--f1-yellow)]"
          >
            Let's Work Together
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 