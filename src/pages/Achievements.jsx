import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { X, Award, Medal, Users, Image as ImageIcon } from 'lucide-react';
import { useLocalData as useFirebaseData } from '../hooks/useLocalData';

export default function Achievements() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Fetch data from Firebase
    const { data: certs, loading: certsLoading } = useFirebaseData('certs');
    const { data: competitions, loading: compsLoading } = useFirebaseData('competitions');
    const { data: leadership, loading: leadLoading } = useFirebaseData('leadership');
    const { data: gallery, loading: galLoading } = useFirebaseData('gallery');

    const isLoading = certsLoading || compsLoading || leadLoading || galLoading;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <PageTransition>
            <div className="w-full max-w-5xl mx-auto pb-24 px-4 sm:px-6">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Technical Milestones <span className="text-gradient block mt-2 md:inline md:mt-0">&</span> Leadership Engagements
                    </h1>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed">
                        Selected certifications, competitive wins, and institutional engagements reflecting applied engineering and AI systems development.
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-32 space-y-4">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-400 font-semibold tracking-widest uppercase text-sm">Loading Database...</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-20">

                        {/* SECTION 1 - EVENT PHOTO GALLERY (PRIORITIZED) */}
                        <section>
                            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 flex items-center border-l-4 border-white pl-4">
                                <ImageIcon className="mr-3 text-white" size={24} />
                                Event Highlights & Technical Engagements
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {gallery.map((g, idx) => (
                                    <motion.div key={idx} variants={itemVariants} className="relative group overflow-hidden rounded-xl border border-white/5 cursor-pointer bg-black/50" onClick={() => setSelectedImage(g.img)}>
                                        <div className="w-full h-48 bg-white/5 flex items-center justify-center">
                                            <img
                                                src={g.img}
                                                alt={g.caption}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                            <p className="text-white text-sm md:text-base font-medium text-center tracking-wide">{g.caption}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        {/* SECTION 2 - CERTIFICATIONS & PROGRAMS */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="text-2xl font-bold mb-8 flex items-center border-l-4 border-gray-400 pl-4"
                            >
                                <Award className="mr-3 text-white" size={24} />
                                Certifications & Programs
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {certs.map((c, idx) => (
                                    <motion.div key={idx} variants={itemVariants} className="glass p-6 rounded-2xl border border-white/5 hover:border-white/30 transition-colors flex flex-col h-full group">
                                        <div className="w-full h-40 mb-5 overflow-hidden rounded-lg bg-black/40 border border-white/10 relative">
                                            <img
                                                src={c.img}
                                                alt={c.title}
                                                loading="lazy"
                                                decoding="async"
                                                width="400"
                                                height="300"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-1 leading-snug">{c.title}</h3>
                                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">{c.org} | {c.year}</p>
                                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">{c.relevance}</p>
                                        <button
                                            onClick={() => setSelectedImage(c.img)}
                                            className="mt-auto w-full py-2.5 rounded-lg border border-white/10 text-xs font-semibold tracking-wide text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all pointer-events-auto z-10 relative"
                                        >
                                            View Certificate
                                        </button>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        {/* SECTION 2 - COMPETITIONS & ENGINEERING WINS */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="text-2xl font-bold mb-8 flex items-center border-l-4 border-white pl-4"
                            >
                                <Medal className="mr-3 text-white" size={24} />
                                Competitive Engineering & Applied Innovation
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                            >
                                {competitions.map((c, idx) => (
                                    <motion.div key={idx} variants={itemVariants} className="glass p-6 rounded-2xl border border-white/5 hover:border-white/30 transition-colors flex flex-col h-full group">
                                        <div className="w-full h-40 mb-5 overflow-hidden rounded-lg bg-black/40 border border-white/10 relative cursor-pointer" onClick={() => c.img && setSelectedImage(c.img)}>
                                            {c.video ? (
                                                <video
                                                    src={c.video}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                                                />
                                            ) : (
                                                <img
                                                    src={c.img}
                                                    alt={c.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="400"
                                                    height="300"
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-1 leading-snug">{c.title}</h3>
                                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">{c.org}</p>
                                        <p className="text-gray-400 text-sm font-light leading-relaxed">{c.relevance}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        {/* SECTION 3 - EVENT LEADERSHIP */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="text-2xl font-bold mb-8 flex items-center border-l-4 border-gray-400 pl-4"
                            >
                                <Users className="mr-3 text-white" size={24} />
                                Technical Community & Institutional Leadership
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {leadership.map((l, idx) => (
                                    <motion.div key={idx} variants={itemVariants} className="glass p-5 rounded-2xl border border-white/5 hover:border-white/30 transition-colors flex flex-col group">
                                        <div className="w-full h-32 mb-4 overflow-hidden rounded-lg bg-black/40 border border-white/10 cursor-pointer" onClick={() => setSelectedImage(l.img)}>
                                            <img
                                                src={l.img}
                                                alt={l.title}
                                                loading="lazy"
                                                decoding="async"
                                                width="300"
                                                height="200"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-base font-bold text-white mb-2 leading-snug">{l.title}</h3>
                                        <p className="text-gray-400 text-xs font-light leading-relaxed">{l.relevance}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>
                    </div>
                )}

                {/* HIGH-RES IMAGE MODAL */}
                {createPortal(
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
                                onClick={() => setSelectedImage(null)}
                            >
                                <button
                                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/20 z-[10000]"
                                    onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                                >
                                    <X size={28} />
                                </button>

                                <motion.img
                                    key={selectedImage}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    src={selectedImage}
                                    alt="High Resolution View"
                                    className="max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 relative z-[9999]"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </PageTransition>
    );
}

