'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Code, Database, Server } from 'lucide-react';
import { siteConfig } from '@/config/site';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.png"
            alt="Digital Background"
            fill
            className="object-cover opacity-40 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
            >
              {siteConfig.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">{siteConfig.hero.highlight}</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
            >
              {siteConfig.hero.subtitle}
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-lg font-medium rounded-full text-foreground bg-background/50 backdrop-blur-sm hover:bg-muted transition-all hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link href="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Why Us Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Why Choose FluxoNex?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At FluxoNex, we combine technical expertise with business acumen to deliver solutions that drive real growth. Our team of dedicated professionals is committed to excellence in every line of code and every cloud configuration.
                </p>
                <ul className="space-y-4">
                  {[
                    'Certified Experts in Salesforce & Cloud Platforms',
                    'Agile Development Methodology',
                    'Cost-Effective & Scalable Solutions',
                    '24/7 Support & Maintenance'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link
                    href="/about"
                    className="text-primary font-semibold hover:underline"
                  >
                    Read more about our story &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image
                src="/images/why-us.png"
                alt="FluxoNex Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-blue-200 text-lg font-medium">Successful Projects Delivered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">contact@fluxnex.com</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Tech Park, Innovation City</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">{siteConfig.cta.title}</h2>
          <p className="text-lg text-muted-foreground mb-10">
            {siteConfig.cta.subtitle}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-primary-foreground bg-primary hover:bg-primary/90 transition-all"
          >
            {siteConfig.cta.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
}
