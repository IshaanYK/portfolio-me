import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mammoth from 'mammoth';
import PageTransition from '../components/PageTransition';
import { X, Maximize2, Minimize2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const [showDoc, setShowDoc] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isReacted, setIsReacted] = useState(false);
    const [docHtml, setDocHtml] = useState("");
    const [isDocLoading, setIsDocLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#arise-architecture') {
            setShowDoc(true);
            setTimeout(() => {
                const element = document.getElementById('featured-project');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        if (showDoc && !docHtml) {
            setIsDocLoading(true);
            fetch('/arise_v12_architecture.docx')
                .then(response => response.arrayBuffer())
                .then(arrayBuffer => mammoth.convertToHtml({ arrayBuffer }))
                .then(result => {
                    setDocHtml(result.value);
                    setIsDocLoading(false);
                })
                .catch(error => {
                    console.error("Error loading DOCX:", error);
                    setDocHtml("<p>Error loading document.</p>");
                    setIsDocLoading(false);
                });
        }
    }, [showDoc, docHtml]);

    const stats = [
        { label: 'Projects Built', value: '10+' },
        { label: 'Hackathons', value: '4+' },
        { label: 'AI Assistant Developed', value: '1' },
        { label: 'Technologies Mastered', value: '7+' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
    };

    return (
        <PageTransition>
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center pt-10 pb-20">
                {/* HERO SECTION */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                >
                    <span className="text-gradient">ISHAAN SEN</span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl font-light tracking-wide"
                >
                    Robotics AI | AIML | AI Development | Intelligent Systems Research
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-md md:text-lg text-gray-400 max-w-3xl mb-10 leading-relaxed space-y-2"
                >
                    <p>I build AI-driven systems, models, and LLM architectures that automate engineering workflows.</p>
                    <p>Currently developing A.R.I.S.E. and conducting advanced AI/ML research in intelligent reasoning systems.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-wrap gap-4 justify-center mb-24"
                >
                    <Link to="/projects" className="px-8 py-3 rounded-full bg-white text-dark-bg font-semibold hover:scale-105 transition-all duration-300 cursor-none">
                        View Projects →
                    </Link>
                    <Link to="/research" className="px-8 py-3 rounded-full border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 cursor-none">
                        View Research →
                    </Link>
                    <Link to="/contact" className="px-8 py-3 rounded-full border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 cursor-none">
                        Contact
                    </Link>
                </motion.div>

                {/* QUICK STATS SECTION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-32"
                >
                    {stats.map((stat, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                            <span className="text-4xl font-bold text-gradient mb-2">{stat.value}</span>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* FEATURED PROJECT SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    id="featured-project"
                    className="w-full max-w-4xl mb-32 flex flex-col items-center text-center"
                >
                    <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase mb-6">Featured Project</h3>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">A.R.I.S.E. – Artificial Responsive Intelligent System Engine</h4>
                    <div className="text-gray-400 max-w-2xl mb-10 space-y-2 leading-relaxed">
                        <p>A fully local, modular AI system running entirely offline via llama-cpp with CUDA offloading and persistent vector memory.</p>
                        <p>A.R.I.S.E. uses a split-brain routing architecture to dynamically switch between specialized quantized models, prioritizing architectural execution intelligence over brute-force monolithic scale.</p>
                    </div>
                    {!showDoc && (
                        <button
                            onClick={() => setShowDoc(true)}
                            className="px-8 py-3 rounded-full border border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-dark-bg transition-colors duration-300 font-medium cursor-none"
                        >
                            view ARISE Architecture
                        </button>
                    )}

                    {showDoc && (
                        <div className={`mt-10 w-full glass overflow-hidden relative transition-all duration-300 flex flex-col items-center ${isExpanded ? 'fixed inset-0 z-[100] h-screen w-screen rounded-none !mt-0' : 'h-[700px] rounded-xl relative'}`}>
                            {/* Viewer Toolbar */}
                            <div className="w-full flex justify-between items-center px-6 py-4 border-b border-white/10 bg-dark-bg/80 backdrop-blur-xl z-20 shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                                    <h4 className="text-gray-200 font-semibold text-xs tracking-[0.15em] uppercase">arise_v12_architecture.docx</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* React Button */}
                                    <button
                                        onClick={() => setIsReacted(!isReacted)}
                                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 cursor-none ${isReacted ? 'bg-red-500/20 text-red-500 border border-red-500/50 scale-105 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/10 hover:border-white/20'}`}
                                        title="React to Document"
                                    >
                                        <Heart size={16} className={`${isReacted ? 'fill-current' : ''}`} />
                                        <span className="text-sm font-bold">{isReacted ? '1' : '0'}</span>
                                    </button>

                                    {/* Size/Expand Button */}
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-none p-2 rounded-full"
                                        title={isExpanded ? "Collapse View" : "Expand View"}
                                    >
                                        {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                                    </button>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => { setShowDoc(false); setIsExpanded(false); }}
                                        className="text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-colors cursor-none p-2 rounded-full"
                                        title="Close Viewer"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Document Content Area */}
                            <div className="flex-1 w-full bg-[#e5e7eb] relative flex justify-center overflow-y-auto cursor-default p-4 md:p-8">
                                <div className="w-full max-w-4xl bg-white shadow-2xl rounded-sm p-8 md:p-16 h-max min-h-full docx-content">
                                    {isDocLoading ? (
                                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                            <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                                            <p>Rendering local architecture document...</p>
                                        </div>
                                    ) : (
                                        <div
                                            className="prose prose-slate prose-sm md:prose-base max-w-none text-left w-full
                                            prose-headings:font-bold prose-headings:text-left prose-h1:text-3xl prose-h2:text-2xl 
                                            prose-p:text-gray-800 prose-p:text-left prose-p:leading-relaxed
                                            prose-a:text-gray-600 prose-li:text-gray-800 select-none"
                                            onCopy={(e) => e.preventDefault()}
                                            onCut={(e) => e.preventDefault()}
                                            onContextMenu={(e) => e.preventDefault()}
                                            dangerouslySetInnerHTML={{ __html: docHtml }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </motion.section>

                {/* RESEARCH FOCUS PREVIEW */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    id="research-preview"
                    className="w-full max-w-4xl mb-32 flex flex-col items-center text-center"
                >
                    <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase mb-8">Current Research Focus</h3>
                    <ul className="text-gray-300 space-y-4 mb-12 text-left w-full max-w-2xl list-none">
                        <li className="glass px-8 py-5 rounded-lg border-l-4 border-l-white flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                            <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
                            Large Language Model (LLM) reasoning systems
                        </li>
                        <li className="glass px-8 py-5 rounded-lg border-l-4 border-l-gray-400 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                            <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse mt-0.5"></div>
                            Oscillator-based neural modeling concepts
                        </li>
                        <li className="glass px-8 py-5 rounded-lg border-l-4 border-l-white flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                            <div className="h-2 w-2 rounded-full bg-white animate-pulse mt-0.5"></div>
                            Attention mechanisms & Transformer architectures
                        </li>
                        <li className="glass px-8 py-5 rounded-lg border-l-4 border-l-gray-400 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                            <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse mt-0.5"></div>
                            Advanced research in computational attention systems
                        </li>
                    </ul>
                    <Link to="/research" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white transition-colors duration-300 cursor-none">
                        Explore Research →
                    </Link>
                </motion.section>

                {/* FINAL CALL TO ACTION */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="w-full max-w-2xl text-center glass p-12 rounded-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10">
                        Interested in AI research collaborations, internships, or building intelligent systems together? Let's connect.
                    </p>
                    <Link to="/contact" className="px-8 py-3 rounded-full bg-white text-dark-bg font-bold hover:scale-105 transition-all duration-300 inline-block relative z-10 cursor-none">
                        Contact Me
                    </Link>
                </motion.section>
            </div>
        </PageTransition>
    );
}
