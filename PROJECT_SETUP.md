# Portfolio Project Management System Setup

This guide will help you set up the project management system for your portfolio website using Supabase.

## 🗄️ Database Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and anon key

### 2. Run Database Script
1. Copy the contents of `database/projects_table.sql`
2. Go to your Supabase dashboard → SQL Editor
3. Paste and run the script to create the projects table and sample data

### 3. Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 File Structure

```
├── lib/
│   ├── types.ts              # TypeScript type definitions
│   ├── supabase.ts           # Supabase client configuration
│   └── actions/
│       └── projects.ts       # Server actions for CRUD operations
├── database/
│   └── projects_table.sql    # Database schema and sample data
├── app/
│   ├── page.tsx              # Home page (loads featured projects)
│   ├── projects/
│   │   └── page.tsx          # Projects page (loads all projects)
│   └── admin/
│       └── page.tsx          # Admin dashboard (manage projects)
```

## 🔧 Available Server Actions

### Get Projects
```typescript
import { getProjects } from '../lib/actions/projects';

// Get all projects
const response = await getProjects();

// Get projects with filters
const response = await getProjects({
  category: 'Full Stack',
  featured: true,
  search: 'react'
});
```

### Get Featured Projects
```typescript
import { getFeaturedProjects } from '../lib/actions/projects';

const response = await getFeaturedProjects();
```

### Get Single Project
```typescript
import { getProject } from '../lib/actions/projects';

const response = await getProject('project-id');
```

### Create Project
```typescript
import { createProject } from '../lib/actions/projects';

const projectData = {
  title: 'My Project',
  description: 'Project description',
  long_description: 'Detailed description',
  tech_stack: ['React', 'Node.js'],
  category: 'Full Stack',
  featured: false,
  live_url: 'https://example.com',
  github_url: 'https://github.com/example'
};

const response = await createProject(projectData);
```

### Update Project
```typescript
import { updateProject } from '../lib/actions/projects';

const response = await updateProject({
  id: 'project-id',
  title: 'Updated Title',
  featured: true
});
```

### Delete Project
```typescript
import { deleteProject } from '../lib/actions/projects';

const response = await deleteProject('project-id');
```

## 📊 Data Models

### Project Interface
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  long_description?: string;
  image_url?: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  category: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}
```

### API Response Interface
```typescript
interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}
```

## 🚀 Usage Examples

### Loading Projects in Components
```typescript
'use client';

import { useEffect, useState } from 'react';
import { getProjects } from '../lib/actions/projects';
import { Project } from '../lib/types';

export default function MyComponent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await getProjects();
        if (response.success && response.data) {
          setProjects(response.data);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div>
            {project.tech_stack.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Filtering Projects
```typescript
// Get only featured projects
const featuredResponse = await getProjects({ featured: true });

// Get projects by category
const frontendResponse = await getProjects({ category: 'Frontend' });

// Search projects
const searchResponse = await getProjects({ search: 'react' });
```

## 🔒 Security

The database is configured with Row Level Security (RLS):
- Public read access to all projects
- Authenticated users can create, update, and delete projects
- You can modify these policies in your Supabase dashboard

## 🎨 Customization

### Adding New Categories
1. Update the `ProjectCategory` type in `lib/types.ts`
2. Add the new category to the database script
3. Update your UI components to include the new category

### Styling
The components use CSS custom properties for the F1 theme:
- `--f1-red`: Primary red color
- `--f1-yellow`: Secondary yellow color
- `--f1-black`: Background color
- `--f1-white`: Text color
- `--f1-gray`: Secondary background color

## 🐛 Troubleshooting

### Common Issues

1. **Import Errors**: Make sure to use relative imports (e.g., `../lib/actions/projects`) instead of `@/` alias
2. **Database Connection**: Verify your environment variables are correct
3. **RLS Policies**: Check that your Supabase RLS policies allow the operations you're trying to perform

### Debug Mode
Add console logs to server actions to debug issues:

```typescript
export async function getProjects(filters?: ProjectFilters) {
  console.log('Getting projects with filters:', filters);
  // ... rest of the function
}
```

## 📝 Next Steps

1. Set up your Supabase project and run the database script
2. Add your environment variables
3. Test the project loading on your pages
4. Create an admin interface for managing projects
5. Customize the styling and functionality to match your needs

## 🔗 Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) 