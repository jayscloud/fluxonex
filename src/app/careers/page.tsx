'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const positions = [
    {
        id: 1,
        title: 'Senior Salesforce Developer',
        department: 'Salesforce',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        description: 'We are looking for an experienced Salesforce Developer to lead our CRM implementation projects. You should have deep knowledge of Apex, LWC, and Salesforce architecture.'
    },
    {
        id: 2,
        title: 'Cloud DevOps Engineer',
        department: 'Cloud Infrastructure',
        location: 'Remote',
        type: 'Full-time',
        description: 'Join our cloud team to design and manage scalable infrastructure on AWS and Azure. Experience with Terraform, Docker, and Kubernetes is essential.'
    },
    {
        id: 3,
        title: 'Fullstack Engineer (Node/React)',
        department: 'Development',
        location: 'Hybrid',
        type: 'Full-time',
        description: 'Build modern web applications for our diverse client base. You will work with the latest stack including Next.js, TypeScript, and Tailwind CSS.'
    }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
                    >
                        Join the FluxoNex Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        We are always looking for talented individuals who are passionate about technology and innovation. Build your future with us.
                    </motion.p>
                </div>

                <div className="grid gap-6">
                    {positions.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <p className="text-sm text-primary font-medium mt-1">{job.department}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground max-w-2xl">
                                        {job.description}
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    <Link
                                        href={`/careers/apply/${job.id}`}
                                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors w-full md:w-auto"
                                    >
                                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-4">Don't see the right fit?</h3>
                    <p className="text-muted-foreground mb-8">
                        We are always interested in meeting great people. Send us your resume and we'll keep you in mind for future openings.
                    </p>
                    <Link
                        href="mailto:careers@fluxonex.com"
                        className="text-primary font-semibold hover:underline"
                    >
                        Email us at careers@fluxonex.com
                    </Link>
                </div>
            </div>
        </div>
    );
}
