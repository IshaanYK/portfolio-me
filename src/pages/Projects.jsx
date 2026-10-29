import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { ExternalLink, Github, FileText, Layers, Radio, Activity, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: "arise",
        title: "A.R.I.S.E.",
        subtitle: "Artificial Responsive Intelligent System Environment",
        badge: "Flagship Core System",
        category: "Local LLM & Multi-Model Engine",
        overview: "A.R.I.S.E. is a fully local, modular AI assistant powered by a split-brain multi-model architecture for efficient offline intelligence. The architecture executes entirely on consumer-grade hardware with NVIDIA CUDA offloading and persistent SQLite vector memory, dynamically routing prompts between specialized quantized models for code generation, conversational nuance, and deterministic tool actions without cloud dependency.",
        tech: ["NVIDIA CUDA", "SQLite", "llama-cpp-python", "GGUF Quantization", "Llama 3.2 3B", "Qwen 2.5 Coder", "Local Vector Store"],
        buttons: [
            { label: "Architecture Breakdown →", url: "https://www.linkedin.com/pulse/de-clouding-intelligence-why-i-built-modular-biological-ishaan-sen-ufstf", type: "external" },
            { label: "GitHub Repository →", url: "https://github.com/IshaanYK/A.R.I.S.E-v1", type: "github" },
            { label: "View Architecture Doc →", url: "/#arise-architecture", type: "internal" }
        ],
        accent: "border-white/20",
        highlight: true
    },
    {
        id: "politag",
        title: "PoliTag MVP",
        subtitle: "AI Political Debate & Social Ecosystem",
        badge: "Social AI Architecture",
        category: "Full-Stack AI & Civics",
        overview: "Designed a social architecture targeting political polarization and lack of civic engagement tools for young adults. Built with Next.js, real-time Speech-To-Text processing, and Supabase data structures to parse ideological stances, foster structured discourse, and provide verifiable context on contested public policies.",
        tech: ["Next.js", "React", "Speech-To-Text", "Supabase", "Tailwind CSS", "Semantic Embeddings"],
        buttons: [
            { label: "View Live Showcase →", url: "https://github.com/IshaanYK", type: "external" },
            { label: "GitHub →", url: "https://github.com/IshaanYK", type: "github" }
        ],
        accent: "border-white/10"
    },
    {
        id: "callagent",
        title: "CallAgent",
        subtitle: "Autonomous Voice Outreach Engine with Multilingual Rendering",
        badge: "Voice AI & Automation",
        category: "Distributed Voice Pipeline",
        overview: "Engineered an autonomous voice dialer capable of dynamically reading client script sheets, evaluating conversational branching, and synthesizing lifelike spoken audio through ElevenLabs multilingual neural voice rendering. Integrated Twilio telephony WebSockets with local CDN caching for sub-second response times.",
        tech: ["Twilio Telephony", "ElevenLabs Neural TTS", "CDN Cache", "Python", "FastAPI", "AsyncIO"],
        buttons: [
            { label: "GitHub Pipeline →", url: "https://github.com/IshaanYK", type: "github" }
        ],
        accent: "border-white/10"
    },
    {
        id: "storage-widget",
        title: "Storage Widget",
        subtitle: "Non-Blocking Windows Desktop Application",
        badge: "Systems & Utilities",
        category: "Desktop Software Engine",
        overview: "Coded a lightweight Tkinter dark-theme overlay that monitors connected system partition flags, read/write I/O operations, and disk thresholds in real time. Built with decoupled daemon threads preventing UI freezes during high-throughput sector checks on Windows API subsystems.",
        tech: ["Python", "Tkinter", "psutil", "Multithreading", "Windows API"],
        buttons: [
            { label: "View Widget Code →", url: "https://github.com/IshaanYK", type: "github" }
        ],
        accent: "border-white/10"
    },
    {
        id: "mindmate",
        title: "MindMate",
        subtitle: "AI-Powered Mental Health Companion",
        badge: "Hackathon 36-Hr Sprint",
        category: "Conversational Intelligence",
        overview: "MindMate is an AI-driven mental wellness platform combining conversational intelligence, mood analytics, and automated wellness reporting. Built in 36 hours for Version Beta 8.0, integrating emotional pattern analysis and a trusted-contact alert mechanism within a privacy-conscious architecture.",
        tech: ["React", "Flask", "Node.js", "Firebase", "Gemini API", "Framer Motion"],
        buttons: [
            { label: "GitHub Repository →", url: "https://github.com/IshaanYK/MindMate", type: "github" },
            { label: "Hackathon Breakdown →", url: "https://www.linkedin.com/posts/ishaan784_hackathon-versionbeta8-iste-activity-7390999195169722369-56HA", type: "external" }
        ],
        accent: "border-white/10"
    },
    {
        id: "geospatial-ai",
        title: "Geospatial AI Automator",
        subtitle: "Chain-of-Thought Spatial Intelligence System",
        badge: "ISRO Space Tech Challenge",
        category: "GIS & Deep Learning",
        overview: "A Chain-of-Thought–based AI system designed to automate complex geospatial workflows through intelligent tool orchestration. Reasons step-by-step like a GIS analyst to dynamically execute spatial operations such as flood-risk mapping, land-use classification, and satellite raster queries.",
        tech: ["Python", "FastAPI", "LangChain", "QGIS", "GDAL", "TensorFlow", "ISRO Bhuvan / Sentinel"],
        buttons: [
            { label: "ISRO Project Overview →", url: "https://www.linkedin.com/posts/ishaan784_isro-hackathon-innovation-activity-7374681405185970176-nVC8", type: "external" }
        ],
        accent: "border-white/10"
    }
];

export default function Projects() {
    return (
        <PageTransition>
            <div className="w-full max-w-6xl mx-auto pb-28 px-4 sm:px-6">

                {/* SECTION HEADER */}
                <div className="mb-16 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 tracking-wider uppercase">
                        <Cpu size={14} className="text-white" />
                        Software & Hardware Pipelines
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white font-sans">
                        Engineered Systems <span className="text-gradient">&</span> AI Architectures
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
                        Autonomous split-brain agents, real-time voice pipelines, desktop utilities, and deep learning engines designed for deterministic execution.
                    </p>
                </div>

                {/* PROJECTS LIST */}
                <div className="flex flex-col gap-10 w-full">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className={`glass p-6 md:p-10 rounded-2xl border transition-all duration-300 ${
                                item.highlight
                                    ? 'border-white/20 bg-gradient-to-b from-white/[0.04] to-transparent shadow-[0_0_40px_rgba(255,255,255,0.04)]'
                                    : 'border-white/5 hover:border-white/20'
                            }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white border border-white/15">
                                        {item.badge}
                                    </span>
                                    <span className="text-xs text-gray-400 font-mono">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1.5 tracking-tight">
                                {item.title}
                            </h2>
                            <p className="text-sm md:text-base text-gray-300 font-light mb-6">
                                {item.subtitle}
                            </p>

                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8 max-w-4xl whitespace-pre-line">
                                {item.overview}
                            </p>

                            {/* Tech Stack Pills */}
                            <div className="mb-8">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block mb-3">
                                    Technologies & Stack
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                                {item.buttons.map((btn, idx) => {
                                    if (btn.type === "internal") {
                                        return (
                                            <Link
                                                key={idx}
                                                to={btn.url}
                                                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-medium transition-all flex items-center gap-2"
                                            >
                                                <FileText size={14} />
                                                {btn.label}
                                            </Link>
                                        );
                                    }
                                    return (
                                        <a
                                            key={idx}
                                            href={btn.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                                                btn.type === "github"
                                                    ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white'
                                                    : 'bg-white text-black hover:bg-gray-200 font-semibold shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                                            }`}
                                        >
                                            {btn.type === "github" ? <Github size={14} /> : <ExternalLink size={14} />}
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
