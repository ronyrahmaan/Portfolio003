import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export interface Project {
  /**
   * A unique identifier for the project. Used to key React elements and link
   * modal dialogs.
   */
  id: string;
  /**
   * The display title of the project. Keep this concise and descriptive.
   */
  title: string;
  /**
   * The timeframe or date range when this project was undertaken.
   */
  timeframe: string;
  /**
   * A short summary describing the project. This text appears on the card
   * and as the opening paragraph in the modal.
   */
  summary: string;
  /**
   * A list of technologies, tools or concepts used. The first three will be
   * displayed as badges on the card.
   */
  technologies: string[];
  /**
   * A primary image for the project card. If multiple images are provided
   * via the `images` property, the first entry is used as the cover. The
   * path should be relative to the `public` directory and start with a
   * leading slash.
   */
  image?: string;
  /**
   * Optional array of images associated with this project. These will be
   * displayed in the project modal. If omitted, the single `image` field
   * will be used instead.
   */
  images?: string[];
  /**
   * Optional URL to the source code repository.
   */
  github?: string;
  /**
   * Optional URL to external documentation or a live demo.
   */
  docs?: string;
  /**
   * Optional code snippet to include in the modal. Use this sparingly for
   * illustrative purposes.
   */
  code?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

/**
 * A card that displays a brief overview of a project. When clicked, it
 * triggers a callback (e.g. to open a modal). The card shows an image,
 * title, timeframe, summary and a subset of technologies.
 */
export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900"
      onClick={onClick}
    >
      <div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl">
        <Image
          // Prefer the first entry in the images array if provided. If not, fall
          // back to the single `image` field. Casting to string ensures a
          // defined value for the Next.js Image component.
          src={(
            project.images && project.images.length > 0
              ? project.images[0]
              : project.image
          ) as string}
          alt={`${project.title} cover`}
          fill
          className="object-cover object-center"
        />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mb-2 text-xs text-muted-foreground uppercase tracking-wide">
        {project.timeframe}
      </p>
      <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 3 && (
          <Badge variant="secondary" className="text-xs">
            +{project.technologies.length - 3}
          </Badge>
        )}
      </div>
    </motion.div>
  );
}