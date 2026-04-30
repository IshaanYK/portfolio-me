import PageTransition from '../components/PageTransition';
import { Network, Microscope, Layers, BrainCircuit, Cpu, GitMerge, Rocket } from 'lucide-react';

export default function About() {
    return (
        <PageTransition>
            <div className="max-w-5xl mx-auto w-full pb-20">
                {/* 1. Identity & Core Focus */}
                <div className="mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
                        <span className="text-gradient">About</span>
                    </h1>
                    <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden text-left border border-white/5">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />

                        <h2 className="text-2xl font-bold mb-6 text-white relative z-10">
                            Identity & Core Focus
                        </h2>

                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed relative z-10 font-light text-left">
                            <p>
                                I am an <strong className="text-white font-semibold flex-1">AI Developer and Research-Oriented Systems Engineer</strong> focused on building intelligent architectures that combine advanced models, reasoning frameworks, and engineered systems.
                            </p>
                            <p>
                                While currently expanding my formal foundation at a technology-focused institute, my primary focus lies in the practical and theoretical engineering of cognitive systems. The core of my work explores how intelligence can be embedded effectively into real-world applications.
                            </p>
                            <p>
                                My expertise centers around <strong className="text-electric-blue font-semibold">Transformer-based architectures, Large Language Models (LLMs), Vision-Language Models (VLMs), and robust NLP systems</strong>. I design intelligence pipelines specifically for autonomous systems—such as robotic platforms, drones, and complex engineered environments—ensuring seamless model integration across modalities without being restricted to a single domain.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. How I Think */}
                <div className="mb-20">
                    <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center text-left">
                        <Network className="mr-4 text-neon-violet" />
                        Systems & Research Mindset
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="glass p-8 rounded-xl border-l-2 border-electric-blue hover:bg-white/[0.02] transition-colors border-y border-r border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4">Structural Thinking</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                Execution follows design. I prioritize deep structural thinking before writing code, breaking down complex system architectures into manageable, evaluable components and rigorously assessing technological feasibility.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-xl border-l-2 border-neon-violet hover:bg-white/[0.02] transition-colors border-y border-r border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4">The Development Loop</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                My approach follows a strict, repeatable pipeline: research <span className="text-electric-blue mx-2 font-bold">→</span> experimentation <span className="text-electric-blue mx-2 font-bold">→</span> refinement <span className="text-electric-blue mx-2 font-bold">→</span> deployment. I focus on designing modular intelligence pipelines that ensure clean reasoning flow and maintainable system integration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Technical Direction */}
                <div className="mb-20">
                    <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center text-left">
                        <Microscope className="mr-4 text-electric-blue" />
                        Technical Direction & Current Exploration
                    </h2>
                    <div className="glass p-8 md:p-10 rounded-2xl text-left border border-white/5">
                        <p className="text-gray-300 md:text-lg mb-10 font-light leading-relaxed">
                            My goal is to construct and improve fundamental AI systems, moving beyond simply utilizing pre-trained APIs toward orchestrating unified intelligent engines. My current research and development focus includes:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Transformer Architectures', desc: 'Exploration of attention mechanisms and internal model representations.', icon: <Layers size={22} /> },
                                { title: 'Multimodal AI', desc: 'Engineering systems that process and reason across text, vision, and sensory data.', icon: <BrainCircuit size={22} /> },
                                { title: 'Robotics Integration', desc: 'Embedding lightweight, responsive AI intelligence into physical autonomous platforms.', icon: <Cpu size={22} /> },
                                { title: 'Model Orchestration', desc: 'Developing frameworks to combine specialized AI subsystems into cohesive engines.', icon: <GitMerge size={22} /> },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="text-electric-blue shrink-0 mt-0.5">{item.icon}</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Direction & Growth */}
                <div>
                    <div className="glass p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden text-center md:text-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full max-w-2xl">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Direction & Growth</h2>
                            <p className="text-gray-400 leading-relaxed md:text-lg font-light">
                                Ultimately, my trajectory is directed toward building comprehensive AI operating systems and contributing to advanced AI research. I am actively growing toward dedicated research engineering roles where pushing the boundaries of cognitive architectures is the primary objective.
                            </p>
                        </div>

                        <div className="relative z-10 shrink-0 md:pl-4">
                            <div className="w-20 h-20 rounded-full glass flex items-center justify-center border border-electric-blue/30 shadow-[0_0_30px_rgba(190,242,100,0.15)] mx-auto md:mx-0">
                                <Rocket className="text-electric-blue" size={36} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </PageTransition>
    );
}
