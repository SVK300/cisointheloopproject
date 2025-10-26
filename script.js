/* ============================================
   CISOINTHELOOP.AI - JAVASCRIPT (v4.0 - AI-Infused Design)
   ============================================ */

// ============================================
// MODULAR FUNCTIONS
// ============================================

/**
 * Initialize mobile menu toggle functionality
 */
function initMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        const mobileNavLinks = mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

/**
 * Initialize sticky header shadow on scroll
 */
function initStickyHeader() {
    const navbar = document.querySelector('.navbar');
    
    const updateHeaderShadow = () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', updateHeaderShadow);
    updateHeaderShadow(); // Initial check on load
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only smooth scroll if it's not a button action
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize collapsible module cards
 */
function initCollapsibles() {
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        const header = card.querySelector('.module-header');
        if (header) {
            header.addEventListener('click', () => {
                // Close all other open modules
                moduleCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                    }
                });
                // Toggle the clicked module
                card.classList.toggle('active');
                // Add aria-expanded for accessibility
                const isExpanded = card.classList.contains('active');
                header.setAttribute('aria-expanded', isExpanded);
            });
        }
    });
}

/**
 * Initialize AI Capabilities CTA
 */
function initAICapabilitiesCTA() {
    const aiCapabilitiesCTA = document.getElementById('aiCapabilitiesCTA');
    if (aiCapabilitiesCTA) {
        aiCapabilitiesCTA.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('.ai-capabilities-grid');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

/**
 * Show toast notification for placeholder links
 */
function showToastNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(46, 229, 255, 0.9);
        color: #0A1F44;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Initialize placeholder link handling with toast notifications
 */
function initPlaceholderLinks() {
    const placeholderLinks = document.querySelectorAll('.feature-link, .btn-outline, .btn-accent');
    placeholderLinks.forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showToastNotification('This feature is currently in development. Please check back soon!');
            });
        }
    });
}

/**
 * Initialize accessibility features
 */
function initAccessibility() {
    // Add focus styles for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

/**
 * Add toast animation styles
 */
function addToastStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Add toast animation styles
    addToastStyles();
    
    // Initialize all modules
    initMenu();
    initStickyHeader();
    initSmoothScroll();
    initCollapsibles();
    initAICapabilitiesCTA();
    initPlaceholderLinks();
    initAccessibility();
    
    console.log('CISOintheLoop.ai v4.0 - Ready');
});

