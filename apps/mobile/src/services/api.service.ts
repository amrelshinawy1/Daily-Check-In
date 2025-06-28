import { CheckinData, CheckinResponse } from '@daily-check-in/shared-components';

const API_BASE_URL = 'http://localhost:3001/api';

export class ApiService {
  static async submitCheckin(data: CheckinData): Promise<CheckinResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/checkin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
} 