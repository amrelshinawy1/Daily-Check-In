# Docker Deployment Guide 🐳

This guide covers how to deploy the Daily Check-In MVP using Docker and Docker Compose.

## Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- At least 2GB of available RAM
- 5GB of available disk space

## Quick Start

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd daily-check-in-mvp
```

### 2. Build and Run
```bash
# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up --build -d
```

### 3. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Health Check**: http://localhost:3001/api/checkin/health

## Service Architecture

### Production Stack
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Nginx Proxy   │
│   (Port 3000)   │◄──►│   (Port 3001)   │◄──►│   (Port 80/443) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │     Redis       │
                       │   (Port 6379)   │
                       └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   PostgreSQL    │
                       │   (Port 5432)   │
                       └─────────────────┘
```

## Service Details

### Frontend (React Native + Tamagui)
- **Image**: Custom nginx-based image
- **Port**: 3000 (mapped to container port 80)
- **Features**: 
  - Serves the React Native web app
  - API proxy to backend
  - Static file caching
  - Gzip compression

### Backend (Express + TypeScript)
- **Image**: Node.js 20 Alpine
- **Port**: 3001
- **Features**:
  - RESTful API endpoints
  - Health checks
  - Request logging
  - CORS support

### Development Mode
```bash
# Run with development backend (hot reload)
docker-compose --profile dev up --build

# Access development backend at port 3002
```

### Production Mode
```bash
# Run with all production services
docker-compose --profile production up --build

# Includes Redis and PostgreSQL
```

## Environment Variables

### Backend Environment
```bash
NODE_ENV=production
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### Frontend Environment
```bash
EXPO_PUBLIC_API_URL=http://localhost:3001
```

### Database Environment
```bash
POSTGRES_DB=daily_checkin
POSTGRES_USER=checkin_user
POSTGRES_PASSWORD=checkin_password
```

## Docker Commands

### Basic Operations
```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f backend
```

### Building
```bash
# Build all services
docker-compose build

# Build specific service
docker-compose build backend

# Force rebuild (no cache)
docker-compose build --no-cache
```

### Maintenance
```bash
# Remove containers and networks
docker-compose down

# Remove containers, networks, and volumes
docker-compose down -v

# Remove all images
docker-compose down --rmi all

# Clean up unused resources
docker system prune -a
```

## Health Checks

All services include health checks:

```bash
# Check service health
docker-compose ps

# View health check logs
docker-compose logs backend | grep health
```

## Scaling

### Scale Backend Services
```bash
# Scale backend to 3 instances
docker-compose up --scale backend=3
```

### Load Balancing
The nginx configuration includes basic load balancing for the backend API.

## Monitoring

### Logs
```bash
# Follow all logs
docker-compose logs -f

# Follow specific service
docker-compose logs -f frontend

# Show last 100 lines
docker-compose logs --tail=100 backend
```

### Resource Usage
```bash
# View resource usage
docker stats

# View disk usage
docker system df
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check what's using the port
   lsof -i :3000
   
   # Stop conflicting service
   sudo systemctl stop <service-name>
   ```

2. **Build Failures**
   ```bash
   # Clean build cache
   docker-compose build --no-cache
   
   # Remove all images and rebuild
   docker-compose down --rmi all
   docker-compose up --build
   ```

3. **Database Connection Issues**
   ```bash
   # Check database logs
   docker-compose logs postgres
   
   # Restart database
   docker-compose restart postgres
   ```

### Debug Mode
```bash
# Run with debug logging
docker-compose up --build --verbose
```

## Security Considerations

### Production Deployment
1. **Change default passwords** in docker-compose.yml
2. **Use secrets management** for sensitive data
3. **Enable HTTPS** with proper SSL certificates
4. **Configure firewall rules**
5. **Regular security updates**

### Network Security
```bash
# Create custom network
docker network create daily-checkin-network

# Use internal network for sensitive services
docker-compose up --network daily-checkin-network
```

## Performance Optimization

### Resource Limits
```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
        reservations:
          memory: 256M
          cpus: '0.25'
```

### Caching
- Frontend static assets are cached for 1 year
- API responses can be cached with Redis
- Database query caching with connection pooling

## Backup and Recovery

### Database Backup
```bash
# Create backup
docker-compose exec postgres pg_dump -U checkin_user daily_checkin > backup.sql

# Restore backup
docker-compose exec -T postgres psql -U checkin_user daily_checkin < backup.sql
```

### Volume Backup
```bash
# Backup volumes
docker run --rm -v daily-checkin-mvp_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres_backup.tar.gz -C /data .

# Restore volumes
docker run --rm -v daily-checkin-mvp_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/postgres_backup.tar.gz -C /data
```

## CI/CD Integration

### GitHub Actions
The project includes GitHub Actions workflows that can build and deploy Docker images.

### Automated Deployment
```bash
# Deploy to staging
docker-compose -f docker-compose.yml -f docker-compose.staging.yml up -d

# Deploy to production
docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d
``` 