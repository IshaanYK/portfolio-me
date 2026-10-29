import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mammoth from 'mammoth';
import PageTransition from '../components/PageTransition';
import { X, Maximize2, Minimize2, Heart, Award, ArrowRight, Download, FileText, Cpu, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const [showDoc, setShowDoc] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isReacted, setIsReacted] = useState(false);
    const [docHtml, setDocHtml] = useState("");
    const [isDocLoading, setIsDocLoading] = useState(false);
    const location = useLocation();

    const docxUrl = `${import.meta.env.BASE_URL}arise_v12_architecture.docx`;

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
            fetch(docxUrl)
                .then(response => {
                    if (!response.ok) throw new Error("Document not found");
                    return response.arrayBuffer();
                })
                .then(arrayBuffer => mammoth.convertToHtml({ arrayBuffer }))
                .then(result => {
                    setDocHtml(result.value);
                    setIsDocLoading(false);
                })
                .catch(error => {
                    console.error("Error loading DOCX:", error);
                    setDocHtml("<p class='text-gray-400'>Architecture document preview is available via the project link.</p>");
                    setIsDocLoading(false);
                });
        }
    }, [showDoc, docHtml, docxUrl]);

    const stats = [
        { label: 'Global Rank (IIT Madras)', value: '5th' },
        { label: 'Global Rank (IIT Kanpur)', value: '11th' },
        { label: 'Dual Degree Pursuit', value: 'B.Tech + B.Sc' },
        { label: 'Verified Credentials', value: '25+' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } }
    };

    return (
        <PageTransition>
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center pt-8 pb-24 px-4 sm:px-6">

                {/* HERO BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-6 tracking-wider uppercase"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Software Engineer • AI & ML Specialist
                </motion.div>

                {/* HERO NAME */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight font-sans text-white"
                >
                    ISHAAN SEN
                </motion.h1>

                {/* SUBTITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl font-light tracking-wide"
                >
                    Local LLM Architectures • Multi-Agent Systems • Robotics Controls
                </motion.h2>

                {/* SUMMARY NARRATIVE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-sm md:text-base text-gray-400 max-w-2xl mb-10 leading-relaxed font-light space-y-2"
                >
                    <p>
                        Specializing in high-concurrency architecture development, computer-aided drug discovery systems, and global algorithmic hackathons.
                    </p>
                    <p>
                        Deeply experienced in building plug-and-play AI pipelines, embedded realtime controls, and full-stack software engines.
                    </p>
                </motion.div>

                {/* CTA BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="flex flex-wrap gap-3.5 justify-center mb-24"
                >
                    <Link
                        to="/projects"
                        className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs md:text-sm hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center gap-2"
                    >
                        Explore Projects <ArrowRight size={15} />
                    </Link>
                    <Link
                        to="/resume"
                        className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs md:text-sm transition-all flex items-center gap-2"
                    >
                        <FileText size={15} /> View Updated Resume
                    </Link>
                    <Link
                        to="/contact"
                        className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-xs md:text-sm transition-all"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* QUICK STATS SECTION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mb-28"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col items-center glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-white mb-1.5 font-mono">{stat.value}</span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest text-center">{stat.label}</span>
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
                    className="w-full max-w-4xl mb-28 flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 tracking-wider uppercase">
                        <Cpu size={14} className="text-white" />
                        Flagship Architecture
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white tracking-tight">
                        A.R.I.S.E. – Artificial Responsive Intelligent System Engine
                    </h3>
                    <p className="text-gray-400 max-w-2xl mb-8 leading-relaxed font-light text-sm md:text-base">
                        A fully local, modular AI assistant powered by a split-brain multi-model architecture for efficient offline intelligence. Runs entirely offline on consumer hardware with NVIDIA CUDA offloading and persistent SQLite vector memory.
                    </p>

                    {!showDoc && (
                        <div className="flex flex-wrap gap-3 justify-center">
                            <button
                                onClick={() => setShowDoc(true)}
                                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs transition-all cursor-pointer flex items-center gap-2"
                            >
                                <FileText size={14} /> Open Architecture DOCX
                            </button>
                            <Link
                                to="/projects"
                                className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all flex items-center gap-2"
                            >
                                All Engineered Projects →
                            </Link>
                        </div>
                    )}

                    {showDoc && (
                        <div className={`mt-8 w-full glass overflow-hidden relative transition-all duration-300 flex flex-col items-center border border-white/15 ${isExpanded ? 'fixed inset-0 z-[100] h-screen w-screen rounded-none !mt-0' : 'h-[650px] rounded-2xl relative'}`}>
                            {/* Viewer Toolbar */}
                            <div className="w-full flex justify-between items-center px-6 py-3.5 border-b border-white/10 bg-black/90 backdrop-blur-xl z-20 shrink-0">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-gray-200 font-mono text-xs tracking-wider uppercase">arise_v12_architecture.docx</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setIsReacted(!isReacted)}
                                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all text-xs font-mono cursor-pointer ${isReacted ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'}`}
                                    >
                                        <Heart size={14} className={isReacted ? 'fill-current' : ''} />
                                        <span>{isReacted ? '1' : '0'}</span>
                                    </button>

                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                                        title={isExpanded ? "Collapse View" : "Expand View"}
                                    >
                                        {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                                    </button>

                                    <button
                                        onClick={() => { setShowDoc(false); setIsExpanded(false); }}
                                        className="text-gray-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-400/10 transition-all cursor-pointer"
                                        title="Close Viewer"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Document Content */}
                            <div className="flex-1 w-full bg-[#0d0e11] relative flex justify-center overflow-y-auto p-4 md:p-8">
                                <div className="w-full max-w-4xl bg-white text-gray-900 shadow-2xl rounded-xl p-6 md:p-12 h-max min-h-full docx-content">
                                    {isDocLoading ? (
                                        <div className="flex flex-col items-center justify-center py-24 text-gray-500">
                                            <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mb-3"></div>
                                            <p className="text-xs font-mono uppercase tracking-wider">Rendering architecture document...</p>
                                        </div>
                                    ) : (
                                        <div
                                            className="prose prose-slate prose-sm md:prose-base max-w-none text-left w-full"
                                            dangerouslySetInnerHTML={{ __html: docHtml }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </motion.section>

                {/* CURRENT FOCUS */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-3xl mb-24 flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 tracking-wider uppercase">
                        <Terminal size={14} className="text-white" />
                        Active Research Vectors
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold mb-6 text-white tracking-tight">
                        Research & Systems Engineering Direction
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
                        {[
                            { title: "Offline Multi-Model Reasoning", desc: "Dynamic split-brain routing across specialized quantized SLMs" },
                            { title: "Computational Drug Discovery", desc: "High-throughput AI workflows at AI Bioscience Lab, TIT IncubationCentre" },
                            { title: "Autonomous UAV Flight Avionics", desc: "Low-level PID tuning and custom telemetry on Pixhawk microcontrollers" },
                            { title: "Real-Time Telephony AI", desc: "Sub-second speech-to-speech pipelines with ElevenLabs and Twilio" }
                        ].map((item, idx) => (
                            <div key={idx} className="glass p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                    {item.title}
                                </h4>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* FINAL CALL TO ACTION */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-3xl text-center glass p-8 md:p-12 rounded-3xl border border-white/10"
                >
                    <h3 className="text-2xl font-bold text-white mb-3">Open for Engineering Collaborations & Roles</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-6 max-w-xl mx-auto font-light leading-relaxed">
                        Looking for high-impact AI/ML engineering roles, autonomous robotics projects, or research fellowships.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            to="/resume"
                            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs transition-all"
                        >
                            Download Full CV
                        </Link>
                    </div>
                </motion.section>

            </div>
        </PageTransition>
    );
}
