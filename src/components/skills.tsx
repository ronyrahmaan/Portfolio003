'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, PenTool, Users, Brain, Database } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Python',
        'C++',
        'Java',
        'JavaScript/TypeScript',
        'SQL',
        'R',
        'MATLAB'
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="h-5 w-5" />,
      skills: [
        'PyTorch',
        'TensorFlow',
        'scikit-learn',
        'HuggingFace Transformers',
        'OpenCV',
        'Keras',
        'XGBoost',
        'NLTK',
        'spaCy'
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Data Engineering & Tools',
      icon: <Database className="h-5 w-5" />,
      skills: [
        'Pandas',
        'NumPy',
        'Apache Spark',
        'Hadoop',
        'Hive',
        'Tableau',
        'Matplotlib',
        'Streamlit'
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Specialized Systems',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'LiDAR Processing',
        'PCAP Analysis',
        'VeloView',
        'ParaView',
        'Real-time Sensor Data',
        'Computer Vision',
        'Signal Processing'
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'Development & DevOps',
      icon: <PenTool className="h-5 w-5" />,
      skills: [
        'Git',
        'Linux',
        'Docker',
        'FastAPI',
        'Flask',
        'REST APIs',
        'Conda/venv',
        'AWS',
        'GCP'
      ],
      color: 'bg-orange-50 text-orange-600 border border-orange-200',
    },
    {
      category: 'Research & Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Research Methodology',
        'Technical Writing',
        'Data Analysis',
        'Problem-Solving',
        'Team Leadership',
        'Communication',
        'Project Management',
        'Critical Thinking'
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Technical Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;