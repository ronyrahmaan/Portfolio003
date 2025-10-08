// This file uses React state for the image carousel and must run on the client.
// Mark it as a Client Component so Next.js knows to hydrate it on the client.
'use client';

import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { useState } from 'react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Cognetik Enterprises - Golf Networking Platform',
    description:
      'Leading the technical vision as CTO for an innovative SaaS platform that revolutionizes professional networking within the golf community. The platform seamlessly blends business development with leisure, featuring AI-driven smart matching algorithms, real-time event coordination, and premium networking features. Built with scalable microservices architecture handling thousands of concurrent users, the system incorporates sophisticated recommendation engines and WebSocket-based real-time messaging for seamless communication between golf enthusiasts and business professionals.',
    techStack: [
      'React Native',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'AWS',
      'WebSocket',
      'AI/ML',
      'Microservices',
      'Real-time Systems'
    ],
    links: [
      {
        name: 'Platform Website',
        url: 'https://cognetik.io',
      },
      {
        name: 'Company LinkedIn',
        url: 'https://linkedin.com/company/cognetik',
      }
    ],
    images: [
      { src: '/projects/cognetik/app-home.png', alt: 'Cognetik app home dashboard showing stats and featured events' },
      { src: '/projects/cognetik/network-tab.png', alt: 'Network tab with connection requests from golf professionals' },
      { src: '/projects/cognetik/events-page.png', alt: 'Events page showing Masters Week and premium tournaments' },
      { src: '/projects/cognetik/messages.png', alt: 'Messages interface with golf legends and courses' },
      { src: '/projects/cognetik/profile.png', alt: 'User profile and handicap tracking' },
    ],
    code: `// AI-powered professional matching algorithm
const matchProfessionals = async (user, preferences) => {
  const embeddings = await generateEmbeddings(user.profile);
  const candidates = await vectorDB.similaritySearch(embeddings, {
    filters: preferences,
    threshold: 0.85
  });

  return candidates.map(candidate => ({
    ...candidate,
    matchScore: calculateCompatibility(user, candidate),
    commonInterests: findSharedTopics(user.interests, candidate.interests)
  })).sort((a, b) => b.matchScore - a.matchScore);
}`,
  },
  {
    title: 'NITE PUTTER - Illuminated Golf System',
    description:
      'Professional illuminated golf cup system transforming night golf. Hardware-software integration with IoT sensors, real-time control, and mobile app for interactive putting experience. Features veteran-engineered illumination systems with patented protection technology, multi-level drainage system, smart life integration, and professional installation. The system includes core technologies like patented POLY LIGHT CASING, water-resistant sealed design, debris protection technology, easy maintenance access, and all-weather durability testing.',
    techStack: [
      'React',
      'React Native',
      'WebSocket',
      'IoT Sensors',
      'Real-time Control',
      'Mobile App',
      'Hardware Integration',
      '+5 more'
    ],
    links: [
      {
        name: 'NITE PUTTER Website',
        url: 'https://www.niteputter.com',
      },
      {
        name: 'Product Demo',
        url: 'https://www.niteputter.com/demo',
      }
    ],
    images: [
      { src: '/projects/niteputter/image.png', alt: 'NITE PUTTER Core Technologies - Illuminated Golf System' },
    ],
    code: `// WebSocket real-time hardware control
class HardwareController {
  constructor() {
    this.ws = new WebSocket('wss://api.niteputter.com/control');
    this.setupEventHandlers();
  }

  sendCommand(device, action, params) {
    const packet = {
      deviceId: device.id,
      command: action,
      parameters: params,
      timestamp: Date.now()
    };

    this.ws.send(JSON.stringify(packet));
    return this.awaitResponse(packet.timestamp);
  }
}`,
  },
  {
    title: 'LiDAR Infrastructure Safety - TxDOT Project',
    description:
      'Developed a robust pipeline for Texas Department of Transportation (TxDOT) to process Velodyne LiDAR sensor data in real time for infrastructure safety evaluation. The system segments PCAP files into fixed-time sequences and converts data to CSV format for analysis in VeloView & ParaView, ensuring lossless capture with multi-process parallelism for scalable deployment.',
    techStack: [
      'Python',
      'LiDAR Processing',
      'PCAP Analysis',
      'VeloView',
      'ParaView',
      'Real-time Data Processing',
      'Multiprocessing',
      'Computer Vision',
      'Sensor Data Analytics'
    ],
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan/LiDAR-Infrastructure-Safety-TxDOT',
      },
      {
        name: 'Research Documentation',
        // Replace with the actual URL to your documentation or report
        url: 'https://drive.google.com/your-research-document.pdf',
      }
    ],
    // Updated image list for the LiDAR project.  These point to real LiDAR
    // diagrams stored in the public folder. Each path begins with `/` so
    // Next.js serves the image from the `public` directory【804110948676109†L461-L466】.
    images: [
      { src: '/projects/lidar/pipeline_overview.png', alt: 'LiDAR pipeline overview' },
      { src: '/projects/lidar/udp_decoding.png', alt: 'LiDAR UDP packet decoding' },
      { src: '/projects/lidar/calibration_process.png', alt: 'LiDAR calibration process' },
      { src: '/projects/lidar/background_filtering.png', alt: 'LiDAR background filtering comparison' },
      { src: '/projects/lidar/dbscan_clustering.png', alt: 'LiDAR DBSCAN clustering diagram' },
      { src: '/projects/lidar/packet_stream_funnel.png', alt: 'LiDAR packet stream processing funnel' },
      { src: '/projects/lidar/pcap_recording_funnel.png', alt: 'LiDAR PCAP recording process funnel' },
    ],
    // Provide a concise code snippet to illustrate the pipeline. This will be
    // displayed in the project details component.
    code: `# Simplified example of decoding Velodyne packets and writing CSV\nimport csv, socket\nfrom velodyne_decoder import decode_packet\n\nwith open('output.csv', 'w', newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow(['x','y','z','intensity'])\n    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    sock.bind(('0.0.0.0', 2368))\n    while True:\n        packet, _ = sock.recvfrom(1206)\n        points = decode_packet(packet)\n        writer.writerows(points)`,
  },
  {
    title: 'PolyHope - Hope Speech & Sarcasm Detection',
    description:
      'A dual-task neural framework leveraging Transformers and BiLSTM for multilingual classification of hope speech and sarcasm detection. Built for social media content moderation and sentiment analytics use cases, the system integrates multi-head attention and contextual embedding fusion for enhanced accuracy in understanding nuanced human language patterns.',
    techStack: [
      'Python',
      'PyTorch',
      'Transformers',
      'BiLSTM',
      'BERT',
      'Multi-head Attention',
      'NLP',
      'Sentiment Analysis',
      'Deep Learning'
    ],
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Research Paper',
        url: 'https://github.com/ronyrahmaan',
      }
    ],
    images: [
      {
        src: '/polyhope-1.png',
        alt: 'PolyHope model architecture',
      },
      {
        src: '/polyhope-2.png',
        alt: 'Sentiment analysis results',
      },
    ],
  },
  {
    title: 'AI vs Human Text Detection Framework',
    description:
      'Designed a sophisticated classifier using entropy, perplexity, and DetectGPT-based techniques to distinguish between AI-generated and human-written text. The system was tested against ChatGPT, Claude, and other LLM outputs using adversarial samples and deployed as a live Streamlit application for academic and journalistic integrity assessment.',
    techStack: [
      'Python',
      'Transformers',
      'DetectGPT',
      'Streamlit',
      'NLP',
      'Statistical Analysis',
      'Machine Learning',
      'Text Classification'
    ],
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan',
      }
    ],
    images: [
      {
        src: '/ai-detection-1.png',
        alt: 'AI text detection interface',
      },
      {
        src: '/ai-detection-2.png',
        alt: 'Detection accuracy results',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  // Manage state for image carousel. Display one image at a time with
  // keyboard‑accessible controls. If no images are provided, the carousel
  // gracefully does not render.
  const images = projectData.images ?? [];
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {/* Image carousel: show one image at a time with arrow controls */}
      {images.length > 0 && (
        <div className="relative mx-auto w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900">
          <Image
            src={images[currentImg].src}
            alt={images[currentImg].alt}
            width={1280}
            height={720}
            // Use object-contain to prevent cropping and add padding for breathing room
            className="h-72 w-full object-contain p-4 sm:h-96"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lg font-bold text-foreground shadow-md backdrop-blur hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                ‹
              </button>
              <button
                onClick={nextImg}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lg font-bold text-foreground shadow-md backdrop-blur hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}

      {/* Code snippet section */}
      {projectData.code && (
        <div>
          <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
            Code Snippet
          </h3>
          <pre className="max-h-60 overflow-auto rounded-lg bg-neutral-100 p-4 text-xs font-mono dark:bg-neutral-800">
            <code>{projectData.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'SaaS Platform',
    title: 'Cognetik Enterprises - Golf Networking Platform',
    src: '/projects/cognetik/app-home.png',
    content: <ProjectContent project={{ title: 'Cognetik Enterprises - Golf Networking Platform' }} />,
  },
  {
    category: 'IoT System',
    title: 'NITE PUTTER - Illuminated Golf System',
    src: '/projects/niteputter/image.png',
    content: <ProjectContent project={{ title: 'NITE PUTTER - Illuminated Golf System' }} />,
  },
  {
    category: 'Research Project',
    title: 'LiDAR Infrastructure Safety - TxDOT Project',
    src: '/lidar_pipeline_overview.png',
    content: <ProjectContent project={{ title: 'LiDAR Infrastructure Safety - TxDOT Project' }} />,
  },
  {
    category: 'NLP Research',
    title: 'PolyHope - Hope Speech & Sarcasm Detection',
    src: '/c72b92aa-709e-4ecc-96d3-2acc4cf86468.png',
    content: <ProjectContent project={{ title: 'PolyHope - Hope Speech & Sarcasm Detection' }} />,
  },
  {
    category: 'AI Detection',
    title: 'AI vs Human Text Detection Framework',
    src: '/def7434c-b7d0-4783-864b-49af9b32ade1.png',
    content: <ProjectContent project={{ title: 'AI vs Human Text Detection Framework' }} />,
  },
];
