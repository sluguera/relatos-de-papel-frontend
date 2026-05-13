export const API_ENDPOINTS = {
  // Books
  BOOKS: '/books',
  BOOK_BY_ID: id => `/books/${id}`,
  BOOKS_SEARCH: '/books/search',
  BOOKS_BY_CATEGORY: category => `/books/category/${category}`,

  // Orders
  ORDERS: '/orders',
  ORDER_BY_ID: id => `/orders/${id}`,
  ORDERS_BY_USER: userId => `/orders/user/${userId}`,

  // Categories
  CATEGORIES: '/categories',
};
