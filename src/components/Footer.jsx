import { MapPin, Phone, Mail } from 'lucide-react';
import { socialPlatforms } from '../data/socialLinks';
import SocialIcon from './SocialIcon';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 glass mt-auto py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                    {socialPlatforms.map((platform) => (
                        <a
                            key={platform.id}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-all"
                            title={`${platform.name} (${platform.handle})`}
                        >
                            <span className="sr-only">{platform.name}</span>
                            <SocialIcon type={platform.iconType} size={17} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-400 text-xs font-mono mb-3">
                    <span className="flex items-center gap-1.5"><MapPin size={13} /> Bhopal, India</span>
                    <span>•</span>
                    <a href="mailto:ishaansenres@gmail.com" className="hover:text-white transition-colors">ishaansenres@gmail.com</a>
                    <span>•</span>
                    <a href="tel:+917222949347" className="hover:text-white transition-colors">+91 7222949347</a>
                </div>

                <p className="text-gray-500 text-xs font-light text-center">
                    &copy; {year} Ishaan Sen • Software Engineer & AI / ML Specialist
                </p>
            </div>
        </footer>
    );
}
