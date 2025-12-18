import React from 'react';
import { motion } from 'framer-motion';

export const ContentPage = ({ title, subtitle, content }) => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
                >
                    {content || (
                        <div className="grid gap-16">
                            <section className="space-y-6">
                                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">Overview</h2>
                                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                    This page provides detailed information about {title.toLowerCase()}. We are committed to transparency, security, and providing our users with the best possible resources to succeed in their recruitment journey.
                                </p>
                            </section>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        We adhere to the highest standards of data protection and operational excellence, ensuring your experience is secure and reliable.
                                    </p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Continuous Improvement</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Our platform evolves daily. We actively listen to community feedback to refine our features and policies.
                                    </p>
                                </div>
                            </div>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">Key Information</h2>
                                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                    Our team is constantly updating this section to ensure you have the most accurate and up-to-date information regarding our platform and services.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                                    {['Detailed documentation and guides', 'Industry-leading standards', '24/7 support resources', 'Regular feature updates'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="space-y-6 border-t border-gray-200 dark:border-gray-800 pt-12">
                                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">Next Steps</h2>
                                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                    If you have any further questions or need additional assistance, please don't hesitate to reach out to our support team or visit our help center.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity">
                                        Contact Support
                                    </button>
                                    <button className="px-8 py-3 border border-gray-200 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-900 dark:text-white">
                                        View Documentation
                                    </button>
                                </div>
                            </section>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
