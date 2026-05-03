import React, { useState } from 'react';

// Free Unsplash images
const IMAGES = {
  createVisual: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
  chatAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
};

// ==================== CREATE SECTION ====================
const CreateSection = () => {
  return (
    <section className="section create-section" id="create">
        <div className="container">
            <div className="section-header text-center">
                <div className="section-label" style={{justifyContent: 'center'}}>Create</div>
                <h2 className="heading-section reveal-text">
                    Create, Share & <span className="text-gradient">Earn</span>
                </h2>
                <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: 'var(--space-4) auto 0'}}>
                    Turn your creativity into income with Synczo Wave. Upload your voice, share your content, and earn real money.
                </p>
            </div>
            
            <div className="create-layout">
                <div className="reveal-image parallax-slow">
                    <div className="img-reveal-wrapper" style={{borderRadius: '24px', overflow: 'hidden'}}>
                        <img 
                            src={IMAGES.createVisual} 
                            alt="Create content" 
                            loading="lazy" 
                            style={{width: '100%', height: 'auto', display: 'block'}}
                        />
                        <div className="img-shine"></div>
                        <div className="img-overlay-gradient"></div>
                        <div style={{
                            position: 'absolute', 
                            bottom: '24px', 
                            left: '24px', 
                            right: '24px', 
                            zIndex: 2,
                            color: 'white'
                        }}>
                            <h3 style={{fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '8px'}}>Drop your content here</h3>
                            <p style={{opacity: 0.85, marginBottom: '16px'}}>or click to browse files</p>
                            <button className="btn btn-primary">
                                <i className="fas fa-plus"></i> Upload Post
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="reveal-text">
                    <div className="wallet-card" style={{marginBottom: 'var(--space-8)'}}>
                        <div className="wallet-balance">$<span>2,450.00</span></div>
                        <div className="wallet-label">Total Earnings</div>
                        <div className="wallet-stats">
                            <div className="wallet-stat">
                                <div className="wallet-stat-value">$<span>185.50</span></div>
                                <div className="wallet-stat-label">Today</div>
                            </div>
                            <div className="wallet-stat">
                                <div className="wallet-stat-value">$<span>1,240.00</span></div>
                                <div className="wallet-stat-label">This Month</div>
                            </div>
                        </div>
                        <button className="btn btn-primary" style={{width: '100%', marginTop: 'var(--space-6)'}}>
                            <i className="fas fa-wallet"></i> Withdraw Now
                        </button>
                    </div>
                    
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)'}}>
                        <div className="glass-card tilt-card" style={{padding: 'var(--space-6)'}}>
                            <div className="tilt-card-inner">
                                <i className="fas fa-microphone" style={{fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: 'var(--space-3)'}}></i>
                                <h4 style={{fontWeight: 600, fontSize: 'var(--text-sm)'}}>Voice Posts</h4>
                                <p style={{fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-1)'}}>Share your voice</p>
                            </div>
                        </div>
                        <div className="glass-card tilt-card" style={{padding: 'var(--space-6)'}}>
                            <div className="tilt-card-inner">
                                <i className="fas fa-video" style={{fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: 'var(--space-3)'}}></i>
                                <h4 style={{fontWeight: 600, fontSize: 'var(--text-sm)'}}>Video Reels</h4>
                                <p style={{fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-1)'}}>Go viral</p>
                            </div>
                        </div>
                        <div className="glass-card tilt-card" style={{padding: 'var(--space-6)'}}>
                            <div className="tilt-card-inner">
                                <i className="fas fa-image" style={{fontSize: '1.5rem', color: 'var(--accent-tertiary)', marginBottom: 'var(--space-3)'}}></i>
                                <h4 style={{fontWeight: 600, fontSize: 'var(--text-sm)'}}>Photo Stories</h4>
                                <p style={{fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-1)'}}>Capture moments</p>
                            </div>
                        </div>
                        <div className="glass-card tilt-card" style={{padding: 'var(--space-6)'}}>
                            <div className="tilt-card-inner">
                                <i className="fas fa-chart-line" style={{fontSize: '1.5rem', color: '#22c55e', marginBottom: 'var(--space-3)'}}></i>
                                <h4 style={{fontWeight: 600, fontSize: 'var(--text-sm)'}}>Analytics</h4>
                                <p style={{fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-1)'}}>Track growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// ==================== CHAT SECTION ====================
const ChatSection = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { type: 'received', text: 'Hey! How are you doing today? 😊' },
    { type: 'sent', text: "I'm great! Just checking out some trending reels. You?" },
    { type: 'received', text: 'Same here! Have you seen the new dance challenge?' },
    { type: 'ai', text: 'Would you like me to suggest some trending dance reels?' }
  ]);

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { type: 'sent', text: inputValue }]);
      setInputValue('');
      
      // AI response simulation
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'ai', 
          text: 'That\'s interesting! Would you like to explore more content related to this?' 
        }]);
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section className="section chat-section" id="chat">
        <div className="container">
            <div className="section-header text-center">
                <div className="section-label" style={{justifyContent: 'center'}}>Connect</div>
                <h2 className="heading-section reveal-text">
                    Seamless <span className="text-gradient">Communication</span>
                </h2>
                <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: 'var(--space-4) auto 0'}}>
                    Text, audio, video calls, and AI-powered smart replies all in one place.
                </p>
            </div>
            
            <div className="chat-layout">
                <div className="reveal-image parallax-slow">
                    <div className="chat-demo">
                        <div className="chat-header">
                            <div className="chat-avatar">
                                <img src={IMAGES.chatAvatar} alt="Sarah" loading="lazy" />
                            </div>
                            <div className="chat-user-info">
                                <h4>Sarah Johnson</h4>
                                <p>● Online</p>
                            </div>
                            <div style={{marginLeft: 'auto', display: 'flex', gap: 'var(--space-3)', color: 'var(--text-muted)'}}>
                                <i className="fas fa-phone" style={{cursor: 'pointer', transition: 'color 0.3s'}}></i>
                                <i className="fas fa-video" style={{cursor: 'pointer', transition: 'color 0.3s'}}></i>
                            </div>
                        </div>
                        <div className="chat-messages" id="chatMessages">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`message message-${msg.type}`}>
                                    {msg.type === 'ai' && <i className="fas fa-robot" style={{marginRight: '6px', color: 'var(--accent-secondary)'}}></i>}
                                    {msg.type === 'ai' && <strong>AI Assistant: </strong>}
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input-area">
                            <input 
                              type="text" 
                              className="chat-input" 
                              placeholder="Type a message..." 
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              onKeyPress={handleKeyPress}
                            />
                            <button className="chat-send" onClick={handleSend}>
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="chat-features reveal-text">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-comments"></i>
                        </div>
                        <div className="feature-text">
                            <h4>Instant Text Chat</h4>
                            <p>Real-time messaging with read receipts, typing indicators, and rich media support.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon" style={{background: 'var(--accent-gradient-warm)'}}>
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="feature-text">
                            <h4>Crystal Clear Audio</h4>
                            <p>High-quality voice calls with noise cancellation and group call support.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon" style={{background: 'var(--accent-gradient-cool)'}}>
                            <i className="fas fa-video"></i>
                        </div>
                        <div className="feature-text">
                            <h4>HD Video Calls</h4>
                            <p>Face-to-face conversations with filters, effects, and screen sharing.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon" style={{background: 'linear-gradient(135deg, #8b5cf6, #ec4899)'}}>
                            <i className="fas fa-robot"></i>
                        </div>
                        <div className="feature-text">
                            <h4>AI Smart Assistant</h4>
                            <p>Get instant smart replies, conversation starters, and dating advice from our AI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const WelcomePage3 = () => {
  return (
    <>
      <CreateSection />
      <ChatSection />
    </>
  );
};

export default WelcomePage3;
