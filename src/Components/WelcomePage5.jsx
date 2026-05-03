import React from 'react';

const IMAGES = {
  history2020: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=85',
  history2021: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=85',
  history2022: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=85',
  history2023: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=85',
  history2024: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=85',
  contactVisual: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=85',
};

const timelineItems = [
  { year: '2020', title: 'The Beginning', text: 'Synczo Wave was founded with a vision to revolutionize digital connections. Our mission: create meaningful relationships in a disconnected world.', image: IMAGES.history2020 },
  { year: '2021', title: 'First Million Users', text: 'Rapid growth phase with the launch of our AI matching algorithm. Expanded to 50 countries and introduced video calling features.', image: IMAGES.history2021 },
  { year: '2022', title: 'Reels & Creator Economy', text: 'Launched Synczo Reels and monetization platform. Users could now create content and earn real income through engagement.', image: IMAGES.history2022 },
  { year: '2023', title: 'AI Integration', text: 'Introduced our proprietary AI assistant for smart replies, conversation coaching, and advanced match recommendations.', image: IMAGES.history2023 },
  { year: '2024', title: 'Global Phenomenon', text: 'Reached 10 million active users across 150 countries. Recognized as the fastest-growing social dating platform worldwide.', image: IMAGES.history2024 },
];

const HistorySection = () => (
  <section className="section history-section" id="history">
    <div className="container">
      <div className="section-header text-center">
        <div className="section-label" style={{justifyContent: 'center'}}>Our Journey</div>
        <h2 className="heading-section reveal-text">
          History of <span className="text-gradient">Synczo Wave</span>
        </h2>
        <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.75rem auto 0'}}>
          From a simple idea to a global movement. Discover our vision, mission, and growth journey.
        </p>
      </div>
      
      <div className="timeline">
        {timelineItems.map((item, idx) => (
          <div className="timeline-item reveal-text" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <div className="img-reveal-wrapper" style={{borderRadius: '16px', marginBottom: '1rem', height: '160px'}}>
                <img src={item.image} alt={item.title} loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="section contact-section" id="contact">
    <div className="container">
      <div className="section-header text-center">
        <div className="section-label" style={{justifyContent: 'center'}}>Get in Touch</div>
        <h2 className="heading-section reveal-text">
          Contact <span className="text-gradient">Us</span>
        </h2>
        <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.75rem auto 0'}}>
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>
      
      <div className="contact-layout">
        <div className="contact-info reveal-left">
          {[
            { icon: 'fas fa-info-circle', color: 'var(--accent-gradient)', title: 'About Synczo Wave', text: 'Synczo Wave is a next-generation dating and content platform designed to help people find meaningful connections while expressing their creativity.' },
            { icon: 'fas fa-headset', color: 'var(--accent-gradient-warm)', title: 'Support Center', text: 'Our dedicated support team is available 24/7 to assist you with any issues or questions. Average response time: under 2 hours.' },
            { icon: 'fas fa-map-marker-alt', color: 'var(--accent-gradient-cool)', title: 'Headquarters', text: '123 Innovation Drive, Tech Valley\nSan Francisco, CA 94105\nUnited States' },
            { icon: 'fas fa-envelope', color: 'linear-gradient(135deg, #22c55e, #14b8a6)', title: 'Email Us', text: 'General: hello@synczowave.com\nSupport: help@synczowave.com\nBusiness: partners@synczowave.com' },
          ].map((block, idx) => (
            <div className="contact-block" key={idx}>
              <div className="contact-block-icon" style={{background: block.color}}>
                <i className={block.icon}></i>
              </div>
              <h4>{block.title}</h4>
              <p style={{whiteSpace: 'pre-line'}}>{block.text}</p>
            </div>
          ))}
        </div>
        
        <div className="contact-form-wrapper reveal-image parallax-slow">
          <div className="img-reveal-wrapper" style={{borderRadius: '16px', marginBottom: '1.5rem', height: '180px'}}>
            <img src={IMAGES.contactVisual} alt="Contact us" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Mobile</label>
                <input type="tel" className="form-input" placeholder="+1 234 567 890" />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="How can we help?" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input form-textarea" placeholder="Tell us more about your inquiry..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const WelcomePage5 = () => (
  <>
    <HistorySection />
    <ContactSection />
  </>
);

export default WelcomePage5;
