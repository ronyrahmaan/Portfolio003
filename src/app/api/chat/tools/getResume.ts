import { tool } from 'ai';
import { z } from 'zod';

// Provides a short statement guiding users to download Md A Rahman's resume.
export const getResume = tool({
  description: 'This tool shows my resume.',
  parameters: z.object({}),
  async execute() {
    return "You can download my full CV directly from this portfolio here. If you'd like me to highlight specific experiences or skills, just let me know! What particular areas are you interested in discussing?";
  },
});