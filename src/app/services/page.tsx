'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Cloud, Code, Database, Layout, Shield, Smartphone, BrainCircuit } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        id: 'salesforce', // Keeping ID for image mapping
        title: 'Enterprise Solutions',
        icon: Cloud,
        description: 'Streamline operations with robust CRM, ERP, and business process automation tailored to your scale.',
        features: [
            'CRM Strategy & Implementation (Salesforce, HubSpot)',
            'ERP Integration & Optimization',
            'Business Process Automation',
            'Legacy System Modernization',
            'Enterprise Data Architecture'
        ]
    },
    {
        id: 'cloud',
        title: 'Cloud & Infrastructure',
        icon: Database,
        description: 'Secure, scalable architectures across any provider (AWS, Azure, GCP) to power your digital ecosystem.',
        features: [
            'Multi-Cloud Strategy & Migration',
            'Infrastructure as Code (Terraform)',
            'DevOps & CI/CD Automation',
            'Security & Compliance (SOC2, HIPAA)',
            '24/7 Site Reliability Engineering'
        ]
    },
    {
        id: 'fullstack',
        title: 'Custom Engineering',
        icon: Code,
        description: 'Bespoke software development for web, mobile, and emerging tech using the right tools for the job.',
        features: [
            'High-Performance Web Applications',
            'Native & Cross-Platform Mobile Apps',
            'Microservices Architecture',
            'API Design & Integration',
            'Real-time Systems'
        ]
    },
    {
        id: 'ai',
        title: 'AI & Data Intelligence',
        icon: BrainCircuit,
        description: 'Unlock the power of Generative AI, LLMs, and predictive analytics to automate workflows and drive smarter decisions.',
        features: [
            'LLM Integration (OpenAI, Anthropic, Llama)',
            'RAG (Retrieval-Augmented Generation) Systems',
            'Predictive Analytics & Data Modeling',
            'Intelligent Process Automation',
            'AI Agents & Chatbots'
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen py-20">
            {/* Header */}
            <div className="bg-muted/30 py-16 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Expert solutions tailored to accelerate your digital transformation.
                    </motion.p>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        id={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                    >
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 pt-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-foreground font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-xl group">
                                <Image
                                    src={`/images/${service.id}.png`}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-2">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tech Stack Strip */}
            <div className="mt-32 py-16 border-y border-border bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Powered by Modern Technologies</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple text representations for logos to keep it clean and fast */}
                        {['Salesforce', 'AWS', 'Azure', 'Python', 'OpenAI', 'TensorFlow', 'React', 'Node.js', 'Docker', 'Kubernetes'].map((tech) => (
                            <span key={tech} className="text-xl font-bold text-foreground/80">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
