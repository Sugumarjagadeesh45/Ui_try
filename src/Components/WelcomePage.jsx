import React, { useState, useEffect, useRef } from 'react';

// Free Unsplash image URLs
const IMAGES = {
  heroVideoPoster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80',
  profile1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  profile2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  profile3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  profile4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  homeVisual: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
};

// ==================== HERO SECTION ====================
const HeroSection = () => {
  const [counts, setCounts] = useState({ users: 0, matches: 0, countries: 0 });
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !inView) {
          setInView(true);
          animateValue('users', 0, 2500000, 2200);
          animateValue('matches', 0, 500000, 2200);
          animateValue('countries', 0, 150, 2200);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  const animateValue = (key, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCounts((prev) => ({
        ...prev,
        [key]: Math.floor(easeProgress * (end - start) + start)
      }));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K+';
    return num + '+';
  };

  return (
    <section className="hero" id="home">
        <div className="hero-video-bg">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster={IMAGES.heroVideoPoster}
              style={{ filter: 'saturate(1.2) contrast(1.1)' }}
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27611-large.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-content">
            <div className="hero-badge reveal-scale">
                <span className="pulse-dot"></span>
                <span>Live Connections Active</span>
            </div>
            
            <h1 className="hero-title reveal-text">
                Find Your <span className="gradient-text">Perfect Match</span><br/>
                With Synczo Wave
            </h1>
            
            <p className="hero-subtitle reveal-text">
                Explore profiles tailored to your preferences and connect instantly with people who match your vibe.
            </p>
            
            <div className="hero-cta reveal-text">
                <a href="#friends" className="btn btn-primary btn-magnetic" style={{padding: 'var(--space-4) var(--space-8)', fontSize: 'var(--text-base)'}}>
                    <i className="fas fa-rocket"></i> Start Exploring
                </a>
                <a href="#trending" className="btn btn-secondary btn-magnetic" style={{padding: 'var(--space-4) var(--space-8)', fontSize: 'var(--text-base)'}}>
                    <i className="fas fa-play"></i> Watch Reels
                </a>
            </div>
            
            <div className="hero-stats" ref={statsRef}>
                <div className="stat-item reveal-scale stagger-1">
                    <div className="stat-number">{formatNumber(counts.users)}</div>
                    <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-item reveal-scale stagger-2">
                    <div className="stat-number">{formatNumber(counts.matches)}</div>
                    <div className="stat-label">Daily Matches</div>
                </div>
                <div className="stat-item reveal-scale stagger-3">
                    <div className="stat-number">{formatNumber(counts.countries)}</div>
                    <div className="stat-label">Countries</div>
                </div>
            </div>
        </div>
    </section>
  );
};

// ==================== HOME SECTION ====================
const HomeSection = () => {
  return (
    <section className="section home-section" id="home-detailed">
        <div className="container">
            <div className="home-grid">
                <div className="home-content">
                    <div className="section-header">
                        <div className="section-label reveal-left">Discover</div>
                        <h2 className="heading-section reveal-text">
                            Your Personalized<br/>
                            <span className="text-gradient">Dashboard</span>
                        </h2>
                    </div>
                    <p className="reveal-text" style={{fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-8)'}}>
                        Find your perfect match with Synczo Wave. Our intelligent algorithm learns your preferences and presents profiles that truly resonate with your personality and interests.
                    </p>
                    <div className="reveal-text" style={{display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap'}}>
                        <div className="glass-card tilt-card" style={{flex: 1, minWidth: '200px'}}>
                            <div className="tilt-card-inner">
                                <i className="fas fa-brain" style={{fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: 'var(--space-4)'}}></i>
                                <h4 style={{fontWeight: 700, marginBottom: 'var(--space-2)'}}>AI Matching</h4>
                                <p style={{fontSize: 'var(--text-sm)', color: 'var(--text-muted)'}}>Smart algorithms find your ideal connections</p>
                            </div>
                        </div>
                        <div className="glass-card tilt-card" style={{flex: 1, minWidth: '200px'}}>
                            <div className="tilt-card-inner">
                                <i className="fas fa-shield-alt" style={{fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: 'var(--space-4)'}}></i>
                                <h4 style={{fontWeight: 700, marginBottom: 'var(--space-2)'}}>Verified Profiles</h4>
                                <p style={{fontSize: 'var(--text-sm)', color: 'var(--text-muted)'}}>100% real users with identity verification</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="home-visual reveal-image parallax-slow">
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <div className="phone-notch"></div>
                            <div className="profile-card-mini">
                                <div className="profile-avatar">
                                    <img src={IMAGES.profile1} alt="Sarah" loading="lazy" />
                                </div>
                                <div className="profile-info">
                                    <h4>Sarah, 24</h4>
                                    <p>Music & Travel</p>
                                </div>
                                <div className="match-percentage">98%</div>
                            </div>
                            <div className="profile-card-mini">
                                <div className="profile-avatar" style={{background: 'var(--accent-gradient-cool)'}}>
                                    <img src={IMAGES.profile2} alt="James" loading="lazy" />
                                </div>
                                <div className="profile-info">
                                    <h4>James, 27</h4>
                                    <p>Photography</p>
                                </div>
                                <div className="match-percentage">95%</div>
                            </div>
                            <div className="profile-card-mini">
                                <div className="profile-avatar" style={{background: 'var(--accent-gradient-warm)'}}>
                                    <img src={IMAGES.profile3} alt="Emma" loading="lazy" />
                                </div>
                                <div className="profile-info">
                                    <h4>Emma, 22</h4>
                                    <p>Art & Design</p>
                                </div>
                                <div className="match-percentage">92%</div>
                            </div>
                            <div className="profile-card-mini">
                                <div className="profile-avatar" style={{background: 'linear-gradient(135deg, #f59e0b, #ef4444)'}}>
                                    <img src={IMAGES.profile4} alt="Michael" loading="lazy" />
                                </div>
                                <div className="profile-info">
                                    <h4>Michael, 25</h4>
                                    <p>Tech & Gaming</p>
                                </div>
                                <div className="match-percentage">89%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const WelcomePage = () => {
  return (
    <>
      <HeroSection />
      <HomeSection />
    </>
  );
};

export default WelcomePage;
