export interface CheckinRequest {
  mood: string;
  energy: number;
  notes?: string;
}

export interface CheckinResponse {
  suggestions: string[];
  timestamp: string;
}

export interface CheckinData extends CheckinRequest {
  id: string;
  timestamp: string;
} 