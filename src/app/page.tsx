/**
 * This is the landing page for Md A Rahman's AI research portfolio.
 * It showcases Rahman's diverse expertise in AI/ML, his international
 * experience, and his commitment to creating impactful technology solutions.
 * The page features interactive elements including quick-question prompts
 * and collaboration opportunities, designed to engage visitors and highlight
 * Rahman's unique blend of technical excellence and global perspective.
 */

'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import AnimatedText from '@/components/AnimatedText';
import { SimpleTypingText } from '@/components/SimpleTypingText';
import { RoleTyping } from '@/components/RoleTyping';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Microscope,
  User,
  Code2,
  Trophy,
  MessageSquare,
  Route,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
// Import the modal component that shows collaboration details
import OpenToCollaborateModal from '@/components/open-to-collaborate-modal';

/* ---------- quick‑question data ---------- */
// Modern, engaging prompts tailored to showcase AI research expertise
const questions = {
  About: 'Tell me about your background and what drives your AI research',
  Research: 'What cutting-edge AI projects are you working on?',
  'Tech Stack': "What's your technical expertise and preferred tools?",
  Achievements: 'What are your proudest accomplishments and milestones?',
  Connect: 'How can we collaborate or get in touch?',
  Journey: 'Walk me through your professional journey and experiences',
} as const;

const questionConfig = [
  { key: 'About', color: '#3B82F6', icon: User },
  { key: 'Research', color: '#8B5CF6', icon: Microscope },
  { key: 'Tech Stack', color: '#10B981', icon: Code2 },
  { key: 'Achievements', color: '#F59E0B', icon: Trophy },
  { key: 'Connect', color: '#EC4899', icon: MessageSquare },
  { key: 'Journey', color: '#EF4444', icon: Route },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Removed role state management as it's now handled inside RoleTyping component

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);

  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween" as const, duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween" as const, duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Preload assets in background
    const img = new window.Image();
    img.src = '/landing-memojis.png';

    // Preload videos too
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      {/* big blurred footer word with Rahman's full name */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[8rem] leading-none font-black text-transparent select-none sm:block lg:text-[12rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Md A Rahman
        </div>
      </div>


      <div className="absolute top-6 left-6 z-20">
        {/* Use the new modal trigger for collaboration */}
        <OpenToCollaborateModal />
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <h2 className="text-secondary-foreground mt-1 text-base font-medium md:text-lg lg:text-lg xl:text-lg font-space-grotesk">
          Hey, I'm{' '}
          <SimpleTypingText
            texts={["Md", "Md A", "Md A Rahman"]}
            className="inline-block font-space-grotesk"
          />
        </h2>
        {/* Main profession headline */}
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-space-grotesk">
          <AnimatedText
            text="AI Research Engineer"
            delay={1000}
            scrambleSpeed={30}
            className="inline-block"
          />
        </h1>
        {/* Dynamically rotating descriptors with modern animations */}
        <RoleTyping />
      </motion.div>

      {/* centre portrait */}
      <div className="relative z-10 h-48 w-40 overflow-hidden rounded-xl sm:h-56 sm:w-48 md:h-80 md:w-68">
        <Image
          src="/landing-memojis.png"
          alt="Md A Rahman – Professional Portrait"
          width={800}
          height={800}
          priority
          className="object-cover object-center"
        />
      </div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-6 flex w-full flex-col items-center justify-center md:px-0 sm:mt-4"
      >
        {/* free‑form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg px-4 sm:px-0"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-1.5 pr-2 pl-5 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 min-h-[48px]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about my AI research..."
              className="w-full border-none bg-transparent text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500 h-[36px]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex h-9 w-9 min-w-[36px] items-center justify-center rounded-full bg-[#0171E3] text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* Minimalistic quick‑question grid with subtle animations */}
        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 sm:mt-6 px-4 sm:px-0">
          {questionConfig.map(({ key, color, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                onClick={() => goToChat(questions[key as keyof typeof questions])}
                variant="outline"
                className="group relative h-[85px] w-full rounded-xl border border-neutral-200/50 bg-white/40 backdrop-blur-sm transition-all duration-200 hover:border-neutral-300 hover:bg-white/60 hover:shadow-lg dark:border-neutral-700/50 dark:bg-neutral-800/40 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/60"
              >
                <div className="flex h-full flex-col items-center justify-center gap-2">
                  {/* Icon with subtle animation */}
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      size={18}
                      className="transition-colors duration-200 text-neutral-600 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                      strokeWidth={1.5}
                      style={{ color }}
                    />
                    {/* Subtle glow on hover */}
                    <div
                      className="absolute inset-0 -z-10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-30"
                      style={{ backgroundColor: color }}
                    />
                  </motion.div>

                  {/* Text with clean typography */}
                  <span className="text-xs font-medium text-neutral-700 transition-colors duration-200 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-white">
                    {key}
                  </span>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="h-full w-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <FluidCursor />
    </div>
  );
}