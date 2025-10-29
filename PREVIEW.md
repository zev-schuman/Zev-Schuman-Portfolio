# Preview Guide

## How to View Your Portfolio Locally

Before deploying to GitHub Pages, you can preview your website locally.

### Option 1: Simple Python Server (Recommended)

```bash
cd ~/portfolio-website
python3 -m http.server 8000
```

Then open your browser and go to: `http://localhost:8000`

### Option 2: Using Live Server (VS Code)

If you have VS Code with the "Live Server" extension:
1. Right-click on `index.html`
2. Select "Open with Live Server"

### Option 3: Drag and Drop

Simply drag the `index.html` file into your web browser.

---

## Current Design: Option C (Technical/Professional)

The portfolio is currently set to **Option C** - the technical dark mode design.

### To Switch Designs:

1. Open `index.html` in a text editor
2. Find these lines near the top:

```html
<!-- CSS Options - Switch between these -->
<!-- <link rel="stylesheet" href="css/option-a.css"> -->
<!-- <link rel="stylesheet" href="css/option-b.css"> -->
<link rel="stylesheet" href="css/option-c.css">
```

3. Comment out `option-c.css` and uncomment the one you want:
   - For Minimalist: uncomment line 8
   - For Bold/Creative: uncomment line 9
   - For Technical (current): keep line 10

4. Save and refresh your browser

---

## Next Steps

1. **Add Your Images**: Replace the placeholder images in the project cards
2. **Preview All Options**: Try all three design styles to pick your favorite
3. **Deploy to GitHub Pages**: Follow the README.md instructions
4. **Customize**: Adjust colors, text, or layout as needed

---

## Location of Files

Your portfolio is located at:
**~/portfolio-website**

Or in full path:
**/Users/zevschuman/portfolio-website**
