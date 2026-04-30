import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, Linkedin, Github, Send, MapPin, ExternalLink } from 'lucide-react';

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
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-serif text-white">
                        Let’s Connect
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light tracking-wide leading-relaxed">
                        Open to research collaboration, AI system development, technical discussions, and innovation partnerships.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* SECTION 1 - DIRECT CONTACT INFORMATION */}
                    <div className="lg:col-span-5 space-y-10 flex flex-col justify-center">
                        <div className="space-y-6">

                            {/* Email */}
                            <a href="mailto:ishaansenres@gmail.com" className="flex items-center group p-4 border border-transparent hover:border-white/10 rounded-xl transition-all duration-300 hover:bg-white/5">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:border-electric-blue/50 transition-colors mr-5">
                                    <Mail className="text-gray-400 group-hover:text-electric-blue" size={24} />
                                </div>
                                <div className="flex-1">
                                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-widest mb-1">Email</span>
                                    <span className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors tracking-wide">ishaansenres@gmail.com</span>
                                </div>
                                <ExternalLink size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/IshaanYK" target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 border border-transparent hover:border-white/10 rounded-xl transition-all duration-300 hover:bg-white/5">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:border-white/50 transition-colors mr-5">
                                    <Github className="text-gray-400 group-hover:text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-widest mb-1">GitHub</span>
                                    <span className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors tracking-wide">github.com/IshaanYK</span>
                                </div>
                                <ExternalLink size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/ishaan784" target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 border border-transparent hover:border-white/10 rounded-xl transition-all duration-300 hover:bg-white/5">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:border-[#0A66C2]/50 transition-colors mr-5">
                                    <Linkedin className="text-gray-400 group-hover:text-[#0A66C2]" size={24} />
                                </div>
                                <div className="flex-1">
                                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-widest mb-1">LinkedIn</span>
                                    <span className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors tracking-wide">linkedin.com/in/ishaan784</span>
                                </div>
                                <ExternalLink size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            {/* Location */}
                            <div className="flex items-center p-4 border border-transparent rounded-xl">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-lg mr-5">
                                    <MapPin className="text-gray-400" size={24} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-widest mb-1">Location</span>
                                    <span className="text-sm md:text-base text-gray-200 tracking-wide">India</span>
                                </div>
                            </div>

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
