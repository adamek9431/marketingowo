#!/bin/bash

echo "🔧 Installing dependencies..."
npm install

echo "📦 Building with Vite..."
npm run build

echo "✅ Build complete! Output directory: dist/"
ls -la dist/
