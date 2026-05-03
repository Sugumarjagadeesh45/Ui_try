import React, { useState } from 'react';

// High-quality free images - AI-generated / professional look
const IMAGES = {
  friend1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=85',
  friend2: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=85',
  friend3: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=85',
  friend4: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85',
  friend5: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=85',
  
  // Generated-looking professional images for reels
  reel1: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=85',
  reel2: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=85',
  reel3: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85',
  reel4: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=85',
  
  avatar1: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=85',
  avatar2: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=85',
  avatar3: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&q=85',
  avatar4: 'https://images.unsplash.com/photo-1499887142886-791eca91a0dd?w=150&q=85',
};

// ==================== FRIENDS SECTION ====================
const FriendsSection = () => {
  const [nearbyActive, setNearbyActive] = useState(false);

  const toggleNearby = () => setNearbyActive(!nearbyActive);

  const friends = [
    { name: 'Sarah Johnson', handle: '@sarahj', status: 'Online now', online: true, distance: '0.5km', image: IMAGES.friend1 },
    { name: 'Michael Chen', handle: '@mchen', status: 'Active 2m ago', online: true, distance: '1.2km', image: IMAGES.friend2 },
    { name: 'Emma Wilson', handle: '@emmaw', status: 'Active 1h ago', online: false, distance: '1.8km', image: IMAGES.friend3 },
    { name: 'David Park', handle: '@dpark', status: 'Online now', online: true, distance: '0.3km', image: IMAGES.friend4 },
    { name: 'Lisa Anderson', handle: '@lisa_a', status: 'Active 5m ago', online: false, distance: '1.5km', image: IMAGES.friend5 },
  ];

  return (
    <section className="section friends-section" id="friends">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label" style={{justifyContent: 'center'}}>Connections</div>
          <h2 className="heading-section reveal-text">
            Manage Your <span className="text-gradient">Friends</span>
          </h2>
          <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.75rem auto 0'}}>
            Search, connect, and discover friends nearby with advanced filtering options.
          </p>
        </div>
        
        <div className="friends-layout">
          <div className="friends-search-panel reveal-left">
            <h3 style={{fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: '1.5rem'}}>Find Friends</h3>
            <div className="search-form">
              {['User ID', 'Name', 'Mobile Number', 'Email Address'].map((label) => (
                <div className="form-group" key={label}>
                  <label className="form-label">{label}</label>
                  <input type="text" className="form-input" placeholder={`Enter ${label.toLowerCase()}...`} />
                </div>
              ))}
              <button className="btn btn-primary" style={{width: '100%'}}>
                <i className="fas fa-search"></i> Search
              </button>
            </div>
            
            <div className="nearby-toggle">
              <div>
                <h4 style={{fontWeight: 600, fontSize: 'var(--text-sm)'}}>Nearby Friends</h4>
                <p style={{fontSize: 'var(--text-xs)', color: 'var(--text-muted)'}}>Find users within 2km radius</p>
              </div>
              <div className={`toggle-switch ${nearbyActive ? 'active' : ''}`} onClick={toggleNearby}></div>
            </div>
            
            <button className="btn btn-secondary" style={{width: '100%'}}>
              <i className="fas fa-undo"></i> Reset Filters
            </button>
          </div>
          
          <div className="reveal-right">
            <h3 style={{fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: '1.25rem'}}>Your Network</h3>
            <div className="friends-list" id="friendsList">
              {friends.map((friend, idx) => (
                <div className="friend-item" key={idx} data-name={friend.name} data-id={`SW00${idx+1}`}>
                  <div className={`friend-avatar ${friend.online ? 'online' : ''}`}>
                    <img src={friend.image} alt={friend.name} loading="lazy" />
                  </div>
                  <div className="friend-details">
                    <h4>{friend.name}</h4>
                    <p>{friend.handle} • {friend.status}</p>
                  </div>
                  <div className="distance-badge">{friend.distance}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== TRENDING SECTION ====================
const TrendingSection = () => {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const reels = [
    {
      id: 1,
      image: IMAGES.reel1,
      avatar: IMAGES.avatar1,
      name: 'Alex Rivera',
      caption: 'Sunset vibes in Bali 🌅✨ #travel #bali',
      likes: '12.5K',
      comments: '842'
    },
    {
      id: 2,
      image: IMAGES.reel2,
      avatar: IMAGES.avatar2,
      name: 'Maria Garcia',
      caption: 'New dance trend! Who can do this? 💃🔥',
      likes: '45.2K',
      comments: '2.1K'
    },
    {
      id: 3,
      image: IMAGES.reel3,
      avatar: IMAGES.avatar3,
      name: 'Jack Thompson',
      caption: 'Photography tips for beginners 📷🎨',
      likes: '8.7K',
      comments: '456'
    },
    {
      id: 4,
      image: IMAGES.reel4,
      avatar: IMAGES.avatar4,
      name: 'Luna Kim',
      caption: 'Ramen recipe that changed my life 🍜❤️',
      likes: '67.3K',
      comments: '3.4K'
    }
  ];

  return (
    <section className="section trending-section" id="trending">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label" style={{justifyContent: 'center'}}>Trending Now</div>
          <h2 className="heading-section reveal-text">
            Discover <span className="text-gradient">Viral Content</span>
          </h2>
          <p className="reveal-text" style={{color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.75rem auto 0'}}>
            Stay updated with trending reels and discover exciting content from users around the world.
          </p>
        </div>
        
        <div className="reels-grid">
          {reels.map((reel) => (
            <div className="reel-card" key={reel.id}>
              <div className="reel-media">
                <img src={reel.image} alt={reel.caption} loading="lazy" />
                <div className="reel-info">
                  <div className="reel-author">
                    <div className="reel-author-avatar">
                      <img src={reel.avatar} alt={reel.name} loading="lazy" />
                    </div>
                    <span className="reel-author-name">{reel.name}</span>
                  </div>
                  <p className="reel-caption">{reel.caption}</p>
                  <div className="reel-actions">
                    <div className={`reel-action ${likes[reel.id] ? 'liked' : ''}`} onClick={() => toggleLike(reel.id)}>
                      <i className="fas fa-heart"></i> <span>{reel.likes}</span>
                    </div>
                    <div className="reel-action">
                      <i className="fas fa-comment"></i> <span>{reel.comments}</span>
                    </div>
                    <div className="reel-action">
                      <i className="fas fa-share"></i>
                    </div>
                    <div className="reel-action">
                      <i className="fas fa-bookmark"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WelcomePage2 = () => {
  return (
    <>
      <FriendsSection />
      <TrendingSection />
    </>
  );
};

export default WelcomePage2;
