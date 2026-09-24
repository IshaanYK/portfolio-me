import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export default function SocialIcon({ type, size = 20, className = "" }) {
    switch (type) {
        case 'mail':
            return <Mail size={size} className={className} />;
        case 'linkedin':
            return <Linkedin size={size} className={className} />;
        case 'github':
            return <Github size={size} className={className} />;
        case 'instagram':
            return <Instagram size={size} className={className} />;
        case 'x':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={className}
                    aria-hidden="true"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case 'leetcode':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={className}
                    aria-hidden="true"
                >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226 3.262 10.352a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.862 3.504c.162.012.324.018.486.018a5.952 5.952 0 0 0 4.226-1.74l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 19.349.438 1.374 1.374 0 0 0 17.975 0h-4.492zm.543 2.748h2.89l-4.887 5.23-1.445 1.547-2.89-2.702 4.887-5.23 1.445-1.547v.702zm-6.287 7.74 2.89 2.702-4.887 5.23-1.445 1.547a3.208 3.208 0 0 1-2.28.938 3.208 3.208 0 0 1-2.28-.938 3.21 3.21 0 0 1-.938-2.28 3.21 3.21 0 0 1 .938-2.28l4.887-5.23 1.445-1.547v.702z" />
                </svg>
            );
        case 'researchgate':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={className}
                    aria-hidden="true"
                >
                    <path d="M19.586 0c-.818 0-1.508.62-1.508 1.438v1.395C17.07 1.83 15.65 1.25 14.07 1.25c-4.862 0-8.804 3.942-8.804 8.804 0 4.863 3.942 8.805 8.804 8.805 1.58 0 3-.58 4.008-1.583v.81c0 .818.69 1.438 1.508 1.438.818 0 1.508-.62 1.508-1.438V1.438C21.094.62 20.404 0 19.586 0zm-5.516 16.32c-3.468 0-6.265-2.797-6.265-6.266 0-3.468 2.797-6.265 6.265-6.265 3.469 0 6.266 2.797 6.266 6.265 0 3.47-2.797 6.266-6.266 6.266zM2.91 19.344H0V7.219h2.91v12.125zM1.455 5.563c-.803 0-1.455-.652-1.455-1.455 0-.804.652-1.456 1.455-1.456.804 0 1.455.652 1.455 1.456 0 .803-.651 1.455-1.455 1.455z" />
                </svg>
            );
        case 'indielogs':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={className}
                    aria-hidden="true"
                >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M8 7h6" />
                    <path d="M8 11h8" />
                    <path d="M8 15h4" />
                </svg>
            );
        default:
            return <Mail size={size} className={className} />;
    }
}
