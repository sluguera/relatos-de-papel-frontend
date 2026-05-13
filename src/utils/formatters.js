/**
 * Format a number as currency (EUR by default).
 * @param {number} amount
 * @param {string} currency
 * @param {string} locale
 */
export const formatCurrency = (amount, currency = 'EUR', locale = 'es-ES') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

/**
 * Format a date string or Date object.
 * @param {string|Date} date
 * @param {Object} options - Intl.DateTimeFormat options
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', { ...defaultOptions, ...options }).format(
    new Date(date)
  );
};

/**
 * Truncate a string to maxLen characters, appending "…" if truncated.
 */
export const truncate = (str, maxLen = 120) =>
  str && str.length > maxLen ? `${str.slice(0, maxLen)}…` : str;

/**
 * Generate a placeholder cover URL for books without images.
 */
export const placeholderCover = (title = 'Book') =>
  `https://via.placeholder.com/300x420/2c3e50/ffffff?text=${encodeURIComponent(title)}`;
