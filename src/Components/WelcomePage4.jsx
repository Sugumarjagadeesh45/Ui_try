import React from 'react';

// Professional images from Unsplash
const IMAGES = {
  planBasic: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&q=85',
  planPlus: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=85',
  planPremium: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=85',
  planCreator: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=85',
  director1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85',
  director2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85',
  director3: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85',
  director4: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85',
};

const plans = [
  {
    name: 'Basic',
    price: '$0',
    period: '/month',
    desc: 'Perfect for getting started',
    featured: false,
    image: IMAGES.planBasic,
    icon: 'fa-seedling',
    features: ['5 daily swipes', 'Basic matching', 'Text chat only', 'Standard support']
  },
  {
    name: 'Plus',
    price: '$9.99',
    period: '/month',
    desc: 'Enhanced dating experience',
    featured: false,
    image: IMAGES.planPlus,
    icon: 'fa-rocket',
    features: ['Unlimited swipes', 'Advanced filters', 'Audio calls', 'Priority support', 'See who liked you']
  },
  {
    name: 'Premium',
    price: '$19.99',
    period: '/month',
    desc: 'The ultimate package',
    featured: true,
    image: IMAGES.planPremium,
    icon: 'fa-crown',
    features: ['Everything in Plus', 'HD Video calls', 'AI Assistant', 'Profile boost', 'Incognito mode', 'Verified badge']
  },
  {
    name: 'Creator',
    price: '$29.99',
    period: '/month',
    desc: 'For content creators',
    featured: false,
    image: IMAGES.planCreator,
    icon: 'fa-gem',
    features: ['Everything in Premium', 'Monetization tools', 'Analytics dashboard', 'Brand partnerships', 'Early access', 'Dedicated manager']
  }
];

const directors = [
  {
    name: 'Alexander Wright',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with 15+ years in tech innovation, driving Synczo Wave\'s mission to connect hearts worldwide.',
    image: IMAGES.director1,
    socials: ['linkedin', 'twitter', 'envelope']
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Technology Officer',
    bio: 'Tech architect behind our AI matching engine, ensuring seamless experiences for millions of users daily.',
    image: IMAGES.director2,
    socials: ['linkedin', 'github', 'envelope']
  },
  {
    name: 'Marcus Johnson',
    role: 'Chief Marketing Officer',
    bio: 'Creative strategist who transformed Synczo Wave into a global brand synonymous with modern connection.',
    image: IMAGES.director3,
    socials: ['linkedin', 'instagram', 'envelope']
  },
  {
    name: 'Elena Rodriguez',
    role: 'Chief Operations Officer',
    bio: 'Operations excellence expert scaling our platform across 150+ countries with precision and care.',
    image: IMAGES.director4,
    socials: ['linkedin', 'twitter', 'envelope']
  }
];

const handleImgError = (e) => {
  e.target.style.display = 'none';
  const fallback = e.target.parentElement.querySelector('.img-fallback');
  if (fallback) fallback.style.display = 'flex';
};

const SubscriptionSection = () => (
  <section className="section subscription-section" id="subscription">
    <div className="container">
      <div className="section-header text-center">
        <div className="section-label" style={{justifyContent: 'center'}}>Pricing</div>
        <h2 className="heading-section reveal-text">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
        <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.75rem auto 0'}}>
          Unlock premium features and maximize your Synczo Wave experience.
        </p>
      </div>
      
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div className={`plan-card ${plan.featured ? 'featured' : ''}`} key={idx}>
            {plan.featured && <div className="plan-badge">Popular</div>}
            
            {/* Plan Image Header */}
            <div className="plan-image">
              <img src={plan.image} alt={plan.name} loading="lazy" onError={handleImgError} />
              <div className="img-fallback" style={{display: 'none'}}>
                <i className={`fas ${plan.icon}`}></i>
              </div>
              <div className="plan-image-overlay"></div>
              <div className="plan-icon-float">
                <i className={`fas ${plan.icon}`}></i>
              </div>
            </div>
            
            <div className="plan-content">
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price}<span>{plan.period}</span></div>
              <div className="plan-description">{plan.desc}</div>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}><i className="fas fa-check"></i> {f}</li>
                ))}
              </ul>
              <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} plan-btn`}>
                {plan.featured ? 'Go Premium' : plan.name === 'Basic' ? 'Get Started' : `Upgrade to ${plan.name}`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DirectorsSection = () => (
  <section className="section directors-section" id="directors">
    <div className="container">
      <div className="section-header text-center">
        <div className="section-label" style={{justifyContent: 'center'}}>Leadership</div>
        <h2 className="heading-section reveal-text">
          Founders & <span className="text-gradient">Management Directors</span>
        </h2>
        <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.75rem auto 0'}}>
          Visionary leaders driving innovation and connection at Synczo Wave.
        </p>
      </div>
      
      <div className="directors-grid">
        {directors.map((d, idx) => (
          <div className="director-card" key={idx}>
            {/* Director Image Header */}
            <div className="director-image">
              <img src={d.image} alt={d.name} loading="lazy" onError={handleImgError} />
              <div className="img-fallback" style={{display: 'none'}}>
                <i className="fas fa-user"></i>
              </div>
              <div className="director-image-overlay"></div>
              <div className="director-role-float">{d.role}</div>
            </div>
            
            <div className="director-content">
              <h3 className="director-name">{d.name}</h3>
              <div className="director-role-badge">{d.role}</div>
              <p className="director-bio">{d.bio}</p>
              <div className="director-social">
                {d.socials.map((s, i) => (
                  <a href={`#${s}`} key={i} className="social-btn">
                    <i className={`${s === 'envelope' ? 'fas' : 'fab'} fa-${s}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WelcomePage4 = () => (
  <>
    <SubscriptionSection />
    <DirectorsSection />
  </>
);

export default WelcomePage4;
