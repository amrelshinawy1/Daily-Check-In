import request from 'supertest';
import { app } from '../app';

describe('CheckinController', () => {
  describe('POST /api/checkin', () => {
    it('should return suggestions for valid check-in data', async () => {
      const checkinData = {
        mood: '😀',
        energy: 8,
        notes: 'Feeling great today!'
      };

      const response = await request(app)
        .post('/api/checkin')
        .send(checkinData)
        .expect(200);

      expect(response.body).toHaveProperty('suggestions');
      expect(response.body).toHaveProperty('timestamp');
      expect(Array.isArray(response.body.suggestions)).toBe(true);
      expect(response.body.suggestions.length).toBeGreaterThan(0);
    });

    it('should return 400 for missing mood', async () => {
      const checkinData = {
        energy: 5,
        notes: 'No mood provided'
      };

      const response = await request(app)
        .post('/api/checkin')
        .send(checkinData)
        .expect(400);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Mood is required');
    });

    it('should return 400 for invalid energy level', async () => {
      const checkinData = {
        mood: '😀',
        energy: 15, // Invalid: should be 1-10
        notes: 'Invalid energy'
      };

      const response = await request(app)
        .post('/api/checkin')
        .send(checkinData)
        .expect(400);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Invalid energy level');
    });

    it('should return 400 for invalid mood emoji', async () => {
      const checkinData = {
        mood: '🤔', // Not in valid moods
        energy: 5,
        notes: 'Invalid mood'
      };

      const response = await request(app)
        .post('/api/checkin')
        .send(checkinData)
        .expect(400);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Invalid mood');
    });

    it('should handle all valid mood emojis', async () => {
      const validMoods = ['😀', '😐', '😔', '😤'];

      for (const mood of validMoods) {
        const checkinData = {
          mood,
          energy: 5,
          notes: `Testing mood: ${mood}`
        };

        const response = await request(app)
          .post('/api/checkin')
          .send(checkinData)
          .expect(200);

        expect(response.body.suggestions.length).toBeGreaterThan(0);
      }
    });
  });

  describe('GET /api/checkin/health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/api/checkin/health')
        .expect(200);

      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('service');
      expect(response.body.status).toBe('healthy');
      expect(response.body.service).toBe('Daily Check-In API');
    });
  });
}); 