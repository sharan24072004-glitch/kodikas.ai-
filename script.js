// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const hoverElements = document.querySelectorAll('a, .service-card, .huge-btn, .btn-primary, .btn-secondary');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from('.hero-title', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    delay: 0.2
});

gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    delay: 0.4
});

gsap.from('.cta-group', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    delay: 0.6
});

// Marquee Animation
gsap.to('.marquee', {
    xPercent: -50,
    ease: 'none',
    duration: 10,
    repeat: -1
});

// Services Scroll Animation
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.1
    });
});

// About Text Highlight effect
const aboutText = document.querySelector('.about-text');
const originalText = aboutText.innerHTML;
// Basic fade for about text
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Contact Box Animation
gsap.from('.contact-box', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 75%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
});
