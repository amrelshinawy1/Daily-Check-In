import { CheckinService } from '../services/checkin.service';
import { CheckinRequest } from '../types/checkin.types';

describe('CheckinService', () => {
  describe('getSuggestions', () => {
    it('should return suggestions for a happy mood', () => {
      const request: CheckinRequest = {
        mood: '😀',
        energy: 8,
        notes: 'Feeling great!'
      };

      const result = CheckinService.getSuggestions(request);

      expect(result).toHaveProperty('suggestions');
      expect(result).toHaveProperty('timestamp');
      expect(Array.isArray(result.suggestions)).toBe(true);
      expect(result.suggestions.length).toBeGreaterThan(0);
      expect(result.suggestions.length).toBeLessThanOrEqual(3);
    });

    it('should return suggestions for a sad mood', () => {
      const request: CheckinRequest = {
        mood: '😔',
        energy: 3,
        notes: 'Feeling down'
      };

      const result = CheckinService.getSuggestions(request);

      expect(result.suggestions.length).toBeGreaterThan(0);
      expect(result.suggestions.length).toBeLessThanOrEqual(3);
    });

    it('should handle different energy levels', () => {
      const lowEnergyRequest: CheckinRequest = {
        mood: '😐',
        energy: 2,
        notes: 'Tired'
      };

      const highEnergyRequest: CheckinRequest = {
        mood: '😀',
        energy: 9,
        notes: 'Energetic'
      };

      const lowResult = CheckinService.getSuggestions(lowEnergyRequest);
      const highResult = CheckinService.getSuggestions(highEnergyRequest);

      expect(lowResult.suggestions.length).toBeGreaterThan(0);
      expect(highResult.suggestions.length).toBeGreaterThan(0);
    });

    it('should include timestamp in response', () => {
      const request: CheckinRequest = {
        mood: '😀',
        energy: 5,
        notes: 'Okay'
      };

      const result = CheckinService.getSuggestions(request);

      expect(result.timestamp).toBeDefined();
      expect(new Date(result.timestamp).getTime()).toBeGreaterThan(0);
    });
  });
}); 