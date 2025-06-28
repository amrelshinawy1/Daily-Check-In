import { Request, Response } from 'express';
import { CheckinService } from '../services/checkin.service';
import { CheckinRequest } from '../types/checkin.types';

export class CheckinController {
  public static async handleCheckin(req: Request, res: Response): Promise<void> {
    try {
      const { mood, energy, notes } = req.body as CheckinRequest;

      // TODO: Add input sanitization to prevent XSS
      // TODO: Add rate limiting per user/IP
      
      // Validate required fields
      if (!mood) {
        res.status(400).json({ 
          error: 'Mood is required',
          message: 'Please select a mood emoji'
        });
        return;
      }

      if (typeof energy !== 'number' || energy < 1 || energy > 10) {
        res.status(400).json({ 
          error: 'Invalid energy level',
          message: 'Energy must be a number between 1 and 10'
        });
        return;
      }

      // Validate mood emoji - TODO: Move this to a config file
      const validMoods = ['😀', '😐', '😔', '😤'];
      if (!validMoods.includes(mood)) {
        res.status(400).json({ 
          error: 'Invalid mood',
          message: 'Please select a valid mood emoji'
        });
        return;
      }

      // Get suggestions from service
      const response = CheckinService.getSuggestions({ mood, energy, notes });

      // TODO: Add proper logging service instead of console.log
      // TODO: Store check-ins in database for analytics
      console.log('Check-in received:', {
        mood,
        energy,
        notes: notes || 'No notes',
        timestamp: response.timestamp
      });

      res.status(200).json(response);
    } catch (error) {
      // TODO: Add proper error logging and monitoring
      console.error('Error processing check-in:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: 'Something went wrong processing your check-in'
      });
    }
  }

  public static async getHealth(req: Request, res: Response): Promise<void> {
    // TODO: Add database connection check
    // TODO: Add external service health checks
    res.status(200).json({ 
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Daily Check-In API'
    });
  }
} 