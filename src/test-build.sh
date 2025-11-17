#!/bin/bash

echo "🧪 Testing local build..."
echo ""

# Clean previous build
echo "🧹 Cleaning old dist..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build
echo "🔨 Building..."
npm run build

# Check if dist exists
if [ -d "dist" ]; then
  echo ""
  echo "✅ Build successful!"
  echo ""
  echo "📂 Build output:"
  ls -lh dist/
  echo ""
  echo "📂 Assets:"
  ls -lh dist/assets/ 2>/dev/null || echo "No assets folder"
  echo ""
  
  # Check for CSS
  if ls dist/assets/*.css 1> /dev/null 2>&1; then
    echo "✅ CSS files found:"
    ls -lh dist/assets/*.css
  else
    echo "⚠️  WARNING: No CSS files found in dist/assets/"
    echo "This means Tailwind CSS did not compile properly"
  fi
  
  # Check for JS
  if ls dist/assets/*.js 1> /dev/null 2>&1; then
    echo "✅ JS files found:"
    ls -lh dist/assets/*.js
  else
    echo "❌ ERROR: No JS files found in dist/assets/"
  fi
  
else
  echo "❌ Build failed - dist folder not created"
  exit 1
fi

echo ""
echo "🚀 To preview: npm run preview"
