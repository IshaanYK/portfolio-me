import PageTransition from '../components/PageTransition';
import { Download, ExternalLink } from 'lucide-react';

export default function Resume() {
    const resumeUrl = '/resume.pdf'; // Ensure to place a resume.pdf in the public folder

    return (
        <PageTransition>
            <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
                <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
                            Curriculum <span className="text-gradient">Vitae</span>
                        </h1>
                        <p className="text-gray-400 text-lg">Detailed view of my academic and professional journey.</p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center font-bold text-sm"
                        >
                            <ExternalLink size={18} className="mr-2" /> Open File
                        </a>
                        <a
                            href={resumeUrl}
                            download
                            className="px-6 py-3 rounded-full bg-electric-blue text-dark-bg hover:bg-white transition-all flex items-center font-bold text-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            <Download size={18} className="mr-2" /> Download PDF
                        </a>
                    </div>
                </div>

                {/* Embedded PDF Viewer */}
                <div className="w-full aspect-[1/1.4] md:aspect-auto md:h-[800px] glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative p-2">
                    <iframe
                        src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full rounded-xl"
                        title="Resume PDF Viewer"
                    />
                    {/* Fallback overlay incase iframe fails gracefully */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center text-gray-500">
                        If the PDF doesn't load securely, please use the download button above.
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
