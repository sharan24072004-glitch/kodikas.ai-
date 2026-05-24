export interface Project {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  image: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: { name: string; category: string }[];
  result: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'aether-dashboard',
    title: 'Aether Dashboard',
    tagline: 'Real-time Web3 data intelligence at the speed of thought.',
    tags: ['Next.js', 'Web3', 'UI/UX', 'WebSockets'],
    image: '/projects/aether.png',
    overview:
      'Aether Dashboard is a next-generation SaaS analytics platform built for a blockchain data indexing protocol. It delivers sub-second live data feeds, on-chain portfolio insights, and a deeply customizable dark-mode interface that sets a new visual standard for DeFi tooling.',
    problem:
      "The client had raw on-chain data flowing in from multiple protocols but no unified interface to visualize it. Their existing dashboard was slow, non-real-time, and visually outdated — driving high user churn and negative reviews.",
    solution:
      "We rebuilt the platform from the ground up using Next.js 14 with server-side streaming, integrated WebSocket feeds for live updates, and designed a fully custom component library with glassmorphism cards, animated charts, and a configurable dark/light mode system.",
    features: [
      'Sub-second live data via WebSocket streams',
      'Interactive charts (area, candlestick, heatmap) using Recharts',
      'On-chain wallet portfolio view with token breakdown',
      'Custom alert system with threshold triggers',
      'Responsive dark-mode UI with glassmorphism design',
      'Role-based access control (Admin / Analyst / Viewer)',
    ],
    stack: [
      { name: 'Next.js 14', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'WebSockets', category: 'Real-time' },
      { name: 'Recharts', category: 'Visualization' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Redis', category: 'Caching' },
    ],
    result:
      'Deployed to 3,000+ active users within the first month. Average session duration increased by 4.2x compared to the legacy platform, and customer churn dropped by 61%.',
    color: '#4f46e5',
  },
  {
    id: 'helius-ai-core',
    title: 'Helius AI Core',
    tagline: 'Your home, intelligently controlled — offline and on-device.',
    tags: ['React Native', 'iOS & Android', 'AI', 'Bluetooth'],
    image: '/projects/helius.png',
    overview:
      'Helius AI Core is a cross-platform mobile companion app that brings local, privacy-first AI to smart home automation. Built for a hardware startup, it handles Bluetooth mesh device control, voice-command parsing (on-device), and real-time sensor monitoring — all without requiring cloud connectivity.',
    problem:
      "The client's existing smart home app relied entirely on cloud-based voice processing, causing latency issues and privacy concerns. Users demanded a fully offline, instant-response solution that worked even during internet outages.",
    solution:
      "We built a React Native app with a custom on-device NLP pipeline using a fine-tuned, quantized language model. Bluetooth mesh integration was engineered using a custom native module for iOS and Android, enabling direct device control with <80ms response times.",
    features: [
      'On-device voice command processing (no cloud dependency)',
      'Bluetooth mesh networking for multi-device control',
      'Real-time environmental sensor dashboard (temp, humidity, CO₂)',
      'AI-powered automation scheduling & routine suggestions',
      'Custom home layout builder with room-based control',
      'iOS & Android native widgets for quick home access',
    ],
    stack: [
      { name: 'React Native', category: 'Framework' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'TensorFlow Lite', category: 'AI / ML' },
      { name: 'Bluetooth LE', category: 'Connectivity' },
      { name: 'SQLite', category: 'Local DB' },
      { name: 'Zustand', category: 'State' },
    ],
    result:
      "App achieved 4.8★ rating on both App Store and Play Store within the first month. Voice command accuracy reached 96.3% in real-world testing, and battery impact was reduced by 43% vs. the cloud-dependent predecessor.",
    color: '#0d9488',
  },
  {
    id: 'synthetix-compiler',
    title: 'Synthetix Compiler',
    tagline: 'Write in plain English. Ship production microservices.',
    tags: ['Python', 'Kubernetes', 'LLM', 'Agentic AI'],
    image: '/projects/synthetix.png',
    overview:
      'Synthetix Compiler is an AI-native development tool that converts natural language specifications into fully functional, production-ready microservices. Engineered for a DevOps-focused SaaS company, it orchestrates agentic LLM pipelines to generate, validate, containerise, and deploy code — end to end.',
    problem:
      "The client's engineering bottleneck was time-to-ship: translating product specs into deployable services took days of back-and-forth between product and engineering teams. They needed a solution that could bridge the gap autonomously.",
    solution:
      "We built an agentic pipeline using a fine-tuned code generation model with multi-step reasoning. The pipeline interprets plain-English specs, generates validated TypeScript or Python code, writes unit tests, containerises the service via Docker, and triggers Kubernetes deployment — all in a single workflow.",
    features: [
      'Natural language → production code in one prompt',
      'Multi-language support: Python, TypeScript, Go',
      'Automated unit test generation & validation',
      'Docker containerisation with optimised image layering',
      'One-click Kubernetes deployment with health checks',
      'Full audit log and rollback on deployment failure',
    ],
    stack: [
      { name: 'Python', category: 'Backend' },
      { name: 'GPT-4o (fine-tuned)', category: 'AI Model' },
      { name: 'Kubernetes', category: 'Orchestration' },
      { name: 'Docker', category: 'Containerisation' },
      { name: 'FastAPI', category: 'API Layer' },
      { name: 'React', category: 'Frontend' },
    ],
    result:
      "Reduced average time-to-deploy for a new microservice from 3.5 days to under 20 minutes. The tool processed 1,200+ service deployments in the first quarter with a 94% first-pass success rate.",
    color: '#6366f1',
  },
];
