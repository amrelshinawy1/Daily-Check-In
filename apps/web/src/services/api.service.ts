import axios from 'axios';
import { CheckinData, CheckinResponse } from '../types/checkin.types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class ApiService {
  static async submitCheckin(data: CheckinData): Promise<CheckinResponse> {
    try {
      const response = await apiClient.post('/api/checkin', data);
      return response.data;
    } catch (error) {
      console.error('Error submitting check-in:', error);
      throw new Error('Failed to submit check-in');
    }
  }

  static async getCheckinHistory(): Promise<CheckinData[]> {
    try {
      const response = await apiClient.get('/api/checkin');
      return response.data;
    } catch (error) {
      console.error('Error fetching check-in history:', error);
      throw new Error('Failed to fetch check-in history');
    }
  }
} 