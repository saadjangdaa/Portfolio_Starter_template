import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Saad Jangda</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A passionate Full Stack Developer creating beautiful and functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              I work with modern technologies to build amazing applications
            </p>
          </div>
          
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
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Here are some of my recent works
            </p>
          </div>
          
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
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {project.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in new opportunities and exciting projects
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
