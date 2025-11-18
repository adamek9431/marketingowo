#!/bin/bash

echo "🔧 Installing dependencies..."
npm install

echo "📦 Building with Vite..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""

# Check which folder was created
if [ -d "dist" ]; then
  echo "📂 Output directory: dist/"
  ls -la dist/
  echo ""
  echo "💡 Using Vite 5.x (output to dist/)"
elif [ -d "build" ]; then
  echo "📂 Output directory: build/"
  ls -la build/
  echo ""
  echo "💡 Using Vite 6.x (output to build/)"
else
  echo "❌ ERROR: No output directory found!"
  echo "Expected either 'dist/' or 'build/' folder"
  exit 1
fi

echo ""
echo "🚀 Next steps:"
echo "1. Test locally: npm run preview"
echo "2. Commit & push to GitHub"
echo "3. Deploy on Cloudflare (Framework: None, Output: build or dist)"
