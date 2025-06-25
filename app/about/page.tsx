export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer who loves creating meaningful digital experiences
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Name
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a Full Stack Developer with over 3 years of experience building web applications. 
                I specialize in React, Next.js, and Node.js, and I'm passionate about creating 
                user-friendly, scalable solutions that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Full Stack Development
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Problem Solving
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
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
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-blue-600 font-medium">University Name</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0">2015 - 2019</span>
            </div>
            <p className="text-gray-600">
              Graduated with honors. Focused on software engineering, algorithms, and web development. 
              Completed capstone project on machine learning applications.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-3">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-3">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 