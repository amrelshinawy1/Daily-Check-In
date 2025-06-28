import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export interface EnvironmentConfig {
  // Server
  PORT: number;
  NODE_ENV: string;
  
  // Database (for future use)
  DATABASE_URL?: string;
  DATABASE_POOL_SIZE: number;
  
  // API
  API_VERSION: string;
  CORS_ORIGIN: string;
  
  // Security
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  
  // Logging
  LOG_LEVEL: string;
  LOG_FORMAT: string;
  
  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;
}

export const config: EnvironmentConfig = {
  // Server
  PORT: parseInt(process.env.PORT || '3001', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_POOL_SIZE: parseInt(process.env.DATABASE_POOL_SIZE || '10', 10),
  
  // API
  API_VERSION: process.env.API_VERSION || 'v1',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  
  // Security
  JWT_SECRET: process.env.JWT_SECRET || 'default-secret-key-change-in-production',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
  
  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FORMAT: process.env.LOG_FORMAT || 'combined',
  
  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
};

export default config;

// Validate required environment variables
export const validateConfig = (): void => {
  const required: string[] = [
    // Add required env vars here when we add them
    // 'DATABASE_URL',
    // 'JWT_SECRET',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}; 