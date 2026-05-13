import { useState, useCallback, useRef } from 'react';

/**
 * Debounces a callback by the given delay (ms).
 */
export function useDebounce(callback, delay = 400) {
  const timerRef = useRef(null);

  return useCallback(
    (...args) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
}

/**
 * Simple local search state hook.
 */
export function useSearch(onSearch) {
  const [query, setQuery] = useState('');

  const debouncedSearch = useDebounce(onSearch, 400);

  const handleChange = useCallback(
    value => {
      setQuery(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const clear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  return { query, handleChange, clear };
}
