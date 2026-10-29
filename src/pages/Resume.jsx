import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Download, ExternalLink, GraduationCap, Briefcase, Code, Award, CheckCircle2, Copy, Check } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Resume() {
    const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.origin + resumeUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <PageTransition>
            <div className="max-w-6xl mx-auto w-full pb-28 px-4 sm:px-6">

                {/* PAGE HEADER */}
                <div className="w-full mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-3 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Updated • Active Candidate
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight text-white font-sans">
                            Curriculum <span className="text-gradient">Vitae</span>
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base font-light">
                            Ishaan Sen • Software Engineer & AI / ML Specialist
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={handleCopy}
                            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-medium flex items-center gap-2 cursor-pointer"
                            title="Copy Direct PDF Link"
                        >
                            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                            {copied ? 'Link Copied' : 'Share PDF'}
                        </button>

                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all text-xs font-medium flex items-center gap-2"
                        >
                            <ExternalLink size={15} /> Open File
                        </a>

                        <a
                            href={resumeUrl}
                            download="Ishaan_Sen_Resume.pdf"
                            className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-gray-200 transition-all text-xs font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                        >
                            <Download size={15} /> Download PDF
                        </a>
                    </div>
                </div>

                {/* PDF VIEWER CONTAINER */}
                <div className="w-full mb-16">
                    <div className="w-full aspect-[1/1.4] md:aspect-auto md:h-[860px] glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative p-2 bg-[#0d0e11]">
                        <iframe
                            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                            className="w-full h-full rounded-xl bg-white"
                            title="Ishaan Sen Resume PDF"
                        />
                        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-8 text-center text-gray-400 bg-[#0d0e11]">
                            <p className="mb-4 text-sm font-light">
                                If the PDF viewer doesn't render in your mobile browser, you can read the live structured breakdown below or download directly.
                            </p>
                            <a
                                href={resumeUrl}
                                download="Ishaan_Sen_Resume.pdf"
                                className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold"
                            >
                                Download Ishaan_Sen_Resume.pdf
                            </a>
                        </div>
                    </div>
                </div>

                {/* STRUCTURED INTERACTIVE CV SUMMARY (Mobile-first fallback & quick inspection) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Summary & Education */}
                    <div className="lg:col-span-6 space-y-8">
                        {/* Executive Summary */}
                        <div className="glass p-7 rounded-2xl border border-white/10">
                            <h2 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2.5">
                                <span className="w-1.5 h-4 bg-white rounded-full"></span>
                                Executive Profile
                            </h2>
                            <p className="text-gray-300 text-sm font-light leading-relaxed">
                                Computer Science undergraduate specializing in local LLM deployment, multi-agent frameworks, and robotics. Proven track record in high-concurrency architecture development, computer-aided drug discovery systems, and global algorithmic hackathons. Deeply experienced in building plug-and-play AI pipelines, embedded realtime controls, and full-stack software engines.
                            </p>
                            <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                                <span>📍 Bhopal, India</span>
                                <span>📞 +91 7222949347</span>
                                <span>✉️ ishaansenres@gmail.com</span>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="glass p-7 rounded-2xl border border-white/10">
                            <h2 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2.5">
                                <GraduationCap size={18} className="text-white" />
                                Education
                            </h2>
                            <div className="space-y-6">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="pb-5 last:pb-0 border-b last:border-0 border-white/5">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <h3 className="text-sm font-bold text-white">{edu.institution}</h3>
                                            <span className="text-[11px] font-mono text-gray-400 whitespace-nowrap">{edu.period}</span>
                                        </div>
                                        <p className="text-xs text-gray-300 font-medium">{edu.degree}</p>
                                        <p className="text-[11px] text-gray-400 font-mono mt-0.5">{edu.location} • <strong className="text-white">{edu.score}</strong></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Key Highlights & Skills */}
                    <div className="lg:col-span-6 space-y-8">
                        {/* Key Hackathons & Leadership */}
                        <div className="glass p-7 rounded-2xl border border-white/10">
                            <h2 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2.5">
                                <Award size={18} className="text-white" />
                                Key Global Honors & Appointments
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-bold text-white">Compassion-A-Thon 3.0 | IIT Madras</span>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">Ranked 5th Globally</span>
                                    </div>
                                    <p className="text-xs text-gray-400 font-light">Solved complex algorithmic optimization bottlenecks out of 500+ elite teams.</p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-bold text-white">Hack IIT Kanpur | C3iHub</span>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-white border border-white/20">Ranked 11th Globally</span>
                                    </div>
                                    <p className="text-xs text-gray-400 font-light">Threat hunting, vulnerability assessment, and cryptography out of 200 select teams.</p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-bold text-white">Technical Head | AI Bioscience Lab, TIT</span>
                                        <span className="text-[10px] font-mono text-gray-400">Jan 2024 – Present</span>
                                    </div>
                                    <p className="text-xs text-gray-400 font-light">Directing AI strategy & prototyping workflows for computational drug discovery.</p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-bold text-white">Fellowship Intern • The Stemonef Enterprises</span>
                                        <span className="text-[10px] font-mono text-gray-400">Mar – June 2026</span>
                                    </div>
                                    <p className="text-xs text-gray-400 font-light">Turbo Quant machine learning frameworks for Project GAIA, EPOACH & STEAMI.</p>
                                </div>
                            </div>
                        </div>

                        {/* Core Skills Snapshot */}
                        <div className="glass p-7 rounded-2xl border border-white/10">
                            <h2 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2.5">
                                <Code size={18} className="text-white" />
                                Technical Skills Snapshot
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-mono uppercase text-gray-400 block mb-2">Languages</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['Python', 'C', 'C++', 'Java', 'HTML/CSS'].map((item, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-200">{item}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs font-mono uppercase text-gray-400 block mb-2">AI, ML & Dev</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['TensorFlow', 'OpenCV', 'Scikit-learn', 'NLP (spaCy)', 'Model Quantization', 'Vector DBs', 'FastAPI', 'Tkinter', 'Blender', 'Git', 'Linux'].map((item, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-200">{item}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs font-mono uppercase text-gray-400 block mb-2">Hardware & Core Robotics</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['Arduino', 'ESP32', 'Pixhawk Microcontrollers', 'IoT Systems', 'Low-level PID Tuning', 'Drone Fabrication'].map((item, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-200">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </PageTransition>
    );
}
