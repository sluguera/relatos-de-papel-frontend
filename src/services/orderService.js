import apiClient from '../api/apiClient';
import { API_ENDPOINTS } from '../api/endpoints';

/**
 * Create a new order.
 * @param {Object} orderData - Order payload
 */
export const createOrder = async orderData => {
  const response = await apiClient.post(API_ENDPOINTS.ORDERS, orderData);
  return response.data;
};

/**
 * Fetch all orders for a given user.
 * @param {string|number} userId
 */
export const getOrdersByUser = async userId => {
  const response = await apiClient.get(API_ENDPOINTS.ORDERS_BY_USER(userId));
  return response.data;
};

/**
 * Fetch a single order by its ID.
 * @param {string|number} id
 */
export const getOrderById = async id => {
  const response = await apiClient.get(API_ENDPOINTS.ORDER_BY_ID(id));
  return response.data;
};
