'use server';

import { supabase } from '../supabase';
import { Project, CreateProjectData, UpdateProjectData, ProjectFilters, ApiResponse } from '../types';

/**
 * Get all projects with optional filtering
 */
export async function getProjects(filters?: ProjectFilters): Promise<ApiResponse<Project[]>> {
  try {
    let query = supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    // Apply filters
    if (filters?.category && filters.category !== 'All') {
      query = query.eq('category', filters.category);
    }

    if (filters?.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
    }

    const { data, error } = await query;

    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      };
    }

    return {
      data: data as Project[],
      error: null,
      success: true
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      success: false
    };
  }
}

/**
 * Get a single project by ID
 */
export async function getProject(id: string): Promise<ApiResponse<Project>> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      };
    }

    return {
      data: data as Project,
      error: null,
      success: true
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      success: false
    };
  }
}

/**
 * Get featured projects
 */
export async function getFeaturedProjects(): Promise<ApiResponse<Project[]>> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      };
    }

    return {
      data: data as Project[],
      error: null,
      success: true
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      success: false
    };
  }
}

/**
 * Create a new project
 */
export async function createProject(projectData: CreateProjectData): Promise<ApiResponse<Project>> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([projectData])
      .select()
      .single();

    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      };
    }

    return {
      data: data as Project,
      error: null,
      success: true
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      success: false
    };
  }
}

/**
 * Update an existing project
 */
export async function updateProject(projectData: UpdateProjectData): Promise<ApiResponse<Project>> {
  try {
    const { id, ...updateData } = projectData;
    
    const { data, error } = await supabase
      .from('projects')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      };
    }

    return {
      data: data as Project,
      error: null,
      success: true
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      success: false
    };
  }
}

/**
 * Delete a project
 */
export async function deleteProject(id: string): Promise<ApiResponse<boolean>> {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      };
    }

    return {
      data: true,
      error: null,
      success: true
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      success: false
    };
  }
}

/**
 * Get project categories
 */
export async function getProjectCategories(): Promise<ApiResponse<string[]>> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('category')
      .order('category');

    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      };
    }

    const categories = [...new Set(data?.map(item => item.category) || [])];
    
    return {
      data: categories,
      error: null,
      success: true
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      success: false
    };
  }
} 