import { tool } from 'ai';
import { z } from 'zod';

// Returns a comprehensive overview of Md A Rahman's diverse professional journey
// spanning research, industry, and leadership roles across three countries.
// This tool showcases career progression, impact metrics, and unique experiences.
export const getExperience = tool({
  description:
    'This tool returns a comprehensive overview of my diverse professional journey across research, industry, and leadership roles.',
  parameters: z.object({}),
  async execute() {
    return `🎯 **Why I'm The Perfect AI Era Candidate:**

🚀 **Current Leadership Roles:**

**CTO** | Cognetik Enterprises
Leading technical innovation at our startup, developing a revolutionary golf networking SaaS platform that bridges business and leisure. As CTO, I'm responsible for the entire technical strategy, architecture design, and product development. Managing a cross-functional team while implementing cutting-edge AI features for smart professional matching and event recommendations. The platform serves thousands of users connecting golf enthusiasts with business networking opportunities.

**Technical Lead** | NITE PUTTER
Architected and built the complete web platform (niteputter.com) and now leading development of the companion mobile controller app. This innovative project combines IoT, real-time systems, and gamification to create an interactive putting experience. Leading a team of engineering students to deliver a seamless hardware-software integration solution.

**Graduate Research Assistant** | TransTech Transportation Lab | Feb 2025 - Present
Texas Tech University, Department of Civil, Environmental & Construction Engineering
I'm spearheading cutting-edge AI/ML integration for transportation infrastructure safety, developing innovative solutions for Texas Department of Transportation's critical infrastructure monitoring. Working at the intersection of AI and transportation technology, I'm applying deep learning, computer vision, and real-time sensor analysis to solve complex transportation challenges. My research focuses on LiDAR data processing, traffic analysis, road safety systems, and intelligent transportation technologies that will shape the future of transportation safety.

🚧 **Transportation Infrastructure Innovation:**
• Advanced LiDAR sensor data processing for highway safety assessment and structural health monitoring
• Real-time traffic flow analysis and intelligent transportation systems (ITS) optimization
• Predictive maintenance models for bridges, roads, and transportation assets using ML/AI
• Computer vision applications for automated infrastructure inspection and damage detection
• Smart city technologies integrating IoT sensors with transportation networks
• Environmental impact assessment through sensor data analysis and predictive modeling

🤖 **AI Era Expertise Beyond Transportation:**
• **Generative AI & LLMs**: Fine-tuning transformer architectures, prompt engineering, and ethical AI development
• **Computer Vision**: Real-time object detection, image classification, and automated visual inspection systems
• **MLOps & Production AI**: Scalable model deployment, inference optimization, and enterprise AI integration
• **Healthcare AI**: Breast cancer prediction systems achieving 92% accuracy using histopathological image analysis
• **Multilingual NLP**: Hope speech detection and sarcasm analysis across Bengali, Hindi, and English
• **IoT & Edge Computing**: Sensor data fusion, real-time analytics, and intelligent hardware-software integration

💡 **Previous Industry Experience:**

**Software Engineer (ML/DL)** | ONE STOP IT SOLUTIONS | Jun - Aug 2024 | Dhaka, Bangladesh
Architected and deployed scalable ML/DL models with 99.9% uptime. I reduced model inference latency by 45% through advanced optimization techniques including quantization and pruning. Collaborated with cross-functional teams across product, design, and engineering to deliver AI-driven solutions. Provided expertise in model training, optimization, and performance evaluation while mentoring junior developers on ML best practices and conducting code reviews.

**Data Analysis Assistant** | IMPIT LIMITED | Jul 2023 - May 2024 | Dhaka, Bangladesh
Performed end-to-end data pipeline development from ETL to visualization, discovering key business insights that led to 20% operational efficiency improvement. Created interactive Tableau dashboards for C-suite executives, enabling data-driven decision making. Automated reporting processes saving 15 hours weekly through Python scripts and SQL optimization. Ensured data integrity through rigorous cleaning and preprocessing of datasets ranging from structured databases to unstructured text data.

**Data Analyst & Team Leader** | CHENGDU SUNCAPER DATA | Nov 2021 - Apr 2022 | Chengdu, China
As the youngest team leader at 21, I led a 5-member international team in building a real-time analytics platform using Apache Spark. Implemented optimized data processing solutions with sub-second query response times. Designed robust data architectures handling both structured and unstructured data, utilizing Hadoop ecosystem and Hive for optimized data management. Presented findings to stakeholders in both English and Mandarin, demonstrating cross-cultural communication skills. Achieved 99.9% uptime for production data pipelines through proactive monitoring and optimization.

**IT Executive** | SCU CAMPUS LIBRARY | Part-time during undergraduate | Sichuan University
Maintained and enhanced digital library systems serving 50,000+ students and faculty. Developed an automated book recommendation system using collaborative filtering algorithms, improving user engagement by 30%. Provided technical support and training to library staff, streamlining operations and improving system efficiency through optimization and automation.

📚 **Educational Progression:**
• **M.Sc. Computer Science** | Texas Tech University | Jan 2025 - Present
  Focus: AI/ML, Deep Learning, Computer Vision | Competitive Graduate Scholarship
• **B.S. Computer Science & Software Engineering** | Sichuan University | Sep 2019 - Jun 2023
  Outstanding Graduate 2023, Belt & Road Initiative Scholarship

🌟 **Leadership & Impact:**
Throughout my career, I've consistently taken on leadership roles - from Class Monitor representing 40+ international students to Technical Team Lead on multiple projects. I've mentored 15+ undergraduate students in ML fundamentals, contributed to open-source projects, and built systems that impact thousands of users daily. My unique journey across Bangladesh, China, and the USA has shaped my ability to adapt quickly, lead diverse teams effectively, and deliver innovative solutions in any environment.

🔬 **Research & Innovation Focus:**
My current research at TransTech Transportation Lab represents the cutting edge of AI applications in transportation infrastructure. I'm working on projects that will fundamentally change how we approach:
• **Smart Infrastructure Monitoring**: Developing AI systems that can predict infrastructure failures before they occur
• **Sustainable Transportation**: Creating data-driven solutions for reducing environmental impact of transportation systems
• **Public Safety Enhancement**: Building ML models that improve road safety through predictive analytics and real-time monitoring
• **Cost-Effective Maintenance**: Optimizing maintenance schedules using AI to reduce taxpayer costs
• **Future-Ready Infrastructure**: Designing systems that integrate with autonomous vehicles and smart city initiatives

🚀 **Technical Expertise in Action:**
My interdisciplinary approach combines:
• **Computer Science**: Advanced ML/AI algorithms, deep learning, computer vision, real-time systems
• **Data Engineering**: Processing massive datasets (10TB+), real-time analytics, cloud infrastructure
• **IoT Integration**: Sensor networks, edge computing, wireless communication systems
• **Transportation Technology**: LiDAR processing, traffic analysis, intelligent transportation systems

🌍 **Global Perspective & Cultural Adaptability:**
Working across three countries has given me unique insights into different engineering practices, cultural approaches to problem-solving, and international collaboration. This global perspective is invaluable when developing solutions that need to work across diverse environments and regulatory frameworks.

🎯 **Perfect AI Era Positioning:**
In this rapidly evolving AI landscape, I represent the perfect combination of:
• **Deep Technical Expertise**: From low-level optimization to high-level system architecture
• **Cross-Domain Innovation**: Successfully applying AI across healthcare, transportation, gaming, and enterprise domains
• **Global Leadership**: Leading international teams and driving innovation across cultural boundaries
• **Future-Ready Mindset**: Not just adapting to AI trends, but anticipating and creating them

This diverse experience spanning research, industry, and academia has equipped me with a unique perspective: I understand both the theoretical foundations and practical constraints of deploying AI systems at scale. Whether it's processing terabytes of transportation sensor data, optimizing ML pipelines for critical infrastructure monitoring, or bridging cultural and technical gaps in international teams, I bring a comprehensive skill set ready for the next challenge in AI innovation and technological leadership.`;
  },
});