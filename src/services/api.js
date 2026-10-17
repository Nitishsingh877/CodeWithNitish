import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Projects API
export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getFeatured: () => api.get('/projects/featured'),
  getById: (id) => api.get(`/projects/${id}`),
}

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
}

// Blog API
export const blogAPI = {
  getAll: () => api.get('/blogs'),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
}

// Health check
export const healthAPI = {
  check: () => api.get('/health'),
}

export default api