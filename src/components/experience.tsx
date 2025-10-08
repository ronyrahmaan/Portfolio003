'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Building2, MapPin } from 'lucide-react';

export function Experience() {
  // Work photos from the work_photo./ directory
  const workPhotos = [
    { src: '/work_photo./IMG_2878.jpg', alt: 'AI/ML development and collaboration' },
    { src: '/work_photo./IMG_2892.jpg', alt: 'LiDAR data processing and analysis' },
    { src: '/work_photo./IMG_2895.jpg', alt: 'Transportation infrastructure research' },
    { src: '/work_photo./IMG_2897.jpg', alt: 'Technical meetings and project discussions' },
    { src: '/work_photo./IMG_2898.jpg', alt: 'Snap from data collection day' },
    { src: '/work_photo./IMG_2900.jpg', alt: 'Collaborative work and team meetings' },
    { src: '/work_photo./IMG_2901.jpg', alt: 'Professional development and presentations' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % workPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + workPhotos.length) % workPhotos.length);
  };

  // Key highlights for visual display
  const highlights = [
    {
      icon: Building2,
      title: 'Current Role',
      content: 'Graduate Research Assistant at TransTech Transportation Lab',
      location: 'Texas Tech University'
    },
    {
      icon: MapPin,
      title: 'Research Focus',
      content: 'AI/ML for Transportation Infrastructure Safety',
      location: 'LiDAR • Traffic Analysis • Road Safety'
    }
  ];

  return (
    <div className="mx-auto w-full max-w-6xl py-8 font-sans">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Professional Journey
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Research, Innovation & Leadership Across Three Countries
        </p>
      </motion.div>

      {/* Photo Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src={workPhotos[currentImageIndex].src}
            alt={workPhotos[currentImageIndex].alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition-all hover:bg-white hover:scale-110 dark:bg-black/90 dark:hover:bg-black"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition-all hover:bg-white hover:scale-110 dark:bg-black/90 dark:hover:bg-black"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {workPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-white shadow-lg'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </motion.div>

      {/* Key Highlights Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-900 dark:ring-gray-800"
          >
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <highlight.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {highlight.title}
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  {highlight.content}
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {highlight.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h3 className="text-xl font-semibold">
            Ready to Collaborate on Transportation Innovation?
          </h3>
          <p className="mt-2 text-blue-100">
            Let's discuss how AI can transform transportation infrastructure and safety
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;