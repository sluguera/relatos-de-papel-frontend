import { useState, useEffect } from 'react';
import { getBookById } from '../services/bookService';

export function useBookDetail(id) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;

    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getBookById(id);
        if (!cancelled) setBook(data);
      } catch (err) {
        if (!cancelled) setError(err.userMessage || 'Error al cargar el libro.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetch();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return { book, loading, error };
}
