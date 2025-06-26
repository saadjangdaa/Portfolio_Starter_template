'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  getProjects, 
  createProject, 
  updateProject, 
  deleteProject 
} from '../../lib/actions/projects';
import { Project, CreateProjectData } from '../../lib/types';

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<CreateProjectData>({
    title: '',
    description: '',
    long_description: '',
    image_url: '',
    tech_stack: [],
    live_url: '',
    github_url: '',
    category: 'Full Stack',
    featured: false
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects();
      if (response.success && response.data) {
        setProjects(response.data);
      } else {
        setError(response.error || 'Failed to load projects');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProject) {
        const response = await updateProject({
          id: editingProject.id,
          ...formData
        });
        if (response.success) {
          setEditingProject(null);
          setShowForm(false);
          loadProjects();
        } else {
          setError(response.error || 'Failed to update project');
        }
      } else {
        const response = await createProject(formData);
        if (response.success) {
          setShowForm(false);
          loadProjects();
        } else {
          setError(response.error || 'Failed to create project');
        }
      }
      resetForm();
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await deleteProject(id);
        if (response.success) {
          loadProjects();
        } else {
          setError(response.error || 'Failed to delete project');
        }
      } catch (err) {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      long_description: project.long_description || '',
      image_url: project.image_url || '',
      tech_stack: project.tech_stack,
      live_url: project.live_url || '',
      github_url: project.github_url || '',
      category: project.category,
      featured: project.featured
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      long_description: '',
      image_url: '',
      tech_stack: [],
      live_url: '',
      github_url: '',
      category: 'Full Stack',
      featured: false
    });
  };

  const addTechStack = () => {
    setFormData(prev => ({
      ...prev,
      tech_stack: [...prev.tech_stack, '']
    }));
  };

  const updateTechStack = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      tech_stack: prev.tech_stack.map((tech, i) => i === index ? value : tech)
    }));
  };

  const removeTechStack = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tech_stack: prev.tech_stack.filter((_, i) => i !== index)
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 bg-[var(--f1-black)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[var(--f1-red)] mx-auto mb-4"></div>
          <p className="text-[var(--f1-white)] text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-[var(--f1-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--f1-red)] mb-6 uppercase tracking-widest">
            Admin Dashboard
          </h1>
          <p className="text-xl text-[var(--f1-white)]">
            Manage your portfolio projects
          </p>
        </motion.div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
            <button 
              onClick={() => setError(null)}
              className="float-right font-bold"
            >
              ×
            </button>
          </div>
        )}

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[var(--f1-white)]">
            Projects ({projects.length})
          </h2>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingProject(null);
              resetForm();
            }}
            className="bg-[var(--f1-red)] text-[var(--f1-white)] px-6 py-2 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors"
          >
            Add New Project
          </button>
        </div>

        {/* Project Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--f1-white)] rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-bold text-[var(--f1-black)] mb-4">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--f1-black)] mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f1-red)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--f1-black)] mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f1-red)]"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Mobile">Mobile</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--f1-black)] mb-1">
                  Description *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f1-red)]"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--f1-black)] mb-1">
                  Long Description
                </label>
                <textarea
                  value={formData.long_description}
                  onChange={(e) => setFormData(prev => ({ ...prev, long_description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f1-red)]"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--f1-black)] mb-1">
                    Live URL
                  </label>
                  <input
                    type="url"
                    value={formData.live_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, live_url: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f1-red)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--f1-black)] mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formData.github_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, github_url: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f1-red)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--f1-black)] mb-1">
                  Tech Stack
                </label>
                <div className="space-y-2">
                  {formData.tech_stack.map((tech, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={tech}
                        onChange={(e) => updateTechStack(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f1-red)]"
                        placeholder="Technology name"
                      />
                      <button
                        type="button"
                        onClick={() => removeTechStack(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addTechStack}
                    className="px-4 py-2 bg-[var(--f1-gray)] text-[var(--f1-black)] rounded-md hover:bg-gray-300"
                  >
                    Add Technology
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="mr-2"
                />
                <label htmlFor="featured" className="text-sm font-medium text-[var(--f1-black)]">
                  Featured Project
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-[var(--f1-red)] text-[var(--f1-white)] px-6 py-2 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors"
                >
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingProject(null);
                    resetForm();
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Projects List */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--f1-white)] rounded-lg p-6 shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--f1-black)] mb-2">
                    {project.title}
                    {project.featured && (
                      <span className="ml-2 bg-[var(--f1-red)] text-[var(--f1-white)] px-2 py-1 rounded text-xs">
                        Featured
                      </span>
                    )}
                  </h3>
                  <p className="text-[var(--f1-black)] mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[var(--f1-gray)] text-[var(--f1-black)] px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 