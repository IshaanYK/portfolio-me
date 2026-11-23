import { motion } from 'framer-motion';
import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { ExternalLink, Github, FileText, Sparkles, Cpu, Layers, ShieldCheck, Activity, ArrowRight, Maximize2, RefreshCw, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function BeyondWeightSpace() {
    const [iframeKey, setIframeKey] = useState(0);

    const liveSiteUrl = "https://ishaanyk.github.io/beyond-weight-space/";
    const githubUrl = "https://github.com/IshaanYK/beyond-weight-space";
    const manuscriptUrl = "https://github.com/IshaanYK/beyond-weight-space/blob/main/docs/beyond_weight_space_programming_manuscript.md";

    const fourResults = [
        {
            num: "Result 1",
            title: "Breaks the 27B Scale Barrier",
            desc: "Fan et al. observed models below 27B collapsed when editing their own weights. SP-SV-WSP enables models as compact as 360M and 500M parameters to execute surgical self-rewriting safely.",
            stat: "< 1B Params",
            statLabel: "Hardware threshold for safe surgery",
            color: "text-teal-300",
            border: "border-teal-500/30"
        },
        {
            num: "Result 2",
            title: "Protects the Retained Manifold",
            desc: "Closed-form Tikhonov null-space projection confines rank-1 updates to orthogonal activation null spaces. 91.6% to 94.3% of failure attractors naturally reside in this orthogonal subspace.",
            stat: "99.97%",
            statLabel: "Activation invariance on retained corpus",
            color: "text-blue-300",
            border: "border-blue-500/30"
        },
        {
            num: "Result 3",
            title: "Repairs Failure Loops Cleanly",
            desc: "Adaptive margin calibration tunes update scale to flip discrete token argmax margins (Δz = 2.1 to 5.7). 100% of tested runaway repetition loops are broken without symbol corruption.",
            stat: "100%",
            statLabel: "Elimination of repetition attractors",
            color: "text-amber-300",
            border: "border-amber-500/30"
        },
        {
            num: "Result 4",
            title: "Bounds Spectral Drift by Theorem",
            desc: "Singular value drift strictly conforms to Weyl's perturbation inequality (|Δσ_i| ≤ γ||W||_F). Condition numbers remain stable (κ = 14.14 - 73.31) across all 32 layers with zero degeneration.",
            stat: "-0.28%",
            statLabel: "Perplexity drift on held-out Wikitext-2",
            color: "text-purple-300",
            border: "border-purple-500/30"
        }
    ];

    const benchmarks = [
        { metric: "Activation Manifold Invariance", baseline: "100.0%", unconstrained: "79.82% (-20.18% Bleed)", spsv: "99.97% (Safe Bound)", win: true },
        { metric: "Wikitext-2 Perplexity Drift", baseline: "42.38 (Clean)", unconstrained: "+16.71% (Severe Drift)", spsv: "-0.28% (Zero Degradation)", win: true },
        { metric: "Repetition Loop Breaking", baseline: "0.0% (Trapped)", unconstrained: "Degrades into '#?#?#'", spsv: "100.0% Clean Exit", win: true },
        { metric: "Runtime Inference Cost", baseline: "$0.00 / query", unconstrained: "$0.00 / query", spsv: "$0.00 / query (Instant)", win: true },
        { metric: "Scale Barrier Threshold", baseline: "N/A", unconstrained: "27B+ Required", spsv: "< 1B Parameters (360M / 500M)", win: true },
        { metric: "Optimizer / Gradient Requirement", baseline: "N/A", unconstrained: "Raw delta W", spsv: "Zero Gradients (Closed-Form)", win: true }
    ];

    return (
        <PageTransition>
            <div className="w-full max-w-6xl mx-auto pb-28 px-4 sm:px-6">

                {/* HERO HEADER */}
                <div className="mb-14 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/35 text-xs font-mono text-teal-300 mb-6 tracking-wider uppercase shadow-[0_0_15px_rgba(20,184,166,0.2)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                        AI &amp; Neural Architecture • Research Preprint
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white leading-tight font-sans max-w-4xl"
                    >
                        Beyond Weight-Space Programming <span className="text-teal-400">(SP-SV-WSP)</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl font-light leading-relaxed"
                    >
                        Language Models Can Rewrite Their Own Weights <span className="text-white font-medium">Without Collapsing</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm md:text-base text-gray-400 max-w-3xl mb-8 leading-relaxed font-light"
                    >
                        Democratizing autonomous neural weight surgery below the 27B parameter barrier identified by Jiajun Fan et al. (arXiv:2611.21885).
                        Through closed-form Tikhonov null-space projection, compact language models (360M and 500M) isolate failure attractors and repair their own representations with <strong>99.97% manifold invariance</strong>.
                    </motion.p>

                    {/* ACTION BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap gap-3.5 justify-center"
                    >
                        <a
                            href={liveSiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold text-xs md:text-sm hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.35)] flex items-center gap-2 group"
                        >
                            <span>Open Dedicated Research Website</span>
                            <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs md:text-sm transition-all flex items-center gap-2"
                        >
                            <Github size={15} />
                            <span>GitHub Source &amp; Code</span>
                        </a>
                        <a
                            href={manuscriptUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-xs md:text-sm transition-all flex items-center gap-2"
                        >
                            <FileText size={15} />
                            <span>Preprint Manuscript</span>
                        </a>
                    </motion.div>
                </div>

                {/* LIVE EMBEDDED RESEARCH PLATFORM */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-20 flex flex-col items-center"
                >
                    <div className="w-full glass rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl relative">
                        {/* Frame Header Toolbar */}
                        <div className="w-full flex flex-wrap justify-between items-center px-6 py-3.5 border-b border-white/10 bg-black/80 backdrop-blur-xl shrink-0 gap-3">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block"></span>
                                </div>
                                <span className="text-gray-300 font-mono text-xs hidden sm:inline">
                                    https://ishaanyk.github.io/beyond-weight-space/
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <button
                                    onClick={() => setIframeKey(k => k + 1)}
                                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                                    title="Reload interactive frame"
                                >
                                    <RefreshCw size={13} />
                                    <span className="hidden sm:inline">Reset</span>
                                </button>
                                <a
                                    href={liveSiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/40 text-teal-300 hover:text-teal-200 text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
                                >
                                    <Maximize2 size={13} />
                                    <span>Full View</span>
                                </a>
                            </div>
                        </div>

                        {/* Interactive iFrame */}
                        <div className="w-full h-[680px] bg-[#0f1216] relative">
                            <iframe
                                key={iframeKey}
                                src={liveSiteUrl}
                                title="Beyond Weight-Space Programming Interactive Research Site"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allow="fullscreen"
                            />
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                        <Sparkles size={13} className="text-teal-400" />
                        Interact directly above: test the 3D transformer canvas plates, damage the matrix, and sweep the repair laser scan line.
                    </p>
                </motion.section>

                {/* FOUR CORE RESULTS */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-xs font-mono text-teal-300 tracking-wider uppercase">Theoretical &amp; Empirical Breakthroughs</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">The Paper in Four Results</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fourResults.map((r, idx) => (
                            <div
                                key={idx}
                                className={`glass rounded-2xl p-7 border ${r.border} bg-white/[0.015] hover:bg-white/[0.03] transition-all flex flex-col justify-between`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">{r.num}</span>
                                        <ShieldCheck size={16} className={r.color} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2.5">{r.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">{r.desc}</p>
                                </div>
                                <div className="pt-4 border-t border-white/5 flex items-baseline justify-between">
                                    <span className={`text-2xl font-bold font-mono ${r.color}`}>{r.stat}</span>
                                    <span className="text-xs text-gray-400">{r.statLabel}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* MATHEMATICAL FOUNDATION */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 glass rounded-3xl p-8 md:p-10 border border-white/10"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Cpu size={16} className="text-teal-400" />
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Subspace Geometry</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Closed-Form Tikhonov Null-Space Projection</h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-6 max-w-3xl">
                        Unconstrained rank-1 updates (ΔW = -η v uᵀ) bleed heavily into the non-redundant representations of compact models.
                        SP-SV-WSP projects target vectors into the orthogonal complement of the empirical covariance matrix C_train:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                        <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs md:text-sm text-teal-300 flex flex-col justify-center">
                            <span className="text-[11px] text-gray-400 mb-1">Null-Space Projector:</span>
                            <code>P_null = I - C_train · (C_train + λI)⁻¹</code>
                        </div>
                        <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs md:text-sm text-blue-300 flex flex-col justify-center">
                            <span className="text-[11px] text-gray-400 mb-1">Adaptive Rank-1 Weight Update:</span>
                            <code>ΔW = -β* · v_target · (u_nullᵀ / (||u_null||² + ε))</code>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            <span>87.1% - 94.3% Natural Subspace Orthogonality</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            <span>Strict Weyl Perturbation Bound: |Δσ_i| ≤ γ||W||_F</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            <span>Zero Hyperparameter Search at Test-Time</span>
                        </div>
                    </div>
                </motion.section>

                {/* BENCHMARK COMPARATIVE TELEMETRY */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="text-center mb-10">
                        <span className="text-xs font-mono text-teal-300 tracking-wider uppercase">Empirical Verification</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">Comparative Architecture Benchmark</h2>
                    </div>

                    <div className="glass rounded-2xl border border-white/10 overflow-x-auto shadow-xl">
                        <table className="w-full text-left text-xs md:text-sm">
                            <thead className="bg-white/5 border-b border-white/10 text-gray-300 font-mono uppercase text-[11px]">
                                <tr>
                                    <th className="py-4 px-6">Evaluation Dimension</th>
                                    <th className="py-4 px-6">Pristine Baseline</th>
                                    <th className="py-4 px-6 text-rose-300">Unconstrained (Fan et al.)</th>
                                    <th className="py-4 px-6 text-teal-300">SP-SV-WSP (Ours)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                {benchmarks.map((b, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3.5 px-6 font-medium text-white">{b.metric}</td>
                                        <td className="py-3.5 px-6 font-mono text-gray-400">{b.baseline}</td>
                                        <td className="py-3.5 px-6 font-mono text-rose-400/90">{b.unconstrained}</td>
                                        <td className="py-3.5 px-6 font-mono text-teal-300 font-semibold">{b.spsv}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* FOOTER CALL TO ACTION */}
                <div className="text-center pt-8 border-t border-white/10 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-white mb-3">Explore the Full Interactive Platform</h3>
                    <p className="text-gray-400 text-sm max-w-xl mb-6 font-light">
                        Experience the live 3D transformer plate animations, inspect individual layer condition numbers, and test failure repair sequences in real time.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <a
                            href={liveSiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold text-xs md:text-sm hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.35)] flex items-center gap-2"
                        >
                            <span>Launch Live Research Website</span>
                            <ExternalLink size={15} />
                        </a>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs md:text-sm transition-all"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>

            </div>
        </PageTransition>
    );
}
