import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import checkinRoutes from './routes/checkin.routes';
import config from './config/env';

export const app: Express = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: config.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/checkin', checkinRoutes);

// Health check endpoint
app.get('/api/checkin/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: config.NODE_ENV,
    version: config.API_VERSION
  });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
}); 