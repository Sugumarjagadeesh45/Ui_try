import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <a href="#home" className="nav-logo">
                        <div className="nav-logo-icon">
                            <i className="fas fa-wave-square"></i>
                        </div>
                        <span>Synczo Wave</span>
                    </a>
                    <p>Connecting hearts and creativity worldwide. Find your vibe, share your story, and earn doing what you love.</p>
                    <div className="footer-social">
                        <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#whatsapp" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        <a href="#email" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                
                <div className="footer-links">
                    <h4>Platform</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#friends">Friends</a></li>
                        <li><a href="#trending">Trending</a></li>
                        <li><a href="#create">Create</a></li>
                        <li><a href="#chat">Chat</a></li>
                    </ul>
                </div>
                
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#history">History</a></li>
                        <li><a href="#directors">Directors</a></li>
                        <li><a href="#subscription">Pricing</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                
                <div className="footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#cookies">Cookie Policy</a></li>
                        <li><a href="#guidelines">Safety Guidelines</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Synczo Wave. All rights reserved.</p>
                <p style={{display: 'flex', alignItems: 'center', gap: 'var(--space-2)'}}>
                    Made with <i className="fas fa-heart" style={{color: 'var(--accent-primary)'}}></i> for connections
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
