import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { BrainCircuit, BookOpenText, TestTube, Network, Database, Cpu, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function Research() {
    const interests = [
        { title: "Transformer architectures & attention mechanisms", icon: <Network size={20} /> },
        { title: "Multimodal models (LLMs, VLMs)", icon: <BrainCircuit size={20} /> },
        { title: "Chain-of-Thought reasoning systems", icon: <Layers size={20} /> },
        { title: "AI agent architectures & orchestration frameworks", icon: <TestTube size={20} /> },
        { title: "Model specialization under hardware constraints", icon: <Cpu size={20} /> },
        { title: "Robotics-integrated intelligence systems", icon: <Database size={20} /> },
        { title: "Efficient local inference & quantization strategies", icon: <BookOpen size={20} /> }
    ];

    const concepts = [
        {
            title: "Transformer architecture evolution",
            focus: "Analyzing attention mechanisms, context window scaling behavior, and computational efficiency limits.",
            accent: "border-electric-blue text-electric-blue"
        },
        {
            title: "Efficient quantization techniques",
            focus: "Studying low-bit precision (GGUF/AWQ) optimizations for local model deployment on consumer hardware.",
            accent: "border-neon-violet text-neon-violet"
        },
        {
            title: "Agent-based AI system design",
            focus: "Exploring modular cognitive architectures and split-brain model routing for complex multi-step execution.",
            accent: "border-electric-blue text-electric-blue"
        },
        {
            title: "Multimodal reasoning frameworks",
            focus: "Investigating how vision-language models process structural diagram reasoning alongside text generation.",
            accent: "border-neon-violet text-neon-violet"
        },
        {
            title: "Tool-augmented LLM systems",
            focus: "Researching secure execution environments for models utilizing external APIs, REPLs, and system interpreters.",
            accent: "border-electric-blue text-electric-blue"
        }
    ];

    const approaches = [
        "Reading and breaking down architecture diagrams",
        "Re-implementing core ideas in small experimental systems",
        "Testing constraints under hardware limitations",
        "Comparing modular vs monolithic designs",
        "Translating research concepts into engineered systems"
    ];

    return (
        <PageTransition>
            <div className="w-full max-w-5xl mx-auto pb-24">
                {/* SECTION HEADER */}
                <div className="mb-20 text-center flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Research <span className="text-gradient block mt-2 md:inline md:mt-0">&</span> Technical Exploration
                    </h1>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed">
                        Ongoing study and analysis of advanced AI architectures, reasoning systems, and intelligent model orchestration.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    {/* CURRENT RESEARCH INTERESTS */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-l-4 border-electric-blue pl-6">
                                Current Research Interests
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed pl-7 max-w-sm">
                                I am actively exploring the mathematical and architectural foundations of these domains.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {interests.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="glass p-5 rounded-xl border border-white/5 hover:border-electric-blue/30 transition-colors flex items-center gap-4"
                                >
                                    <div className="text-electric-blue bg-white/5 p-2 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-300 text-sm font-medium leading-snug">
                                        {item.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/5" />

                    {/* PAPERS AND CONCEPTS UNDER STUDY */}
                    <div>
                        <div className="mb-10 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-neon-violet pl-6 inline-block">
                                Papers & Concepts Under Study
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {concepts.map((concept, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`glass rounded-2xl p-8 border-t-2 border-white/5 ${concept.accent.split(' ')[0]} transition-transform hover:-translate-y-1 hover:bg-white/[0.02]`}
                                >
                                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                                        {concept.title}
                                    </h3>
                                    <p className={`text-sm tracking-widest uppercase font-semibold mb-4 ${concept.accent.split(' ')[1]}`}>
                                        Study Focus
                                    </p>
                                    <p className="text-gray-400 font-light leading-relaxed text-sm">
                                        {concept.focus}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/5" />

                    {/* RESEARCH APPROACH */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-l-4 border-electric-blue pl-6">
                                Engineering Approach
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed pl-7 max-w-sm">
                                Theory is meaningless without execution. My research process is strictly deeply tied to implementation.
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <div className="glass rounded-2xl p-8 md:p-10 border border-white/5">
                                <ul className="space-y-6">
                                    {approaches.map((approach, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-1 min-w-1.5 h-1.5 rounded-full bg-neon-violet" />
                                            <span className="text-gray-300 font-light leading-relaxed">
                                                {approach}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CALL TO ACTION BUTTON */}
                    <div className="pt-12 flex justify-center">
                        <Link
                            to="/projects"
                            className="group flex items-center px-8 py-4 rounded-full border border-white/10 glass text-white font-semibold tracking-wide hover:border-electric-blue/50 hover:bg-white/5 transition-all duration-300"
                        >
                            View Engineered Systems
                            <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform text-electric-blue" />
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
