import { Cloud, Code, Server } from 'lucide-react';

export const siteConfig = {
    name: "FluxoNex",
    description: "Premier consulting for Salesforce, Cloud Management, and Fullstack Development.",
    navItems: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ],
    hero: {
        title: "Elevate Your Business with",
        highlight: "FluxoNex",
        subtitle: "Premier consulting for Salesforce, Cloud Management, and Fullstack Development. We build the future of your digital infrastructure.",
        ctaPrimary: "Explore Services",
        ctaSecondary: "Contact Us",
    },
    services: [
        {
            title: 'Salesforce Consulting',
            description: 'Optimize your CRM with expert Salesforce implementation, customization, and management.',
            icon: Cloud,
            color: 'text-blue-500'
        },
        {
            title: 'Cloud & DevOps',
            description: 'Scalable AWS & Azure infrastructure management and streamlined DevOps pipelines.',
            icon: Server,
            color: 'text-violet-500'
        },
        {
            title: 'Fullstack Development',
            description: 'Modern web applications built with Java Springboot, Node.js, React, and TypeScript.',
            icon: Code,
            color: 'text-indigo-500'
        }
    ],
    cta: {
        title: "Ready to Transform Your Business?",
        subtitle: "Join the leading companies that trust FluxoNex for their digital transformation.",
        buttonText: "Get a Free Consultation"
    },
    contact: {
        email: "contact@fluxnex.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Park, Innovation City"
    }
};
