import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import { useState } from 'react';
import { Project } from './ProjectCard';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * A modal dialog that shows detailed information about a project. Displays
 * the project title, timeframe, full summary, technologies, image, and an
 * optional code snippet with basic formatting. It also provides links to
 * GitHub or documentation if available.
 */
export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // If no project is provided, do not render the modal.
  if (!project) return null;
  // Determine the list of images to show. Use the images array if provided,
  // otherwise fall back to a single image on the project. Cast to a string
  // array to satisfy TypeScript.
  const images: string[] = project.images && project.images.length > 0
    ? project.images
    : project.image
      ? [project.image]
      : [];
  // Track which image is currently displayed in the carousel. Default to the
  // first image.
  const [currentIndex, setCurrentIndex] = useState(0);
  // Advance to the next image in a circular manner. Uses modulo to wrap
  // around the end of the images array.
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  // Move to the previous image, wrapping around when at the beginning.
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <p className="mt-1 text-sm text-muted-foreground uppercase">
            {project.timeframe}
          </p>
        </DialogHeader>
        <div className="space-y-6 px-6 pb-6">
          {/* Carousel for project images. Only displayed if at least one image is available. */}
          {images.length > 0 && (
            <div className="relative w-full overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-900">
              <Image
                src={images[currentIndex]}
                alt={`${project.title} illustration ${currentIndex + 1}`}
                width={800}
                height={400}
                className="h-56 w-full object-contain p-4 sm:h-72"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-base font-bold text-foreground shadow-md backdrop-blur hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-base font-bold text-foreground shadow-md backdrop-blur hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          )}
          {/* Project summary */}
          {project.summary && (
            <div>
              <p className="text-base leading-relaxed text-foreground">
                {project.summary}
              </p>
            </div>
          )}
          {/* Code snippet section (if provided) */}
          {project.code && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">Code Snippet</h4>
              <pre className="max-h-60 overflow-auto rounded-lg bg-neutral-100 p-4 text-xs font-mono dark:bg-neutral-800">
                <code>{project.code}</code>
              </pre>
            </div>
          )}
          {/* Technology badges */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {/* External resource links */}
          {(project.github || project.docs) && (
            <div className="pt-2">
              {project.github && (
                <a
                  href={project.github}
                  className="mr-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              )}
              {project.docs && (
                <a
                  href={project.docs}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}