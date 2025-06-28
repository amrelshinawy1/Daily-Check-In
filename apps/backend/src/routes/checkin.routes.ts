import { Router } from 'express';
import { CheckinController } from '../controllers/checkin.controller';

const router: ReturnType<typeof Router> = Router();

// Health check endpoint
router.get('/health', CheckinController.getHealth);

// Main check-in endpoint
router.post('/', CheckinController.handleCheckin);

export default router; 