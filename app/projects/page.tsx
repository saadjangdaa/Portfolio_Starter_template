import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      longDescription: 'Built a comprehensive e-commerce platform that handles product management, user authentication, payment processing with Stripe, and an admin dashboard for inventory management. The platform supports multiple payment methods and includes features like wishlists, reviews, and order tracking.',
      image: '/project1.jpg',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Full Stack',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      longDescription: 'Developed a real-time task management application that allows teams to collaborate on projects. Features include real-time updates, file sharing, progress tracking, and team communication. Built with WebSocket for live updates and includes mobile-responsive design.',
      image: '/project2.jpg',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Full Stack',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website template built with Next.js and Tailwind CSS.',
      longDescription: 'Created a responsive portfolio website template that showcases projects, skills, and experience. Features include dark mode, smooth animations, contact form, and SEO optimization. The template is easily customizable and includes best practices for performance.',
      image: '/project3.jpg',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Frontend',
      featured: true
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts and interactive maps.',
      longDescription: 'Built a weather dashboard that provides current weather conditions and forecasts for any location. Features include interactive maps, weather alerts, historical data, and customizable widgets. Integrates with multiple weather APIs for comprehensive data.',
      image: '/project4.jpg',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js', 'CSS Grid'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Frontend',
      featured: false
    },
    {
      id: 5,
      title: 'REST API Service',
      description: 'A scalable REST API service with authentication and documentation.',
      longDescription: 'Developed a comprehensive REST API service that handles user authentication, data management, and third-party integrations. Includes comprehensive documentation, rate limiting, error handling, and automated testing. Built with scalability and security in mind.',
      image: '/project5.jpg',
      tech: ['Node.js', 'Express', 'JWT', 'Swagger', 'Jest', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Backend',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A dashboard for managing multiple social media accounts and analytics.',
      longDescription: 'Created a social media management dashboard that allows users to schedule posts, track analytics, and manage multiple social media accounts from one platform. Features include content calendar, performance metrics, and automated posting.',
      image: '/project6.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Social APIs', 'Chart.js', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Full Stack',
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-8xl">📱</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <Link
                        href={project.liveUrl}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                      <span className="text-gray-300">|</span>
                      <Link
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-gray-800 font-medium text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <Link
                        href={project.liveUrl}
                        className="text-blue-600 hover:text-blue-800 font-medium text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Link>
                      <span className="text-gray-300">|</span>
                      <Link
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-gray-800 font-medium text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always interested in new opportunities and exciting projects
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </div>
  );
} 