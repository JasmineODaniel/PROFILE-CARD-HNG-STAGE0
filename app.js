/**
 * Profile Card - Main JavaScript
 * Handles real-time updates and interactions
 */

(function() {
    'use strict';

    // Initialize the application
    function init() {
        updateCurrentTime();
        setInterval(updateCurrentTime, 1000); // Update every second
        setupKeyboardNavigation();
        addAnimations();
    }

    /**
     * Update the current time in milliseconds
     * This function updates the time element with Date.now()
     */
    function updateCurrentTime() {
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = Date.now();
            timeElement.setAttribute('datetime', new Date().toISOString());
        }
    }

    /**
     * Setup keyboard navigation enhancements
     * Ensures all interactive elements are properly keyboard accessible
     */
    function setupKeyboardNavigation() {
        const interactiveElements = document.querySelectorAll('a, button');
        
        interactiveElements.forEach(element => {
            // Ensure tab index is properly set
            if (!element.hasAttribute('tabindex')) {
                element.setAttribute('tabindex', '0');
            }

            // Add keyboard interaction for Enter key
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }

    /**
     * Add subtle entrance animations
     * Enhances user experience with smooth animations
     */
    function addAnimations() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            return; // Skip animations if user prefers reduced motion
        }

        // Add entrance animation to card
        const card = document.querySelector('[data-testid="test-profile-card"]');
        if (card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }

        // Stagger animation for list items
        const listItems = document.querySelectorAll('.interest-list li, .social-list li');
        listItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-10px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 200 + (index * 50));
        });
    }

    /**
     * Handle avatar image loading errors
     * Provides fallback if image fails to load
     */
    function handleAvatarError() {
        const avatar = document.querySelector('[data-testid="test-user-avatar"]');
        if (avatar) {
            avatar.addEventListener('error', function() {
                this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%231a1a1a" width="200" height="200"/%3E%3Ctext fill="%2300d9ff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAvatar%3C/text%3E%3C/svg%3E';
            });
        }
    }

    /**
     * Add smooth scroll behavior for any internal links
     */
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Handle avatar errors
    handleAvatarError();

    // Setup smooth scrolling
    setupSmoothScroll();

    // Expose update function globally for testing purposes
    window.updateProfileTime = updateCurrentTime;

})();