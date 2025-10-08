'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  scrambleSpeed?: number;
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  scrambleSpeed = 50
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoGlitchRef = useRef<NodeJS.Timeout | null>(null);

  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      const targetText = text;
      let frame = 0;
      const maxFrames = 60;

      intervalRef.current = setInterval(() => {
        let output = '';

        for (let i = 0; i < targetText.length; i++) {
          if (frame > i * 2) {
            output += targetText[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        setDisplayText(output);
        frame++;

        if (frame >= maxFrames) {
          setDisplayText(targetText);
          setIsAnimating(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, scrambleSpeed);
    };

    const timer = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, delay, scrambleSpeed, chars]);

  const startScramble = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const targetText = text;
    let frame = 0;
    const maxFrames = 40;

    intervalRef.current = setInterval(() => {
      let output = '';

      for (let i = 0; i < targetText.length; i++) {
        if (frame > i * 1.5) {
          output += targetText[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(output);
      frame++;

      if (frame >= maxFrames) {
        setDisplayText(targetText);
        setIsAnimating(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, scrambleSpeed);
  };

  const handleHover = () => {
    setIsHovered(true);
    startScramble();
  };

  // Auto-glitch every 20 seconds
  useEffect(() => {
    autoGlitchRef.current = setInterval(() => {
      if (!isAnimating && !isHovered) {
        startScramble();
      }
    }, 20000);

    return () => {
      if (autoGlitchRef.current) {
        clearInterval(autoGlitchRef.current);
      }
    };
  }, [isAnimating, isHovered]);

  return (
    <span
      className={`${className} ${isAnimating ? 'animate-pulse' : ''} cursor-pointer transition-all duration-300 hover:scale-105`}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText || text}
    </span>
  );
}

// Glitch Text Component with hover and auto-trigger
interface GlitchTextProps {
  text: string;
  className?: string;
  autoGlitch?: boolean;
  glitchInterval?: number;
}

export function GlitchText({
  text,
  className = '',
  autoGlitch = true,
  glitchInterval = 5000
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  useEffect(() => {
    if (autoGlitch) {
      intervalRef.current = setInterval(triggerGlitch, glitchInterval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoGlitch, glitchInterval]);

  useEffect(() => {
    if (isHovered) {
      triggerGlitch();
    }
  }, [isHovered]);

  return (
    <span
      className={`relative inline-block cursor-pointer transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      <span
        className={`absolute top-0 left-0 text-red-500 opacity-0 transition-opacity duration-100 ${
          isGlitching || isHovered ? 'opacity-80 animate-glitch-1' : ''
        }`}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
      >
        {text}
      </span>
      <span
        className={`absolute top-0 left-0 text-blue-500 opacity-0 transition-opacity duration-100 ${
          isGlitching || isHovered ? 'opacity-80 animate-glitch-2' : ''
        }`}
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
      >
        {text}
      </span>
      <span
        className={`absolute top-0 left-0 text-green-400 opacity-0 transition-opacity duration-100 ${
          isGlitching || isHovered ? 'opacity-60 animate-glitch-3' : ''
        }`}
        style={{ clipPath: 'polygon(0 20%, 100% 20%, 100% 80%, 0 80%)' }}
      >
        {text}
      </span>
    </span>
  );
}

// Typing Text Component
interface TypingTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  onIndexChange?: (index: number) => void;
}

export function TypingText({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  onIndexChange
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          const newIndex = (currentTextIndex + 1) % texts.length;
          setCurrentTextIndex(newIndex);
          onIndexChange?.(newIndex);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime, onIndexChange]);

  // Call onIndexChange when component mounts to sync initial state
  useEffect(() => {
    onIndexChange?.(currentTextIndex);
  }, [onIndexChange]);

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </span>
  );
}