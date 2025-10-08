'use client';

import { useEffect, useState, useRef } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let charIndex = 0;
    let localTextIndex = 0;
    let typing = true;

    const updateText = () => {
      const currentText = texts[localTextIndex];

      if (typing) {
        // Type forward
        if (charIndex <= currentText.length) {
          setDisplayText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          // Pause then start deleting
          setTimeout(() => {
            typing = false;
          }, 2000);
        }
      } else {
        // Delete backward
        if (charIndex > 0) {
          charIndex--;
          setDisplayText(currentText.slice(0, charIndex));
        } else {
          // Move to next text
          localTextIndex = (localTextIndex + 1) % texts.length;
          setCurrentIndex(localTextIndex);
          if (onIndexChange) {
            onIndexChange(localTextIndex);
          }
          typing = true;
        }
      }
    };

    intervalId = setInterval(updateText, typing ? 80 : 40);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}