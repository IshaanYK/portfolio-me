import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Send, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { socialPlatforms } from '../data/socialLinks';
import SocialIcon from '../components/SocialIcon';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct email body with user's info so Ishaan can reply
        const mailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:ishaansenres@gmail.com?subject=${encodeURIComponent(formData.subject || `New Contact from ${formData.name}`)}&body=${encodeURIComponent(mailBody)}`;

        // Open user's default email client
        window.location.href = mailtoLink;

        // Reset form state visually
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
            <div className="max-w-6xl mx-auto w-full pb-20 px-4 sm:px-6">

                {/* SECTION HEADER */}
                <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-electric-blue uppercase tracking-widest mb-4">
                        <Sparkles size={14} /> Connect & Collaborate
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-serif text-white">
                        Let’s Build Together
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
                        Open to research collaboration, autonomous AI system engineering, technical architecture discussions, and innovative ventures.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

                    {/* SECTION 1 - DIRECT CONTACT & PLATFORMS */}
                    <div className="lg:col-span-5 space-y-6 flex flex-col">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold">Connect Across Platforms</h2>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-electric-blue/10 text-electric-blue border border-electric-blue/20">8 Active Channels</span>
                        </div>

                        {/* Interactive Platform Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[580px] overflow-y-auto pr-1">
                            {socialPlatforms.map((platform) => (
                                <a
                                    key={platform.id}
                                    href={platform.url}
                                    target={platform.id === 'email' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className={`group flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] transition-all duration-300 ${platform.accent}`}
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 group-hover:scale-110 transition-transform shrink-0">
                                            <SocialIcon type={platform.iconType} size={18} />
                                        </div>
                                        <div className="min-w-0 text-left">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold text-white group-hover:text-electric-blue transition-colors">
                                                    {platform.name}
                                                </span>
                                                <span className={`text-[10px] px-1.5 py-0.2 rounded border font-mono ${platform.badgeBg}`}>
                                                    {platform.category}
                                                </span>
                                            </div>
                                            <span className="block text-xs text-gray-400 font-mono truncate group-hover:text-gray-200 transition-colors">
                                                {platform.handle}
                                            </span>
                                        </div>
                                    </div>
                                    <ExternalLink size={14} className="text-gray-500 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                                </a>
                            ))}
                        </div>

                        {/* Location indicator */}
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-gray-400 text-xs">
                            <MapPin size={16} className="text-electric-blue shrink-0" />
                            <span>Indian Institute of Technology Madras (IIT Madras) • Bhopal, India</span>
                        </div>
                    </div>

                    {/* SECTION 2 - CONTACT FORM */}
                    <div className="lg:col-span-7">
                        <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 h-full relative overflow-hidden">
                            {/* Decorative gradient blur */}
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col h-full space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">Phone Number (Optional)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder:text-gray-600 font-light"
                                            placeholder="Research Collaboration / Project Inquiry"
                                        />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <label htmlFor="message" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full h-full min-h-[150px] bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 transition-all resize-none placeholder:text-gray-600 font-light"
                                        placeholder="Hello Ishaan, I would like to discuss..."
                                    />
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    {submitted ? (
                                        <span className="text-electric-blue text-sm font-medium tracking-wide animate-fade-in flex items-center">
                                            Message sent successfully.
                                        </span>
                                    ) : (
                                        <span className="text-transparent">Placeholder</span> // To keep justify-between aligned
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-8 py-3.5 rounded-xl border border-electric-blue/50 text-electric-blue font-semibold hover:bg-electric-blue hover:text-black focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center group text-sm tracking-wide"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        {!isSubmitting && <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                {/* SECTION 3 - OPTIONAL PROFESSIONAL NOTE */}
                <div className="mt-28 mb-10 text-center border-t border-white/10 pt-10 mx-auto max-w-lg">
                    <p className="text-gray-500 text-sm font-light tracking-wide italic">
                        "I value meaningful technical conversations and research-driven collaboration. Feel free to reach out."
                    </p>
                </div>

            </div>
        </PageTransition>
    );
}
