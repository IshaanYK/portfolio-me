import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Code2, Database, LayoutTemplate, Activity, Radio, HardDrive, Wrench } from 'lucide-react';

export default function Skills() {
    const categories = [
        {
            title: "Programming Languages",
            icon: Code2,
            description: "Core algorithmic and systems languages for software, embedded controls, and low-latency pipelines.",
            skills: [
                { name: "Python", level: "Expert", desc: "AI pipelines, FastAPI, model routing, automation" },
                { name: "C++", level: "Advanced", desc: "Algorithmic competitions, performance-critical loops" },
                { name: "C", level: "Core", desc: "Embedded microcontrollers, memory-constrained firmware" },
                { name: "Java", level: "Proficient", desc: "Object-oriented architectures, data structures" },
                { name: "HTML / CSS / JS", level: "Proficient", desc: "Modern web components, responsive interfaces" }
            ]
        },
        {
            title: "AI, ML & Model Engineering",
            icon: BrainCircuit,
            description: "Deep learning models, quantization engines, computer vision, and offline NLP architectures.",
            skills: [
                { name: "TensorFlow & PyTorch", level: "Advanced", desc: "Deep neural networks, loss function tuning" },
                { name: "OpenCV", level: "Advanced", desc: "Computer vision, image filtering, spatial tracking" },
                { name: "Scikit-learn", level: "Advanced", desc: "Predictive ML, classification, statistical modeling" },
                { name: "NLP (spaCy)", level: "Advanced", desc: "Tokenization, NER, semantic parsing" },
                { name: "Model Quantization (GGUF)", level: "Specialist", desc: "4-bit/8-bit compression, VRAM budget optimization" },
                { name: "Vector DBs & Embeddings", level: "Advanced", desc: "Chroma, SQLite local vector store, cosine search" },
                { name: "llama-cpp & CUDA", level: "Specialist", desc: "Split-brain offline LLM offloading, sub-second TTFT" },
                { name: "FastAPI & Tkinter", level: "Advanced", desc: "High-concurrency microservices, desktop UI overlays" },
                { name: "Git & Linux", level: "Advanced", desc: "Distributed version control, POSIX shell, daemons" },
                { name: "Blender 3D", level: "Proficient", desc: "Spatial modeling, robotics asset prototyping" }
            ]
        },
        {
            title: "Hardware, Embedded & Robotics",
            icon: Cpu,
            description: "Physical autonomous systems, micro-controller firmware, and real-time flight avionics.",
            skills: [
                { name: "Arduino & ESP32", level: "Specialist", desc: "Low-level C/C++ firmware, GPIO, interrupts, I2C/SPI" },
                { name: "Pixhawk Microcontrollers", level: "Advanced", desc: "Autonomous UAV flight stack, Mission Planner telemetry" },
                { name: "IoT Systems", level: "Advanced", desc: "Sensor networks, real-time telemetry streaming" },
                { name: "Low-level PID Tuning", level: "Specialist", desc: "Attitude stabilization, closed-loop servo dynamic control" },
                { name: "Drone Fabrication", level: "Specialist", desc: "Fixed-wing & multirotor airframe aerodynamics, ESCs" },
                { name: "Servo Actuation Systems", level: "Advanced", desc: "65kg torque robotic actuation, dual-brain architecture" }
            ]
        },
        {
            title: "Architecture & Systems Design",
            icon: HardDrive,
            description: "Distributed logic, modular split-brain orchestration, and secure communication channels.",
            skills: [
                { name: "Split-Brain Multi-Model Routing", level: "Specialist", desc: "Dynamic task delegation across specialized quantized SLMs" },
                { name: "Multi-Agent Frameworks", level: "Advanced", desc: "Autonomous agent execution, persistent memory buffers" },
                { name: "High-Concurrency Pipelines", level: "Advanced", desc: "AsyncIO, multi-threaded sector scanners, CDN caching" },
                { name: "Telephony & Audio AI", level: "Advanced", desc: "Twilio WebSockets + ElevenLabs low-latency voice delivery" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
    };

    return (
        <PageTransition>
            <div className="w-full max-w-6xl mx-auto pb-28 px-4 sm:px-6">

                {/* HEADER */}
                <div className="mb-16 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 tracking-wider uppercase">
                        <Wrench size={14} className="text-white" />
                        Comprehensive Technical Stack
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white font-sans">
                        Technical Capabilities <span className="text-gradient">&</span> System Mastery
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
                        Full-spectrum technical proficiencies spanning low-level C firmware, autonomous UAVs, and offline quantized large language models.
                    </p>
                </div>

                {/* CATEGORIES GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-12"
                >
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="glass p-6 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{cat.title}</h2>
                                            <p className="text-xs md:text-sm text-gray-400 font-light mt-0.5">{cat.description}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 self-start md:self-auto px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                                        {cat.skills.length} Competencies
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {cat.skills.map((s, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all group"
                                        >
                                            <div className="flex items-center justify-between mb-1.5">
                                                <h3 className="text-sm font-bold text-white group-hover:text-gray-200 transition-colors">{s.name}</h3>
                                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 border border-white/10">
                                                    {s.level}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400 font-light leading-relaxed">{s.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </PageTransition>
    );
}
