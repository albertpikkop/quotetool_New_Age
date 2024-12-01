import { useCallback } from 'react';

type HapticStyle = 'light' | 'medium' | 'heavy';

interface HapticPattern {
  duration: number;
  interval?: number;
  repeat?: number;
}

const patterns: Record<HapticStyle, HapticPattern> = {
  light: { duration: 10 },
  medium: { duration: 15 },
  heavy: { duration: 20, interval: 10, repeat: 2 }
};

export function useHapticFeedback() {
  const triggerHaptic = useCallback((style: HapticStyle) => {
    if (!window.navigator.vibrate) return;

    const pattern = patterns[style];
    
    if (pattern.repeat) {
      const sequence = Array(pattern.repeat).fill([pattern.duration, pattern.interval || 0]).flat();
      window.navigator.vibrate(sequence);
    } else {
      window.navigator.vibrate(pattern.duration);
    }
  }, []);

  return { triggerHaptic };
}