export const portfolioData = {
  personal_information: {
    full_name: "Dheeraj Sharma",
    contact: {
      email: "dheerajofficial2306@gmail.com",
      location: "Ghaziabad, Uttar Pradesh, India",
      timezone: "IST"
    },
    links: {
      linkedin: "https://www.linkedin.com/in/dheerajsharma2399",
      github: "https://github.com/dheerajsharma2399",
      portfolio: "https://dheeraj.dev"
    },
    summary: "Software Engineer with ~2 years of experience (including internships) bridging the gap between scalable backend systems and intuitive user interfaces. Expert in building offline-first PWAs, autonomous AI agents, and cost-optimized cloud architectures. Proven track record of reducing infrastructure costs by 70% and latency by 60% through engineering optimizations. Reach me at dheerajofficial2306@gmail.com."
  },
  work_experience: [
    {
      company: "Sonar Instruments and Technology Pvt Ltd",
      role: "Software Engineer Intern",
      location: "Ghaziabad, India",
      start_date: "Feb 2025",
      end_date: "Present",
      key_achievements: [
        "Architected a scalable IoT backend handling 20,000+ daily MQTT events, reducing data ingestion latency by 35% using Python and AWS IoT Core.",
        "Developed a real-time monitoring dashboard visualizing 20,000+ data points daily, improving operator response time by 25%.",
        "Deployed predictive ML models (TensorFlow) that improved equipment failure detection by 12% (F1 Score) and reduced downtime by 25%.",
        "Engineered robust CI/CD pipelines with GitHub Actions and Docker, cutting deployment cycles from 20 minutes to 12 minutes.",
        "Optimized API response times by 40% through FastAPI implementation and Docker containerization.",
        "Automated data labeling with GPT-4 API integration, reducing manual preparation time by 40%."
      ],
      technologies: ["Python", "AWS IoT Core", "FastAPI", "Docker", "React", "TensorFlow", "GitHub Actions"]
    }
  ],
  projects: [
    {
      id: "osho-app",
      title: "OshoApp - Spiritual Audio Platform",
      des: "A minimalist spiritual audio platform hosting 5,400+ discourses with synchronized transcripts and offline support.",
      tech: ["Next.js", "Supabase", "Meilisearch", "Docker"],
      iconLists: [
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/supabase",
        "https://cdn.simpleicons.org/meilisearch",
        "https://cdn.simpleicons.org/docker"
      ],
      link: "https://github.com/dheerajsharma2399/oho-app",
      img: "/images/osho-app.png",
      key_features: [
        "Persistent audio player with 'karaoke-style' synchronized transcripts.",
        "Offline-first architecture caching up to 500MB of content.",
        "AES-256-GCM encryption for secure audio streaming."
      ]
    },
    {
      id: "telegram-bot-v2",
      title: "Telegram Job Scraper Bot v2",
      des: "Comprehensive automation suite monitoring Telegram groups for job postings, parsing them with AI, and syncing to databases.",
      tech: ["Python", "PostgreSQL", "Flask"],
      iconLists: [
        "https://cdn.simpleicons.org/python",
        "https://cdn.simpleicons.org/postgresql",
        "https://cdn.simpleicons.org/flask"
      ],
      link: "https://github.com/dheerajsharma2399/telegram-automate",
      img: "/images/telegram-automate.png",
      key_features: [
        "Fault-tolerant ETL pipeline with dead-letter queues.",
        "Kanban-style web dashboard for application tracking.",
        "AI-powered duplicate detection and relevance classification."
      ]
    },
    {
      id: "dumroo-ai",
      title: "Dumroo AI Admin Panel",
      des: "EdTech analytics dashboard enabling natural language querying of student data.",
      tech: ["Streamlit", "LangChain", "Supabase"],
      iconLists: [
        "https://cdn.simpleicons.org/streamlit",
        "https://cdn.simpleicons.org/langchain",
        "https://cdn.simpleicons.org/supabase"
      ],
      link: "https://github.com/dheerajsharma2399/dumroo",
      img: "/images/dumroo.png",
      key_features: [
        "Natural language interface for complex database queries.",
        "Role-Based Access Control (RBAC) for data security.",
        "Interactive visualizations for student trends."
      ]
    },
    {
      id: "asset-tracker",
      title: "Modern Asset Tracker",
      des: "Real-time crypto and stock portfolio tracker with secure authentication.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      iconLists: [
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/tailwindcss",
        "https://cdn.simpleicons.org/supabase"
      ],
      link: "https://github.com/dheerajsharma2399",
      img: "/images/trading.png",
      key_features: [
        "Real-time integration with CoinGecko and Alpha Vantage APIs.",
        "Secure JWT-based authentication flow."
      ]
    },
    {
      id: "hft-bot",
      title: "High-Frequency Trading Bot",
      des: "Low-latency trading engine for Binance Futures.",
      tech: ["Python", "FastAPI", "Redis", "Docker"],
      iconLists: [
        "https://cdn.simpleicons.org/python",
        "https://cdn.simpleicons.org/fastapi",
        "https://cdn.simpleicons.org/redis",
        "https://cdn.simpleicons.org/docker"
      ],
      link: "https://github.com/dheerajsharma2399/binance-futures-bot",
      img: "/images/trading-bot.png",
      key_features: [
        "Redis for sub-millisecond state management.",
        "Automated local stop-loss triggers."
      ]
    },
    {
      id: "financial-rag",
      title: "Financial Document RAG System",
      des: "Offline RAG system for analyzing sensitive financial documents.",
      tech: ["LangChain", "Ollama", "Mistral"],
      iconLists: [
        "https://cdn.simpleicons.org/langchain",
        "https://cdn.simpleicons.org/ollama"
      ],
      link: "https://github.com/dheerajsharma2399/financial-doc-qa",
      img: "/images/financial-rag.png",
      key_features: [
        "Recursive character text splitting for context preservation.",
        "Local vector embeddings using FAISS."
      ]
    },
    {
      id: "task-agent",
      title: "Autonomous Task Planning Agent",
      des: "Agent system capable of recursive goal decomposition.",
      tech: ["Python", "LangChain", "SQLite"],
      iconLists: [
        "https://cdn.simpleicons.org/python",
        "https://cdn.simpleicons.org/langchain",
        "https://cdn.simpleicons.org/sqlite"
      ],
      link: "https://github.com/dheerajsharma2399/ai-task-planning-agent",
      img: "/images/ai-task-planning-agent.png",
      key_features: [
        "External tool integration (Search, Weather).",
        "Model-agnostic backend (Ollama, Gemini, OpenRouter)."
      ]
    },
    {
      id: "scrap-classification",
      title: "End-to-End ML Pipeline",
      des: "Edge-optimized waste classification system.",
      tech: ["PyTorch", "OpenCV"],
      iconLists: [
        "https://cdn.simpleicons.org/pytorch",
        "https://cdn.simpleicons.org/opencv"
      ],
      link: "https://github.com/dheerajsharma2399/thrashnet",
      img: "/images/thrashnet.png",
      key_features: [
        "Automated MLOps training and versioning pipeline.",
        "Optimized for edge deployment."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Manipal University, Jaipur",
      duration: "Aug 2023 – Aug 2025",
      details: "CGPA: 8.74"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Chaudhary Charan Singh University",
      duration: "Jul 2019 – Jul 2022"
    }
  ],
  technical_skills: {
    languages: ["Python (Expert)", "JavaScript/TypeScript", "SQL", "Bash"],
    frontend: ["Next.js 15", "React 19", "Tailwind CSS", "Shadcn/ui", "Flutter"],
    backend: ["FastAPI", "Node.js", "Supabase", "Django", "Flask", "WebSockets"],
    ai_ml: ["LangChain", "TensorFlow", "PyTorch", "RAG", "Ollama", "OpenRouter"],
    data_infrastructure: ["PostgreSQL", "Redis", "Meilisearch", "Kafka", "Airflow"],
    devops_cloud: ["AWS (EC2, IoT, Lambda)", "Docker", "GitHub Actions", "Dokploy", "Nginx"]
  }
};