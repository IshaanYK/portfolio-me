import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 glass mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex space-x-6 mb-6">
                    <a href="mailto:ishaansenres@gmail.com" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                        <span className="sr-only">Email</span>
                        <Mail size={24} />
                    </a>
                    <a href="https://linkedin.com/in/ishaan784" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/IshaanYK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                        <span className="sr-only">GitHub</span>
                        <Github size={24} />
                    </a>
                </div>

                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
                    <MapPin size={16} />
                    <span>India</span>
                </div>

                <p className="text-gray-500 text-sm">
                    &copy; {year} Ishaan Sen. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
