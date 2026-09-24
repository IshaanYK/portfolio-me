import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { ExternalLink, Github, FileText, LayoutTemplate, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Voice Call Agent",
        subtitle: "Real-Time Autonomous Voice AI Platform",
        category: "Voice AI & Agents",
        overview: "An autonomous AI-powered voice agent configured to receive, parse, and converse via live phone and browser calls with sub-second STT/TTS latency.\n\nArchitected with bi-directional audio streaming over WebSockets, autonomous tool-calling loops, and dynamic context parsing to manage interruption handling, intent routing, and real-time database queries during live dialogue.",
        tech: ["JavaScript", "Node.js", "FastAPI", "WebSockets", "Whisper STT", "TTS Engines", "Speech API", "Autonomous Tool Loops"],
        buttons: [
            { label: "View GitHub Repository →", url: "https://github.com/IshaanYK/voice-call-agent", type: "github" },
            { label: "View Architecture →", url: "/#arise-architecture", type: "internal" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "Gemini Local Agent",
        subtitle: "Deep Reasoning Local Coding Agent & Tool Orchestrator",
        category: "Autonomous Systems",
        overview: "An autonomous software engineering and task execution agent powered by deep reasoning loops with zero cloud subscription dependency.\n\nFeatures persistent local vector memory, AST-based code parsing, full file-system inspection, self-healing terminal test execution, and dynamic tool orchestration capable of building and verifying multi-file projects.",
        tech: ["Python", "Gemini API", "Local Vector Store", "AST Parser", "Tool-Use Loops", "CLI Runtime", "Self-Correction Engine"],
        buttons: [
            { label: "View GitHub Repository →", url: "https://github.com/IshaanYK/gemini-1b-local-agent", type: "github" }
        ],
        accent: "border-neon-violet",
        textAccent: "text-neon-violet"
    },
    {
        title: "AI Work OS OpenEnv",
        subtitle: "Multi-Agent Workplace Simulation & RL Benchmark",
        category: "Multi-Agent AI",
        overview: "An advanced production-grade workplace simulation environment where autonomous AI agents collaborate, negotiate, and execute complex business operations under reward-driven reinforcement learning hooks.\n\nFeatures containerized multi-agent execution, asynchronous task dispatching, live REST endpoints, and automated benchmark scoring.",
        tech: ["Python", "PyTorch", "OpenEnv", "FastAPI", "Docker", "Multi-Agent Workflows", "RL Evaluation"],
        buttons: [
            { label: "View GitHub Repository →", url: "https://github.com/IshaanYK/ai-work-os-openenv", type: "github" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "A.R.I.S.E. (v1.2)",
        subtitle: "Artificial Responsive Intelligent System Engine",
        category: "Cognitive Architectures",
        overview: "A.R.I.S.E. is a fully offline, modular AI system engineered to explore multi-model cognitive architectures under real-world consumer hardware constraints. Built using llama-cpp with CUDA offloading and persistent vector memory without external cloud dependencies.\n\nThe architecture implements a split-brain routing system that dynamically switches between specialized quantized models for conversational and algorithmic tasks, prioritizing architectural intelligence over brute-force monolithic scaling.",
        tech: ["Python", "llama-cpp (CUDA Offloading)", "Llama 3.2 (3B GGUF)", "Qwen 2.5 Coder (1.5B GGUF)", "Local Vector Store", "NumPy", "CLI Runtime"],
        buttons: [
            { label: "View LinkedIn Breakdown →", url: "https://www.linkedin.com/pulse/de-clouding-intelligence-why-i-built-modular-biological-ishaan-sen-ufstf", type: "external" },
            { label: "View GitHub Repository →", url: "https://github.com/IshaanYK/A.R.I.S.E-v1", type: "github" },
            { label: "View Architecture Document →", url: "/#arise-architecture", type: "internal" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "TeamUnderdawgs Agrisense / AgroVani",
        subtitle: "Multilingual Agricultural Crop Decision Support Engine",
        category: "Agricultural ML",
        overview: "Crop decision support and disease identification system engineered for Indian farmers. Integrates multimodal input across voice notes, leaf imagery, and WhatsApp bots in 5 Indian languages.\n\nBacked by a 4-model machine learning pipeline for climate stress modeling, crop suitability classification, and localized advisory recommendations.",
        tech: ["Python", "FastAPI", "PyTorch", "Computer Vision", "WhatsApp Cloud API", "Multilingual NLP", "Climate Risk Scoring"],
        buttons: [
            { label: "View Core Engine Repo →", url: "https://github.com/IshaanYK/krishyantra-core-engine", type: "github" },
            { label: "View Agrisense Repo →", url: "https://github.com/IshaanYK/TeamUnderdawgs-Agrisense", type: "github" }
        ],
        accent: "border-neon-violet",
        textAccent: "text-neon-violet"
    },
    {
        title: "Prompt Optimizer Extension",
        subtitle: "Chrome Side Panel Prompt Structuring & Token Budgeting Engine",
        category: "Developer Tools",
        overview: "A high-performance Chrome Side Panel extension engineered to refine, compress, and structure prompts in real-time. Employs prompt taxonomy frameworks, eliminates token waste, and structures user prompts for maximum reasoning output fidelity.",
        tech: ["React 19", "Vite", "Tailwind CSS", "Chrome Extensions Manifest v3", "TypeScript", "Token Optimization"],
        buttons: [
            { label: "View Chrome Extension Repo →", url: "https://github.com/IshaanYK/prompt-optimizer-extension", type: "github" },
            { label: "View Source Codebase →", url: "https://github.com/IshaanYK/prompt-optimizer-source", type: "github" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "MindMate",
        subtitle: "AI-Powered Mental Health & Emotional Analytics Companion",
        category: "HealthTech AI",
        overview: "MindMate is an AI-driven mental wellness platform combining conversational intelligence, mood analytics, and automated wellness reporting. Built during the Version Beta 8.0 Hackathon (Winner).\n\nIntegrates structured emotional pattern analysis, automated journaling, and a trusted-contact alert mechanism within a privacy-first modular backend.",
        tech: ["React", "HTML5", "CSS3", "JavaScript", "Flask", "Node.js", "Firebase", "Gemini API", "Framer Motion"],
        buttons: [
            { label: "View GitHub Repository →", url: "https://github.com/IshaanYK/MindMate", type: "github" },
            { label: "View Hackathon Post →", url: "https://www.linkedin.com/posts/ishaan784_hackathon-versionbeta8-iste-activity-7390999195169722369-56HA", type: "external" }
        ],
        accent: "border-neon-violet",
        textAccent: "text-neon-violet"
    },
    {
        title: "Neural Defender",
        subtitle: "60fps HTML5 Canvas Cyberpunk Arcade Game & Physics Engine",
        category: "Graphics & Interactive",
        overview: "A high-performance cyberpunk browser arcade game built from scratch without external game engines. Features locked 60fps frame budgeting, 2D particle simulation physics, spatial collision algorithms, and real-time Web Audio API sound synthesizers.",
        tech: ["HTML5 Canvas", "JavaScript (ES6+)", "Web Audio API", "Particle Physics", "Game Loop Architecture"],
        buttons: [
            { label: "Play Live in Browser →", url: "https://ishaanyk.github.io/IshaanYK/game/", type: "external" },
            { label: "View Source Code →", url: "https://github.com/IshaanYK/IshaanYK/tree/main/game", type: "github" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "Desktop Storage Telemetry Daemon",
        subtitle: "High-Performance Windows System Telemetry & Disk Widget",
        category: "Systems & Utilities",
        overview: "A lightweight Windows desktop telemetry daemon for real-time drive monitoring, visual disk usage analytics, automated threshold alerts, and rule-based cleanup.\n\nBuilt with zero-overhead background polling and native OS system metric instrumentation.",
        tech: ["Python", "Windows API", "System Telemetry", "Performance Profiling", "Multithreading"],
        buttons: [
            { label: "View GitHub Repository →", url: "https://github.com/IshaanYK/desktop-storage-widget", type: "github" }
        ],
        accent: "border-neon-violet",
        textAccent: "text-neon-violet"
    },
    {
        title: "File Organizer Automation",
        subtitle: "AI-Driven File Management & Deduplication System",
        category: "Automation Systems",
        overview: "An intelligent file automation system that categorizes files, detects and removes duplicates, performs scheduled cleanups, and synchronizes backups to cloud storage. Designed for scalable folder environments with optimized multi-threaded processing.",
        tech: ["Python", "Filetype Library", "Google Drive API", "SMTP", "Multithreading", "Automation Scheduling"],
        buttons: [
            { label: "View GitHub Repository →", url: "https://github.com/IshaanYK/file-organizer-automation", type: "github" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    }
];

export default function Projects() {
    return (
        <PageTransition>
            <div className="w-full max-w-5xl mx-auto pb-24">
                {/* SECTION HEADER */}
                <div className="mb-20 text-center flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Engineered Systems <span className="text-gradient block mt-2 md:inline md:mt-0">&</span> Intelligent Architectures
                    </h1>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed">
                        A curated collection of autonomous agents, AI orchestration frameworks, and research-driven system designs.
                    </p>
                </div>

                {/* PROJECTS LIST */}
                <div className="flex flex-col gap-16 w-full">
                    {projects.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            key={index}
                            className={`glass rounded-2xl p-8 md:p-12 border-l-4 ${item.accent} transition-transform duration-500 hover:bg-white/[0.02] flex flex-col items-start text-left`}
                        >
                            {item.category && (
                                <div className="mb-3">
                                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider border ${item.accent} ${item.textAccent} bg-white/5`}>
                                        {item.category}
                                    </span>
                                </div>
                            )}
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h2>
                            <h3 className={`text-sm md:text-base font-semibold uppercase tracking-widest ${item.textAccent} mb-8`}>
                                {item.subtitle}
                            </h3>

                            <div className="text-gray-300 font-light leading-relaxed mb-10 w-full max-w-3xl">
                                {item.overview.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="mb-4 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="w-full mb-10">
                                <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1.5 text-[0.7rem] uppercase tracking-wider font-semibold rounded bg-white/5 border border-white/10 text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-auto">
                                {item.buttons.map((btn, i) => {
                                    const baseStyles = `flex items-center text-xs md:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full border ${item.accent} hover:bg-white/5 transition-all duration-300 ${item.textAccent}`;

                                    if (btn.type === 'internal') {
                                        return (
                                            <Link key={i} to={btn.url} className={baseStyles}>
                                                <FileText size={16} className="mr-2" />
                                                {btn.label}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <a
                                            key={i}
                                            href={btn.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={baseStyles}
                                        >
                                            {btn.type === 'github' ? <Github size={16} className="mr-2" /> : <ExternalLink size={16} className="mr-2" />}
                                            {btn.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
