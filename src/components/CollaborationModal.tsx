'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  MapPin, 
  Code2, 
  Target, 
  Briefcase, 
  Sparkles, 
  Brain,
  ChevronRight,
  Mail,
  MessageSquare
} from 'lucide-react';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollaborationModal: React.FC<CollaborationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('full-time');

  const opportunities = {
    'full-time': {
      title: 'Full-Time Positions',
      description: 'Ready to contribute as a core team member',
      icon: <Briefcase className="w-4 h-4" />,
      content: {
        description: '🎯 Seeking senior-level positions in AI/ML engineering, technical leadership, or innovative product development roles where I can drive technological advancement.',
        idealRoles: [
          'Senior AI/ML Engineer',
          'Research Scientist',
          'Technical Lead',
          'Innovation Engineer'
        ],
        companyFocus: [
          'AI/ML-first companies',
          'Tech startups with vision',
          'Innovation labs',
          'Research institutions'
        ]
      }
    },
    'internship': {
      title: 'Internship Programs',
      description: 'Seeking intensive learning experiences',
      icon: <Sparkles className="w-4 h-4" />,
      content: {
        description: '🌟 Looking for intensive learning experiences in cutting-edge AI research, product development, or advanced engineering teams.',
        idealRoles: [
          'AI Research Internships',
          'ML Engineering Programs',
          'Innovation Lab Projects',
          'Startup Accelerators'
        ],
        companyFocus: [
          '3-6 month programs',
          'Summer intensives',
          'Part-time during studies',
          'Gap year opportunities'
        ]
      }
    },
    'research': {
      title: 'Research Projects',
      description: 'Passionate about pushing technological boundaries',
      icon: <Brain className="w-4 h-4" />,
      content: {
        description: '🔬 Passionate about contributing to breakthrough research in AI, machine learning, and emerging technologies.',
        idealRoles: [
          'Neural Network Architecture',
          'AI Safety & Ethics',
          'Computer Vision',
          'Natural Language Processing'
        ],
        companyFocus: [
          'Academic partnerships',
          'Industry research labs',
          'Open source projects',
          'Conference publications'
        ]
      }
    }
  };

  const techStack = {
    'AI/ML': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'OpenAI API'],
    'Backend': ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB'],
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    'DevOps': ['Docker', 'AWS', 'GCP', 'Kubernetes', 'CI/CD']
  };

  const techColors = {
    'AI/ML': 'bg-purple-500/20 text-purple-600 border-purple-500/30',
    'Backend': 'bg-blue-500/20 text-blue-600 border-blue-500/30',
    'Frontend': 'bg-green-500/20 text-green-600 border-green-500/30',
    'DevOps': 'bg-orange-500/20 text-orange-600 border-orange-500/30'
  };

  const handleContactClick = (type: 'email' | 'message') => {
    if (type === 'email') {
      window.open('mailto:ara02434@ttu.edu?subject=Collaboration Opportunity&body=Hi Rahman,%0A%0AI saw your AI research portfolio and I\'m interested in discussing collaboration opportunities.%0A%0ABest regards', '_blank');
    } else {
      window.open('https://www.linkedin.com/in/md-a-rahman-558519194', '_blank');
    }
    onClose();
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-neutral-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-neutral-900 p-6 border-b border-neutral-200 dark:border-neutral-700 rounded-t-3xl z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-accent border-2 border-blue-500/20 shadow-lg">
                  <img
                    src="/main.jpg"
                    alt="Md A Rahman - Professional Photo"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/landing-memojis.png";
                      (e.target as HTMLImageElement).className = "h-full w-full object-cover scale-150 translate-y-2";
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Md A Rahman</h2>
                  <p className="text-muted-foreground">AI Research Engineer & Innovation Catalyst</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-1 text-sm font-medium text-green-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  Available
                </span>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-accent rounded-2xl p-4 hover:bg-accent/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <h3 className="font-medium text-foreground">Duration</h3>
                </div>
                <p className="text-sm text-muted-foreground">Flexible commitment - from 3 months to permanent positions</p>
              </div>
              
              <div className="bg-accent rounded-2xl p-4 hover:bg-accent/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <h3 className="font-medium text-foreground">Location</h3>
                </div>
                <p className="text-sm text-muted-foreground">Remote/Hybrid preferred, open to relocation for the right opportunity</p>
              </div>
              
              <div className="bg-accent rounded-2xl p-4 hover:bg-accent/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-5 h-5 text-purple-500" />
                  <h3 className="font-medium text-foreground">Focus</h3>
                </div>
                <p className="text-sm text-muted-foreground">AI/ML Research, Full-Stack Development, Innovation</p>
              </div>
            </div>

            {/* Opportunity Types Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(opportunities).map(([key, opportunity]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-accent text-muted-foreground hover:bg-accent/70'
                    }`}
                  >
                    {opportunity.icon}
                    <span className="text-sm">{opportunity.title}</span>
                  </button>
                ))}
              </div>
              
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-accent rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  {opportunities[activeTab as keyof typeof opportunities].icon}
                  {opportunities[activeTab as keyof typeof opportunities].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {opportunities[activeTab as keyof typeof opportunities].content.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {activeTab === 'research' ? 'Research Interests:' : 'Ideal Roles:'}
                    </h4>
                    <ul className="space-y-2">
                      {opportunities[activeTab as keyof typeof opportunities].content.idealRoles.map((role, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {activeTab === 'research' ? 'Collaboration Types:' : 'Company Focus:'}
                    </h4>
                    <ul className="space-y-2">
                      {opportunities[activeTab as keyof typeof opportunities].content.companyFocus.map((focus, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ChevronRight className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* What I Bring & Goals */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-accent rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  What I Bring
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🚀 Cutting-Edge Expertise</h4>
                    <p className="text-sm text-muted-foreground">Real-world AI/ML experience from Texas Tech research, specializing in NLP, sensor data processing, and ethical AI development.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">⚡ Research & Innovation</h4>
                    <p className="text-sm text-muted-foreground">Strong foundation in experimental design, data analysis, and scientific method applied to technological innovation and problem-solving.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🧠 Academic Excellence</h4>
                    <p className="text-sm text-muted-foreground">Proven track record in research publication, academic collaboration, and knowledge sharing in the AI/ML domain.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  Goals & Vision
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🎯 Impact-Driven Development</h4>
                    <p className="text-sm text-muted-foreground">Join teams building AI solutions that solve real-world problems and create meaningful impact for users and society.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🌱 Continuous Innovation</h4>
                    <p className="text-sm text-muted-foreground">Contribute to organizations that value experimentation, learning, and staying at the forefront of technological advancement.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🤝 Collaborative Growth</h4>
                    <p className="text-sm text-muted-foreground">Build strong technical teams, mentor emerging talent, and foster cultures of knowledge sharing and innovation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="bg-accent rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Technical Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3 text-center md:text-left">{category}</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-lg text-xs font-medium border transition-all hover:scale-105 ${techColors[category as keyof typeof techColors]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-900/30">
              <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm excited to discuss how we can work together to build innovative solutions and push the boundaries of AI technology. Let's create something amazing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </button>
                <button
                  onClick={() => handleContactClick('message')}
                  className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  LinkedIn Message
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CollaborationModal;