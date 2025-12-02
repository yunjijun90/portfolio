# Yunji Jun - Portfolio Website

A custom portfolio website built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages with no ongoing subscription costs.

## 🎨 Design System

The website uses a comprehensive design system with tokenized values extracted from Figma:

### Color Variables
- **Dynamic Colors**: Pink (#E4C3FF), Sky Blue (#C3FDFF), Blue (#49AAFF), Salmon (#FF9292)
- **Background Colors**: Main (#121212), Black (#000000), White (#FFFFFF), Pink (#F4E7FF)
- **Text Colors**: Black, White, Neutral variations

### Typography
- **Headline Font**: STK Earl (purchased web font)
- **Body Font**: Inter (Google Fonts)
- **Styles**: H1, H2, T1-T3 (titles), S1 (subtitle), B1 (body)

### Spacing
Consistent spacing scale from 2px to 60px using CSS variables.

### Responsive Breakpoints
- **Desktop**: 1440px+ and 1280px
- **Tablet**: 800px
- **Mobile**: 375px

## 📁 Project Structure

```
portfolio/
├── index.html              # Homepage
├── css/
│   ├── variables.css       # Design tokens (colors, typography, spacing)
│   ├── styles.css          # Main component styles
│   └── responsive.css      # Responsive breakpoints
├── js/
│   ├── navigation.js       # Logo and color rotation system
│   ├── main.js             # Content loading and interactions
│   └── password.js         # (Legacy - integrated into main.js)
├── pages/
│   ├── password.html       # Password protection page
│   └── workDetail.html     # Work detail template
├── data/
│   └── content.json        # Centralized content management
├── images/
│   ├── assets/             # Logo SVGs (general, bubble variants)
│   ├── selectedWork/       # Selected work images
│   └── personalWork/       # Personal work images
├── fonts/
│   └── headline/
│       └── STKEarl-Light.woff
└── README.md
```

## 🚀 Features

### 1. Dynamic Color & Logo Rotation
- Navigation background rotates through 4 dynamic colors on each homepage visit
- Logo alternates between 2 designs (general and bubble)
- Rotation persists across sessions using localStorage
- Click logo to manually trigger rotation

### 2. Password-Protected Work
- Selected Work section requires password (default: 1788)
- Session-based authentication (expires after 1 hour)
- Error handling with visual feedback

### 3. Responsive Design
- **Homepage**: Fluid grid (scales with viewport)
- **Work Detail Pages**: Fixed grid (stops at 1440px max-width)
- Optimized for desktop, tablet, and mobile devices

### 4. Centralized Content Management
All text and images are managed through `data/content.json` for easy updates.

## 📝 How to Update Content

### Update Project Information

Edit `data/content.json`:

```json
{
  "selectedWork": {
    "sectionTitle": "Selected Work",
    "requiresPassword": true,
    "password": "1788",
    "projects": [
      {
        "id": "project-1",
        "title": "Your Project Title",
        "subtitle": "Project Category",
        "year": "2024",
        "thumbnail": "images/selectedWork/project-1-thumbnail.jpg",
        "thumbnailAlt": "Project description",
        "detailPage": "pages/workDetail.html?project=project-1"
      }
    ]
  }
}
```

### Add New Projects

1. Add project to `selectedWork.projects` or `personalWork.projects` in `content.json`
2. Add project details to `projectDetails` object
3. Add images to `images/selectedWork/` or `images/personalWork/`
4. No code changes needed - content loads dynamically!

### Update Password

Change the `password` value in `content.json`:
```json
"selectedWork": {
  "password": "YOUR_NEW_PASSWORD"
}
```

### Add Images

1. Place images in appropriate folders:
   - Selected work: `images/selectedWork/`
   - Personal work: `images/personalWork/`

2. Reference in `content.json`:
   ```json
   "thumbnail": "images/selectedWork/project-name.jpg"
   ```

3. For work detail images:
   ```json
   "images": [
     {
       "src": "images/selectedWork/project-1-detail.jpg",
       "alt": "Image description",
       "caption": "Optional caption"
     }
   ]
   ```

## 🎨 Customization

### Change Colors

Edit `css/variables.css`:
```css
:root {
  --color-dynamic-pink: #E4C3FF;
  --color-dynamic-skyblue: #C3FDFF;
  --color-dynamic-blue: #49AAFF;
  --color-dynamic-salmon: #FF9292;
}
```

### Modify Spacing

Adjust spacing variables in `css/variables.css`:
```css
--spacing-60: 60px;
--spacing-48: 48px;
/* etc. */
```

### Update Typography

Change font settings in `css/variables.css`:
```css
--font-headline: 'STK Earl', serif;
--font-body: 'Inter', sans-serif;
--font-size-h1: 24px;
/* etc. */
```

## 🌐 Deployment to GitHub Pages

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`, folder: `/ (root)`
   - Save

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/portfolio/`

## 📱 Testing

### Test Navigation Color Rotation
1. Open homepage in browser
2. Open Developer Tools → Application → Session Storage
3. Clear `hasRotated` key
4. Refresh page - color should rotate
5. Check that color persists across page navigation

### Test Password Protection
1. Click on Selected Work project
2. Enter incorrect password - should show error
3. Enter correct password (1788) - should access work detail
4. Authentication should persist for 1 hour

### Test Responsive Design
Use browser DevTools to test at:
- Desktop: 1440px, 1280px
- Tablet: 800px
- Mobile: 375px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

All rights reserved. The code structure is for personal portfolio use. Design and content © Yunji Jun.

## 🆘 Troubleshooting

### Images Not Loading
- Check file paths are relative to HTML file location
- Verify image files exist in correct folders
- Check file extensions match (jpg vs jpeg)

### Fonts Not Loading
- Verify `STKEarl-Light.woff` is in `fonts/headline/` folder
- Check font-face declaration in `css/variables.css`
- Clear browser cache and reload

### Color Rotation Not Working
- Open Developer Console (F12)
- Check for JavaScript errors
- Verify localStorage is enabled in browser
- Clear localStorage and test again

### Content Not Loading
- Check `content.json` syntax is valid (use JSON validator)
- Verify fetch path is correct relative to HTML file
- Check browser console for errors

## 📞 Support

For issues or questions:
1. Check browser console for error messages
2. Verify all file paths are correct
3. Ensure `content.json` is valid JSON
4. Test in different browsers

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript.
