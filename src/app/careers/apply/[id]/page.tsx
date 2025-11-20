'use client';

import { useState, use } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call and parsing
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-border"
                >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Application Received!</h2>
                    <p className="text-muted-foreground mb-8">
                        Thank you for applying. We have received your resume and will review it shortly.
                    </p>
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/careers"
                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
                        >
                            Back to Careers
                        </Link>
                        <Link
                            href="/"
                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-lg text-foreground bg-background hover:bg-muted transition-colors"
                        >
                            Go Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 bg-muted/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link href="/careers" className="text-muted-foreground hover:text-primary flex items-center gap-2 mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Careers
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Apply for Position</h1>
                    <p className="text-muted-foreground mt-2">Please fill out the form below to submit your application.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden"
                >
                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Information */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold border-b border-border pb-2">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">First Name <span className="text-red-500">*</span></label>
                                        <input id="firstName" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
                                        <input id="lastName" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email <span className="text-red-500">*</span></label>
                                        <input id="email" type="email" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Phone <span className="text-red-500">*</span></label>
                                        <input id="phone" type="tel" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label htmlFor="address" className="text-sm font-medium">Address <span className="text-red-500">*</span></label>
                                        <input id="address" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="123 Main St, City, State, Zip" />
                                    </div>
                                </div>
                            </div>

                            {/* Resume Upload */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold border-b border-border pb-2">Resume / CV</h3>
                                <div className="space-y-4">
                                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors relative group">
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            required
                                        />
                                        <div className="flex flex-col items-center justify-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                {resumeFile ? <FileText className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
                                            </div>
                                            {resumeFile ? (
                                                <div>
                                                    <p className="font-medium text-foreground">{resumeFile.name}</p>
                                                    <p className="text-sm text-muted-foreground">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="font-medium text-foreground">Click to upload or drag and drop</p>
                                                    <p className="text-sm text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        We will automatically parse your resume to fill in your profile details.
                                    </p>
                                </div>
                            </div>

                            {/* Professional Details */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold border-b border-border pb-2">Professional Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="availability" className="text-sm font-medium">How soon can you join? <span className="text-red-500">*</span></label>
                                        <select id="availability" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                            <option value="">Select availability</option>
                                            <option value="immediate">Immediately</option>
                                            <option value="2_weeks">Within 2 weeks</option>
                                            <option value="1_month">1 month</option>
                                            <option value="2_months">2 months</option>
                                            <option value="negotiable">Negotiable</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="currentComp" className="text-sm font-medium">Current Compensation</label>
                                        <input id="currentComp" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="e.g. $80,000/year" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="expectedComp" className="text-sm font-medium">Expected Compensation <span className="text-red-500">*</span></label>
                                        <input id="expectedComp" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="e.g. $95,000/year" />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold border-b border-border pb-2">Additional Information</h3>
                                <div className="space-y-2">
                                    <label htmlFor="portfolio" className="text-sm font-medium">Portfolio / GitHub URL</label>
                                    <input id="portfolio" type="url" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="https://github.com/johndoe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="coverLetter" className="text-sm font-medium">Cover Letter</label>
                                    <textarea id="coverLetter" rows={4} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" placeholder="Tell us why you're a great fit..." />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing Application...
                                        </>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
