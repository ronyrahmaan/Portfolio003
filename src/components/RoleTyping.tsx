'use client';

import { useEffect, useState } from 'react';

export function RoleTyping() {
  const roles = [
    'AI/ML Engineer',
    'AI Researcher',
    'Generative AI Enthusiast'
  ];

  const colors = [
    'text-blue-600 dark:text-blue-400',
    'text-purple-600 dark:text-purple-400',
    'text-pink-600 dark:text-pink-400'
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let roleIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    const animate = () => {
      const currentRole = roles[roleIndex];

      if (isPaused) {
        // Just wait
        setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          animate();
        }, 2500);
        return;
      }

      if (!isDeleting) {
        // Typing
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(animate, 100);
        } else {
          // Done typing, pause
          isPaused = true;
          animate();
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          charIndex--;
          setDisplayText(currentRole.slice(0, charIndex));
          setTimeout(animate, 50);
        } else {
          // Done deleting, move to next role
          roleIndex = (roleIndex + 1) % roles.length;
          setCurrentRoleIndex(roleIndex);
          isDeleting = false;
          setTimeout(animate, 200);
        }
      }
    };

    // Start animation
    animate();

    // No cleanup needed since we're not storing timeout IDs
  }, []); // Empty deps - run once

  return (
    <div className="mt-3 relative">
      <div className="absolute inset-0 blur-xl opacity-50">
        <div className={`h-full w-full ${colors[currentRoleIndex]} animate-pulse`} />
      </div>
      <div
        className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full
          bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm
          border border-white/20 shadow-lg
          ${colors[currentRoleIndex]}
          text-xs font-medium tracking-wide sm:text-sm md:text-sm`}
      >
        <span className="relative font-space-grotesk">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
        <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-spin" />
      </div>
    </div>
  );
}