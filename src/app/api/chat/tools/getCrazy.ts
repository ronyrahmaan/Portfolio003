import { tool } from 'ai';
import { z } from 'zod';

// Provides diverse achievements and accomplishments for Md A Rahman, showcasing
// academic excellence, athletic achievements, professional milestones, and unique
// personal attributes that make him stand out as a multi-dimensional individual.
export const getCrazy = tool({
  description:
    "This tool returns diverse achievements, awards, and unique accomplishments that showcase Rahman's multifaceted excellence.",
  parameters: z.object({}),
  async execute() {
    return "🏆 **Academic & Research Excellence**:\n" +
      "• Sichuan University 2023 Outstanding Graduate - Top 5% of graduating class\n" +
      "• Belt and Road Initiative Full Scholarship - International merit-based award\n" +
      "• Texas Tech Competitive Graduate Scholarship - Selected for academic excellence\n" +
      "• Thesis: Breast cancer prediction using ML - Contributing to medical AI advancement\n" +
      "• Consistent academic performance across two countries\n" +
      "• Class Monitor 2020 - Leadership role representing 40+ international students\n\n" +

      "🥇 **Competitions & Recognition**:\n" +
      "• State Physics Olympiad Champion (2015) - First place among 500+ participants\n" +
      "• Excellence in Debate (2017) - Top first speaker demonstrating critical thinking\n" +
      "• Best Sprinter Award (2010-2015) - 5 consecutive years of athletic dominance\n" +
      "• District Swimming Champion (2012-2015) - Endurance and competitive spirit\n" +
      "• First Climbing Competition (2014) - Always embracing new challenges\n" +
      "• Government Scholarships - Multiple awards throughout academic journey\n\n" +

      "💼 **Professional Milestones**:\n" +
      "• Led 5-member team as Big Data Analyst Team Leader at age 21\n" +
      "• Architected scalable ML pipelines serving enterprise-level applications\n" +
      "• Processing 10TB+ LiDAR data for critical infrastructure safety\n" +
      "• Reduced ML inference costs by 40-60% through optimization\n" +
      "• Built end-to-end pipelines from research concept to production\n" +
      "• Technical leader for Blood Donation Management System impacting healthcare\n\n" +

      "🌏 **International & Cultural Impact**:\n" +
      "• Lived and excelled in 3 countries (Bangladesh → China → USA)\n" +
      "• Fluent in 3 languages - Bengali, English, Mandarin (conversational)\n" +
      "• Collaborated with diverse teams across 5+ time zones\n" +
      "• Successfully adapted to different educational and work cultures\n" +
      "• Mentored 15+ international students in ML fundamentals\n\n" +

      "🎨 **Unique Differentiators**:\n" +
      "• Agricultural heritage - Bringing sustainability perspective to technology\n" +
      "• Athletic discipline - Applying sports mindset to coding marathons\n" +
      "• Aviation enthusiast - Can identify aircraft by silhouettes (pattern recognition skills)\n" +
      "• Community service - Led blood donation system development\n" +
      "• Creative problem-solving - Combining traditional knowledge with modern AI\n\n" +

      "🚀 **Personal Growth Journey**:\n" +
      "From a small town in Bangladesh with agricultural roots, to international universities in China, " +
      "to cutting-edge AI research in the USA - my journey represents resilience, adaptability, and " +
      "continuous learning. Each challenge, from mastering Mandarin to leading technical teams, has " +
      "shaped my unique perspective on innovation. The combination of athletic discipline, academic " +
      "excellence, and cultural diversity makes me approach problems from angles others might miss.";
  },
});