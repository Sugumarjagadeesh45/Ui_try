import React, { useEffect, useState, useRef } from 'react';
import './css/index.css';
import Header from './Components/Headers';
import WelcomePage from './Components/WelcomePage';
import WelcomePage2 from './Components/WelcomePage2';
import WelcomePage3 from './Components/WelcomePage3';
import WelcomePage4 from './Components/WelcomePage4';
import WelcomePage5 from './Components/WelcomePage5';
import Footer from './Components/Footer';
import BackgroundAnimation from './Components/BackgroundAnimation';
import ScrollToTop from './Components/ScrollToTop';
import { ThemeContextProvider } from './ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  const appRef = useRef(null);
  const triggersRef = useRef([]);

  useEffect(() => {
    // Page loader
    const timer = setTimeout(() => {
      setLoaderHidden(true);
      initScrollAnimations();
    }, 2200);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Custom cursor with smooth follow
    const cursor = document.getElementById('customCursor');
    const dot = document.getElementById('cursorDot');
    const spotlight = document.getElementById('spotlight');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    const moveEffects = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let rafId;
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      dotX += (mouseX - dotX) * 0.28;
      dotY += (mouseY - dotY) * 0.28;

      if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
      }
      if (dot) {
        dot.style.left = dotX + 'px';
        dot.style.top = dotY + 'px';
      }
      if (spotlight) {
        spotlight.style.left = mouseX + 'px';
        spotlight.style.top = mouseY + 'px';
      }
      rafId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', moveEffects);
    rafId = requestAnimationFrame(animateCursor);

    // Hover states for cursor
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, .glass-card, .reel-card, .friend-item, .plan-card, .director-card, .feature-item, .contact-block');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor?.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor?.classList.remove('hover'));
      });
    };
    
    setTimeout(addHoverListeners, 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', moveEffects);
      cancelAnimationFrame(rafId);
      triggersRef.current.forEach(t => t.kill());
      triggersRef.current = [];
    };
  }, []);

  const initScrollAnimations = () => {
    const triggers = triggersRef.current;

    // --- REELS SECTION: SLOW IMAGE PARALLAX + QUICK TEXT REVEAL ---
    
    // Slow parallax for reel images (moves upward slowly on scroll)
    gsap.utils.toArray('.reel-media img').forEach((img) => {
      const t = gsap.to(img, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.reel-card'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 3, // SLOW parallax - high scrub value
        }
      });
      triggers.push(t.scrollTrigger);
    });

    // Quick text reveal for reel cards
    gsap.utils.toArray('.reel-card').forEach((card, i) => {
      const info = card.querySelector('.reel-info');
      if (info) {
        const t = gsap.fromTo(info,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            delay: i * 0.08
          }
        );
        triggers.push(t.scrollTrigger);
      }
    });

    // --- GENERAL REVEAL ANIMATIONS ---

    // Text reveals - FAST (quick reveal)
    gsap.utils.toArray('.reveal-text').forEach((elem, i) => {
      const t = gsap.fromTo(elem,
        { opacity: 0, y: 50, skewY: 1.5 },
        {
          opacity: 1, y: 0, skewY: 0, duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.03
        }
      );
      triggers.push(t.scrollTrigger);
    });

    // Image reveals - SLOWER (smooth, elegant)
    gsap.utils.toArray('.reveal-image').forEach((elem) => {
      const t = gsap.fromTo(elem,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        }
      );
      triggers.push(t.scrollTrigger);
    });

    // Left reveals
    gsap.utils.toArray('.reveal-left').forEach((elem, i) => {
      const t = gsap.fromTo(elem,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.08
        }
      );
      triggers.push(t.scrollTrigger);
    });

    // Right reveals
    gsap.utils.toArray('.reveal-right').forEach((elem, i) => {
      const t = gsap.fromTo(elem,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.08
        }
      );
      triggers.push(t.scrollTrigger);
    });

    // Scale reveals
    gsap.utils.toArray('.reveal-scale').forEach((elem, i) => {
      const t = gsap.fromTo(elem,
        { opacity: 0, scale: 0.88 },
        {
          opacity: 1, scale: 1, duration: 0.8,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.06
        }
      );
      triggers.push(t.scrollTrigger);
    });

    // Parallax slow images (general)
    gsap.utils.toArray('.parallax-slow').forEach((elem) => {
      const t = gsap.to(elem, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.5
        }
      });
      triggers.push(t.scrollTrigger);
    });

    // Plan cards stagger
    const plansGrid = document.querySelector('.plans-grid');
    if (plansGrid) {
      const t = gsap.from('.plan-card', {
        opacity: 0, y: 30, scale: 0.98, duration: 0.5,
        stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: plansGrid, start: 'top 95%' }
      });
      triggers.push(t.scrollTrigger);
    }

    // Director cards stagger
    const directorsGrid = document.querySelector('.directors-grid');
    if (directorsGrid) {
      const t = gsap.from('.director-card', {
        opacity: 0, y: 70, duration: 0.9,
        stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: directorsGrid, start: 'top 85%' }
      });
      triggers.push(t.scrollTrigger);
    }

    // Timeline items
    const timeline = document.querySelector('.timeline');
    if (timeline) {
      const t = gsap.from('.timeline-item', {
        opacity: 0, x: -20, duration: 0.5,
        stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: timeline, start: 'top 95%' }
      });
      triggers.push(t.scrollTrigger);
    }

    // Contact blocks
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
      const t = gsap.from('.contact-block', {
        opacity: 0, x: -40, duration: 0.7,
        stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: contactInfo, start: 'top 85%' }
      });
      triggers.push(t.scrollTrigger);
    }

    // 3D Tilt effect for cards
    document.querySelectorAll('.glass-card, .plan-card, .director-card, .reel-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // Ambient orb mouse parallax
    document.addEventListener('mousemove', (e) => {
      const orbs = document.querySelectorAll('.orb');
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 25;
        gsap.to(orb, { x: x * speed, y: y * speed, duration: 2.5, ease: 'power2.out' });
      });
    });
  };

  return (
    <ThemeContextProvider>
      <div className="App" ref={appRef}>
        {/* Page Loader */}
        <div className={`page-loader ${loaderHidden ? 'hidden' : ''}`}>
          <div className="loader-spinner"></div>
          <div className="loader-text">Synczo Wave</div>
          <div className="loader-bar">
            <div className="loader-bar-fill"></div>
          </div>
        </div>

        <BackgroundAnimation />
        
        {/* Ambient Background */}
        <div className="ambient-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        
        {/* Noise Overlay */}
        <div className="noise-overlay"></div>
        
        {/* Spotlight Effect */}
        <div className="spotlight" id="spotlight"></div>
        
        {/* Floating Elements Container */}
        <div className="floating-container" id="floatingContainer"></div>
        
        {/* Custom Cursor */}
        <div className="custom-cursor" id="customCursor"></div>
        <div className="cursor-dot" id="cursorDot"></div>
        
        {/* Moving Lines Container */}
        <div id="movingLinesContainer" style={{position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1}}></div>

        <Header />
        <ScrollToTop />
        <main className="lqd-page-content-wrap" id="lqd-page-content-wrap">
          <WelcomePage />
          <WelcomePage2 />
          <WelcomePage3 />
          <WelcomePage4 />
          <WelcomePage5 />
        </main>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
