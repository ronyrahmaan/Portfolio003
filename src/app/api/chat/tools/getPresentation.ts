import { tool } from 'ai';
import { z } from 'zod';

// Provides a comprehensive, diverse introduction for Md A Rahman that showcases
// his unique international journey, technical expertise, and multifaceted background.
// This tool presents Rahman as a well-rounded AI researcher with depth and breadth.
export const getPresentation = tool({
  description:
    'This tool returns a comprehensive personal introduction of Md A Rahman, highlighting his diverse background and expertise.',
  parameters: z.object({}),
  async execute() {
    return {
      presentation:
        "Hey 👋\n\nI'm Rahman, a passionate AI Researcher and Graduate Research Assistant at Texas Tech University, specializing in applied machine learning, natural language processing, and real-time sensor data (LiDAR) systems. My work lies at the intersection of AI and societal impact, with hands-on experience building scalable, research-driven applications.\n\n" +

        "I enjoy blending theory with practical execution - from developing transformer-based models for multilingual applications to building real-time LiDAR processing pipelines for infrastructure safety. My experience spans across domains: transportation engineering, medical AI diagnostics, and generative AI technologies.\n\n" +

        "Here, you'll find insights into my research projects, professional experiences, and the skills I've developed throughout my journey. I'm passionate about collaborating with forward-thinking individuals and organizations to tackle global challenges using intelligent systems.\n\n" +

        "Feel free to explore my projects or ask any questions about my work or potential collaboration opportunities. What specific aspect of AI research interests you most?",
    };
  },
});