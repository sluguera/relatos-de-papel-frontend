import { useState, useEffect, useCallback } from 'react';
import { getOrdersByUser } from '../services/orderService';

export function useOrders(userId) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = useCallback(async () => {
    if (!userId) {
      setOrders([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await getOrdersByUser(userId);
      setOrders(Array.isArray(data) ? data : data.content ?? []);
    } catch (err) {
      setError(err.userMessage || 'Error al cargar los pedidos.');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return { orders, loading, error, refetch: fetchOrders };
}
