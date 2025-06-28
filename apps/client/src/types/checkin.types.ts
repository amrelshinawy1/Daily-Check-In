export interface CheckinRequest {
  mood: string;
  energy: number;
  notes?: string;
}

export interface CheckinResponse {
  suggestions: string[];
  timestamp: string;
}

export interface CheckinFormData {
  mood: string;
  energy: number;
  notes: string;
}

export type MoodOption = '😀' | '😐' | '😔' | '😤'; 