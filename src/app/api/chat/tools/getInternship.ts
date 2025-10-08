import { tool } from 'ai';
import { z } from 'zod';

// Provides information about the types of positions and collaborations Md A Rahman
// is interested in. This should be used when the user asks about internships,
// full‑time roles or collaboration opportunities.
export const getInternship = tool({
  description:
    'This tool provides information about the types of positions and collaborations I am interested in, such as internships and full‑time roles.',
  parameters: z.object({}),
  async execute() {
    return "I'm currently open to research and industry roles in AI/ML, including generative AI, natural language processing and large language model engineering. I welcome opportunities ranging from internships to full‑time positions and collaborative research projects. I'm particularly interested in working on LLMs, multimodal systems, ML model optimization, and real‑time sensor data for smart city or robotics applications. I'm excited to collaborate with research labs, forward‑thinking startups and established companies across technology, healthcare and robotics sectors.";
  },
});