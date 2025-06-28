import { CheckinRequest, CheckinResponse } from '../types/checkin.types';

export class CheckinService {
  // TODO: Move these to a database or config file later
  // For now, hardcoded suggestions work fine for MVP
  private static readonly MOOD_SUGGESTIONS = {
    '😀': [
      'Great energy! Try some light cardio to maintain this positive mood',
      'Your positive energy is contagious! Share it with someone today',
      'Perfect time to tackle that project you\'ve been thinking about'
    ],
    '😐': [
      'Try a short walk outside to boost your mood',
      'Practice deep breathing for 5 minutes',
      'Listen to your favorite upbeat music'
    ],
    '😔': [
      'Be gentle with yourself today. Try some light stretching',
      'Write down 3 things you\'re grateful for',
      'Consider calling a friend or family member'
    ],
    '😤': [
      'Take a few deep breaths and count to 10',
      'Try some progressive muscle relaxation',
      'Write down what\'s bothering you, then let it go'
    ]
  };

  // TODO: These suggestions could be more personalized based on user history
  private static readonly ENERGY_SUGGESTIONS = {
    low: [
      'Take a short nap if possible',
      'Stay hydrated and eat a light, nutritious snack',
      'Try some gentle yoga or stretching'
    ],
    medium: [
      'Go for a moderate walk',
      'Try a new hobby or activity',
      'Connect with a friend or family member'
    ],
    high: [
      'Channel this energy into exercise or a creative project',
      'Try high-intensity interval training',
      'Tackle that challenging task you\'ve been putting off'
    ]
  };

  public static getSuggestions(request: CheckinRequest): CheckinResponse {
    // TODO: Add validation for mood emoji
    const moodSuggestions = this.MOOD_SUGGESTIONS[request.mood as keyof typeof this.MOOD_SUGGESTIONS] || 
                           this.MOOD_SUGGESTIONS['😐']; // Default to neutral if mood not found
    
    const energyLevel = this.getEnergyLevel(request.energy);
    const energySuggestions = this.ENERGY_SUGGESTIONS[energyLevel];

    // Combine and randomize suggestions
    // TODO: In the future, we could use ML to personalize these suggestions
    const allSuggestions = [...moodSuggestions, ...energySuggestions];
    const shuffled = this.shuffleArray(allSuggestions);
    
    // Return 2-3 suggestions (keeping it simple for MVP)
    const suggestions = shuffled.slice(0, Math.min(3, shuffled.length));

    return {
      suggestions,
      timestamp: new Date().toISOString()
    };
  }

  // TODO: This could be more sophisticated - maybe use ranges like 1-2, 3-5, 6-8, 9-10
  private static getEnergyLevel(energy: number): 'low' | 'medium' | 'high' {
    if (energy <= 3) return 'low';
    if (energy <= 7) return 'medium';
    return 'high';
  }

  // Fisher-Yates shuffle algorithm
  // TODO: Consider using a seeded random for consistent results in testing
  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
} 