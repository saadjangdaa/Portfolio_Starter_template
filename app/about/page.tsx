'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-[var(--f1-black)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--f1-red)] mb-6 uppercase tracking-widest">
            About Me
          </h1>
          <p className="text-xl text-[var(--f1-white)] max-w-2xl mx-auto">
            I'm a passionate developer who loves creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-[var(--f1-red)] to-[var(--f1-yellow)] rounded-full flex items-center justify-center">
              <span className="text-8xl" role="img" aria-label="Ferrari F1 Car">🏎️</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--f1-black)] mb-4">
                Your Name
              </h2>
              <p className="text-lg text-[var(--f1-black)] mb-6">
                I'm a Full Stack Developer with over 3 years of experience building web applications. 
                I specialize in React, Next.js, and Node.js, and I'm passionate about creating 
                user-friendly, scalable solutions that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[var(--f1-red)] text-[var(--f1-white)] px-3 py-1 rounded-full text-sm font-medium">
                  Full Stack Development
                </span>
                <span className="bg-[var(--f1-yellow)] text-[var(--f1-black)] px-3 py-1 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="bg-[var(--f1-red)] text-[var(--f1-white)] px-3 py-1 rounded-full text-sm font-medium">
                  Problem Solving
                </span>
                <span className="bg-[var(--f1-yellow)] text-[var(--f1-black)] px-3 py-1 rounded-full text-sm font-medium">
                  Team Collaboration
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="text-3xl font-extrabold text-[var(--f1-red)] mb-8 uppercase tracking-widest"
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior Full Stack Developer',
                company: 'Tech Company Inc.',
                period: '2022 - Present',
                description: 'Led development of multiple web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices.',
                achievements: ['Reduced loading time by 40%', 'Improved user engagement by 25%', 'Led team of 5 developers']
              },
              {
                title: 'Full Stack Developer',
                company: 'Startup XYZ',
                period: '2020 - 2022',
                description: 'Built and maintained various web applications. Worked closely with design and product teams.',
                achievements: ['Built 3 major features', 'Implemented CI/CD pipeline', 'Optimized database queries']
              },
              {
                title: 'Frontend Developer',
                company: 'Digital Agency',
                period: '2019 - 2020',
                description: 'Created responsive websites and web applications for various clients.',
                achievements: ['Delivered 15+ client projects', 'Improved site performance', 'Collaborated with designers']
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--f1-black)]">{job.title}</h3>
                    <p className="text-[var(--f1-red)] font-medium">{job.company}</p>
                  </div>
                  <span className="text-[var(--f1-black)] text-sm mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-[var(--f1-black)] mb-4">{job.description}</p>
                <ul className="list-disc list-inside text-[var(--f1-black)] space-y-1">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="text-3xl font-extrabold text-[var(--f1-red)] mb-8 uppercase tracking-widest"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--f1-black)]">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-[var(--f1-red)] font-medium">University Name</p>
              </div>
              <span className="text-[var(--f1-black)] text-sm mt-2 md:mt-0">2015 - 2019</span>
            </div>
            <p className="text-[var(--f1-black)]">
              Graduated with honors. Focused on software engineering, algorithms, and web development. 
              Completed capstone project on machine learning applications.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="text-3xl font-extrabold text-[var(--f1-red)] mb-8 uppercase tracking-widest"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-[var(--f1-black)] mb-4">Frontend</h3>
              <div className="space-y-3">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-[var(--f1-black)]">{skill}</span>
                    <div className="w-24 bg-[var(--f1-gray)] rounded-full h-2">
                      <div className="bg-[var(--f1-red)] h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="bg-[var(--f1-white)] f1-card rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-[var(--f1-black)] mb-4">Backend</h3>
              <div className="space-y-3">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-[var(--f1-black)]">{skill}</span>
                    <div className="w-24 bg-[var(--f1-gray)] rounded-full h-2">
                      <div className="bg-[var(--f1-red)] h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 