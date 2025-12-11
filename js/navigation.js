// Color Rotation System (Logo is always 'general' - no rotation)
const DYNAMIC_COLORS = [
  { name: 'pink', value: '#E4C3FF' },
  { name: 'skyblue', value: '#C3FDFF' },
  { name: 'blue', value: '#49AAFF' },
  { name: 'salmon', value: '#FF9292' }
];

const COLOR_STORAGE_KEY = 'currentColorIndex';

// Get current color index
function getCurrentColorIndex() {
  const stored = localStorage.getItem(COLOR_STORAGE_KEY);
  return stored !== null ? parseInt(stored) : 0;
}

// Get next color index
function getNextColorIndex() {
  const current = getCurrentColorIndex();
  return (current + 1) % DYNAMIC_COLORS.length;
}

// Initialize logos (always use 'general' variant)
// function initializeLogos() {
//   const isMobile = window.innerWidth <= 800;
//   const device = isMobile ? 'mobile' : 'desktop';
  
//   const navLogoImg = document.getElementById('navLogoImg');
//   if (navLogoImg) {
//     navLogoImg.src = `images/assets/logo-general-light-${device}.svg`;
//   }
  
//   const footerLogoImg = document.getElementById('footerLogoImg');
//   if (footerLogoImg) {
//     footerLogoImg.src = `../images/assets/logo-general-dark-${device}.svg`;
//   }
// }

// Initialize background color
function initializeBackgroundColor() {
  const colorIndex = getCurrentColorIndex();
  const color = DYNAMIC_COLORS[colorIndex];
  const nav = document.querySelector('nav');
  
  if (nav) {
    nav.style.backgroundColor = color.value;
    nav.setAttribute('data-color', color.name);
  }
}

// Rotate to next color on homepage visits
function rotateOnHomepageVisit() {
  // Only rotate on homepage
  if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    const isFirstLoad = sessionStorage.getItem('hasRotated') === null;
    
    if (isFirstLoad) {
      // Rotate to next color
      const nextColorIndex = getNextColorIndex();
      localStorage.setItem(COLOR_STORAGE_KEY, nextColorIndex);
      
      // Mark as rotated for this session
      sessionStorage.setItem('hasRotated', 'true');
    }
  }
}

// Setup logo click rotation (manual color rotation only)
//function setupLogoRotation() {
//  const navLogo = document.getElementById('navLogo');
//  const footerLogo = document.getElementById('footerLogo');
  
//  [navLogo, footerLogo].forEach(logo => {
//    if (logo) {
//      logo.addEventListener('click', function(e) {
//        // Rotate color only
//        const nextColorIndex = getNextColorIndex();
//        localStorage.setItem(COLOR_STORAGE_KEY, nextColorIndex);
//        
//        // Update immediately
//        initializeBackgroundColor();
//      });
//    }
//  });
//}

// Handle window resize
window.addEventListener('resize', initializeLogos);

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', function() {
  rotateOnHomepageVisit();
  initializeLogos();
  initializeBackgroundColor();
  setupLogoRotation();
});
