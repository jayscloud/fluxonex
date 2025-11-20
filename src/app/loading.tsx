'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center gap-4">
                <motion.div
                    className="h-16 w-16 rounded-full border-4 border-muted border-t-blue-600"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="text-lg font-medium text-muted-foreground"
                >
                    Loading...
                </motion.p>
            </div>
        </div>
    );
}
