import { tool } from 'ai';
import { z } from 'zod';

// Returns comprehensive contact information and collaboration opportunities.
// This tool provides multiple ways to connect with Md A Rahman and outlines
// specific areas for potential collaboration, research partnerships, and engagement.
export const getContact = tool({
  description: 'This tool shows comprehensive contact information and collaboration opportunities.',
  parameters: z.object({}),
  async execute() {
    return "🌐 **Let's Connect Globally:**\n\n" +

      "📧 **Direct Contact:**\n" +
      "• Email: ara02434@ttu.edu\n" +
      "• Phone: (806) 239-9112\n" +
      "• Location: Lubbock, Texas 79415 (Open to relocation)\n" +
      "• Time Zone: CST (Flexible for global calls)\n\n" +

      "🔗 **Professional Networks:**\n" +
      "• LinkedIn: linkedin.com/in/md-a-rahman-558519194\n" +
      "• GitHub: github.com/ronyrahmaan\n" +
      "• Google Scholar: [Publications coming soon]\n" +
      "• Personal Website: mdrahman-ai.vercel.app\n\n" +

      "🤝 **Collaboration Opportunities:**\n\n" +

      "**Research Partnerships:**\n" +
      "• AI/ML in transportation and infrastructure safety\n" +
      "• Medical imaging and diagnostic AI systems\n" +
      "• Multilingual NLP and social computing\n" +
      "• Cross-disciplinary innovation projects\n" +
      "• Real-time sensor fusion and IoT applications\n\n" +

      "**Industry Engagement:**\n" +
      "• ML/AI consulting (short-term and long-term projects)\n" +
      "• Technical advisory for startups and scale-ups\n" +
      "• Production ML system architecture and optimization\n" +
      "• Performance optimization and cost reduction strategies\n" +
      "• POC development and rapid prototyping\n\n" +

      "**Academic Collaboration:**\n" +
      "• Joint research publications and paper co-authorship\n" +
      "• Conference presentations and workshop participation\n" +
      "• Guest lectures and seminar presentations\n" +
      "• Student mentorship and guidance programs\n" +
      "• Cross-institutional research initiatives\n\n" +

      "**Open Source & Community:**\n" +
      "• Contributing to ML/AI open-source projects\n" +
      "• Building tools and frameworks for researchers\n" +
      "• Knowledge sharing through technical blogs\n" +
      "• Documentation and tutorial creation\n" +
      "• Code review and community support\n\n" +

      "💼 **Currently Seeking:**\n" +
      "• Summer 2025 internships at leading AI/ML companies\n" +
      "• Research collaborations in emerging AI fields\n" +
      "• Speaking opportunities at conferences and podcasts\n" +
      "• Part-time consulting in ML/production systems\n" +
      "• Mentorship from industry leaders and researchers\n\n" +

      "🗓️ **Availability:**\n" +
      "• Response Time: Within 24 hours (usually same day)\n" +
      "• Meeting Availability: Flexible, including evenings/weekends\n" +
      "• Project Start: Immediate for part-time, Summer 2025 for full-time\n" +
      "• Time Zones: Happy to accommodate global schedules\n\n" +

      "🌍 **Global Mindset:**\n" +
      "Having lived in Bangladesh, China, and USA, I bring:\n" +
      "• Cultural sensitivity and adaptability\n" +
      "• Multilingual communication (English, Bengali, Mandarin)\n" +
      "• Global perspective on technology challenges\n" +
      "• Experience working across time zones and cultures\n" +
      "• Understanding of diverse market needs\n\n" +

      "📝 **Before You Reach Out:**\n" +
      "Feel free to ask about:\n" +
      "• Technical deep-dives into my projects\n" +
      "• Collaboration on your AI/ML challenges\n" +
      "• Mentorship or guidance in ML/AI journey\n" +
      "• Speaking at your event or podcast\n" +
      "• Contributing to your open-source project\n" +
      "• Research partnership opportunities\n\n" +

      "I'm passionate about using AI to create positive impact and solve real-world problems. Whether you're a researcher pushing boundaries, a startup building the future, or an enterprise optimizing operations - if you're working on something meaningful, I want to hear from you.\n\n" +

      "Let's build something extraordinary together! 🚀";
  },
});