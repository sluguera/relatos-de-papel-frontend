import { useState, useEffect, useCallback } from 'react';
import { getBooks, getCategories } from '../services/bookService';

export function useBooks(initialFilters = {}) {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters);
  const [pagination, setPagination] = useState({ page: 0, size: 12, totalPages: 0, totalElements: 0 });

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBooks({
        page: pagination.page,
        size: pagination.size,
        ...filters,
      });

      // Support both paginated { content, totalPages } and plain array responses
      if (Array.isArray(data)) {
        setBooks(data);
        setPagination(prev => ({ ...prev, totalPages: 1, totalElements: data.length }));
      } else {
        setBooks(data.content ?? data);
        setPagination(prev => ({
          ...prev,
          totalPages: data.totalPages ?? 1,
          totalElements: data.totalElements ?? 0,
        }));
      }
    } catch (err) {
      setError(err.userMessage || 'Error al cargar los libros.');
    } finally {
      setLoading(false);
    }
  }, [filters, pagination.page, pagination.size]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  const changePage = useCallback(page => setPagination(prev => ({ ...prev, page })), []);
  const applyFilters = useCallback(newFilters => {
    setFilters(newFilters);
    setPagination(prev => ({ ...prev, page: 0 }));
  }, []);

  return { books, categories, loading, error, pagination, changePage, applyFilters, refetch: fetchBooks };
}
