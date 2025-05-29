import axios from 'axios';

const api = axios.create({
  baseURL: 'https://inventory-app-backend-lemd.onrender.com/api',
});
export default api;

export const fetchItems = () => api.get('/items');
export const createItem = (data) => api.post('/items', data);
export const updateItem = (id, data) => api.put(`/items/${id}`, data);
export const deleteItem = (id) => api.delete(`/items/${id}`);
