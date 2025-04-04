import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const fetchDashboardData = async (year: string) => {
  try {
    const response = await axios.get(`${API_URL}/invoices/dashboard?year=${year}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do dashboard:', error);
    throw error;
  }
};