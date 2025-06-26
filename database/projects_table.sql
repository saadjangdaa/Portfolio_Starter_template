-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    image_url VARCHAR(500),
    tech_stack TEXT[] NOT NULL,
    live_url VARCHAR(500),
    github_url VARCHAR(500),
    category VARCHAR(100) NOT NULL DEFAULT 'Full Stack',
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON projects
    FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert/update/delete (for admin purposes)
CREATE POLICY "Allow authenticated users to manage projects" ON projects
    FOR ALL USING (auth.role() = 'authenticated');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_projects_updated_at 
    BEFORE UPDATE ON projects 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO projects (title, description, long_description, image_url, tech_stack, live_url, github_url, category, featured) VALUES
(
    'E-Commerce Platform',
    'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    'Built a comprehensive e-commerce platform that handles product management, user authentication, payment processing with Stripe, and an admin dashboard for inventory management. The platform supports multiple payment methods and includes features like wishlists, reviews, and order tracking.',
    '/project1.jpg',
    ARRAY['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'AWS'],
    'https://example.com',
    'https://github.com/example',
    'Full Stack',
    true
),
(
    'Task Management App',
    'A collaborative task management application with real-time updates and team features.',
    'Developed a real-time task management application that allows teams to collaborate on projects. Features include real-time updates, file sharing, progress tracking, and team communication. Built with WebSocket for live updates and includes mobile-responsive design.',
    '/project2.jpg',
    ARRAY['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    'https://example.com',
    'https://github.com/example',
    'Full Stack',
    true
),
(
    'Portfolio Website',
    'A modern portfolio website template built with Next.js and Tailwind CSS.',
    'Created a responsive portfolio website template that showcases projects, skills, and experience. Features include dark mode, smooth animations, contact form, and SEO optimization. The template is easily customizable and includes best practices for performance.',
    '/project3.jpg',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    'https://example.com',
    'https://github.com/example',
    'Frontend',
    true
),
(
    'Weather Dashboard',
    'A weather application with location-based forecasts and interactive maps.',
    'Built a weather dashboard that provides current weather conditions and forecasts for any location. Features include interactive maps, weather alerts, historical data, and customizable widgets. Integrates with multiple weather APIs for comprehensive data.',
    '/project4.jpg',
    ARRAY['React', 'OpenWeather API', 'Mapbox', 'Chart.js', 'CSS Grid'],
    'https://example.com',
    'https://github.com/example',
    'Frontend',
    false
),
(
    'REST API Service',
    'A scalable REST API service with authentication and documentation.',
    'Developed a comprehensive REST API service that handles user authentication, data management, and third-party integrations. Includes comprehensive documentation, rate limiting, error handling, and automated testing. Built with scalability and security in mind.',
    '/project5.jpg',
    ARRAY['Node.js', 'Express', 'JWT', 'Swagger', 'Jest', 'Docker'],
    'https://example.com',
    'https://github.com/example',
    'Backend',
    false
),
(
    'Social Media Dashboard',
    'A dashboard for managing multiple social media accounts and analytics.',
    'Created a social media management dashboard that allows users to schedule posts, track analytics, and manage multiple social media accounts from one platform. Features include content calendar, performance metrics, and automated posting.',
    '/project6.jpg',
    ARRAY['React', 'Node.js', 'MongoDB', 'Social APIs', 'Chart.js', 'AWS'],
    'https://example.com',
    'https://github.com/example',
    'Full Stack',
    false
); 