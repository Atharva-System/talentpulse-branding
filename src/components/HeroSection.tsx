import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
                            ✨ The Future of Recruitment is Here
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8"
                    >
                        Recruiting Reimagined <br />
                        with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Artificial Intelligence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
                    >
                        Attract, Screen, and Hire the best talent with the power of AI.
                        Automate your workflow and focus on what matters - people.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25">
                            Get Started Free
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                            <Play className="w-5 h-5 fill-current" />
                            Watch Demo
                        </button>
                    </motion.div>
                </div>

                {/* Dashboard Preview Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 md:mt-20 relative mx-auto max-w-6xl px-4 md:px-8"
                >
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
                            style={{
                                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25), 0 0 0 1px rgba(147, 51, 234, 0.1)'
                            }}>
                            <img
                                src="/dashboard-preview.png"
                                alt="Talent Pulse Dashboard"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Floating Badges Container */}
                        <div className="grid grid-cols-1 gap-4 mt-6 md:block md:mt-0">
                            {/* Floating Badge 1: AI Match Score */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="flex md:absolute left-0 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 items-center gap-3 shadow-xl md:shadow-none"
                                style={{
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(147, 51, 234, 0.1)',
                                    transform: 'translateZ(50px)'
                                }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <span className="font-bold text-lg">98%</span>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">AI Match Score</div>
                                    <div className="text-base font-bold text-gray-900 dark:text-white">Top Candidate</div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2: Time Saved */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                                className="flex md:absolute right-0 bottom-1/4 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 items-center gap-3 shadow-xl md:shadow-none"
                                style={{
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)',
                                    transform: 'translateZ(50px)'
                                }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <span className="font-bold text-lg">12h</span>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Time Saved</div>
                                    <div className="text-base font-bold text-gray-900 dark:text-white">Per Hire</div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 3: Active Candidates */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6, duration: 0.5 }}
                                className="flex md:absolute left-1/2 md:-translate-x-1/2 top-0 bg-white dark:bg-gray-800 py-3 px-5 rounded-full border border-gray-200 dark:border-gray-700 items-center gap-3 shadow-xl md:shadow-none"
                                style={{
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(147, 51, 234, 0.1)',
                                    transform: 'translateZ(60px)'
                                }}
                            >
                                <div className="flex items-center">
                                    <img
                                        src="/candidate-faces.png"
                                        alt="Active Candidates"
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>
                                <div className="text-base font-bold text-gray-900 dark:text-white">
                                    1.2k+ <span className="font-normal text-gray-500 text-sm">Active Candidates</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
