import { Cloud, Code, Server, BrainCircuit } from 'lucide-react';

export const siteConfig = {
    name: "FluxoNex",
    description: "Premier consulting for Enterprise Solutions, Cloud Infrastructure, and Custom Engineering.",
    navItems: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ],
    hero: {
        title: "Elevate Your Business with",
        highlight: "FluxoNex",
        subtitle: "Your comprehensive technology partner. We engineer bespoke solutions across any stack to drive your digital evolution.",
        ctaPrimary: "Explore Services",
        ctaSecondary: "Contact Us",
    },
    services: [
        {
            title: 'Enterprise Solutions',
            description: 'Streamline operations with robust CRM, ERP, and business process automation tailored to your scale.',
            icon: Cloud,
            color: 'text-blue-500'
        },
        {
            title: 'Cloud & Infrastructure',
            description: 'Secure, scalable architectures across any provider (AWS, Azure, GCP) to power your digital ecosystem.',
            icon: Server,
            color: 'text-violet-500'
        },
        {
            title: 'Custom Engineering',
            description: 'Bespoke software development for web, mobile, and emerging tech using the right tools for the job.',
            icon: Code,
            color: 'text-indigo-500'
        },
        {
            title: 'AI & Data Intelligence',
            description: 'Unlock the power of Generative AI, LLMs, and predictive analytics to automate workflows and drive smarter decisions.',
            icon: BrainCircuit,
            color: 'text-rose-500'
        }
    ],
    cta: {
        title: "Ready to Transform Your Business?",
        subtitle: "Join the leading companies that trust FluxoNex for their digital transformation.",
        buttonText: "Get a Free Consultation"
    },
    contact: {
        email: "contact@fluxonex.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Park, Innovation City"
    }
};
