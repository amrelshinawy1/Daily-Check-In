#!/bin/bash

echo "🌟 Setting up Daily Check-In MVP..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd apps/backend
npm install
cd ../..

# Install client dependencies
echo "📱 Installing client dependencies..."
cd apps/client
npm install
cd ../..

# Install E2E dependencies
echo "🧪 Installing E2E test dependencies..."
cd e2e
npm install
cd ..

# Install shared config dependencies
echo "⚙️ Installing shared config dependencies..."
cd packages/config
npm install
cd ../..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Start the backend: cd apps/backend && npm run dev"
echo "2. Start the client app: cd apps/client && npm start"
echo "3. Run tests: npm test"
echo "4. Run E2E tests: npm run e2e"
echo ""
echo "Happy coding! 🚀" 