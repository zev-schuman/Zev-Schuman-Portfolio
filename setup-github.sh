#!/bin/bash

# Setup script for GitHub Pages deployment
# Run this script to initialize and push your portfolio to GitHub

echo "📦 Initializing Git repository..."
git init
git branch -M main

echo "📄 Adding files..."
git add .

echo "💾 Creating initial commit..."
git commit -m "Initial portfolio website commit"

echo "🔗 Setting up GitHub remote..."
git remote add origin https://github.com/zev-schuman/portfolio.git

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Create a repository named 'portfolio' at https://github.com/new"
echo "2. Run: git push -u origin main"
echo "3. Enable GitHub Pages in your repository settings"
echo "4. Your portfolio will be live at: https://zev-schuman.github.io/portfolio/"
