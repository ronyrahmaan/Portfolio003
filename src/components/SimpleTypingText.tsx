'use client';

import { useEffect, useRef, useState } from 'react';

interface SimpleTypingTextProps {
  texts: string[];
  className?: string;
  onIndexChange?: (index: number) => void;
}

export function SimpleTypingText({
  texts,
  className = '',
  onIndexChange
}: SimpleTypingTextProps) {
  const [display, setDisplay] = useState('');
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const isDeletingRef = useRef(false);
  const textsRef = useRef(texts);
  const onIndexChangeRef = useRef(onIndexChange);

  // Update refs when props change
  useEffect(() => {
    textsRef.current = texts;
  }, [texts]);

  useEffect(() => {
    onIndexChangeRef.current = onIndexChange;
  }, [onIndexChange]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentText = textsRef.current[indexRef.current];

      if (!isDeletingRef.current) {
        // Typing
        if (charRef.current < currentText.length) {
          setDisplay(currentText.substring(0, charRef.current + 1));
          charRef.current++;
          timeoutId = setTimeout(type, 100);
        } else {
          // Pause before deleting
          timeoutId = setTimeout(() => {
            isDeletingRef.current = true;
            type();
          }, 2500);
        }
      } else {
        // Deleting
        if (charRef.current > 0) {
          charRef.current--;
          setDisplay(currentText.substring(0, charRef.current));
          timeoutId = setTimeout(type, 50);
        } else {
          // Move to next text
          isDeletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % textsRef.current.length;

          // Notify parent
          if (onIndexChangeRef.current) {
            onIndexChangeRef.current(indexRef.current);
          }

          // Start typing next word
          timeoutId = setTimeout(type, 500);
        }
      }
    };

    // Start the animation
    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array - animation runs once

  return (
    <span className={className}>
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}