/**
 * A modal that welcomes visitors to Md A Rahman's portfolio. This component is
 * adapted from the original welcome modal of the upstream project but has
 * been updated to remove any references to the previous owner (Raphael Girud)
 * and to better reflect Rahman's professional brand. It presents a friendly
 * greeting and brief explanation of the portfolio's interactive nature.
 */

'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Allows passing a custom trigger element (e.g., a logo) to open the modal
interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Default trigger shows a generic logo button. The logo image can be
  // replaced with a custom asset by updating the src path.
  const defaultTrigger = (
    <Button
      variant="ghost"
      className="group h-auto w-auto cursor-pointer rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-3 shadow-2xl backdrop-blur-xl border border-white/20 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 hover:shadow-3xl hover:scale-105 transition-all duration-300 focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/logo-rahman.svg"
        width={120}
        height={120}
        alt="Rahman Logo"
        className="w-8 md:w-10 lg:w-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
      />
      <span className="sr-only">About Rahman</span>
    </Button>
  );

  // Open the user's default mail client or LinkedIn when the contact link is clicked.
  const handleContactMe = () => {
    setIsOpen(false);
    // prefer email contact; open in a new tab
    window.open('mailto:ara02434@ttu.edu?subject=Hello%20Rahman&body=Hi%20Rahman%2C%0A%0AI%20came%20across%20your%20AI%20portfolio%20and%20would%20love%20to%20connect%20about%20potential%20opportunities.%0A%0ABest%20regards%2C', '_blank');
  };

  return (
    <>
      {/* Use custom trigger if provided, otherwise use default */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight">
                  Welcome to My Portfolio
                </DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  {/* A small tagline could be inserted here if desired */}
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content area */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">
                {/* What section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    What's this?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    I'm thrilled to share my <strong>interactive AI research portfolio.</strong>
                    <br /> Whether you're a recruiter, collaborator, friend or just curious,
                    feel free to ask anything you want!
                  </p>
                </div>

                {/* Why section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    Why a conversational portfolio?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    Traditional portfolios can be limiting.
                    <br /> They can't adapt to every visitor's specific needs.
                    <br /> My portfolio becomes <strong>exactly what you're interested in knowing</strong>
                    about me and my work.
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-4 py-3"
                size="sm"
              >
                Start Chatting
              </Button>
              <div className="mt-6 flex flex-col items-center gap-4 text-center">
                <p className="text-muted-foreground text-sm">
                  If you enjoy exploring my portfolio, feel free to share it and reach out.
                </p>
                <Button
                  onClick={handleContactMe}
                  variant="outline"
                  className="rounded-full border-blue-500 bg-blue-50 px-4 py-2 text-blue-600 hover:bg-blue-100 dark:bg-neutral-800 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-neutral-700"
                >
                  Contact Me
                </Button>
                {/* Embedded map showing my current city (Lubbock, TX). The map uses
                Google Maps embed without requiring an API key. */}
                <div className="mt-4 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <iframe
                    src="https://maps.google.com/maps?q=Lubbock%2C%20TX&output=embed"
                    width="100%"
                    height="180"
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title="Md A Rahman location map"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}