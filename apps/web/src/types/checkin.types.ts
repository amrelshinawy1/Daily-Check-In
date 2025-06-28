export interface CheckinData {
  mood: 'happy' | 'neutral' | 'sad' | 'frustrated';
  energy: number;
  notes?: string;
}

export interface CheckinResponse {
  success: boolean;
  message: string;
  suggestions: string[];
}

export interface WellnessSuggestion {
  id: string;
  title: string;
  description: string;
  category: 'mood' | 'energy' | 'general';
} 