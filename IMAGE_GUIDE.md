# Image Assets Guide

This guide explains what images are needed for your portfolio and where to place them.

## 📸 Required Images

### 1. Logo Assets (Already Included)
Located in `images/assets/`:

✅ **Light Theme Logos (Navigation)**
- `logo-general-light-desktop.svg` - General logo for desktop nav
- `logo-general-light-mobile.svg` - General logo for mobile nav
- `logo-bubble-light-desktop.svg` - Bubble logo for desktop nav
- `logo-bubble-light-mobile.svg` - Bubble logo for mobile nav

✅ **Dark Theme Logos (Footer)**
- `logo-general-dark-desktop.svg` - General logo for desktop footer
- `logo-general-dark-mobile.svg` - General logo for mobile footer
- `logo-bubble-dark-desktop.svg` - Bubble logo for desktop footer
- `logo-bubble-dark-mobile.svg` - Bubble logo for mobile footer

### 2. Project Thumbnails Needed

#### Selected Work (Password Protected)
Place in `images/selectedWork/`:

```
📁 images/selectedWork/
├── project-1-thumbnail.jpg
├── project-2-thumbnail.jpg
├── project-3-thumbnail.jpg
└── ... (more project thumbnails)
```

**Recommended Specs:**
- Aspect Ratio: 16:9 (landscape)
- Dimensions: 1280x720px minimum
- Format: JPG or PNG
- Size: < 500KB (optimized)

#### Personal Work (Public)
Place in `images/personalWork/`:

```
📁 images/personalWork/
├── personal-1-thumbnail.jpg
├── personal-2-thumbnail.jpg
├── personal-3-thumbnail.jpg
└── ... (more project thumbnails)
```

**Recommended Specs:**
- Aspect Ratio: 16:9 (landscape)
- Dimensions: 1280x720px minimum
- Format: JPG or PNG
- Size: < 500KB (optimized)

### 3. Work Detail Images

#### Selected Work Detail Images
Place in `images/selectedWork/`:

```
📁 images/selectedWork/
├── project-1-img-1.jpg
├── project-1-img-2.jpg
├── project-1-img-3.jpg
├── project-2-img-1.jpg
└── ... (more detail images)
```

**Recommended Specs:**
- Max Width: 1440px
- Format: JPG or PNG
- Size: < 800KB per image (optimized)
- Various aspect ratios supported

#### Personal Work Detail Images
Place in `images/personalWork/`:

```
📁 images/personalWork/
├── personal-1-img-1.jpg
├── personal-1-img-2.jpg
├── personal-2-img-1.jpg
└── ... (more detail images)
```

## 🎨 Creating Placeholder Images

If you don't have final images ready, you can create placeholders:

### Option 1: Use Online Tools
- [Placeholder.com](https://placeholder.com) - Simple placeholders
- [Unsplash](https://unsplash.com) - Free stock photos
- [Pexels](https://pexels.com) - Free stock photos

### Option 2: Create Solid Color Placeholders
Use your design system colors:
- Pink: #E4C3FF
- Sky Blue: #C3FDFF
- Blue: #49AAFF
- Salmon: #FF9292

### Option 3: Using Terminal (macOS)
Create solid color placeholders:

```bash
# Create placeholder directories
mkdir -p images/selectedWork images/personalWork

# For macOS users, you can use ImageMagick:
# Install: brew install imagemagick

# Create 1280x720 placeholder thumbnails
convert -size 1280x720 xc:#E4C3FF images/selectedWork/project-1-thumbnail.jpg
convert -size 1280x720 xc:#C3FDFF images/selectedWork/project-2-thumbnail.jpg
convert -size 1280x720 xc:#49AAFF images/personalWork/personal-1-thumbnail.jpg
```

## 📋 Image Checklist

Before launching your portfolio, ensure you have:

### Homepage
- [ ] 3+ Selected Work thumbnails
- [ ] 3+ Personal Work thumbnails

### Work Detail Pages
For each project listed in `content.json`:
- [ ] Project thumbnail image
- [ ] 2-5 detail images per project
- [ ] Next project thumbnail

### Logos
- [ ] All 8 logo variations (general + bubble, light + dark, desktop + mobile)

## 🔧 Updating Image Paths

After adding images, update `data/content.json`:

```json
{
  "selectedWork": {
    "projects": [
      {
        "id": "project-1",
        "thumbnail": "images/selectedWork/project-1-thumbnail.png",
        "thumbnailAlt": "Description of project 1 thumbnail"
      }
    ]
  },
  "projectDetails": {
    "project-1": {
      "images": [
        {
          "src": "images/selectedWork/project-1-img-1.jpg",
          "alt": "Description of image 1",
          "caption": "Optional caption text"
        }
      ]
    }
  }
}
```

## 📐 Responsive Image Behavior

Images automatically adapt to different screen sizes:

**Desktop (1440px, 1280px)**
- Thumbnails: 16:9 aspect ratio
- Detail images: Full width up to 1440px

**Tablet (800px)**
- Thumbnails: 16:9 aspect ratio
- Detail images: Full width

**Mobile (375px)**
- Thumbnails: 4:3 aspect ratio
- Detail images: Full width

## 🚀 Image Optimization Tips

1. **Compress Images**: Use tools like:
   - [TinyPNG](https://tinypng.com)
   - [ImageOptim](https://imageoptim.com) (macOS)
   - [Squoosh](https://squoosh.app) (web-based)

2. **Use Correct Format**:
   - JPG: Photos and complex images
   - PNG: Graphics with transparency
   - SVG: Logos and icons

3. **Lazy Loading**: Already implemented in the code
   - Images load as user scrolls
   - Improves initial page load speed

4. **Alt Text**: Always provide descriptive alt text
   - Improves accessibility
   - Helps with SEO

## 🎯 Quick Start

1. Add at least one thumbnail for testing:
   ```bash
   # Place any image in:
   images/selectedWork/project-1-thumbnail.jpg
   images/personalWork/personal-1-thumbnail.jpg
   ```

2. Update `content.json` with correct paths

3. Open `index.html` in browser to see results

4. Check browser console for any 404 errors on missing images

---

Need help? Check the main README.md for troubleshooting tips.



