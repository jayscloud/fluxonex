'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Cloud, Code, Database, Layout, Shield, Smartphone } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        id: 'salesforce',
        title: 'Salesforce Consulting',
        icon: Cloud,
        description: 'Unlock the full potential of the world\'s #1 CRM. We help you streamline operations, automate processes, and drive sales growth.',
        features: [
            'Sales & Service Cloud Implementation',
            'Custom Lightning Component Development',
            'Data Migration & Integration',
            'Salesforce CPQ & Billing',
            'Ongoing Support & Administration'
        ]
    },
    {
        id: 'cloud',
        title: 'AWS & Azure Cloud Management',
        icon: Database,
        description: 'Secure, scalable, and cost-effective cloud solutions. We manage your infrastructure so you can focus on your business.',
        features: [
            'Cloud Migration Strategy',
            'Infrastructure as Code (Terraform/CloudFormation)',
            'CI/CD Pipeline Setup',
            'Security & Compliance Audits',
            '24/7 Monitoring & Incident Response'
        ]
    },
    {
        id: 'fullstack',
        title: 'Fullstack Development',
        icon: Code,
        description: 'End-to-end software development using modern technologies. We build robust, high-performance applications.',
        features: [
            'Java Springboot Microservices',
            'Node.js & Express Backends',
            'React.js & Next.js Frontends',
            'TypeScript for Type-Safe Code',
            'API Design & Integration'
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
                        {['Salesforce', 'AWS', 'Azure', 'Java', 'Spring Boot', 'Node.js', 'React', 'TypeScript', 'Docker', 'Kubernetes'].map((tech) => (
                            <span key={tech} className="text-xl font-bold text-foreground/80">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
