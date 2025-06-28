import { CheckinRequest, CheckinResponse } from '../types/checkin.types';

export class ApiService {
  // TODO: Move this to environment variables
  private static readonly API_BASE_URL = 'http://localhost:3001';
  
  // TODO: Add request timeout and retry logic
  private static readonly TIMEOUT = 10000;

  public static async submitCheckin(request: CheckinRequest): Promise<CheckinResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/api/checkin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        // TODO: Add more specific error handling based on status codes
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as CheckinResponse;
    } catch (error) {
      // TODO: Add logging service for better debugging
      console.error('API Error:', error);
      
      if (error instanceof Error) {
        throw error;
      }
      
      throw new Error('Network error occurred');
    }
  }

  // TODO: Add health check method for monitoring
  public static async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/api/checkin/health`);
      return response.ok;
    } catch {
      return false;
    }
  }
} 