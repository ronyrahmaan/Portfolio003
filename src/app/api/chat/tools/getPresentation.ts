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
        "Hello there! 👋\n\nI'm Md A Rahman, currently pursuing my Master's in Computer Science at Texas Tech University while working as a Graduate Research Assistant. My research focuses on cutting-edge applications of AI, particularly in machine learning, natural language processing, and sensor data analysis.\n\n" +

        "My current work involves developing innovative solutions for real-world challenges - from creating multilingual transformer models to processing real-time LiDAR data for infrastructure monitoring. I'm particularly excited about the potential of AI to solve complex societal problems.\n\n" +

        "Through this interactive portfolio, you can learn more about my research projects, technical skills, and professional journey. I'm always eager to discuss AI research, explore collaboration opportunities, or share insights about emerging technologies.\n\n" +

        "What would you like to know more about? Feel free to ask about my projects, research interests, or anything else that comes to mind!",
    };
  },
});