import apiClient from '../api/apiClient';
import { API_ENDPOINTS } from '../api/endpoints';

/**
 * Fetch paginated list of books with optional filters.
 * @param {Object} params - Query parameters (page, size, category, search, sort)
 */
export const getBooks = async (params = {}) => {
  const response = await apiClient.get(API_ENDPOINTS.BOOKS, { params });
  return response.data;
};

/**
 * Fetch a single book by its ID.
 * @param {string|number} id
 */
export const getBookById = async id => {
  const response = await apiClient.get(API_ENDPOINTS.BOOK_BY_ID(id));
  return response.data;
};

/**
 * Search books by query string.
 * @param {string} query
 * @param {Object} params - Additional query parameters
 */
export const searchBooks = async (query, params = {}) => {
  const response = await apiClient.get(API_ENDPOINTS.BOOKS_SEARCH, {
    params: { q: query, ...params },
  });
  return response.data;
};

/**
 * Fetch books by category.
 * @param {string} category
 */
export const getBooksByCategory = async category => {
  const response = await apiClient.get(API_ENDPOINTS.BOOKS_BY_CATEGORY(category));
  return response.data;
};

/**
 * Fetch all available categories.
 */
export const getCategories = async () => {
  const response = await apiClient.get(API_ENDPOINTS.CATEGORIES);
  return response.data;
};
