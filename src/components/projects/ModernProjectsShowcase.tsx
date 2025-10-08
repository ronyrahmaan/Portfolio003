'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Code2, Globe, Github as GithubIcon, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  mainImage: string;
  images?: { src: string; alt: string }[];
  gradient: string;
  techStack: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  codeSnippet?: string;
}

const projects: Project[] = [
  {
    id: 'roadside-lidar',
    title: 'Roadside LiDAR Traffic Safety',
    subtitle: 'Python Visualization Framework',
    description: 'Interactive Python framework for LiDAR data visualization and traffic safety analysis. Features real-time 3D point cloud processing, DBSCAN clustering, and noise filtering with GUI.',
    longDescription: 'A comprehensive Python-based framework for processing and visualizing roadside LiDAR data for traffic safety analysis. The system features an interactive GUI built with tkinter and ttkbootstrap, enabling users to load, filter, and visualize LiDAR point cloud data. Key capabilities include standard deviation-based noise filtering, DBSCAN clustering for object detection, 3D visualization of individual and multiple frames, and frame animation for temporal analysis. The framework supports dynamic point cloud representation with a superhero-themed dark mode interface, making complex LiDAR data analysis accessible and intuitive.',
    mainImage: '/projects/roadside-lidar/3d_visualization_1.png',
    images: [
      { src: '/projects/roadside-lidar/gui_interface.png', alt: 'Interactive GUI interface with superhero theme' },
      { src: '/projects/roadside-lidar/3d_visualization_1.png', alt: '3D point cloud visualization - Traffic scene 1' },
      { src: '/projects/roadside-lidar/3d_visualization_2.png', alt: '3D point cloud visualization - Traffic scene 2' },
      { src: '/projects/roadside-lidar/3d_visualization_3.png', alt: '3D point cloud visualization - Traffic scene 3' },
      { src: '/projects/roadside-lidar/clustering_view.png', alt: 'DBSCAN clustering visualization' },
      { src: '/projects/roadside-lidar/data_processing.png', alt: 'Data processing and filtering interface' },
    ],
    gradient: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
    techStack: ['Python', 'tkinter', 'ttkbootstrap', 'pandas', 'numpy', 'matplotlib', 'scikit-learn', 'DBSCAN', '3D Visualization', 'Point Cloud Processing'],
    links: {
      github: 'https://github.com/ronyrahmaan/Roadside-LiDAR-Based-Traffic-Safety-Analysis-A-Python-Framework-for-Data-Visualization',
    },
    codeSnippet: `# DBSCAN Clustering for LiDAR Point Cloud
from sklearn.cluster import DBSCAN
import numpy as np

def cluster_lidar_points(points, eps=0.5, min_samples=10):
    """Apply DBSCAN clustering to LiDAR point cloud data"""
    # Filter noise using standard deviation
    std_filter = np.std(points, axis=0)
    filtered_points = points[np.all(np.abs(points - np.mean(points, axis=0))
                                   < 3 * std_filter, axis=1)]

    # Apply DBSCAN clustering
    clustering = DBSCAN(eps=eps, min_samples=min_samples).fit(filtered_points)
    labels = clustering.labels_

    # Visualize clusters in 3D
    fig = plt.figure(figsize=(12, 8))
    ax = fig.add_subplot(111, projection='3d')
    ax.scatter(filtered_points[:, 0], filtered_points[:, 1],
              filtered_points[:, 2], c=labels, cmap='viridis')
    return labels, filtered_points`
  },
  {
    id: 'lidar',
    title: 'LiDAR Infrastructure',
    subtitle: 'TxDOT Safety Project',
    description: 'Real-time pipeline processing Velodyne sensor data for infrastructure safety. Handles 10TB+ data with custom calibration, DBSCAN clustering, and multi-process parallelism.',
    longDescription: 'Developed a robust real-time pipeline for Texas Department of Transportation to process Velodyne VLP-32C LiDAR sensor data for infrastructure safety evaluation. The system segments PCAP files into fixed-time sequences, converts data to CSV format for analysis in VeloView & ParaView, ensuring lossless capture with multi-process parallelism for scalable deployment. Key innovations include custom calibration mapping, DBSCAN clustering for object segmentation, and a hierarchical point-cloud processing stack.',
    mainImage: '/projects/lidar/pipeline_overview.png',
    images: [
      { src: '/projects/lidar/pipeline_overview.png', alt: 'LiDAR pipeline overview' },
      { src: '/projects/lidar/udp_decoding.png', alt: 'LiDAR UDP packet decoding' },
      { src: '/projects/lidar/calibration_process.png', alt: 'LiDAR calibration process' },
      { src: '/projects/lidar/background_filtering.png', alt: 'LiDAR background filtering comparison' },
      { src: '/projects/lidar/dbscan_clustering.png', alt: 'LiDAR DBSCAN clustering diagram' },
      { src: '/projects/lidar/packet_stream_funnel.png', alt: 'LiDAR packet stream processing funnel' },
      { src: '/projects/lidar/pcap_recording_funnel.png', alt: 'LiDAR PCAP recording process funnel' },
    ],
    gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
    techStack: ['Python', 'CUDA', 'Computer Vision', 'Real-time Processing', 'Data Processing', 'PCAP Analysis', 'VeloView', 'ParaView', 'Multiprocessing'],
    links: {
      github: 'https://github.com/ronyrahmaan/lidar-safety'
    },
    codeSnippet: `# Simplified example of decoding Velodyne packets and writing CSV
import csv, socket
from velodyne_decoder import decode_packet

with open('output.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['x','y','z','intensity'])
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind(('0.0.0.0', 2368))
    while True:
        packet, _ = sock.recvfrom(1206)
        points = decode_packet(packet)
        writer.writerows(points)`
  },
  {
    id: 'polyhope',
    title: 'PolyHope',
    subtitle: 'Deep Transformer Framework',
    description: 'State-of-the-art dual-task NLP framework for hope speech detection and multiclass emotion classification. Achieved 80% F1 score using RoBERTa transformers at RaNLP 2025 shared task.',
    longDescription: 'PolyHope is a sophisticated deep learning framework developed for the PolyHope-M Shared Task at RaNLP 2025. The system performs dual-task classification: binary hope speech detection (Hope vs. Not Hope) and multiclass emotion categorization (Realistic Hope, Unrealistic Hope, Generalized Hope, Sarcasm, Not Hope). Leveraging advanced transformer architectures including BERT and RoBERTa, alongside traditional ML models, the framework achieved outstanding performance with RoBERTa reaching 80.02% Macro F1 score for binary classification and 77.52% for multiclass tasks. The project showcases comprehensive error analysis, ablation studies, and cross-validation strategies.',
    mainImage: '/projects/polyhope/confusion_matrix_roberta_joint_multiclass.png',
    images: [
      { src: '/projects/polyhope/confusion_matrix_roberta_joint_multiclass.png', alt: 'RoBERTa multiclass confusion matrix - 77.52% F1 score' },
      { src: '/projects/polyhope/dl_model_f1_comparison.png', alt: 'Deep learning models F1 comparison - RoBERTa leads with 80.02%' },
      { src: '/projects/polyhope/class_distribution_binary.png', alt: 'Binary class distribution - Hope vs Not Hope' },
      { src: '/projects/polyhope/class_distribution_multiclass.png', alt: 'Multiclass distribution - 5 emotion categories' },
      { src: '/projects/polyhope/confusion_matrix_bert_binary.png', alt: 'BERT binary classification confusion matrix' },
      { src: '/projects/polyhope/confusion_matrix_bert_finetuned_sarcasm.png', alt: 'BERT fine-tuned for sarcasm detection' },
      { src: '/projects/polyhope/confusion_matrix_cnn_binary.png', alt: 'CNN binary classification results' },
      { src: '/projects/polyhope/confusion_matrix_cnn_multiclass.png', alt: 'CNN multiclass classification performance' },
      { src: '/projects/polyhope/confusion_matrix_lstm_binary.png', alt: 'LSTM binary classification metrics' },
      { src: '/projects/polyhope/confusion_matrix_lstm_multiclass.png', alt: 'LSTM multiclass confusion matrix' },
      { src: '/projects/polyhope/confusion_matrix_logistic_regression.png', alt: 'Logistic Regression baseline performance' },
      { src: '/projects/polyhope/confusion_matrix_random_forest.png', alt: 'Random Forest classification results' },
      { src: '/projects/polyhope/confusion_matrix_xgboost.png', alt: 'XGBoost model performance' },
      { src: '/projects/polyhope/lstm_model_comparison.png', alt: 'LSTM architecture comparison study' },
      { src: '/projects/polyhope/top_tfidf_features.png', alt: 'Top TF-IDF features for hope speech' },
    ],
    gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
    techStack: ['PyTorch', 'RoBERTa', 'BERT', 'Transformers', 'HuggingFace', 'XGBoost', 'LSTM', 'CNN', 'Scikit-learn', 'NLP', 'Deep Learning'],
    links: {
      github: 'https://github.com/ronyrahmaan/PolyHope-Deep-Transformer-Framework',
    },
    codeSnippet: `# RoBERTa Model for Hope Speech Detection
from transformers import RobertaForSequenceClassification, RobertaTokenizer
import torch

class HopeSpeechClassifier:
    def __init__(self, model_name='roberta-base', num_labels=2):
        self.tokenizer = RobertaTokenizer.from_pretrained(model_name)
        self.model = RobertaForSequenceClassification.from_pretrained(
            model_name, num_labels=num_labels
        )

    def predict(self, text):
        inputs = self.tokenizer(text, return_tensors='pt',
                                truncation=True, padding=True)
        with torch.no_grad():
            outputs = self.model(**inputs)
            predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
        return predictions

# Binary Classification: 80.02% F1 Score
# Multiclass: 77.52% F1 Score`
  },
  {
    id: 'cognetik',
    title: 'Cognetik',
    subtitle: 'Golf Networking App',
    description: 'Revolutionary SaaS platform merging professional networking with golf. Features AI-driven matching algorithms, real-time event coordination, and premium business development tools.',
    longDescription: 'Cognetik is a cutting-edge golf networking platform that revolutionizes how professionals connect through the sport. The app features an intuitive mobile interface showing user stats (connections, events, messages, golf rounds), AI-powered connection matching with golf legends and professionals, premium event management for exclusive golf networking opportunities, real-time messaging system, and comprehensive member profiles with handicap tracking. The platform seamlessly integrates business networking with golf, creating meaningful connections on and off the course.',
    mainImage: '/projects/cognetik/app-home.png',
    images: [
      { src: '/projects/cognetik/app-home.png', alt: 'Cognetik app home dashboard showing stats and featured events' },
      { src: '/projects/cognetik/network-tab.png', alt: 'Network tab with connection requests from golf professionals' },
      { src: '/projects/cognetik/events-page.png', alt: 'Events page showing Masters Week and premium tournaments' },
      { src: '/projects/cognetik/messages.png', alt: 'Messages interface with golf legends and courses' },
      { src: '/projects/cognetik/profile.png', alt: 'User profile and handicap tracking' },
    ],
    gradient: 'from-emerald-500/20 via-green-500/20 to-teal-500/20',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'WebSocket', 'AI/ML', 'Microservices', 'Push Notifications'],
    links: {
      live: 'https://cognetik.io',
      github: 'https://github.com/ronyrahmaan'
    },
    featured: true,
    codeSnippet: `// AI-powered golf professional matching
interface GolfNetworkMatch {
  professional: User;
  matchScore: number;
  commonInterests: string[];
  handicapDiff: number;
}

const matchGolfProfessionals = async (user: User): Promise<GolfNetworkMatch[]> => {
  const userProfile = await generateGolfProfile(user);

  // Find professionals with similar interests and skill level
  const matches = await db.professionals
    .filter(p => Math.abs(p.handicap - user.handicap) < 5)
    .map(professional => ({
      professional,
      matchScore: calculateGolfCompatibility(user, professional),
      commonInterests: findCommonGolfInterests(user, professional),
      handicapDiff: Math.abs(professional.handicap - user.handicap)
    }))
    .sort((a, b) => b.matchScore - a.matchScore);

  return matches.slice(0, 10); // Top 10 matches
}`
  },
  {
    id: 'niteputter',
    title: 'NITE PUTTER',
    subtitle: 'Illuminated Golf System',
    description: 'Professional illuminated golf cup system transforming night golf. Hardware-software integration with IoT sensors, real-time control, and mobile app for interactive putting experience.',
    longDescription: 'NITE PUTTER is an innovative illuminated golf cup system designed to transform the night golf experience. As Technical Lead, I architected and developed the complete web platform and now leading the mobile controller app development. The system features professional-grade LED illumination, IoT sensor integration for ball detection, WebSocket-based real-time hardware control, interactive mobile app for game modes and scoring, and seamless hardware-software communication. The platform enables golfers to practice and play in low-light conditions with enhanced visibility and gamification features.',
    mainImage: '/projects/niteputter/image.png',
    images: [
      { src: '/projects/niteputter/image.png', alt: 'NITE PUTTER Core Technologies - Illuminated Golf System' },
    ],
    gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
    techStack: ['React', 'React Native', 'WebSocket', 'IoT Sensors', 'Hardware Integration', 'LED Systems', 'Real-time Control', 'Mobile Development'],
    links: {
      live: 'https://www.niteputter.com',
      demo: 'https://www.niteputter.com'
    },
    featured: true,
    codeSnippet: `// Real-time LED control system for NITE PUTTER
class NitePutterController {
  constructor() {
    this.ws = new WebSocket('wss://api.niteputter.com/control');
    this.ledStates = new Map();
  }

  async activateCup(cupId, options = {}) {
    const command = {
      type: 'ACTIVATE_CUP',
      cupId,
      settings: {
        brightness: options.brightness || 100,
        color: options.color || '#00FF00',
        pattern: options.pattern || 'solid',
        duration: options.duration || null
      },
      timestamp: Date.now()
    };

    this.ws.send(JSON.stringify(command));
    await this.updateLEDState(cupId, command.settings);
  }

  detectBallEntry(sensorData) {
    // Process IoT sensor data for ball detection
    return sensorData.proximity < THRESHOLD &&
           sensorData.velocity > MIN_VELOCITY;
  }
}`
  },
  {
    id: 'ai-detect',
    title: 'AI Text Detector',
    subtitle: 'Advanced Content Authentication System',
    description: 'Sophisticated multi-model ensemble classifier distinguishing AI-generated from human text using entropy analysis, perplexity metrics, and DetectGPT techniques. Achieves 94% accuracy across multiple domains.',
    longDescription: 'Advanced AI text detection system implementing state-of-the-art techniques for identifying machine-generated content. The system combines multiple detection methodologies including statistical entropy analysis, perplexity-based detection using GPT-2 and RoBERTa models, DetectGPT zero-shot detection approach, and stylometric feature extraction. Built with a focus on robustness against adversarial attacks and domain adaptation, the detector maintains high accuracy across diverse text sources including academic papers, social media, and creative writing.',
    mainImage: '/def7434c-b7d0-4783-864b-49af9b32ade1.png',
    images: [
      { src: '/def7434c-b7d0-4783-864b-49af9b32ade1.png', alt: 'AI Text Detector Dashboard' },
    ],
    gradient: 'from-red-500/20 via-pink-500/20 to-purple-500/20',
    techStack: ['Python', 'Transformers', 'BERT', 'RoBERTa', 'GPT-2', 'Statistical Analysis', 'DetectGPT', 'Streamlit', 'FastAPI'],
    links: {
      github: 'https://github.com/ronyrahmaan/ai-text-detector',
      demo: 'https://ai-text-detector.streamlit.app'
    },
    codeSnippet: `# AI Text Detection Engine
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import numpy as np
from scipy.stats import entropy

class AITextDetector:
    def __init__(self):
        self.models = {
            'roberta': AutoModelForSequenceClassification.from_pretrained('roberta-base'),
            'bert': AutoModelForSequenceClassification.from_pretrained('bert-base-uncased')
        }
        self.tokenizers = {
            'roberta': AutoTokenizer.from_pretrained('roberta-base'),
            'bert': AutoTokenizer.from_pretrained('bert-base-uncased')
        }

    def calculate_perplexity(self, text, model_name='gpt2'):
        """Calculate perplexity using language model"""
        model = GPT2LMHeadModel.from_pretrained(model_name)
        tokenizer = GPT2Tokenizer.from_pretrained(model_name)

        inputs = tokenizer(text, return_tensors='pt')
        with torch.no_grad():
            outputs = model(**inputs, labels=inputs['input_ids'])
        return torch.exp(outputs.loss).item()

    def entropy_analysis(self, text):
        """Analyze text entropy for AI detection"""
        char_freq = {}
        for char in text:
            char_freq[char] = char_freq.get(char, 0) + 1

        probs = np.array(list(char_freq.values())) / len(text)
        return entropy(probs)

    def detect(self, text):
        """Main detection pipeline"""
        perplexity_score = self.calculate_perplexity(text)
        entropy_score = self.entropy_analysis(text)

        # Ensemble prediction from multiple models
        predictions = []
        for model_name in self.models:
            inputs = self.tokenizers[model_name](text, return_tensors='pt', truncation=True)
            outputs = self.models[model_name](**inputs)
            predictions.append(torch.softmax(outputs.logits, dim=-1).numpy())

        # Combine signals for final prediction
        final_score = self.ensemble_predict(predictions, perplexity_score, entropy_score)
        return {
            'is_ai_generated': final_score > 0.5,
            'confidence': float(final_score),
            'perplexity': perplexity_score,
            'entropy': entropy_score
        }
`
  },
  {
    id: 'more',
    title: 'Additional Projects',
    subtitle: '15+ More Projects',
    description: 'This showcases only a selection from my extensive portfolio. My complete work includes 15+ additional projects across various AI/ML domains.',
    longDescription: 'Beyond the featured projects, my portfolio encompasses a diverse range of work including: real-time video analytics systems, distributed machine learning pipelines, autonomous navigation algorithms, financial forecasting models, healthcare AI applications, agricultural yield prediction systems, and various research prototypes. Each project demonstrates deep technical expertise and practical problem-solving across different domains. Visit my GitHub for the complete collection of open-source contributions and research implementations.',
    mainImage: '',
    gradient: 'from-gray-500/20 via-slate-500/20 to-zinc-500/20',
    techStack: ['Computer Vision', 'Reinforcement Learning', 'MLOps', 'Distributed Systems', 'Edge Computing', 'Kubernetes', 'Data Engineering', 'TensorFlow'],
    links: {
      github: 'https://github.com/ronyrahmaan'
    }
  }
];

export default function ModernProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedProjectData = projects.find(p => p.id === selectedProject);
  const projectImages = selectedProjectData?.images || [];

  const nextImage = () => {
    if (projectImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }
  };

  const prevImage = () => {
    if (projectImages.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    }
  };

  return (
    <div className="w-full min-h-screen py-12 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <span className="text-sm font-medium text-purple-500 uppercase tracking-wider">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4">
          Projects & Research
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Exploring the intersection of AI, innovation, and real-world impact through cutting-edge projects
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => {
                setSelectedProject(project.id);
                setCurrentImageIndex(0); // Reset image index when opening
              }}
              className={`group relative cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-500">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full"
                  >
                    {project.mainImage && (
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full text-xs font-medium text-purple-600 dark:text-purple-400">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-6 z-20">
                    <p className="text-white/80 text-sm font-medium mb-1">{project.subtitle}</p>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-4 h-4" />
                        Live
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Code2 className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    x: hoveredProject === project.id ? 0 : -20,
                  }}
                  className="absolute top-6 right-6 z-30"
                >
                  <div className="p-2 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full">
                    <ArrowUpRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Modal for Selected Project */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Modal Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {selectedProjectData.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                    {selectedProjectData.title}
                  </h3>
                </div>

                {/* Image Carousel (if images exist) */}
                {projectImages.length > 0 && (
                  <div className="relative mb-8 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <div className="relative h-[400px]">
                      <Image
                        src={projectImages[currentImageIndex].src}
                        alt={projectImages[currentImageIndex].alt}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Image Navigation */}
                    {projectImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {projectImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? 'w-8 bg-purple-600 dark:bg-purple-400'
                                  : 'bg-gray-400 dark:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">About</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProjectData.longDescription || selectedProjectData.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippet (if available) */}
                {selectedProjectData.codeSnippet && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Code Example</h4>
                    <pre className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        {selectedProjectData.codeSnippet}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Links */}
                <div className="flex items-center gap-4">
                  {selectedProjectData.links.live && (
                    <a
                      href={selectedProjectData.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      View Live
                    </a>
                  )}
                  {selectedProjectData.links.github && (
                    <a
                      href={selectedProjectData.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-colors"
                    >
                      <GithubIcon className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  {selectedProjectData.links.demo && (
                    <a
                      href={selectedProjectData.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors"
                    >
                      <Code2 className="w-5 h-5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}