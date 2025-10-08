'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CollaborationModal from './CollaborationModal';

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactInfo = {
    name: 'Md A Rahman',
    email: 'ara02434@ttu.edu',
    phone: '+1 (806) 239-9112',
    handle: '@ronstagrram',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/md-a-rahman-558519194',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/ronstagrram/',
      },
      {
        name: 'Research Profile',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Texas Tech University',
        url: 'https://www.depts.ttu.edu/cs/',
      },
    ],
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            Let's Collaborate
          </h2>
          <span className="mt-2 sm:mt-0 text-muted-foreground">
            {contactInfo.handle}
          </span>
        </div>

        {/* Contact Section */}
        <div className="mt-8 flex flex-col md:mt-10">
          {/* Email */}
          <div
            className="group mb-5 cursor-pointer"
            onClick={() => openLink(`mailto:${contactInfo.email}`)}
          >
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
                {contactInfo.email}
              </span>
              <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Phone */}
          <div className="group mb-5 cursor-pointer">
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-gray-600 hover:underline sm:text-lg">
                {contactInfo.phone}
              </span>
            </div>
          </div>

          {/* Professional Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-5 sm:gap-x-8 mb-8">
            {contactInfo.socials.map((social) => (
              <button
                key={social.name}
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors hover:underline"
                onClick={() => openLink(social.url)}
                title={social.name}
              >
                {social.name}
              </button>
            ))}
          </div>

          {/* Enhanced Collaboration Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 border border-blue-100 dark:border-blue-900/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              <h3 className="text-lg font-semibold text-foreground">Open to New Ventures</h3>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              I'm always interested in research partnerships, internships, and industry collaborations in AI/ML, 
              NLP, sensor data processing, and ethical AI development. Let's explore opportunities together and 
              build something incredible! 🚀
            </p>
            
            {/* Enhanced Collaboration Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>🚀 Explore Collaboration Opportunities</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Collaboration Modal */}
      <CollaborationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default Contact;