import { MapPin } from 'lucide-react';
import { socialPlatforms } from '../data/socialLinks';
import SocialIcon from './SocialIcon';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 glass mt-auto py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                
                {/* Social & Connect Platforms */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
                    {socialPlatforms.map((platform) => (
                        <a
                            key={platform.id}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:border-electric-blue/50 hover:bg-white/[0.08] hover:scale-110 transform transition-all duration-300 group relative"
                            title={`${platform.name}: ${platform.handle}`}
                        >
                            <span className="sr-only">{platform.name}</span>
                            <SocialIcon type={platform.iconType} size={19} className="transition-transform group-hover:scale-105" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                    <MapPin size={15} className="text-electric-blue" />
                    <span>Indian Institute of Technology Madras (IIT Madras) • India</span>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm font-light tracking-wide">
                    &copy; {year} Ishaan Sen. Built for high performance, autonomous systems & AI research.
                </p>
            </div>
        </footer>
    );
}
