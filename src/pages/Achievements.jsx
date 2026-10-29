import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { X, Award, Medal, Users, Image as ImageIcon, ExternalLink, Trophy, ShieldCheck, Sparkles } from 'lucide-react';
import { useLocalData as useFirebaseData } from '../hooks/useLocalData';

function CertificateImage({ src, alt, className, fallbackTitle, fallbackOrg }) {
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    if (hasError || !src) {
        return (
            <div className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-lg text-center ${className}`}>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 text-gray-300">
                    <Award size={20} />
                </div>
                <span className="text-xs font-semibold text-white line-clamp-1">{fallbackTitle || 'Verified Credential'}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{fallbackOrg || 'Engineering Honor'}</span>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full overflow-hidden bg-black/40">
            {!isLoaded && (
                <div className="absolute inset-0 bg-white/[0.02] animate-pulse flex items-center justify-center">
                    <Award size={18} className="text-gray-600" />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}

export default function Achievements() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    // Fetch data from local store
    const { data: certs, loading: certsLoading } = useFirebaseData('certs');
    const { data: competitions, loading: compsLoading } = useFirebaseData('competitions');
    const { data: leadership, loading: leadLoading } = useFirebaseData('leadership');
    const { data: gallery, loading: galLoading } = useFirebaseData('gallery');

    const isLoading = certsLoading || compsLoading || leadLoading || galLoading;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } }
    };

    const tabs = [
        { id: 'all', label: 'All Milestones' },
        { id: 'global', label: 'Global Hackathons & Wins' },
        { id: 'certs', label: `Certifications (${certs?.length || 0})` },
        { id: 'leadership', label: `Leadership & Roles (${leadership?.length || 0})` },
        { id: 'gallery', label: 'Event Photo Gallery' }
    ];

    return (
        <PageTransition>
            <div className="w-full max-w-6xl mx-auto pb-28 px-4 sm:px-6">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-14 text-center flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-4 tracking-wider uppercase">
                        <Trophy size={14} className="text-amber-400" />
                        Verified Credentials & Honors
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white font-sans">
                        Technical Milestones <span className="text-gradient">&</span> Global Honors
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
                        International competitive finishes, verified engineering credentials, and institutional leadership roles driving advanced AI systems.
                    </p>
                </motion.div>

                {/* FILTER PILLS */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                activeTab === tab.id
                                    ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-32 space-y-4">
                        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Loading verified database...</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-20">

                        {/* SECTION: GLOBAL WINS & HACKATHONS */}
                        {(activeTab === 'all' || activeTab === 'global') && (
                            <section>
                                <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                                    <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
                                        <Trophy className="mr-3 text-amber-400" size={24} />
                                        Global Competitive Wins & Applied Engineering
                                    </h2>
                                    <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
                                        {competitions.length} Entries
                                    </span>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {competitions.map((c, idx) => (
                                        <motion.div
                                            key={c.id || idx}
                                            variants={itemVariants}
                                            className={`glass p-6 rounded-2xl border transition-all duration-300 flex flex-col h-full group ${
                                                c.highlight
                                                    ? 'border-amber-400/30 bg-gradient-to-b from-amber-500/[0.06] to-transparent shadow-[0_0_30px_rgba(251,191,36,0.08)]'
                                                    : 'border-white/5 hover:border-white/20'
                                            }`}
                                        >
                                            {/* Media Header */}
                                            <div className="w-full h-44 mb-5 overflow-hidden rounded-xl bg-black/40 border border-white/10 relative cursor-pointer" onClick={() => c.img && setSelectedImage(c.img)}>
                                                {c.video ? (
                                                    <video
                                                        src={c.video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                ) : c.img ? (
                                                    <CertificateImage
                                                        src={c.img}
                                                        alt={c.title}
                                                        fallbackTitle={c.title}
                                                        fallbackOrg={c.org}
                                                        className="w-full h-full object-cover group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-500/10 to-transparent">
                                                        <Sparkles className="text-amber-400 mb-2" size={28} />
                                                        <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">{c.rank || 'Global Honor'}</span>
                                                        <span className="text-[11px] text-gray-400 mt-1">{c.org}</span>
                                                    </div>
                                                )}

                                                {/* Rank Badge */}
                                                {c.badge && (
                                                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 flex items-center gap-1 shadow-lg">
                                                        <Trophy size={11} />
                                                        {c.badge}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between gap-2 mb-2">
                                                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                                                    {c.title}
                                                </h3>
                                            </div>

                                            <p className="text-xs uppercase tracking-widest text-gray-400 font-mono mb-3">
                                                {c.org} {c.year ? `• ${c.year}` : ''}
                                            </p>

                                            <p className="text-gray-300 text-sm font-light leading-relaxed mb-6 flex-grow">
                                                {c.relevance}
                                            </p>

                                            {c.img && (
                                                <button
                                                    onClick={() => setSelectedImage(c.img)}
                                                    className="mt-auto w-full py-2.5 rounded-lg border border-white/10 text-xs font-semibold tracking-wide text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                                                >
                                                    <Award size={14} />
                                                    View Certificate
                                                </button>
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>
                        )}

                        {/* SECTION: CERTIFICATIONS */}
                        {(activeTab === 'all' || activeTab === 'certs') && (
                            <section>
                                <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                                    <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
                                        <Award className="mr-3 text-white" size={24} />
                                        Professional Certifications & Industry Simulations
                                    </h2>
                                    <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
                                        {certs.length} Verified
                                    </span>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {certs.map((c, idx) => (
                                        <motion.div
                                            key={c.id || idx}
                                            variants={itemVariants}
                                            className="glass p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col h-full group"
                                        >
                                            <div
                                                className="w-full h-40 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/10 relative cursor-pointer"
                                                onClick={() => setSelectedImage(c.img)}
                                            >
                                                <CertificateImage
                                                    src={c.img}
                                                    alt={c.title}
                                                    fallbackTitle={c.title}
                                                    fallbackOrg={c.org}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>

                                            <h3 className="text-base font-bold text-white mb-1 leading-snug line-clamp-1 group-hover:text-gray-100">
                                                {c.title}
                                            </h3>
                                            <p className="text-[11px] uppercase tracking-wider text-gray-400 font-mono mb-2">
                                                {c.org} | {c.year}
                                            </p>
                                            <p className="text-gray-400 text-xs font-light leading-relaxed mb-4 flex-grow line-clamp-2">
                                                {c.relevance}
                                            </p>

                                            <button
                                                onClick={() => setSelectedImage(c.img)}
                                                className="mt-auto w-full py-2 rounded-lg border border-white/10 text-xs font-medium tracking-wide text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                                            >
                                                <ExternalLink size={12} />
                                                View Credential
                                            </button>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>
                        )}

                        {/* SECTION: LEADERSHIP & INSTITUTIONAL ROLES */}
                        {(activeTab === 'all' || activeTab === 'leadership') && (
                            <section>
                                <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                                    <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
                                        <Users className="mr-3 text-white" size={24} />
                                        Technical Community & Institutional Appointments
                                    </h2>
                                    <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
                                        {leadership.length} Records
                                    </span>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {leadership.map((l, idx) => (
                                        <motion.div
                                            key={l.id || idx}
                                            variants={itemVariants}
                                            className={`glass p-5 rounded-2xl border transition-all duration-300 flex flex-col group ${
                                                l.highlight
                                                    ? 'border-white/20 bg-gradient-to-b from-white/[0.05] to-transparent'
                                                    : 'border-white/5 hover:border-white/20'
                                            }`}
                                        >
                                            <div
                                                className="w-full h-36 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/10 relative cursor-pointer"
                                                onClick={() => l.img && setSelectedImage(l.img)}
                                            >
                                                {l.img ? (
                                                    <CertificateImage
                                                        src={l.img}
                                                        alt={l.title}
                                                        fallbackTitle={l.title}
                                                        fallbackOrg={l.org}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white/10 to-transparent">
                                                        <ShieldCheck className="text-white mb-2" size={26} />
                                                        <span className="text-xs font-bold text-white tracking-wider uppercase text-center">{l.title}</span>
                                                        <span className="text-[11px] text-gray-400 mt-1">{l.org}</span>
                                                    </div>
                                                )}

                                                {l.badge && (
                                                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-gray-200">
                                                        {l.badge}
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-base font-bold text-white mb-1 leading-snug">{l.title}</h3>
                                            <p className="text-[11px] uppercase tracking-wider text-gray-400 font-mono mb-2">
                                                {l.org} {l.year ? `• ${l.year}` : ''}
                                            </p>
                                            <p className="text-gray-300 text-xs font-light leading-relaxed flex-grow">{l.relevance}</p>

                                            {l.img && (
                                                <button
                                                    onClick={() => setSelectedImage(l.img)}
                                                    className="mt-4 w-full py-2 rounded-lg border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                                                >
                                                    <ExternalLink size={12} />
                                                    View Appointment Letter
                                                </button>
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>
                        )}

                        {/* SECTION: PHOTO GALLERY */}
                        {(activeTab === 'all' || activeTab === 'gallery') && (
                            <section>
                                <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                                    <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
                                        <ImageIcon className="mr-3 text-white" size={24} />
                                        Event Highlights & Field Deployments
                                    </h2>
                                    <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
                                        {gallery.length} Photos
                                    </span>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                                >
                                    {gallery.map((g, idx) => (
                                        <motion.div
                                            key={g.id || idx}
                                            variants={itemVariants}
                                            className="relative group overflow-hidden rounded-2xl border border-white/10 cursor-pointer bg-black/50 aspect-[4/3]"
                                            onClick={() => setSelectedImage(g.img)}
                                        >
                                            <CertificateImage
                                                src={g.img}
                                                alt={g.caption}
                                                fallbackTitle={g.caption}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                                <p className="text-white text-xs md:text-sm font-medium tracking-wide leading-relaxed">
                                                    {g.caption}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>
                        )}

                    </div>
                )}

                {/* HIGH-RES LIGHTBOX MODAL */}
                {createPortal(
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
                                onClick={() => setSelectedImage(null)}
                            >
                                <button
                                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/20 z-[10000] cursor-pointer"
                                    onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                                    title="Close Preview"
                                >
                                    <X size={24} />
                                </button>

                                <motion.div
                                    key={selectedImage}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="max-w-[95vw] max-h-[88vh] flex flex-col items-center relative z-[9999]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={selectedImage}
                                        alt="Credential Full View"
                                        className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.9)] border border-white/20"
                                    />
                                    <div className="mt-3 flex gap-3">
                                        <a
                                            href={selectedImage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-all flex items-center gap-1.5"
                                        >
                                            <ExternalLink size={13} /> Open Original in New Tab
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </PageTransition>
    );
}
