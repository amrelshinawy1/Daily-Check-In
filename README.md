# 🌟 Daily Check-In MVP

A personalized digital health coach MVP built with React Native + Tamagui frontend and Node.js + Express backend.

> **Note**: This is my first time using Tamagui - really excited about the universal design system! Still figuring out the best patterns for cross-platform development.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## 📱 Features

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

## 🏛️ Architecture

### Backend (MVC Pattern)
```
apps/backend/src/
├── controllers/     # HTTP request handlers
├── services/        # Business logic
├── routes/          # API route definitions
├── types/           # TypeScript interfaces
└── app.ts          # Express app setup
```

### Frontend (Component-Based)
```
apps/client/src/
├── components/      # Reusable UI components
├── screens/         # Screen components
├── services/        # API integration
└── types/           # TypeScript interfaces
```

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
