import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/logo.svg"
                                    alt="FluxoNex Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight">FluxoNex</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Empowering businesses with cutting-edge cloud solutions and full-stack development.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Services</h3>
                        <ul className="space-y-3">
                            {siteConfig.services.map((service) => (
                                <li key={service.title}>
                                    <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-8">
                    <p className="text-base text-muted-foreground text-center">
                        &copy; {new Date().getFullYear()} FluxoNex. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
