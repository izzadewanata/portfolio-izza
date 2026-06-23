/**
 * Navigation Toggle Functionality
 * Handles hamburger menu open/close and link clicks
 */

(function() {
  'use strict';

  // DOM Elements
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const body = document.body;

  /**
   * Toggle navigation menu open/closed
   */
  function toggleNav() {
    body.classList.toggle('nav-open');
  }

  /**
   * Close navigation menu
   */
  function closeNav() {
    body.classList.remove('nav-open');
  }

  /**
   * Handle click outside navigation to close it
   * @param {Event} event - The click event
   */
  function handleOutsideClick(event) {
    const isNavOpen = body.classList.contains('nav-open');
    const isNavToggle = event.target.closest('.nav-toggle');
    const isNav = event.target.closest('.nav');
    
    if (isNavOpen && !isNavToggle && !isNav) {
      closeNav();
    }
  }

  /**
   * Handle escape key press to close navigation
   * @param {Event} event - The keyboard event
   */
  function handleEscapeKey(event) {
    if (event.key === 'Escape' && body.classList.contains('nav-open')) {
      closeNav();
    }
  }

  // Event Listeners
  if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
  }

  // Close nav when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close nav when clicking outside
  document.addEventListener('click', handleOutsideClick);

  // Close nav on escape key
  document.addEventListener('keydown', handleEscapeKey);

  // Optional: Prevent body scroll when nav is open
  // This can be added for better UX
  function handleBodyScroll() {
    if (body.classList.contains('nav-open')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }

  // Watch for class changes on body
  const observer = new MutationObserver(() => {
    handleBodyScroll();
  });
  
  observer.observe(body, {
    attributes: true,
    attributeFilter: ['class']
  });

  // Cleanup function (optional - good for single page apps)
  // Uncomment if you need to remove event listeners
  // return function cleanup() {
  //   navToggle.removeEventListener('click', toggleNav);
  //   navLinks.forEach(link => {
  //     link.removeEventListener('click', closeNav);
  //   });
  //   document.removeEventListener('click', handleOutsideClick);
  //   document.removeEventListener('keydown', handleEscapeKey);
  //   observer.disconnect();
  // };

})();