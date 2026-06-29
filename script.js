// Initialize Lucide icons on page load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initMouseGlow();
    initScrollHeader();
    initMobileMenu();
    initScrollReveal();
    initFAQAccordion();
    initScrollProgress();
    init3DTilt();
});

/* ==========================================================================
   Mouse-Following Glow Effect
   ========================================================================== */
function initMouseGlow() {
    const bgGlow = document.getElementById('bg-glow');
    if (!bgGlow) return;

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        bgGlow.style.setProperty('--mouse-x', `${x}%`);
        bgGlow.style.setProperty('--mouse-y', `${y}%`);
    });
}

/* ==========================================================================
   Navigation Header Scroll Effect
   ========================================================================== */
function initScrollHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   Mobile Navigation Drawer Toggle
   ========================================================================== */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    
    if (!toggleBtn || !mobileNav) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = mobileNav.classList.toggle('active');
        
        // Toggle icon between menu and x
        if (isActive) {
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons({
            attrs: { id: 'menu-icon' }
        });
    });

    // Close menu when clicking links
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-btn');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons({
                attrs: { id: 'menu-icon' }
            });
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
            mobileNav.classList.remove('active');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons({
                attrs: { id: 'menu-icon' }
            });
        }
    });
}

/* ==========================================================================
   Scroll-Triggered Entry Animations (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }
}

/* ==========================================================================
   FAQ Accordions
   ========================================================================== */
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentNode;
            const isActive = currentItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const ans = item.querySelector('.faq-answer');
                if (ans) ans.style.maxHeight = null;
            });
            
            // Open clicked item if it wasn't already active
            if (!isActive) {
                currentItem.classList.add('active');
                const answer = currentItem.querySelector('.faq-answer');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            }
        });
    });
}

/* ==========================================================================
   Scroll Progress Tracker
   ========================================================================== */
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    });
}

/* ==========================================================================
   3D Card Tilt Effect
   ========================================================================== */
function init3DTilt() {
    const cards = document.querySelectorAll('.service-card, .process-card, .tech-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angle (-8 to 8 degrees max)
            const rotateX = ((centerY - y) / centerY) * 8; 
            const rotateY = ((x - centerX) / centerX) * -8;
            
            card.style.setProperty('--rx', `${rotateX}deg`);
            card.style.setProperty('--ry', `${rotateY}deg`);
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rx', `0deg`);
            card.style.setProperty('--ry', `0deg`);
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}
