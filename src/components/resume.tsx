'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Download, Eye, File } from 'lucide-react';
import Image from 'next/image';

export function Resume() {
  // Resume details
  const resumeDetails = {
    title: "Rahman's Resume",
    description: 'AI Researcher • Graduate Research Assistant • ML Engineer',
    fileType: 'PDF',
    lastUpdated: 'October 2025',
    fileSize: '46 KB',
    previewImageSrc: '/resume_rahman_preview.png',
    downloadUrl: '/Md A Rahman.pdf',
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = 'resume of Md A Rahman.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Details area (bottom part) */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            {/* Download indicator */}
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-primary-foreground group-hover:bg-black/80"
              initial={{ scale: 1 }}
            >
              <Download className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Additional Information */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-neutral-50 dark:bg-neutral-900 p-4">
          <h4 className="font-medium text-sm mb-2">Current Position</h4>
          <p className="text-xs text-muted-foreground">
            Graduate Research Assistant, Texas Tech University
          </p>
        </div>
        <div className="rounded-lg bg-neutral-50 dark:bg-neutral-900 p-4">
          <h4 className="font-medium text-sm mb-2">Research Focus</h4>
          <p className="text-xs text-muted-foreground">
            AI/ML, NLP, LiDAR Systems, Computer Vision
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;