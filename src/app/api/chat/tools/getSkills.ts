import { tool } from 'ai';
import { z } from 'zod';

// Returns a comprehensive skill matrix showcasing Md A Rahman's diverse technical
// expertise, domain knowledge, and soft skills. This tool presents a multi-dimensional
// view of capabilities spanning AI/ML, software engineering, and cross-cultural competencies.
export const getSkills = tool({
  description: 'This tool shows a comprehensive matrix of technical expertise, domain knowledge, and soft skills.',
  parameters: z.object({}),
  async execute() {
    return "🧠 **AI/ML & Deep Learning**:\n" +
      "• Frameworks: PyTorch, TensorFlow, Keras, JAX, Poutyne\n" +
      "• Architectures: Transformers, CNNs, RNNs, GANs, Diffusion Models\n" +
      "• LLMs: Fine-tuning (LoRA, QLoRA), Prompt Engineering, RAG Systems\n" +
      "• Tools: Hugging Face, LangChain, OpenAI APIs, Anthropic Claude\n\n" +

      "🔬 **Research & Innovation**:\n" +
      "• Computer Vision: Medical imaging, Object detection, Image segmentation, LiDAR processing\n" +
      "• NLP: Multilingual models, Sentiment analysis, Text classification, Hope speech detection\n" +
      "• Signal Processing: Real-time sensor fusion, Data streaming, Point cloud analysis\n" +
      "• MLOps: Weights & Biases, TensorBoard, MLflow, Model versioning, A/B testing\n\n" +

      "💻 **Software Engineering**:\n" +
      "• Languages: Python (Expert), C/C++, Java, SQL, JavaScript (Learning)\n" +
      "• Backend: FastAPI, Flask, Streamlit, gRPC, REST APIs\n" +
      "• Frontend: React basics, Data visualization dashboards\n" +
      "• Databases: PostgreSQL, MongoDB, Redis, Vector DBs (Pinecone, Weaviate)\n\n" +

      "📊 **Data Engineering & Analytics**:\n" +
      "• Platforms: Apache Spark, Hadoop, Hive, Kafka\n" +
      "• Processing: Pandas, NumPy, Dask, PySpark, scikit-learn\n" +
      "• Visualization: Matplotlib, Tableau, Plotly, Seaborn\n" +
      "• Cloud: AWS (EC2, S3), GCP basics, Distributed computing\n\n" +

      "🚀 **Production & Deployment**:\n" +
      "• Containerization: Docker, Kubernetes, Docker Compose\n" +
      "• CI/CD: GitHub Actions, Jenkins basics\n" +
      "• Monitoring: Prometheus, Grafana, Custom logging\n" +
      "• Optimization: Model quantization, Pruning, Edge deployment, Inference optimization\n\n" +

      "🌍 **Domain Expertise**:\n" +
      "• Transportation & Infrastructure AI (Current focus)\n" +
      "• Medical AI & Bioinformatics (Breast cancer detection)\n" +
      "• Agricultural Technology (Family background)\n" +
      "• Financial Data Analysis\n" +
      "• Real-time Systems & IoT\n\n" +

      "🗣️ **Soft Skills & Languages**:\n" +
      "• Languages: English (Fluent), Bengali (Native), Mandarin (Conversational)\n" +
      "• Leadership: Team lead experience, Project management, Mentoring\n" +
      "• Communication: Technical writing, Presentations, Teaching, Cross-cultural collaboration\n" +
      "• Problem-Solving: Critical thinking, Creative approaches, Interdisciplinary solutions\n\n" +

      "🎯 **Currently Exploring**:\n" +
      "• Quantum ML & Neuromorphic computing\n" +
      "• Robotics integration & Autonomous systems\n" +
      "• Federated learning & Privacy-preserving AI\n" +
      "• Green AI & Sustainable computing\n" +
      "• Multimodal AI & Vision-Language models";
  },
});