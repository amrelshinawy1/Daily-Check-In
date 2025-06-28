# Daily Check-In MVP

A personalized digital health coach MVP built with React Native and Node.js.

## 🏗️ Architecture

- **Frontend**: React Native + Tamagui (Mobile App)
- **Backend**: Node.js + Express (REST API)
- **Monorepo**: Turborepo for efficient development

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- React Native CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

```bash
# Install dependencies
pnpm install:all

# Clean install (if you encounter issues)
pnpm build:clean
```

### Development

```bash
# Start React Native development server
pnpm dev:mobile

# Start backend development server
pnpm dev:backend

# Run on iOS simulator
cd apps/client && pnpm ios

# Run on Android emulator
cd apps/client && pnpm android
```

### Building

```bash
# Build iOS bundle
pnpm build:ios

# Build Android bundle
pnpm build:android

# Build both platforms
pnpm build:mobile
```

### Testing

```bash
# Run all tests
pnpm test

# Run mobile tests only
pnpm test:mobile

# Run backend tests only
pnpm test:backend
```

## 📱 Available Scripts

### Client (React Native)

- `dev` - Start React Native development server
- `dev-reset` - Start with cache reset
- `ios` - Run on iOS simulator
- `android` - Run on Android emulator
- `bundle:ios` - Create iOS bundle
- `bundle:android` - Create Android bundle
- `lint` - Run ESLint
- `test` - Run Jest tests

### Backend

- `dev` - Start development server
- `build` - Build for production
- `test` - Run tests
- `lint` - Run ESLint

## 🏗️ Project Structure

```
daily-check-in-mvp/
├── apps/
│   ├── client/          # React Native mobile app
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   └── types/
│   │   └── ...
│   └── backend/         # Node.js API server
│       ├── src/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── routes/
│       │   └── types/
│       └── ...
├── packages/
│   └── config/          # Shared configuration
├── scripts/
│   └── build.sh         # Build automation
└── e2e/                 # End-to-end tests
```

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Jest for both frontend and backend
- **E2E Tests**: Playwright for integration testing
- **Linting**: ESLint for code quality

## 🐳 Docker

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📦 Deployment

### Mobile App
- iOS: Build and submit to App Store
- Android: Build APK/AAB and submit to Google Play

### Backend API
- Deploy to your preferred cloud platform
- Environment variables are configured via `.env` files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Features

- ✅ Emoji-based mood selection (😀, 😐, 😔, 😤)
- ✅ Energy level slider (1-10 scale)
- ✅ Optional notes input
- ✅ Personalized wellness suggestions
- ✅ Cross-platform (web, iOS, Android)

## 🏗️ Tech Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Tamagui** - Universal UI kit (new to me, but loving it so far!)
- **TypeScript** - Type safety

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type safety

## 🎯 Development Decisions

### Why Tamagui?
I chose Tamagui over other UI libraries because:
- Universal design system (web + mobile)
- Great TypeScript support
- Built-in theming and animations
- Active community

### Why Emoji-based Mood Selection?
- More intuitive than dropdown menus
- Universal language (no translation needed)
- Faster interaction
- Visual and fun

### Energy Scale (1-10)
- 1-3: Low energy
- 4-7: Medium energy  
- 8-10: High energy

## 🚧 TODO / Future Improvements

### Short-term (this week)
- [ ] Add local storage for check-in history
- [ ] Implement offline support
- [ ] Add loading states and better error handling
- [ ] Fix the iOS build issues (need to set up proper React Native CLI)

### Medium-term (next month)
- [ ] User authentication
- [ ] Database integration (thinking PostgreSQL)
- [ ] Analytics dashboard
- [ ] Push notifications

### Long-term (future)
- [ ] Social features
- [ ] Integration with health apps
- [ ] Machine learning for better suggestions

## 🐛 Known Issues

- iOS build not working yet (need to set up React Native CLI properly)
- ESLint config was a pain to get right
- Docker setup took longer than expected
- Need to add proper error boundaries

## 🎨 Design Decisions

### UI/UX
- **Emoji buttons**: More fun and intuitive than dropdowns
- **Color-coded energy slider**: Red (low), yellow (medium), green (high)
- **Simple, clean interface**: Focus on the core functionality

### Technical
- **Monorepo with Turborepo**: Better for managing multiple packages
- **TypeScript everywhere**: Catching bugs early
- **Comprehensive testing**: Unit tests for business logic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm
- Docker (optional)

### Installation
```bash
git clone <repository>
cd daily-check-in-mvp
pnpm install
```

### Development
```bash
# Start backend
cd apps/backend && pnpm dev

# Start frontend (in another terminal)
cd apps/client && pnpm start
```

### Testing
```bash
# Run all tests
pnpm test

# Run specific tests
pnpm test:unit
pnpm test:e2e
```

## 🐳 Docker

```bash
# Build and run everything
docker-compose up --build

# Run specific services
docker-compose up backend
docker-compose up frontend
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License

## 🙏 Acknowledgments

- Tamagui team for the amazing UI framework
- React Native team for the excellent development platform
- Turborepo team for the powerful monorepo tooling

---
