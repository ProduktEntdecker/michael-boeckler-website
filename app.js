// JavaScript for Michael Böckler Website - Fixed Version

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navToggle && navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Improved smooth scrolling for navigation links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Handle empty hash or just '#'
            if (!targetId || targetId === '#') {
                return;
            }
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const targetPosition = targetSection.offsetTop - navbarHeight - 10;
                
                window.scrollTo({
                    top: Math.max(0, targetPosition),
                    behavior: 'smooth'
                });
            } else {
                console.log('Target section not found:', targetId);
            }
        });
    });

    // Fix external links - ensure they open properly
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https://"]');
    externalLinks.forEach(link => {
        // Ensure proper attributes for external links
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
        
        // Add click tracking
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            console.log('External link clicked:', href);
            
            // Double-check the link opens
            if (href && href.startsWith('http')) {
                // Let the browser handle the navigation normally
                return true;
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const scrollPosition = window.scrollY + navbarHeight + 100;

        let currentSection = 'home'; // Default to home

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Special case for top of page
        if (window.scrollY < 100) {
            currentSection = 'home';
        }

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Add active class styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--color-accent) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
        .book-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .book-card.in-view {
            opacity: 1;
            transform: translateY(0);
        }
        .instagram-placeholder {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .instagram-placeholder.in-view {
            opacity: 1;
            transform: translateY(0);
        }
        .contact-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .contact-content.in-view {
            opacity: 1;
            transform: translateY(0);
        }
        .loaded .book-card,
        .loaded .instagram-placeholder,
        .loaded .contact-content {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        if (!navbar) return;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background opacity based on scroll position
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }

    // Animate elements on scroll
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.book-card, .instagram-placeholder, .contact-content');
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('in-view');
            }
        });
    }

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    const throttledScrollHandler = throttle(function() {
        updateActiveNavLink();
        animateOnScroll();
        handleNavbarScroll();
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScrollHandler);

    // Initial calls
    updateActiveNavLink();
    animateOnScroll();
    handleNavbarScroll();

    // Enhanced book card interactions
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        const bookLink = card.querySelector('.book-link');
        
        // Add hover effect to entire card
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
        });

        // Track clicks for analytics (placeholder)
        if (bookLink) {
            bookLink.addEventListener('click', function(e) {
                const bookTitle = card.querySelector('.book-title');
                if (bookTitle) {
                    console.log(`Book link clicked: ${bookTitle.textContent}`);
                }
                
                // Ensure the link works by not preventing default
                return true;
            });
        }
    });

    // Instagram link interaction
    const instagramLink = document.querySelector('.instagram-link');
    if (instagramLink) {
        instagramLink.addEventListener('click', function(e) {
            console.log('Instagram link clicked');
            
            // Add a subtle animation
            this.style.transform = 'translateY(-2px) scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
            
            // Ensure the link works
            return true;
        });
    }

    // Contact link interactions
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('mailto:')) {
                console.log('Email link clicked');
            } else {
                console.log('Social media link clicked');
            }
            
            // Ensure the link works
            return true;
        });
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        }
    });

    // Simple lazy loading for better performance
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('.book-card, .instagram-placeholder, .contact-content');
        
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    lazyObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        lazyElements.forEach(element => {
            lazyObserver.observe(element);
        });
    }

    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Force show all elements after load
        const animatedElements = document.querySelectorAll('.book-card, .instagram-placeholder, .contact-content');
        animatedElements.forEach(element => {
            element.classList.add('in-view');
        });
    });

    // Fallback for elements that might not animate
    setTimeout(() => {
        const stillHidden = document.querySelectorAll('.book-card:not(.in-view), .instagram-placeholder:not(.in-view), .contact-content:not(.in-view)');
        stillHidden.forEach(element => {
            element.classList.add('in-view');
        });
    }, 1000);

    console.log('Michael Böckler website initialized successfully');
});