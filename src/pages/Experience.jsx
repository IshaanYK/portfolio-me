import PageTransition from '../components/PageTransition';
import { Briefcase, Users, Calendar, Terminal, Trophy, GraduationCap, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocalData as useFirebaseData } from '../hooks/useLocalData';
import { education } from '../data/portfolioData';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const TimelineSection = ({ title, icon: Icon, items, delayOffset = 0 }) => (
    <section className="mb-20">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: delayOffset }}
            className="flex items-center justify-between mb-8 pb-3 border-b border-white/10"
        >
            <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
                <Icon className="mr-3 text-white" size={22} />
                {title}
            </h2>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                {items.length} Milestones
            </span>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-10 pb-4">
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: delayOffset + (idx * 0.1) }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Timeline dot */}
                    <div className="absolute w-3 h-3 bg-black border-2 border-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>

                    <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 gap-2">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-gray-100 transition-colors">
                                    {item.role}
                                </h3>
                                <h4 className="text-sm md:text-base font-medium mt-1 text-gray-300">
                                    {item.organization}
                                </h4>
                            </div>
                            {item.duration && (
                                <span className="self-start md:self-auto px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-gray-400">
                                    {item.duration}
                                </span>
                            )}
                        </div>

                        {item.description && (
                            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                                {item.description}
                            </p>
                        )}

                        {item.impact && item.impact.length > 0 && (
                            <div className="mt-3">
                                <ul className="space-y-2">
                                    {item.impact.map((point, i) => (
                                        <li key={i} className="flex items-start text-gray-400 text-xs md:text-sm font-light">
                                            <span className="text-white/40 mr-2.5 mt-1 text-[10px]">■</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default function Experience() {
    const { data: internshipsList, loading: internshipsLoading } = useFirebaseData('exp_internships');
    const { data: leadershipList, loading: leadershipLoading } = useFirebaseData('exp_leadership');
    const { data: eventsList, loading: eventsLoading } = useFirebaseData('exp_events');
    const { data: exposureList, loading: exposureLoading } = useFirebaseData('exp_exposure');

    const isLoading = internshipsLoading || leadershipLoading || eventsLoading || exposureLoading;

    const mapToTimeline = (firebaseData) => firebaseData.map(item => ({
        role: item.role,
        organization: item.company,
        duration: item.date,
        description: '',
        impact: item.highlights || []
    }));

    const internships = mapToTimeline(internshipsList);
    const leadership = mapToTimeline(leadershipList);
    const globalCompetitions = mapToTimeline(eventsList);
    const technicalExposure = mapToTimeline(exposureList);

    return (
        <PageTransition>
            <div className="w-full max-w-5xl mx-auto pb-28 px-4 sm:px-6">

                {/* HEADER */}
                <div className="mb-16 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 tracking-wider uppercase">
                        <Briefcase size={14} className="text-white" />
                        Professional Trajectory
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white font-sans">
                        Experience <span className="text-gradient">&</span> Leadership Journey
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
                        Industry internships, algorithmic hackathons, university leadership roles, and applied research engineering milestones.
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-32 space-y-4">
                        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Loading experience timeline...</p>
                    </div>
                ) : (
                    <div>
                        {/* 1. Global Hackathons & Competitive Wins */}
                        {globalCompetitions.length > 0 && (
                            <TimelineSection
                                title="Global Hackathons & Algorithmic Competitions"
                                icon={Trophy}
                                items={globalCompetitions}
                                delayOffset={0.1}
                            />
                        )}

                        {/* 2. Professional Internships */}
                        {internships.length > 0 && (
                            <TimelineSection
                                title="Engineering Internships & Industry Fellowships"
                                icon={Briefcase}
                                items={internships}
                                delayOffset={0.2}
                            />
                        )}

                        {/* 3. Leadership & Community */}
                        {leadership.length > 0 && (
                            <TimelineSection
                                title="Technical Head & Institutional Leadership"
                                icon={Users}
                                items={leadership}
                                delayOffset={0.3}
                            />
                        )}

                        {/* 4. Applied Engineering & High-End Exposure */}
                        {technicalExposure.length > 0 && (
                            <TimelineSection
                                title="Autonomous Robotics & Systems Prototypes"
                                icon={Terminal}
                                items={technicalExposure}
                                delayOffset={0.4}
                            />
                        )}

                        {/* 5. Formal Academic Education */}
                        <section className="mb-10">
                            <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                                <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
                                    <GraduationCap className="mr-3 text-white" size={22} />
                                    Academic Degrees & Education
                                </h2>
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                                    {education.length} Programs
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <h3 className="text-base md:text-lg font-bold text-white">{edu.institution}</h3>
                                            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 whitespace-nowrap">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-300 mb-1">{edu.degree}</p>
                                        <p className="text-xs font-mono text-gray-400 mb-4">{edu.location} • <strong className="text-white">{edu.score}</strong></p>

                                        {edu.highlights && (
                                            <ul className="space-y-1.5 pt-3 border-t border-white/5">
                                                {edu.highlights.map((h, i) => (
                                                    <li key={i} className="text-xs text-gray-400 font-light flex items-start">
                                                        <span className="text-white/40 mr-2 mt-0.5">■</span>
                                                        <span>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

            </div>
        </PageTransition>
    );
}
