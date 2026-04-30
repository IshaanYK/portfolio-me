import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { ExternalLink, Github, FileText, LayoutTemplate, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "A.R.I.S.E.",
        subtitle: "Artificial Responsive Intelligent System Engine",
        overview: "A.R.I.S.E. is a fully offline, modular AI system engineered to explore multi-model cognitive architectures under real-world hardware constraints. Built using llama-cpp with CUDA offloading and persistent vector memory, the system operates entirely on consumer-grade hardware without cloud dependency.\n\nThe architecture implements a split-brain routing system that dynamically switches between specialized quantized models for conversational and logical tasks. The design prioritizes architectural intelligence, deterministic execution, and hardware-aware efficiency over brute-force scaling.",
        tech: ["Python", "llama-cpp (CUDA Offloading)", "Llama 3.2 (3B, 4-bit GGUF)", "Qwen 2.5 Coder (1.5B, 4-bit GGUF)", "Local Vector Memory Store", "NumPy", "CLI Runtime"],
        buttons: [
            { label: "View LinkedIn Breakdown →", url: "https://www.linkedin.com/pulse/de-clouding-intelligence-why-i-built-modular-biological-ishaan-sen-ufstf", type: "external" },
            { label: "View GitHub (v1 Repository) →", url: "https://github.com/IshaanYK/A.R.I.S.E-v1", type: "github" },
            { label: "View Architecture →", url: "/#arise-architecture", type: "internal" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "MindMate",
        subtitle: "AI-Powered Mental Health Companion",
        overview: "MindMate is an AI-driven mental wellness platform combining conversational intelligence, mood analytics, and automated wellness reporting. The system analyzes emotional patterns, generates structured insights, and integrates a trusted-contact alert mechanism within a privacy-focused modular backend.",
        tech: ["HTML", "CSS", "JavaScript", "Flask", "Node.js", "Firebase", "Gemini API", "Framer Motion"],
        buttons: [
            { label: "View GitHub →", url: "https://github.com/IshaanYK/MindMate", type: "github" },
            { label: "View LinkedIn →", url: "https://www.linkedin.com/posts/ishaan784_hackathon-versionbeta8-iste-activity-7390999195169722369-56HA", type: "external" }
        ],
        accent: "border-neon-violet",
        textAccent: "text-neon-violet"
    },
    {
        title: "Geospatial AI Automator",
        subtitle: "Chain-of-Thought Spatial Intelligence System",
        overview: "A Chain-of-Thought–based AI system designed to automate complex geospatial workflows through intelligent tool orchestration. The system reasons step-by-step like a GIS analyst and dynamically executes spatial operations such as flood-risk mapping, land-use classification, and site suitability analysis using integrated geospatial engines.",
        tech: ["Python", "FastAPI", "LangChain", "QGIS", "GDAL", "OGR", "LLM APIs", "TensorFlow", "PyTorch", "Satellite Data (ISRO Bhuvan, Sentinel, Landsat)"],
        buttons: [
            { label: "View LinkedIn →", url: "https://www.linkedin.com/posts/ishaan784_isro-hackathon-innovation-activity-7374681405185970176-nVC8", type: "external" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "Gmail AI Inbox Assistant (v4.0)",
        subtitle: "Intelligent Email Automation & Lifecycle Management System",
        overview: "A Python-based automation system engineered to triage emails using weighted logic, manage attachment categorization, automate storage lifecycle processes, and generate real-time reporting via HTML dashboards and WhatsApp summaries.",
        tech: ["Python", "EZGmail", "PyWhatKit", "Plyer", "HTML", "CSS", "Automation Scripts"],
        buttons: [
            { label: "View GitHub →", url: "https://github.com/IshaanYK/Gmail-AI-Automation", type: "github" },
            { label: "View LinkedIn →", url: "https://www.linkedin.com/posts/ishaan784_i-was-tired-of-my-inbox-being-90-noise-and-activity-7410561550899609600-oaBe", type: "external" }
        ],
        accent: "border-neon-violet",
        textAccent: "text-neon-violet"
    },
    {
        title: "File Organizer Automation",
        subtitle: "AI-Driven File Management & Backup System",
        overview: "An intelligent file automation system that categorizes files, removes duplicates, performs scheduled cleanup, and synchronizes backups to cloud storage. Designed for scalable folder environments with optimized multi-threaded processing.",
        tech: ["Python", "Filetype Library", "Google Drive API", "SMTP", "Multithreading", "Automation Scheduling"],
        buttons: [
            { label: "View GitHub →", url: "https://github.com/IshaanYK/File-Organizer-Automation", type: "github" }
        ],
        accent: "border-electric-blue",
        textAccent: "text-electric-blue"
    },
    {
        title: "Web Development Projects",
        subtitle: "Frontend & Full-Stack Website Development Portfolio",
        overview: "A collection of responsive websites built for hackathons, freelance clients, personal branding, and experimental frontend systems. Focused on structured component architecture, deployment practices, and clean responsive UI systems.",
        tech: ["HTML", "CSS", "JavaScript", "React", "Modern Frontend Tooling", "Responsive Design"],
        buttons: [
            { label: "Macky Society – Innovate AI Challenge →", url: "https://github.com/IshaanYK/WEBSITE-MACKY_SOCITY-Innovate-AI-Challenge", type: "github" },
            { label: "Dhruv Portfolio →", url: "https://github.com/IshaanYK/PORTFOLIO-Dhruv", type: "github" },
            { label: "Frontend Project 3 →", url: "https://github.com/IshaanYK/frontend-project-3", type: "github" },
            { label: "Frontend Project 2 →", url: "https://github.com/IshaanYK/Frontend-project-2", type: "github" },
            { label: "Frontend Project 1 →", url: "https://github.com/IshaanYK/frontend-project-1", type: "github" }
        ],
        accent: "border-neon-violet",
        textAccent: "text-neon-violet"
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
