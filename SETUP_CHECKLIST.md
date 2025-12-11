# Portfolio Setup Checklist

## ✅ Pre-Launch Checklist

### 1. Fix Logo File Name
There's a naming error that needs to be corrected:

**Current (incorrect):**
```
images/assets/logo-general-dark-mobile.svg.svg
```

**Should be:**
```
images/assets/logo-general-dark-mobile.svg
```

**To fix:**
```bash
cd images/assets
mv logo-general-dark-mobile.svg.svg logo-general-dark-mobile.svg
```

### 2. Verify All Logo Files
All 8 logo variations should exist:

- [x] logo-general-light-desktop.svg
- [ ] logo-general-light-mobile.svg ⚠️ (check if renamed correctly)
- [x] logo-general-dark-desktop.svg
- [ ] logo-general-dark-mobile.svg ⚠️ (needs to be renamed)
- [x] logo-bubble-light-desktop.svg
- [x] logo-bubble-light-mobile.svg
- [x] logo-bubble-dark-desktop.svg
- [x] logo-bubble-dark-mobile.svg

### 3. Add Project Images
See `IMAGE_GUIDE.md` for detailed requirements.

**Minimum Required:**
- [ ] 3 Selected Work thumbnails
- [ ] 3 Personal Work thumbnails
- [ ] Detail images for each project

### 4. Update Content
Edit `data/content.json`:

- [ ] Update project titles and descriptions
- [ ] Update image paths to match your actual images
- [ ] Verify password is set correctly (default: 1788)
- [ ] Add your project details (role, timeline, team, etc.)

### 5. Test Locally

**Test Navigation Color Rotation:**
1. [ ] Open `index.html` in browser
2. [ ] Open Developer Tools (F12)
3. [ ] Go to Application → Session Storage
4. [ ] Note the current background color
5. [ ] Clear session storage (or delete 'hasRotated' key)
6. [ ] Refresh the page
7. [ ] Verify background color changed
8. [ ] Repeat to see all 4 colors cycle through

**Test Password Protection:**
1. [ ] Click on any Selected Work project
2. [ ] Verify redirected to password page
3. [ ] Try incorrect password → should show error
4. [ ] Try correct password (1788) → should show work detail
5. [ ] Navigate away and back → should still be authenticated (1 hour)

**Test Personal Work:**
1. [ ] Click on any Personal Work project
2. [ ] Should go directly to work detail (no password)

**Test Responsive Design:**
Use browser DevTools Device Toolbar:
- [ ] Desktop 1440px
- [ ] Desktop 1280px
- [ ] Tablet 800px
- [ ] Mobile 375px

**Check All Pages:**
- [ ] Homepage loads correctly
- [ ] Password page displays properly
- [ ] Work detail page shows all sections
- [ ] Navigation works on all pages
- [ ] Footer appears on all pages

### 6. Cross-Browser Testing
Test in different browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge (if available)

### 7. Check Console for Errors
- [ ] No JavaScript errors
- [ ] No 404 errors for images
- [ ] No CSS errors
- [ ] content.json loads successfully

### 8. Optimize Performance
- [ ] Compress all images (see IMAGE_GUIDE.md)
- [ ] Verify all images are under recommended size
- [ ] Test page load speed

### 9. Git Setup
- [ ] Initialize git repository
- [ ] Add .gitignore if needed
- [ ] Make initial commit
- [ ] Create GitHub repository
- [ ] Push to GitHub

### 10. GitHub Pages Deployment
- [ ] Enable GitHub Pages in repository settings
- [ ] Select main branch and root folder
- [ ] Wait for deployment (5-10 minutes)
- [ ] Visit your site URL
- [ ] Test all functionality on live site

## 🔧 Quick Fixes

### Fix Logo File Name Issue
```bash
# Navigate to your portfolio directory
cd /Users/yunjijun/Documents/GitHub/portfolio

# Fix the double .svg extension
mv images/assets/logo-general-dark-mobile.svg.svg images/assets/logo-general-dark-mobile.svg
```

### Create Image Placeholders (if needed)
```bash
# Create directories
mkdir -p images/selectedWork images/personalWork

# If you have ImageMagick installed:
# brew install imagemagick

# Create placeholder thumbnails
convert -size 1280x720 xc:#E4C3FF -gravity center -pointsize 72 -annotate +0+0 "Project 1" images/selectedWork/project-1-thumbnail.jpg
convert -size 1280x720 xc:#C3FDFF -gravity center -pointsize 72 -annotate +0+0 "Project 2" images/selectedWork/project-2-thumbnail.jpg
convert -size 1280x720 xc:#49AAFF -gravity center -pointsize 72 -annotate +0+0 "Personal 1" images/personalWork/personal-1-thumbnail.jpg
```

### Test Color Rotation Script
```javascript
// Paste in browser console to manually test color rotation
const colors = ['#E4C3FF', '#C3FDFF', '#49AAFF', '#FF9292'];
let index = 0;
setInterval(() => {
  document.querySelector('nav').style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 2000);
```

## 📝 Common Issues

### Issue: Images not loading
**Solution:** Check file paths are relative to HTML file location
```json
// In content.json, paths should be:
"thumbnail": "images/selectedWork/project-1.jpg"  // ✅ Correct
"thumbnail": "/images/selectedWork/project-1.jpg" // ❌ Wrong
```

### Issue: Color rotation not working
**Solution:** Clear browser cache and localStorage
```javascript
// In browser console:
localStorage.clear();
sessionStorage.clear();
location.reload();
```

### Issue: Password not working
**Solution:** Check password in content.json
```json
"selectedWork": {
  "password": "1788"  // Make sure this matches what you're entering
}
```

### Issue: Content not loading
**Solution:** Validate JSON syntax
- Use [JSONLint](https://jsonlint.com) to validate content.json
- Check for missing commas, quotes, or brackets

## 🎉 Post-Launch

After your site is live:
- [ ] Share your portfolio URL
- [ ] Add custom domain (optional)
- [ ] Set up Google Analytics (optional)
- [ ] Submit to search engines (optional)
- [ ] Test on mobile devices
- [ ] Get feedback from colleagues

## 📊 Analytics Setup (Optional)

To track visitors, add Google Analytics:

1. Get tracking code from [Google Analytics](https://analytics.google.com)
2. Add to `<head>` of all HTML files
3. Monitor traffic and user behavior

## 🔄 Regular Maintenance

- Update projects as you complete new work
- Refresh thumbnails and images
- Keep content.json up to date
- Test periodically for broken links
- Optimize new images before uploading

---

Need help? Check README.md for troubleshooting or IMAGE_GUIDE.md for image requirements.


