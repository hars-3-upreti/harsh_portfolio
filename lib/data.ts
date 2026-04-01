export const personalInfo = {
  name: "Harsh Upreti",
  handle: "harsh",
  tagline: "the solution is already inside the problem. i build systems to find it. anime keeps me sane.",
  location: "new delhi, india",
  status: "open to work",
  currentMood: "building",
  nowPlaying: "lo-fi anime beats",
  bio: [
    "hey. i'm harsh. i believe every problem has its solution subtly attached to it. i've spent years trying to prove that. ml models. vision systems. llm pipelines. systems that scale. systems that survive drift",
    "b.tech cs — bennett university. semester at ntu taipei — lived on leaderboards. currently building llm infra",
    "by night — anime, always. the best engineers i know are the ones who never stop watching the world with the curiosity of a first episode.",
    "i'm still on episode one."
  ],
  email: "upretiharsh1234@gmail.com",
  github: "https://github.com/hars-3-upreti",
  linkedin: "https://www.linkedin.com/in/harsh-3-upreti/",
  twitter: "https://twitter.com/harsh",
  currentlyBuilding: "terminal portfolio",
  currentlyBuildingDesc: "a living portfolio that runs like an OS",
  cvFile: "/cv/harsh-resume.pdf",
};

export const dailyLog = [
  {
    date: "april 1st, 2026 · 12:00am",
    content:
      "April Fools! This is a prank. The terminal portfolio is not actually live. I'm still working on it. But I'll get there. Thanks for playing along.",
    isLive: true,
  },
  {
    date: "march 6th, 2026 · 12:58pm",
    content:
      "finally shipped the terminal portfolio. spent way too long on the katakana rain but it was worth it. this is now the most 'me' thing i've ever built.",
  },
  {
    date: "march 5th, 2026 · 11:42pm",
    content:
      "deep in framer motion animations. the glitch text effect is finally smooth. watched 4 episodes of dungeon meshi in between commits.",
  },
  {
    date: "march 4th, 2026 · 9:15pm",
    content:
      "couldn't focus today. watched too much anime. will catch up tomorrow. sorry future me.",
  },
  {
    date: "march 3rd, 2026 · 3:00pm",
    content:
      "day 12 of consistent coding. getting into the flow. started theming everything terminal-style because why not.",
  },
  {
    date: "march 1st, 2026 · 8:30pm",
    content:
      "refactored the entire backend. cleaner, faster, more maintainable. it physically hurts how much better it is now.",
  },
  {
    date: "feb 27th, 2026 · 11:20pm",
    content:
      "late night debugging session. the bug was a missing semicolon. i'm fine. totally fine.",
  },
  {
    date: "feb 25th, 2026 · 7:45pm",
    content:
      "presented project to a small group — got great feedback. might pivot the UI slightly based on it.",
  },
  {
    date: "feb 23rd, 2026 · 10:10pm",
    content:
      "rewatched spirited away. peak cinema. every single scene is intentional. i want my code to feel like that someday.",
  },
  {
    date: "feb 21st, 2026 · 6:30pm",
    content:
      "started experimenting with shadcn/ui. maybe a bit too polished for this project? sticking to raw CSS for now.",
  },
  {
    date: "feb 19th, 2026 · 9:00pm",
    content:
      "solved that annoying memory leak in the dashboard. turns out, cleaning up useEffect is actually important. who knew?",
  },
  {
    date: "feb 15th, 2026 · 11:55pm",
    content:
      "midnight philosophy: is a bug really a bug if it produces a cool effect? yes. fix it, harsh.",
  },
];

export const experience = [
  {
    company: "VxO Digital",
    role: "Software Engineer-Trainee",
    period: "Sep 2025 → present",
    stack: ["Python", "React.js", "LLM", "RAG", "Machine Learning", "Javascript"],
    highlights: [
      "Architecting and deploying a self-hosted LLM on AWS (EKS + GPU, VPC isolation, IAM/KMS, vLLM serving, autoscaling & caching) to provide platform-wide, AI-driven assistance, enabling dynamic responses similar to a virtual assistant with broad-scale functionality beyond coding tasks.",
      "Leading the React-based web & mobile application stack: designing wrapper-based architectures to unifycross-platform clients, optimizing performance and accessibility.",

    ],
    status: "ongoing",
  },
  {
    company: "DataCouch",
    role: "AI/ML Engineer Intern",
    period: "Nov 2023 → Nov 2024",
    stack: ["NLP", "Machine Learning", "Python", "Microsoft Azure", "Apache Spark", "RAG", "LLM", "Data Analysis"],
    highlights: [
      "Built advanced predictive models for car service forecasting (time-series, NLP, LLM-based) on real-world daily-updated data using Azure ML, Databricks, and AI Studio, achieving 80–85% accuracy.",
      "Developed an enterprise chatbot leveraging LLaMA and RAG, automating 1,000+ customer interactions/month and improving inference efficiency by 13%.",
    ],
    status: "completed",
  },
];

export const education = [
  {
    period: "feb 2025 — jul 2025",
    school: "National Taiwan University",
    degree: "Semester Exchange Program",
    dept: "Department of CSIE",
    location: "Taipei, Taiwan",
    badge: "exchange",
    badgeColor: "cyan",
  },
  {
    period: "2021 — 2025",
    school: "Bennett University",
    degree: "Bachelor of Technology — Computer Science",
    cgpa: "8.84 / 10.00",
    location: "Delhi, India",
    badge: "graduated",
    badgeColor: "green",
  },
];

export const currentProjects = [
  {
    id: "mission_01",
    name: "terminal portfolio",
    description: "a living, breathing portfolio that runs like an anime OS. you're looking at it.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    progress: 75,
    startDate: "feb 2026",
    repoUrl: "https://github.com/harsh/terminal-portfolio",
    liveUrl: "#",
    status: "shipping soon",
  },
  // {
  //   id: "mission_02",
  //   name: "codeflow",
  //   description: "a collaborative code review tool with ai-powered suggestions and team analytics.",
  //   stack: ["React", "Node.js", "OpenAI", "Socket.io"],
  //   progress: 60,
  //   startDate: "jan 2026",
  //   repoUrl: "https://github.com/harsh/codeflow",
  //   liveUrl: "#",
  //   status: "in progress",
  // },
  // {
  //   id: "mission_03",
  //   name: "animelog",
  //   description: "track your anime watchlist, get ai recommendations, share with friends.",
  //   stack: ["Next.js", "Supabase", "TypeScript"],
  //   progress: 35,
  //   startDate: "mar 2026",
  //   repoUrl: "https://github.com/harsh/animelog",
  //   liveUrl: "#",
  //   status: "in progress",
  // },
];

export const pastProjects = [
  {
    name: "Captify",
    description: "Developed a website using SvelteKit that enables content creators to generate real-time captions for their videos and create thumbnails or images for their posts. Leveraged WhisperAI and MidJourney API to produce captions and images, respectively. Utilized AWS Lambda for storage and Supabase for authentication services.",
    stack: ["SvelteKit", "Fast API", "Fine Tuning", "WhisperAI", "MidJourney API", "AWS Lambda", "Supabase"],
    url: "https://github.com/hars-3-upreti/Captify",
  },
  {
    name: "DeepFakeX",
    description: "A-Tri-Modal-Transformer-Framework-for-Robust-Deepfake-Detection",
    stack: ["Next.js", "OpenWeather API"],
    url: "https://github.com/hars-3-upreti/DeepFakeX-A-Tri-Modal-Transformer-Framework-for-Robust-Deepfake-Detection",
  },
  {
    name: "Lightweight 3D-CNN for Hyperspectral Classification",
    description: "Designed a Lightweight 3D-CNN (depthwise 3D + SE attention) that preserves all spectral bands (no PCA), totaling∼9.5k params (∼0.01M) for high accuracy with tiny footprint.",
    stack: ["3D CNN", "Depthwise 3D Convs", "SE Attention", "AVIRIS"],
    url: "https://drive.google.com/file/d/1uz57GxQ7ibZ1XcvCzO68ljvGo7mEsqcm/view?usp=sharing",
  },
  {
    name: "MiniRestormer-Powered GAN for Image Deblurring",
    description: "Developed a lightweight GAN-based image restoration model with a Residual U-Net generator and PatchGAN discriminator for motion deblurring.",
    stack: ["GAN", "Residual U-Net", "PatchGAN", "PyTorch"],
    url: "https://github.com/hars-3-upreti/PSNR-First-Image-Deblurring-with-Residual-U-Net-and-Charbonnier-Loss",
  },
  {
    name: "RealTime-SignLanguage-Translator",
    description: "This project implements a real-time sign language translator using the AUTSL Dataset and the X3D-XS video classification model. ",
    stack: ["X3D-XS", "AUTSL Dataset", "PyTorch"],
    url: "https://github.com/hars-3-upreti/RealTime-SignLanguage-Translator",
  },
  {
    name: "Heart-Disease-Classification-using-Ensemble-Learning",
    description: "A machine learning project that predicts the likelihood of heart disease using supervised learning algorithms and ensemble techniques.",
    stack: ["Ensemble Learning", "Supervised Learning", "Machine Learning"],
    url: "https://github.com/hars-3-upreti/Heart-Disease-Classification-using-Ensemble-Learning",
  },
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "C++", level: 75 },
    { name: "JavaScript", level: 72 },
    { name: "HTML/CSS", level: 85 },
    { name: "SQL", level: 70 },
  ],
  frameworks: [
    { name: "React", level: 80 },
    { name: "Next.js", level: 70 },
    { name: "Node.js", level: 70 },
    { name: "PyTorch", level: 85 },
    { name: "TensorFlow / Keras", level: 75 },
    { name: "OpenCV", level: 80 },
    { name: "LangChain / RAG", level: 80 },
  ],
  tools: [
    "AWS EKS",
    "Azure ML",
    "Databricks",
    "vLLM",
    "MLflow / MLOps",
    "pgvector / Milvus",
    "Apache Hudi",
    "PySpark",
    "Docker",
    "Git",
    "Linux",
    "VS Code",
  ],
};

export const musicConfig = {
  songName: "ambient lofi",
  file: "/music/ambient.mp3",
};
