export interface Project {
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

export interface CreateProjectData {
  title: string;
  description: string;
  long_description?: string;
  image_url?: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  category: string;
  featured?: boolean;
}

export interface UpdateProjectData extends Partial<CreateProjectData> {
  id: string;
}

export interface ProjectFilters {
  category?: string;
  featured?: boolean;
  search?: string;
}

export type ProjectCategory = 'All' | 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'DevOps';

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
} 