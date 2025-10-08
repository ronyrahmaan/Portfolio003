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
        "I'm Md A Rahman, a Graduate Research Assistant at Texas Tech University's TransTech Transportation Lab, where AI meets infrastructure innovation. My journey is uniquely diverse - from winning Physics Olympiads and excelling as a student-athlete in Bangladesh, to earning the Outstanding Graduate title at Sichuan University in China, to now pushing the boundaries of AI research in the USA.\n\n" +

        "Currently pursuing my M.Sc. in Computer Science with a competitive scholarship, I bring a rare combination: deep technical expertise in ML/AI, cross-cultural adaptability from living in three countries, and a multidisciplinary approach that spans from transportation engineering to medical AI diagnostics.\n\n" +

        "My work is equally diverse - I've led big data teams processing terabytes of information with Apache Spark, developed breast cancer prediction systems using computer vision, built real-time LiDAR processing pipelines for infrastructure safety, and fine-tuned LLMs for multilingual applications. This breadth comes from my belief that the best AI solutions emerge at the intersection of different domains.\n\n" +

        "Beyond the technical realm, my agricultural heritage brings a unique perspective to problem-solving, while my athletic background (swimming champion, sprinting, climbing) instills discipline and perseverance. I speak multiple languages, adapt quickly to new environments, and thrive in diverse teams.\n\n" +

        "Whether you need someone who can dive deep into transformer architectures, scale ML systems to production, or bridge the gap between research and real-world applications, I bring both the technical depth and the diverse perspective needed to innovate. Let's explore how my unique blend of experiences can transform your challenges into opportunities.",
    };
  },
});