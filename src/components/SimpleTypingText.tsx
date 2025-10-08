'use client';

import { useEffect, useState } from 'react';

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
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentText = texts[currentIndex];

      if (!isDeleting) {
        // Typing
        if (currentChar < currentText.length) {
          setDisplay(currentText.substring(0, currentChar + 1));
          currentChar++;
          timeoutId = setTimeout(type, 100);
        } else {
          // Pause before deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2500);
        }
      } else {
        // Deleting
        if (currentChar > 0) {
          currentChar--;
          setDisplay(currentText.substring(0, currentChar));
          timeoutId = setTimeout(type, 50);
        } else {
          // Move to next text
          isDeleting = false;
          currentIndex = (currentIndex + 1) % texts.length;

          // Update state and notify parent
          setTextIndex(currentIndex);
          if (onIndexChange) {
            onIndexChange(currentIndex);
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
  }, [texts, onIndexChange]);

  return (
    <span className={className}>
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}