// Portfolio Data - S M Shezan Ahmed

export const personalInfo = {
  name: "S M Shezan Ahmed",
  title: "AI/ML Engineer | Full-Stack Developer | Researcher",
  tagline: "Building production AI systems that solve real-world problems",
  email: "shezan.ahamed99@gmail.com",
  phone: "+86 156 4922 0380",
  location: "Zhengzhou, China",
  github: "https://github.com/Shezan57",
  linkedin: "https://linkedin.com/in/smshezanahmed",
  resumeLink: "/CV_Shezan_Ahmed.pdf",
};

export const stats = [
  { label: "Projects Completed", value: "9+" },
  { label: "Research Papers", value: "2" },
  { label: "Years Experience", value: "2+" },
  { label: "Technologies", value: "25+" },
];

export const about = {
  description: `AI/ML Engineer with hands-on experience building production-ready systems across Computer Vision, 
  NLP, and MLOps. Published researcher with expertise in deploying end-to-end machine learning pipelines on AWS. 
  Passionate about creating AI solutions that deliver measurable real-world impact.`,
  highlights: [
    "Published 2 peer-reviewed research papers on AI applications",
    "Built production MLOps pipeline with AWS, Docker & CI/CD",
    "Developed CV systems achieving 93.6% mAP in safety compliance",
    "Experience with LangChain, LangGraph & modern LLM frameworks",
  ],
};

export const skills = {
  "AI & Machine Learning": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenCV",
    "Hugging Face",
    "YOLO",
  ],
  "LLM & NLP": [
    "LangChain",
    "LangGraph",
    "OpenAI API",
    "RAG",
    "Word2Vec",
    "Transformers",
  ],
  "MLOps & Cloud": [
    "AWS (S3, EC2, ECR)",
    "Docker",
    "GitHub Actions",
    "MLflow",
    "DVC",
    "Kubernetes",
  ],
  "Programming": [
    "Python",
    "JavaScript",
    "Java",
    "C/C++",
    "SQL",
  ],
  "Web Development": [
    "React",
    "Next.js",
    "FastAPI",
    "Flask",
    "Tailwind CSS",
    "Streamlit",
  ],
  "Tools & Platforms": [
    "Git/GitHub",
    "Linux",
    "MongoDB",
    "PostgreSQL",
    "VS Code",
    "Jupyter",
  ],
};

export const projects = [
  {
    id: 1,
    title: "MLOps Insurance Prediction",
    category: "MLOps",
    description: "Production-grade end-to-end MLOps pipeline for vehicle insurance premium prediction with automated CI/CD deployment on AWS.",
    image: "/projects/mlops.png",
    tech: ["Python", "AWS", "Docker", "MongoDB", "GitHub Actions", "Flask"],
    highlights: [
      "Full CI/CD pipeline with GitHub Actions",
      "Model registry on Amazon S3",
      "Data ingestion from MongoDB Atlas",
      "Containerized deployment on EC2",
    ],
    github: "https://github.com/Shezan57/MLOps-Insurance-Prediction-Full-Project",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "PPE Safety Compliance System",
    category: "Computer Vision",
    description: "AI-powered construction safety system using YOLOv11n for real-time PPE violation detection with automated OSHA-compliant report generation.",
    image: "/projects/safety.png",
    tech: ["YOLOv11", "LangChain", "GPT-4", "OpenCV", "Flask", "ReportLab"],
    highlights: [
      "93.6% mAP@0.5 detection accuracy",
      "52% reduction in safety violations",
      "Automated PDF report generation",
      "Real-time CCTV monitoring",
    ],
    github: "https://github.com/Shezan57/Computer-Vision",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "MentalSupport AI Therapist",
    category: "AI Agent",
    description: "AI-powered mental health assistant with emergency support, therapist locator, and WhatsApp integration using MedGemma and LangGraph.",
    image: "/projects/mental.png",
    tech: ["LangGraph", "MedGemma", "FastAPI", "Twilio", "Streamlit", "Groq"],
    highlights: [
      "Emergency call triggering via Twilio",
      "Multi-channel: Web + WhatsApp",
      "Google Maps therapist locator",
      "Context-aware agent system",
    ],
    github: "https://github.com/Shezan57/MentalSupport-V2",
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: "AI Research Agent",
    category: "AI Agent",
    description: "Autonomous research assistant that searches arXiv, fetches papers, and generates structured literature reviews as LaTeX PDFs.",
    image: "/projects/research.png",
    tech: ["LangChain", "FAISS", "arXiv API", "OpenAI", "PyMuPDF", "Python"],
    highlights: [
      "Automated literature discovery",
      "PDF parsing & summarization",
      "Vector store knowledge base",
      "LaTeX report generation",
    ],
    github: "https://github.com/Shezan57/AI-Researcher-Agent",
    demo: null,
    featured: true,
  },
  {
    id: 5,
    title: "Video-to-SOP Generator",
    category: "Multimodal AI",
    description: "Convert training videos into professional SOP manuals using Gemini 1.5 Flash and Whisper. 4-min video → Complete SOP in 2 minutes.",
    image: "/projects/sop.png",
    tech: ["Gemini 1.5", "Whisper", "FFmpeg", "Python", "PDF Generation"],
    highlights: [
      "15x faster with FFmpeg processing",
      "Timestamped audio transcription",
      "Professional PDF output",
      "Auto safety notes extraction",
    ],
    github: "https://github.com/Shezan57/Video-to-SOP-Generator",
    demo: null,
    featured: false,
  },
  {
    id: 6,
    title: "License Plate Detection",
    category: "Computer Vision",
    description: "Real-time vehicle license plate detection and recognition system with automated database logging for traffic management.",
    image: "/projects/license.png",
    tech: ["YOLOv10", "PaddleOCR", "SQLite", "OpenCV", "Python"],
    highlights: [
      "86.7% mAP@0.5 accuracy",
      "100% precision at 0.899 confidence",
      "95% recall rate",
      "Automated SQL database logging",
    ],
    github: "https://github.com/Shezan57/Computer-Vision/tree/main/License-Plate-Extraction-Save-Data-to-SQL-Database",
    demo: null,
    featured: false,
  },
  {
    id: 7,
    title: "Python Q&A Chatbot",
    category: "NLP",
    description: "Custom Word2Vec chatbot trained from scratch on 135K Python Q&A pairs. No LLMs - pure machine learning approach.",
    image: "/projects/chatbot.png",
    tech: ["Word2Vec", "NLTK", "Streamlit", "Scikit-learn", "Python"],
    highlights: [
      "85-92% accuracy",
      "Custom trained on 135K pairs",
      "41,987 word vocabulary",
      "No pre-trained models used",
    ],
    github: "https://github.com/Shezan57/Chat-With-Python-Without-LLM",
    demo: null,
    featured: false,
  },
  {
    id: 8,
    title: "LangGraph Chatbot",
    category: "AI Agent",
    description: "Multi-turn conversational AI framework built with LangGraph for flexible, extensible chatbot experiences.",
    image: "/projects/langgraph.png",
    tech: ["LangGraph", "LangChain", "OpenAI", "Python"],
    highlights: [
      "Multi-turn conversation handling",
      "Modular architecture",
      "Tool integration support",
      "LLM provider abstraction",
    ],
    github: "https://github.com/Shezan57/langgraph_chatbot",
    demo: null,
    featured: false,
  },
  {
    id: 9,
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description: "Content-based movie recommendation system using TMDb dataset with cosine similarity matching.",
    image: "/projects/movie.png",
    tech: ["Scikit-learn", "Pandas", "NLTK", "Streamlit", "Python"],
    highlights: [
      "TMDb 5000 movie dataset",
      "Content-based filtering",
      "Cosine similarity matching",
      "Interactive web interface",
    ],
    github: "https://github.com/Shezan57/ML-Projects/tree/main/Movie-recommend-system",
    demo: null,
    featured: false,
  },
];

export const publications = [
  {
    title: "The Role of Artificial Intelligence in Revolutionizing Construction Project Management: Enhancing Efficiency and Sustainability",
    journal: "North American Academic Research",
    year: "2025",
    volume: "Vol 8(1), Issue 1",
    doi: "https://doi.org/10.5281/zenodo.14840458",
    highlights: [
      "27% waste reduction quantified",
      "22% downtime gains validated",
      "50K+ curated site images analyzed",
    ],
  },
  {
    title: "Impact of Automated Software Development Using Large Language Models: Capabilities, Limitations, and Future Evolution",
    journal: "RA Journal of Applied Research",
    year: "2025",
    volume: "Vol 11 No. 09",
    doi: "https://doi.org/10.47191/rajar/v11i9.07",
    highlights: [
      "55.8% faster development vs traditional",
      "Evaluated GPT-4o, Claude 3.5, Copilot",
      "Mitigation strategies for LLM limitations",
    ],
  },
];

export const experience = [
  {
    title: "Research Intern",
    company: "Zhengzhou University",
    period: "Jun 2024 - Aug 2024",
    description: "Human Gait Recognition using ResNet-50",
    highlights: [
      "Trained on 865K+ silhouette frames (100 IDs)",
      "Achieved 80% test accuracy",
      "Built end-to-end video pipeline",
      "Optimized for real-time inference",
    ],
  },
];

export const education = {
  degree: "BSc in Software Engineering",
  university: "Zhengzhou University, China",
  period: "2022 - 2026 (Expected)",
  gpa: "3.82/4.0",
  rank: "Top of Class",
  averageGrade: "90.53",
};

export const awards = [
  {
    title: "Outstanding Student Award",
    issuer: "Zhengzhou University",
    year: "2023 & 2024",
    description: "Awarded twice consecutively for academic excellence",
  },
  {
    title: "Henan Government Scholarship",
    issuer: "Henan Province, China",
    year: "2022",
    description: "Full funding for undergraduate studies as international student",
  },
  {
    title: "Best Monitor Award",
    issuer: "Zhengzhou University",
    year: "2024",
    description: "Recognition for leadership and class management",
  },
];

export const categories = [
  "All",
  "MLOps",
  "Computer Vision",
  "AI Agent",
  "NLP",
  "Machine Learning",
  "Multimodal AI",
];
