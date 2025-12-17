import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Sparkles, Check } from 'lucide-react';

export const AIScreeningSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6 border border-purple-500/30">
                            <Sparkles className="w-4 h-4" />
                            <span>AI-Powered Intelligence</span>
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Smart Screening at Scale
                        </h2>
                        <p className="text-lg text-gray-400">
                            Let our AI analyze thousands of resumes in seconds.
                            Automatically match candidates to job requirements with 95% accuracy.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] bg-gray-800/50 rounded-2xl border border-gray-700/50 p-6 overflow-hidden backdrop-blur-sm">
                        {/* Scanning Animation UI */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-scan z-0" />

                        <div className="relative z-10 space-y-4">
                            {/* Mock Resume Items */}
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-center justify-between p-4 rounded-lg bg-gray-800 border border-gray-700"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">CV</div>
                                        <div>
                                            <div className="h-2 w-24 bg-gray-600 rounded mb-2" />
                                            <div className="h-2 w-16 bg-gray-700 rounded" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
                                        <span>9{8 - i}% Match</span>
                                        <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[90%]" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-gray-900/80 backdrop-blur rounded-xl border border-gray-700 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                                    <Scan className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">Scanning in progress...</div>
                                    <div className="text-xs text-gray-400">Processing batch #2491</div>
                                </div>
                            </div>
                            <div className="text-purple-400 font-mono">342/s</div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                                <Scan className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Automated Parsing</h3>
                                <p className="text-gray-400">Extracts skills, experience, and education from any resume format (PDF, DOCX) instantly.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Smart Matching</h3>
                                <p className="text-gray-400">AI algorithms score candidates against job descriptions to highlight the best fits.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center border border-green-500/30">
                                <Check className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Bias Elimination</h3>
                                <p className="text-gray-400">Focus on skills and qualifications, reducing unconscious bias in the screening process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
