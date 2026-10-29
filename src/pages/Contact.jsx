import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, Send, MapPin, ExternalLink, Phone, MessageSquare, Globe } from 'lucide-react';
import { socialPlatforms } from '../data/socialLinks';
import SocialIcon from '../components/SocialIcon';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const mailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:ishaansenres@gmail.com?subject=${encodeURIComponent(formData.subject || `New Contact from ${formData.name}`)}&body=${encodeURIComponent(mailBody)}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 800);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <PageTransition>
            <div className="max-w-6xl mx-auto w-full pb-28 px-4 sm:px-6">

                {/* SECTION HEADER */}
                <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 tracking-wider uppercase">
                        <MessageSquare size={14} className="text-white" />
                        Direct & Public Channels
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white font-sans">
                        Let’s <span className="text-gradient">Connect</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
                        Reach out for AI systems engineering, research fellowships, technical leadership, or algorithmic collaborations.
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">

                    {/* DIRECT CONTACT CHANNELS */}
                    <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
                        <div className="p-5 glass rounded-2xl border border-white/10 space-y-3">
                            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Primary Direct Details</h2>
                            
                            <a href="mailto:ishaansenres@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/10 border border-white/5 transition-all group">
                                <Mail size={18} className="text-white group-hover:scale-110 transition-transform" />
                                <div className="flex-1">
                                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Email</span>
                                    <span className="text-xs md:text-sm font-medium text-white">ishaansenres@gmail.com</span>
                                </div>
                                <ExternalLink size={13} className="text-gray-500 opacity-0 group-hover:opacity-100" />
                            </a>

                            <a href="tel:+917222949347" className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/10 border border-white/5 transition-all group">
                                <Phone size={18} className="text-white group-hover:scale-110 transition-transform" />
                                <div className="flex-1">
                                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Phone / WhatsApp</span>
                                    <span className="text-xs md:text-sm font-medium text-white">+91 7222949347</span>
                                </div>
                                <ExternalLink size={13} className="text-gray-500 opacity-0 group-hover:opacity-100" />
                            </a>

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <MapPin size={18} className="text-white" />
                                <div>
                                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Base Location</span>
                                    <span className="text-xs md:text-sm font-medium text-white">Bhopal, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Fast Callout */}
                        <div className="p-5 glass rounded-2xl border border-white/10">
                            <h3 className="text-xs font-mono text-gray-300 uppercase tracking-wider mb-1 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                Available for Roles & Research
                            </h3>
                            <p className="text-xs text-gray-400 font-light leading-relaxed">
                                Actively open to AI/ML engineering, autonomous systems internships, and research collaborations. Average response time: under 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="lg:col-span-7">
                        <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 h-full relative overflow-hidden">
                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col h-full space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs md:text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs md:text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs md:text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs md:text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="AI Fellowship / Engineering Inquiry"
                                        />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full h-full min-h-[120px] bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-xs md:text-sm focus:outline-none focus:border-white/40 transition-all resize-none placeholder:text-gray-600 font-light"
                                        placeholder="Hello Ishaan, I would like to discuss..."
                                    />
                                </div>

                                <div className="pt-2 flex items-center justify-between">
                                    {submitted ? (
                                        <span className="text-emerald-400 text-xs font-mono tracking-wide">
                                            ✓ Form ready in email client.
                                        </span>
                                    ) : (
                                        <span></span>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all text-xs tracking-wider uppercase cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Preparing...' : 'Send Message'}
                                        <Send size={13} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                {/* 8 CONNECT PLATFORMS SECTION */}
                <div>
                    <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                        <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
                            <Globe className="mr-3 text-white" size={22} />
                            Verified Developer & Academic Platforms
                        </h2>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                            8 Profiles
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {socialPlatforms.map((platform) => (
                            <a
                                key={platform.id}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                                            <SocialIcon type={platform.iconType} size={18} />
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${platform.badgeBg}`}>
                                            {platform.category}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-white mb-0.5">{platform.name}</h3>
                                    <p className="text-xs font-mono text-gray-400 mb-2 truncate">{platform.handle}</p>
                                    <p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">{platform.description}</p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors">
                                    <span>Connect</span>
                                    <ExternalLink size={12} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </PageTransition>
    );
}
