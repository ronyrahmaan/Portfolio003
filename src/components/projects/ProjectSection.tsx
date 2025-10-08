import { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import ProjectModal from './ProjectModal';

// Define your projects here. This array can be extended easily when new
// projects are added. Each entry includes metadata, an image path and
// optional external links and code snippets.
const projects: Project[] = [
  {
    id: 'lidar-txdot',
    title: 'LiDAR Infrastructure Safety – TxDOT Project',
    timeframe: '2024–2025',
    summary:
      'Developed a modular, real‑time pipeline for the Texas Department of Transportation (TxDOT) that decodes Velodyne LiDAR packets into structured (x, y, z, intensity) points, calibrates vertical angles via CSV mappings, filters ground and noise points, clusters objects using DBSCAN and streams results into CSV slices for visualization in VeloView and ParaView.',
    technologies: [
      'Python',
      'LiDAR Processing',
      'PCAP Analysis',
      'VeloView',
      'ParaView',
      'Multiprocessing',
      'Real‑Time Data',
      'Sensor Data Analytics',
    ],
    images: [
      '/projects/lidar/pipeline_overview.png',
      '/projects/lidar/udp_decoding.png',
      '/projects/lidar/calibration_process.png',
      '/projects/lidar/background_filtering.png',
      '/projects/lidar/dbscan_clustering.png',
      '/projects/lidar/packet_stream_funnel.png',
      '/projects/lidar/pcap_recording_funnel.png',
    ],
    // Direct users to the public GitHub repository for code.
    github: 'https://github.com/ronyrahmaan/LiDAR-Infrastructure-Safety-TxDOT',
    // Placeholder for research documentation; replace with your actual document URL.
    docs: 'https://drive.google.com/your-research-document.pdf',
    // Include a concise code snippet to illustrate the core pipeline.
    code: `# Simplified example of decoding Velodyne packets and writing CSV\nimport csv, socket\nfrom velodyne_decoder import decode_packet\n\nwith open('output.csv', 'w', newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow(['x','y','z','intensity'])\n    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    sock.bind(('0.0.0.0', 2368))\n    while True:\n        packet, _ = sock.recvfrom(1206)\n        points = decode_packet(packet)  # returns list of (x,y,z,intensity)\n        writer.writerows(points)`,
  },
  {
    id: 'polyhope',
    title: 'PolyHope – Hope & Sarcasm Detection',
    timeframe: '2023–2024',
    summary:
      'Designed a multilingual text classification framework to detect hope speech and sarcasm across Bengali, Hindi and English corpora. Leveraged transformer and BiLSTM architectures with custom embeddings and data augmentation to achieve state‑of‑the‑art performance.',
    technologies: ['PyTorch', 'Transformers', 'BiLSTM', 'NLP', 'Data Augmentation'],
    images: ['/7f5f8159-fd98-400f-9ca0-8b7862f5abe8.png'],
    github: 'https://github.com/ronyrahmaan',
    docs: '',
  },
  {
    id: 'ai-vs-human',
    title: 'AI vs Human Text Detection',
    timeframe: '2024',
    summary:
      'Built a framework to distinguish machine‑generated text from human writing using entropy and perplexity scores combined with DetectGPT techniques. Achieved high accuracy on mixed corpora and provided a CLI tool for researchers.',
    technologies: ['Python', 'Text Classification', 'DetectGPT', 'Entropy Analysis'],
    images: ['/85ee503e-c56c-4b0c-8dd3-c4ca09442237.png'],
    github: 'https://github.com/ronyrahmaan',
    docs: '',
  },
];

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} onClick={() => handleOpen(proj)} />
        ))}
      </div>
      <ProjectModal project={activeProject} isOpen={modalOpen} onClose={handleClose} />
    </section>
  );
}