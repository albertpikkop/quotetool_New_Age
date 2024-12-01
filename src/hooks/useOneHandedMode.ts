import { useState, useEffect } from 'react';

export function useOneHandedMode() {
  const [isOneHandedMode, setIsOneHandedMode] = useState(false);
  const [touchSide, setTouchSide] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;
      const screenWidth = window.innerWidth;
      setTouchSide(touchX > screenWidth / 2 ? 'right' : 'left');
    };

    document.addEventListener('touchstart', handleTouchStart);
    return () => document.removeEventListener('touchstart', handleTouchStart);
  }, []);

  const toggleOneHandedMode = () => setIsOneHandedMode(!isOneHandedMode);

  return {
    isOneHandedMode,
    touchSide,
    toggleOneHandedMode
  };
}