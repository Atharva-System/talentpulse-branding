import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Linkedin } from 'lucide-react';

export const LinkedInIntegrationSection: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                                <Linkedin className="w-4 h-4" />
                                <span>Seamless Integration</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Connect with Top Talent on LinkedIn
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                Import candidate profiles instantly with our one-click LinkedIn integration.
                                Expand your reach and simplify the application process for candidates.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    'One-click profile import',
                                    'Automatic data parsing',
                                    'Rich candidate profiles',
                                    'Real-time updates'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 max-w-md mx-auto"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
                                    <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/2 animate-pulse" />
                                </div>
                                <Linkedin className="w-8 h-8 text-[#0077b5]" />
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full animate-pulse" />
                                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full animate-pulse" />
                                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-5/6 animate-pulse" />
                            </div>

                            <button className="w-full py-3 rounded-lg bg-[#0077b5] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#006097] transition-colors">
                                <Linkedin className="w-5 h-5" />
                                Apply with LinkedIn
                            </button>
                        </motion.div>

                        {/* Decorative background elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};
