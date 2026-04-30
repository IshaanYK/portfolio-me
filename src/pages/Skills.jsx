import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { BrainCircuit, Server, Code2, Database, LayoutTemplate, Activity } from 'lucide-react';

export default function Skills() {
    const aiEngineering = [
        "Transformer Architectures",
        "Large Language Models (LLMs)",
        "Vision-Language Models (VLMs)",
        "Natural Language Processing (NLP)",
        "Chain-of-Thought Prompting",
        "Model Quantization & Optimization",
        "Local Inference Deployment",
        "Agent-Based AI Systems"
    ];

    const systemArchitecture = [
        "Modular Architecture Design",
        "Multi-Model Orchestration",
        "Memory System Engineering",
        "Tool-Augmented AI Pipelines",
        "Hardware-Constrained AI Deployment",
        "Distributed Logic Systems",
        "Backend API Structuring",
        "Workflow Automation Systems"
    ];

    const programming = [
        "Python",
        "C++",
        "C",
        "FastAPI",
        "Flask",
        "Node.js",
        "API Integration & Routing",
        "CLI-Based Systems"
    ];

    const tooling = [
        "LangChain",
        "llama-cpp",
        "TensorFlow",
        "PyTorch",
        "NumPy",
        "QGIS",
        "GDAL",
        "Firebase",
        "Google Drive API"
    ];

    const frontend = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Framer Motion",
        "Responsive UI Systems"
    ];

    const workflow = [
        "Linux",
        "Git & GitHub",
        "Modular Code Structuring",
        "Hardware Optimization (CUDA, VRAM Constraints)"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <PageTransition>
            <div className="w-full max-w-5xl mx-auto pb-24">
                {/* HEADERS */}
                <div className="mb-20 text-center flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Technical Capabilities <span className="text-gradient block mt-2 md:inline md:mt-0">&</span> System Expertise
                    </h1>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed">
                        Core competencies across AI model engineering, system design, and intelligent automation.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    {/* AI & MODEL ENGINEERING */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center border-l-4 border-electric-blue pl-4">
                            <BrainCircuit className="mr-3 text-electric-blue" size={24} />
                            AI & Model Engineering
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {aiEngineering.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="glass p-4 rounded-xl border border-white/5 hover:border-electric-blue/30 transition-colors flex items-center justify-center text-center h-20">
                                    <span className="text-gray-200 text-sm font-medium tracking-wide leading-snug">{skill}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* SYSTEM DESIGN & ARCHITECTURE */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center border-l-4 border-neon-violet pl-4">
                            <Server className="mr-3 text-neon-violet" size={24} />
                            System Design & Architecture
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {systemArchitecture.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="glass p-4 rounded-xl border border-white/5 hover:border-neon-violet/30 transition-colors flex items-center justify-center text-center h-20">
                                    <span className="text-gray-200 text-sm font-medium tracking-wide leading-snug">{skill}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* PROGRAMMING & BACKEND */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center border-l-4 border-electric-blue pl-4">
                            <Code2 className="mr-3 text-electric-blue" size={24} />
                            Programming & Backend
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                        >
                            {programming.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="bg-white/[0.03] p-4 rounded-lg border border-white/5 hover:bg-white/[0.06] transition-colors flex justify-center text-center">
                                    <span className="text-gray-300 text-sm font-semibold">{skill}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* DATA & AI TOOLING */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center border-l-4 border-neon-violet pl-4">
                            <Database className="mr-3 text-neon-violet" size={24} />
                            Data & AI Tooling
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {tooling.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-neon-violet/50 hover:text-white transition-all text-sm font-medium tracking-wide">
                                    {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* FRONTEND & INTERFACE ENGINEERING */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center border-l-4 border-electric-blue pl-4">
                            <LayoutTemplate className="mr-3 text-electric-blue" size={24} />
                            Frontend & Interface Engineering
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {frontend.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-electric-blue/50 hover:text-white transition-all text-sm font-medium tracking-wide">
                                    {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    <div className="w-full h-px bg-white/5 my-4" />

                    {/* DEVELOPMENT WORKFLOW & ENVIRONMENT */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold mb-6 flex items-center text-gray-400">
                            <Activity className="mr-3 text-gray-500" size={20} />
                            Development Workflow & Environment
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {workflow.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                    <span className="text-gray-400 font-light text-sm md:text-base">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </PageTransition>
    );
}
