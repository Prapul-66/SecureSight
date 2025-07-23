import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchIncidents = () => api.get('/incidents');

export default api;
