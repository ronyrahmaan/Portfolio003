import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CollaborationModal from './collaboration-modal';

export default function OpenToCollaborateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center gap-2.5 rounded-full bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80 px-5 py-2.5 text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 border border-primary/20 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isAnimating ? {
          boxShadow: [
            "0 10px 25px rgba(0,0,0,0.25)",
            "0 20px 40px rgba(0,0,0,0.4)",
            "0 10px 25px rgba(0,0,0,0.25)"
          ]
        } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-foreground/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: '50%',
              }}
            />
          ))}
        </div>

        {/* Enhanced pulsing dot with multiple rings */}
        <span className="relative flex h-3 w-3 z-10">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-green-500"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-green-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5
            }}
          />
          <motion.span
            className="relative inline-flex h-3 w-3 rounded-full bg-green-500 dark:bg-green-400 shadow-sm z-10"
            animate={isAnimating ? {
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            } : {}}
            transition={{ duration: 1 }}
          />
        </span>

        {/* Enhanced text with character animation */}
        <motion.span
          className="relative z-10"
          animate={isAnimating ? {
            y: [0, -2, 0],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {"Open to Collaborate".split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              animate={isAnimating ? {
                y: [0, -8, 0],
                color: ['currentColor', '#10B981', 'currentColor'],
              } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.05
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -skew-x-12"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/10 to-primary-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      </motion.button>
      <CollaborationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}