import { useEffect, useRef } from 'react';

// Theme-related emojis: Dating, Friends, AI Chat, Reels, Creating, Ads
const emojis = [
  '💕', '💘', '💑', '🌹', '🥰', '💋',   // Dating
  '👫', '🤝', '🎉', '🫂', '☕', '🌈',   // Friends
  '🤖', '💬', '🧠', '✨', '🔮', '💡',   // AI Chatbot
  '🎬', '🎥', '📱', '▶️', '🍿', '📺',   // Reels / Watch
  '🎨', '✍️', '🎭', '🎤', '📸', '🌟',   // Creating
  '📢', '🎯', '🚀', '📈', '💼', '🔥'    // Ads / Marketing
];

const BackgroundAnimation = () => {
  const intervalRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const floatingContainer = document.getElementById('floatingContainer');
    const linesContainer = document.getElementById('movingLinesContainer');

    if (!floatingContainer || !linesContainer) return;

    // Clear any existing emojis on mount
    floatingContainer.innerHTML = '';

    // Spawn a single emoji with bubble physics
    const spawnEmoji = () => {
      if (!floatingContainer) return;

      const emoji = document.createElement('div');
      emoji.className = 'floating-emoji';
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      // Random properties for organic bubble feel
      const left = 2 + Math.random() * 96;         // 2% to 98% (keep inside screen)
      const size = 0.7 + Math.random() * 1.0;      // 0.7rem to 1.7rem
      const duration = 10 + Math.random() * 10;    // 10s to 20s (slow float)
      const delay = Math.random() * 2;             // stagger start
      const swayAmount = 15 + Math.random() * 40;  // horizontal sway range
      const swayDuration = 3 + Math.random() * 4;  // sway speed

      emoji.style.left = `${left}%`;
      emoji.style.fontSize = `${size}rem`;
      emoji.style.animationDuration = `${duration}s, ${swayDuration}s`;
      emoji.style.animationDelay = `${delay}s, 0s`;
      emoji.style.setProperty('--sway', `${swayAmount}px`);

      floatingContainer.appendChild(emoji);

      // Remove after animation completes
      const removeTimeout = setTimeout(() => {
        if (floatingContainer && floatingContainer.contains(emoji)) {
          floatingContainer.removeChild(emoji);
        }
      }, (duration + delay) * 1000);

      timeoutsRef.current.push(removeTimeout);
    };

    // Spawn 1 emoji every 400-800ms for continuous bubble stream
    const spawnLoop = () => {
      spawnEmoji();
      const nextDelay = 400 + Math.random() * 400;
      intervalRef.current = setTimeout(spawnLoop, nextDelay);
    };

    // Start the infinite loop
    spawnLoop();

    // Also spawn a small burst initially so screen isn't empty
    for (let i = 0; i < 12; i++) {
      const t = setTimeout(spawnEmoji, Math.random() * 3000);
      timeoutsRef.current.push(t);
    }

    // Create moving vertical lines for tech aesthetic
    const createLines = () => {
      if (!linesContainer) return;
      linesContainer.innerHTML = '';
      const numLines = Math.min(Math.floor(window.innerWidth / 180), 8);
      for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.className = 'moving-line';

        const left = 10 + Math.random() * 80;
        const height = Math.random() * (80 - 30) + 30;
        const top = Math.random() * 40;

        line.style.left = `${left}%`;
        line.style.height = `${height}vh`;
        line.style.top = `${top}%`;
        line.style.opacity = `${Math.random() * 0.2 + 0.1}`;

        linesContainer.appendChild(line);
      }
    };

    createLines();

    // Resize handler for lines with debounce
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        createLines();
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Stop the spawn loop
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
      // Clear all pending timeouts
      timeoutsRef.current.forEach(t => clearTimeout(t));
      timeoutsRef.current = [];
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      // Clean DOM
      if (floatingContainer) floatingContainer.innerHTML = '';
      if (linesContainer) linesContainer.innerHTML = '';
    };
  }, []);

  return null;
};

export default BackgroundAnimation;
