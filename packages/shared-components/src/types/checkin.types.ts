export type Mood = 'happy' | 'neutral' | 'sad' | 'frustrated';

export interface CheckinData {
  mood: Mood;
  energy: number;
  notes?: string;
}

export interface CheckinResponse {
  suggestions: string[];
} 