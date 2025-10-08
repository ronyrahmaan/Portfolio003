'use client';

import React, { useState } from 'react';
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
  MessageSquare,
} from 'lucide-react';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollaborationModal: React.FC<CollaborationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'full-time' | 'internship' | 'research'>('full-time');

  const opportunities = {
    'full-time': {
      title: 'Full-Time Positions',
      description: 'Contributing as a core team member',
      icon: <Briefcase className="w-4 h-4" />,
      content: {
        description:
          'Seeking positions where I can contribute to meaningful AI projects, collaborate with talented teams, and help build solutions that solve real problems.',
        idealRoles: [
          'AI/ML Engineer',
          'Software Engineer - AI',
          'Data Scientist',
          'Research Engineer',
        ],
        companyFocus: [
          'Technology companies working on AI applications',
          'Research-focused organizations',
          'Startups building innovative solutions',
          'Companies with ethical AI practices',
        ],
      },
    },
    internship: {
      title: 'Internships',
      description: 'Learning and contributing through hands-on experience',
      icon: <Brain className="w-4 h-4" />,
      content: {
        description:
          'Looking for internship opportunities where I can learn from experienced professionals while contributing to meaningful projects.',
        idealRoles: [
          'Software Engineering Intern',
          'Data Science Intern',
          'Research Intern',
          'ML Engineering Intern',
        ],
        companyFocus: [
          'Companies with strong mentorship programs',
          'Organizations working on impactful projects',
          'Teams that value learning and growth',
          'Research-oriented environments',
        ],
      },
    },
    research: {
      title: 'Research Collaboration',
      description: 'Academic and industry research partnerships',
      icon: <Code2 className="w-4 h-4" />,
      content: {
        description:
          'Open to collaborating on research projects that advance the field of AI, particularly in areas I\'m passionate about.',
        idealRoles: [
          'Multilingual NLP research',
          'Computer vision applications',
          'Machine learning optimization',
          'AI safety and ethics',
        ],
        companyFocus: [
          'Academic research collaborations',
          'Industry research partnerships',
          'Open source contributions',
          'Conference paper collaborations',
        ],
      },
    },
  };

  const techStack = {
    'Programming': ['Python', 'JavaScript', 'TypeScript', 'R', 'SQL', 'C++'],
    'AI & ML': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
    'Web Development': ['React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'Django'],
    'Tools & Cloud': ['Git', 'Docker', 'AWS', 'Google Cloud', 'Linux', 'PostgreSQL'],
  };

  const techColors = {
    'Programming': 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
    'AI & ML': 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800',
    'Web Development': 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800',
    'Tools & Cloud': 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800',
  };

  const handleContactClick = (type: 'email' | 'message') => {
    if (type === 'email') {
      window.location.href = 'mailto:mdrahman.0@gmail.com?subject=Collaboration Opportunity&body=Hi Rahman,%0D%0A%0D%0AI would like to discuss a potential collaboration opportunity with you.%0D%0A%0D%0ABest regards,';
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
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-8 border-b border-gray-100 dark:border-gray-800 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 ring-2 ring-gray-200 dark:ring-gray-700">
                  <img
                    src="/main.jpg"
                    alt="Md A Rahman"
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/landing-memojis.png';
                      target.className = 'h-full w-full object-cover object-center scale-150 translate-y-2';
                    }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-900 flex items-center justify-center">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Let's Collaborate
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
                  AI researcher and software engineer open to new opportunities
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Timeline</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Available for full-time, internships, and research projects
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-green-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Location</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Remote, hybrid, or on-site arrangements
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-purple-500/10 rounded-xl">
                  <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Focus Areas</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                AI/ML research, software development, innovation
              </p>
            </div>
          </div>

          {/* Opportunity Types */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {Object.entries(opportunities).map(([key, opportunity]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as 'full-time' | 'internship' | 'research')}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {opportunity.icon}
                  <span>{opportunity.title}</span>
                </button>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                {opportunities[activeTab].icon}
                {opportunities[activeTab].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {opportunities[activeTab].content.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                    {activeTab === 'research' ? 'Research Areas' : 'Role Types'}
                  </h4>
                  <ul className="space-y-3">
                    {opportunities[activeTab].content.idealRoles.map((role, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                    {activeTab === 'research' ? 'Collaboration Types' : 'Organization Focus'}
                  </h4>
                  <ul className="space-y-3">
                    {opportunities[activeTab].content.companyFocus.map((focus, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Goals */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-xl">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                My Background
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning & AI</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Experience with neural networks, computer vision, and NLP projects across academic and industry settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Software Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Full-stack development experience with modern frameworks and cloud technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research & Leadership</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Academic research experience and team leadership in collaborative projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-800/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-xl">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                My Goals
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Impactful Solutions</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building technology that solves real problems and makes a positive difference.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Learning</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Growing my skills while contributing to innovative projects and research.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Working with diverse teams to tackle challenging problems together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${techColors[category as keyof typeof techColors]}`}
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              I'm always interested in discussing new opportunities and potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleContactClick('email')}
                className="flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-blue-50 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </button>
              <button
                onClick={() => handleContactClick('message')}
                className="flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                LinkedIn Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationModal;