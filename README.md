# Zev Schuman - Engineering Portfolio Website

A professional portfolio website showcasing engineering projects, internships, and technical skills.

## 🎨 Design Options

This portfolio includes **three distinct design styles** - you can switch between them by changing the CSS link in `index.html`:

### Option A: Minimalist/Clean
- White background with navy blue accents
- Clean typography and simple layouts
- Card-based project sections with subtle hover effects
- Professional and approachable aesthetic

### Option B: Bold/Creative  
- Gradient backgrounds with purple and pink accents
- Large hero section with animated elements
- Asymmetric layouts and bold typography
- Creative and vibrant design

### Option C: Technical/Professional (Currently Active)
- Dark mode with neon blue/purple accents
- Terminal-inspired design elements
- Monospace fonts and command prompt aesthetics
- Perfect for showcasing technical expertise

## 📂 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   ├── option-a.css   # Minimalist design
│   ├── option-b.css   # Bold/Creative design
│   └── option-c.css   # Technical/Professional design
├── js/
│   └── main.js        # Navigation, modals, and interactions
├── images/            # Project images directory
└── README.md          # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to GitHub and create a new repository (e.g., `zevschuman-portfolio`)
2. Do NOT initialize with README or .gitignore

### Step 2: Initialize and Push
```bash
cd ~/portfolio-website
git init
git add .
git commit -m "Initial portfolio website commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zevschuman-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "main" branch and "/ (root)"
4. Click "Save"

Your portfolio will be live at: `https://YOUR_USERNAME.github.io/zevschuman-portfolio/`

## 📸 Adding Project Images

### Recommended Image Specifications:
- **Aspect Ratio:** 16:9 (e.g., 1200x675px)
- **File Format:** JPEG or PNG
- **File Size:** Under 500KB per image
- **Naming Convention:** 
  - `yerf-dog.jpg` - Yerf-Dog Autonomous Buggy
  - `space-mission.jpg` - Space Mission Design
  - `wing.jpg` - Cantilevered Wing
  - `uav-launcher.jpg` - UAV Launcher

### Steps to Add Images:
1. Place your images in the `images/` directory
2. Open `index.html`
3. For each project card, find the `<div class="image-placeholder">` section
4. Replace with:
   ```html
   <img src="images/your-image.jpg" alt="Project Name" />
   ```

### Example:
```html
<!-- Before -->
<div class="image-placeholder" style="aspect-ratio: 16/9;">
    <span>Image: Yerf-Dog Autonomous Buggy</span>
    <small>Suggested: 1200x675px or 16:9 aspect ratio</small>
</div>

<!-- After -->
<img src="images/yerf-dog.jpg" alt="Yerf-Dog Autonomous Buggy" style="width: 100%; height: auto;" />
```

## 🎨 Switching Between Design Options

Open `index.html` and change line 10-12:

```html
<!-- To switch designs, uncomment ONE of these: -->

<link rel="stylesheet" href="css/option-a.css"> <!-- Minimalist -->
<link rel="stylesheet" href="css/option-b.css"> <!-- Bold/Creative -->
<link rel="stylesheet" href="css/option-c.css"> <!-- Technical (Current) -->
```

## 🛠️ Customization

### Update Contact Information
Edit the contact section in `index.html` (lines ~69-73)

### Modify Projects
Edit project data in `js/main.js` in the `projectData` object

### Change Colors/Theme
Each CSS file has CSS custom properties (variables) at the top that you can modify:
- **Option A:** Lines 3-10 in `option-a.css`
- **Option B:** Lines 3-14 in `option-b.css`  
- **Option C:** Lines 3-12 in `option-c.css`

## 📱 Responsive Design

All design options are fully responsive and work on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🔧 Features

- ✅ Single-page scrolling navigation
- ✅ Smooth scroll effects
- ✅ Project detail modals
- ✅ Mobile-responsive hamburger menu
- ✅ Scroll-triggered animations
- ✅ Interactive hover effects
- ✅ Professional timeline layout
- ✅ Skills grid display
- ✅ SEO-friendly structure

## 📧 Contact

- Email: zevbschuman@gmail.com
- Phone: (415) 747-9617

## 📄 License

This portfolio is personal use only. Feel free to fork and customize for your own portfolio!
