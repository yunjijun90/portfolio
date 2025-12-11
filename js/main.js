// Main JavaScript for Portfolio - Content Loading and Interactions

// ========================================
// CONTENT LOADING
// ========================================

let contentData = null;

// Load content.json
async function loadContent() {
  try {
    // Determine if we're in a subfolder or root
    const path = window.location.pathname.includes('/pages/') 
      ? '../data/content.json' 
      : 'data/content.json';
    const response = await fetch(path);
    contentData = await response.json();
    return contentData;
  } catch (error) {
    console.error('Error loading content:', error);
    return null;
  }
}

// ========================================
// HOMEPAGE CONTENT
// ========================================

// Create thumbnail container HTML (Horizontal Layout from Figma)
function createThumbnailHTML(project, isPasswordProtected = false) {
  // Support for multiple thumbnails (Figma shows 2 images)
  const thumbnailImages = project.thumbnails || [project.thumbnail, project.thumbnail];
  const imagesHTML = thumbnailImages.slice(0, 2).map(img => `
    <img 
      src="${img}" 
      alt="${project.thumbnailAlt}"
      class="thumbnail-image"
      loading="lazy"
    />
  `).join('');
  
  return `
    <article class="thumbnail-container" data-project-id="${project.id}">
      <div class="thumbnail-content">
        <h2 class="thumbnail-title">${project.title}</h2>
        <div class="thumbnail-meta">
          <p class="thumbnail-subtitle">${project.subtitle}</p>
          <p class="thumbnail-year">${project.year}</p>
        </div>
      </div>
      <div class="thumbnail-images">
        ${imagesHTML}
      </div>
    </article>
  `;
}

// Load homepage content
async function loadHomepageContent() {
  const content = await loadContent();
  console.log('Content loaded:', content);
  if (!content) return;

  // Load Selected Work section
  const selectedWorkGrid = document.getElementById('selectedWorkGrid');
  console.log('Selected work grid:', selectedWorkGrid);

  if (selectedWorkGrid && content.selectedWork && content.selectedWork.projects) {
    selectedWorkGrid.innerHTML = content.selectedWork.projects
      .map(project => createThumbnailHTML(project, true))
      .join('');
    
    console.log('Selected work thumbnails added:', selectedWorkGrid.querySelectorAll('.thumbnail-container').length);
    
    // Add click handlers for selected work (password protected)
    selectedWorkGrid.querySelectorAll('.thumbnail-container').forEach(container => {
      container.addEventListener('click', function() {
        const projectId = this.dataset.projectId;
        console.log('Clicked selected work project:', projectId);
        // Redirect to password page with project ID
        window.location.href = `pages/password.html?project=${projectId}&section=selected`;
      });
    });
  }

  // Load Personal Work section
  const personalWorkGrid = document.getElementById('personalWorkGrid');
  console.log('Personal work grid:', personalWorkGrid);

  if (personalWorkGrid && content.personalWork && content.personalWork.projects) {
    personalWorkGrid.innerHTML = content.personalWork.projects
      .map(project => createThumbnailHTML(project, false))
      .join('');
    
    console.log('Personal work thumbnails added:', personalWorkGrid.querySelectorAll('.thumbnail-container').length);
    
    // Add click handlers for personal work (no password)
    personalWorkGrid.querySelectorAll('.thumbnail-container').forEach(container => {
      container.addEventListener('click', function() {
        const projectId = this.dataset.projectId;
        console.log('Clicked personal work project:', projectId);
        window.location.href = `pages/workDetail.html?project=${projectId}`;
      });
    });
  }

  // Hover effects are handled by CSS
}

// ========================================
// PASSWORD PAGE
// ========================================

// Handle password submission
async function handlePasswordSubmit(event) {
  event.preventDefault();
  
  const passwordInput = document.getElementById('passwordInput');
  const password = passwordInput.value;
  const errorMessage = document.getElementById('errorMessage');
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  const content = await loadContent();
  if (!content || !content.selectedWork) return;
  
  // Check password
  if (password === content.selectedWork.password) {
    // Store authentication in session
    sessionStorage.setItem('authenticated', 'true');
    sessionStorage.setItem('authTime', Date.now());
    
    // Find the project to get its detail page
    const project = content.selectedWork.projects.find(p => p.id === projectId);
    console.log('Found project:', project);
    console.log('Detail page:', project?.detailPage);
    
    // Redirect to the project's specific detail page or default workDetail page
    if (project && project.detailPage) {
      console.log('Redirecting to:', project.detailPage);
      window.location.href = project.detailPage;
    } else {
      console.log('Redirecting to default:', `workDetail.html?project=${projectId}`);
      window.location.href = `workDetail.html?project=${projectId}`;
    }
  } else {
    // Show error
    if (errorMessage) {
      errorMessage.style.display = 'block';
      passwordInput.classList.add('error');
    }
    
    // Clear error after 3 seconds
    setTimeout(() => {
      if (errorMessage) {
        errorMessage.style.display = 'none';
        passwordInput.classList.remove('error');
      }
    }, 3000);
  }
}

// Check if user is authenticated (for password-protected pages)
function checkAuthentication() {
  const authenticated = sessionStorage.getItem('authenticated');
  const authTime = sessionStorage.getItem('authTime');
  const currentTime = Date.now();
  const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
  
  // Check if authenticated and within time limit
  if (authenticated === 'true' && authTime && (currentTime - authTime) < oneHour) {
    return true;
  }
  
  // Clear expired authentication
  sessionStorage.removeItem('authenticated');
  sessionStorage.removeItem('authTime');
  return false;
}

// ========================================
// WORK DETAIL PAGE
// ========================================

// Load work detail content
async function loadWorkDetailContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  if (!projectId) {
    window.location.href = '../index.html';
    return;
  }
  
  const content = await loadContent();
  if (!content || !content.projectDetails || !content.projectDetails[projectId]) {
    window.location.href = '../index.html';
    return;
  }
  
  // Check if this is a selected work project (password protected)
  const isSelectedWork = content.selectedWork.projects.some(p => p.id === projectId);
  
  if (isSelectedWork && !checkAuthentication()) {
    // Redirect to password page if not authenticated
    window.location.href = `password.html?project=${projectId}&section=selected`;
    return;
  }
  
  const project = content.projectDetails[projectId];
  
  // Load header
  const headerTitle = document.getElementById('detailTitle');
  const headerSubtitle = document.getElementById('detailSubtitle');
  const headerYear = document.getElementById('detailYear');
  
  if (headerTitle) headerTitle.textContent = project.title;
  if (headerSubtitle) headerSubtitle.textContent = project.subtitle;
  if (headerYear) headerYear.textContent = project.year;
  
  // Load introduction
  const introRole = document.getElementById('introRole');
  const introTimeline = document.getElementById('introTimeline');
  const introTeam = document.getElementById('introTeam');
  const introDescription = document.getElementById('introDescription');
  
  if (introRole) introRole.textContent = project.introduction.role;
  if (introTimeline) introTimeline.textContent = project.introduction.timeline;
  if (introTeam) introTeam.textContent = project.introduction.team;
  if (introDescription) introDescription.textContent = project.introduction.description;
  
  // Load body content
  const bodyContainer = document.getElementById('bodyContainer');
  if (bodyContainer && project.body) {
    bodyContainer.innerHTML = project.body
      .map(section => {
        if (section.type === 'text') {
          return `<div class="body-text">${marked(section.content)}</div>`;
        }
        return '';
      })
      .join('');
  }
  
  // Load images
  const imagesContainer = document.getElementById('imagesContainer');
  if (imagesContainer && project.images && project.images.length > 0) {
    imagesContainer.innerHTML = project.images
      .map(img => `
        <figure class="detail-image">
          <img src="../${img.src}" alt="${img.alt}" loading="lazy">
          ${img.caption ? `<figcaption class="image-caption">${img.caption}</figcaption>` : ''}
        </figure>
      `)
      .join('');
  }
  
  // Load next project
  if (project.nextProject) {
    const nextTitle = document.getElementById('nextTitle');
    const nextThumbnail = document.getElementById('nextThumbnail');
    const nextLink = document.getElementById('nextLink');
    
    if (nextTitle) nextTitle.textContent = project.nextProject.title;
    if (nextThumbnail) {
      nextThumbnail.src = `../${project.nextProject.thumbnail}`;
      nextThumbnail.alt = `${project.nextProject.title} thumbnail`;
    }
    if (nextLink) {
      nextLink.href = `workDetail.html?project=${project.nextProject.id}`;
    }
  }
}

// Simple markdown parser for body content (basic implementation)
function marked(text) {
  return text
    .replace(/^### (.*$)/gim, '<h3 class="title-t3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="headline-h2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="headline-h1">$1</h1>')
    .replace(/\n\n/g, '</p><p class="body-b1">')
    .replace(/^(.+)$/gm, '<p class="body-b1">$1</p>');
}

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  
  // Homepage
  if (path === '/' || path.endsWith('index.html') || path.endsWith('/')) {
    loadHomepageContent();
  }
  
  // Password page
  if (path.includes('password.html')) {
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
      passwordForm.addEventListener('submit', handlePasswordSubmit);
    }
  }
  
  // Work detail page
  if (path.includes('workDetail.html')) {
    loadWorkDetailContent();
  }
});
