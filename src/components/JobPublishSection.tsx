import React from 'react';
import { motion } from 'framer-motion';
import { Share2, FileText, Globe, Copy } from 'lucide-react';

export const JobPublishSection: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
                                <Globe className="w-4 h-4" />
                                <span>Instant Publishing</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Publish Jobs as Easily as a Google Form
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                No complex setups. Create a job, get a unique link, and share it anywhere.
                                Candidates can apply from any device, instantly.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Create Job Post</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Use our AI templates to draft the perfect job description in seconds.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                        <Share2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Share the Link</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Get a public link instantly. Share on social media, email, or your career site.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 relative overflow-hidden"
                        >
                            {/* Mock UI for Link Generation */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Job Link Generated!</h4>
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-green-100 text-green-700">Active</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-4">
                                    <Globe className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300 truncate flex-1">talentpulse.ai/jobs/senior-product-designer</span>
                                    <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors text-gray-500">
                                        <Copy className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors">
                                        Copy Link
                                    </button>
                                    <button className="flex-1 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        View Page
                                    </button>
                                </div>
                            </div>

                            {/* Decorative background elements */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
