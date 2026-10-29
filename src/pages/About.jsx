import PageTransition from '../components/PageTransition';
import { Network, Microscope, Layers, BrainCircuit, Cpu, GitMerge, Rocket, Award, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function About() {
    return (
        <PageTransition>
            <div className="max-w-5xl mx-auto w-full pb-28 px-4 sm:px-6">

                {/* 1. Identity & Core Focus */}
                <div className="mb-20">
                    <div className="mb-12 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-3 tracking-wider uppercase">
                            Systems Engineer & AI Specialist
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                            About <span className="text-gradient">Ishaan Sen</span>
                        </h1>
                    </div>

                    <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden text-left border border-white/10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />

                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white relative z-10">
                            Engineering Identity & Research Philosophy
                        </h2>

                        <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed relative z-10 font-light">
                            <p>
                                I am a <strong className="text-white font-semibold">Software Engineer and AI & ML Specialist</strong> specializing in local LLM deployment, multi-agent cognitive frameworks, and robotics control systems.
                            </p>
                            <p>
                                Currently pursuing a <strong className="text-white font-medium">B.Tech in Computer Science & Engineering (AI & ML)</strong> at Technocrats Institute of Technology alongside a <strong className="text-white font-medium">B.Sc in Data Science and Applications at IIT Madras</strong>, my work bridges rigorous algorithmic theory with concrete systems engineering under real-world hardware constraints.
                            </p>
                            <p>
                                As <strong className="text-white font-medium">Technical Head at the AI Bioscience Lab (TIT IncubationCentre)</strong>, I lead workflows for high-throughput computational drug discovery. In competitive engineering, I ranked <strong className="text-white font-medium">5th globally</strong> in IIT Madras Compassion-A-Thon 3.0 out of 500+ teams and secured <strong className="text-white font-medium">11th place globally</strong> at Hack IIT Kanpur (C3iHub) out of 200 elite cryptography and threat hunting squads.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Academic Roadmap */}
                <div className="mb-20">
                    <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center text-white">
                        <GraduationCap className="mr-3 text-white" size={24} />
                        Dual Academic Foundation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.slice(0, 2).map((edu, idx) => (
                            <div key={idx} className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                                <span className="text-xs font-mono text-gray-400 block mb-1">{edu.period}</span>
                                <h3 className="text-lg font-bold text-white mb-1">{edu.institution}</h3>
                                <p className="text-sm font-medium text-gray-300 mb-2">{edu.degree}</p>
                                <p className="text-xs text-gray-400 mb-4">{edu.location} • <strong className="text-white">{edu.score}</strong></p>
                                <ul className="space-y-1.5 border-t border-white/5 pt-3">
                                    {edu.highlights.map((h, i) => (
                                        <li key={i} className="text-xs text-gray-400 font-light flex items-start">
                                            <span className="text-white/40 mr-2 mt-0.5">■</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. How I Think */}
                <div className="mb-20">
                    <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center text-white">
                        <Network className="mr-3 text-white" size={24} />
                        Architectural Principles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="glass p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                            <h3 className="text-lg font-bold text-white mb-3">Deterministic Architecture Over Monolithic Scale</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                                Scaling parameters indiscriminately often masks underlying structural inefficiencies. I design split-brain multi-model architectures that dynamically allocate tasks to compact, specialized quantized SLMs with deterministic tools and local vector memory.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                            <h3 className="text-lg font-bold text-white mb-3">Hardware-Aware Engineering</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                                From low-level C firmware and PID attitude loops on microcontrollers to CUDA layer offloading and VRAM budget tuning, software should respect and leverage the physical constraints of the execution environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Technical Vectors */}
                <div className="mb-20">
                    <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center text-white">
                        <Microscope className="mr-3 text-white" size={24} />
                        Current Technical Focus
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { title: 'Offline Quantized SLMs', desc: 'llama-cpp execution, GGUF compression, and multi-model routing without external cloud dependencies.', icon: <Layers size={20} /> },
                            { title: 'Autonomous Robotics', desc: 'Pixhawk microcontrollers, real-time PID attitude tuning, and dual-processor split-brain servo controls.', icon: <Cpu size={20} /> },
                            { title: 'Drug Discovery Workflows', desc: 'Accelerated cheminformatics and deep learning pipelines at AI Bioscience Lab.', icon: <BrainCircuit size={20} /> },
                            { title: 'High-Concurrency Systems', desc: 'Non-blocking multi-threaded sector scanning, asynchronous microservices, and audio streaming.', icon: <GitMerge size={20} /> },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-5 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all">
                                <div className="text-white shrink-0 mt-1">{item.icon}</div>
                                <div>
                                    <h3 className="text-white font-bold text-sm mb-1.5">{item.title}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Vision */}
                <div className="glass p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                    <div className="w-full max-w-2xl text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">Trajectory & Future Engineering</h2>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                            My trajectory is focused on architecting production-grade AI operating engines and autonomous physical platforms. I actively seek research fellowships, engineering roles, and system-level collaborations that push the frontier of intelligent reasoning.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border border-white/20 text-white shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                            <Rocket size={28} />
                        </div>
                    </div>
                </div>

            </div>
        </PageTransition>
    );
}
