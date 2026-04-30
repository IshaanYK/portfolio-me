import PageTransition from '../components/PageTransition';
import { Briefcase, Users, Calendar, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocalData as useFirebaseData } from '../hooks/useLocalData';

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const TimelineSection = ({ title, icon: Icon, colorClass, items, delayOffset = 0 }) => (
    <section className="mb-20">
        <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: delayOffset }}
            className={`text-2xl font-bold mb-10 flex items-center border-l-4 pl-4 ${colorClass}`}
        >
            <Icon className={`mr-3 ${colorClass.replace('border-', 'text-')}`} size={24} />
            {title}
        </motion.h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-4">
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: delayOffset + (idx * 0.15) }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Subtle timeline dot */}
                    <div className="absolute w-3 h-3 bg-dark-bg border-2 border-white/40 rounded-full -left-[6.5px] top-2 shadow-[0_0_8px_rgba(255,255,255,0.05)]"></div>

                    <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{item.role}</h3>
                                <h4 className={`text-lg font-medium mt-1 ${colorClass.replace('border-', 'text-')}`}>{item.organization}</h4>
                            </div>
                            {item.duration && (
                                <div className="flex flex-col items-start md:items-end mt-1 md:mt-0">
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-400">
                                        {item.duration}
                                    </span>
                                </div>
                            )}
                        </div>

                        {item.description && (
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 font-light">
                                {item.description}
                            </p>
                        )}

                        {item.impact && item.impact.length > 0 && (
                            <div className="mt-4">
                                <ul className="space-y-2.5">
                                    {item.impact.map((point, i) => (
                                        <li key={i} className="flex items-start text-gray-400 text-sm md:text-base font-light">
                                            <span className="text-white/30 mr-3 mt-1.5 text-[10px]">■</span>
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

    // Optional mapping since the local components expect specific keys
    const mapToTimeline = (firebaseData) => firebaseData.map(item => ({
        role: item.role,
        organization: item.company,
        duration: item.date,
        description: '', // Can be added to Firebase later
        impact: item.highlights || []
    }));

    const internships = mapToTimeline(internshipsList);
    const leadership = mapToTimeline(leadershipList);
    const eventExecution = mapToTimeline(eventsList);
    const technicalExposure = mapToTimeline(exposureList);

    return (
        <PageTransition>
            <div className="w-full max-w-4xl mx-auto pb-24 px-4 sm:px-6">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Professional <span className="text-gradient block mt-2 md:inline md:mt-0">Experience</span> & Leadership
                    </h1>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed">
                        Structured growth through technical execution, industry exposure, and community leadership.
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-32 space-y-4">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-400 font-semibold tracking-widest uppercase text-sm">Loading Database...</p>
                    </div>
                ) : (
                    <div className="flex flex-col mt-10">
                        <TimelineSection
                            title="Technical Internships"
                            icon={Briefcase}
                            colorClass="border-white"
                            items={internships}
                            delayOffset={0.3}
                        />

                        <TimelineSection
                            title="Technical Leadership"
                            icon={Users}
                            colorClass="border-gray-400"
                            items={leadership}
                            delayOffset={0.1}
                        />

                        <TimelineSection
                            title="Event Leadership & Execution"
                            icon={Calendar}
                            colorClass="border-white"
                            items={eventExecution}
                            delayOffset={0.1}
                        />

                        <TimelineSection
                            title="Competitive & Technical Exposure"
                            icon={Terminal}
                            colorClass="border-gray-400"
                            items={technicalExposure}
                            delayOffset={0.1}
                        />
                    </div>
                )}
            </div>
        </PageTransition>
    );
}
