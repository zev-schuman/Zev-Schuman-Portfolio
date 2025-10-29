# Deployment Instructions

## Quick Setup

Since git requires Xcode license acceptance, here are the commands to run manually:

## Step 1: Initialize Git Repository

Open Terminal and run:

```bash
cd ~/portfolio-website
git init
git branch -M main
git add .
git commit -m "Initial portfolio website commit"
```

## Step 2: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `portfolio` (or your preferred name)
3. Make it **public** (required for free GitHub Pages)
4. Do NOT initialize with README
5. Click "Create repository"

## Step 3: Push to GitHub

```bash
cd ~/portfolio-website
git remote add origin https://github.com/zevbschuman/portfolio.git
git push -u origin main
```

You may be prompted for your GitHub credentials.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Scroll to "Pages" (left sidebar)
4. Under "Source", select "main" branch and "/ (root)"
5. Click "Save"

## Step 5: Your Portfolio is Live!

Wait 2-5 minutes, then visit:
**https://zevbschuman.github.io/portfolio/**

---

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
cd ~/portfolio-website
gh repo create portfolio --public --source=. --remote=origin
git push -u origin main
```

Then enable Pages in the repository settings as described above.

---

## Troubleshooting

- **Xcode License**: Run `sudo xcodebuild -license` if you get license errors
- **Authentication**: You may need to use a Personal Access Token instead of password
- **Repository Name**: Change "portfolio" to your preferred name in all commands
