import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Share2, Brain, FileQuestion, Calendar, MessageSquare, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        icon: Sparkles,
        title: 'AI Job Builder',
        description: 'Generate comprehensive job descriptions instantly with AI.',
        color: 'text-blue-500',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'group-hover:border-blue-500',
    },
    {
        icon: Share2,
        title: 'Smart Sourcing',
        description: 'Distribute your job post to top platforms instantly.',
        color: 'text-indigo-500',
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'group-hover:border-indigo-500',
    },
    {
        icon: Target,
        title: 'AI Matching',
        description: 'Instantly match candidates to your job requirements.',
        color: 'text-violet-500',
        bg: 'bg-violet-50 dark:bg-violet-900/20',
        border: 'group-hover:border-violet-500',
    },
    {
        icon: Brain,
        title: 'Hybrid Screening',
        description: 'AI ranks candidates, while you retain full manual control.',
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'group-hover:border-purple-500',
    },
    {
        icon: FileQuestion,
        title: 'AI Interview Prep',
        description: 'Auto-generate tailored interview questions for every candidate.',
        color: 'text-pink-500',
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'group-hover:border-pink-500',
    },
    {
        icon: Calendar,
        title: 'Hybrid Scheduling',
        description: 'Coordinate interviews via AI automation or manual selection.',
        color: 'text-rose-500',
        bg: 'bg-rose-50 dark:bg-rose-900/20',
        border: 'group-hover:border-rose-500',
    },
    {
        icon: MessageSquare,
        title: 'AI Feedback & Hire',
        description: 'Get AI-driven insights and feedback to make the best hire.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        border: 'group-hover:border-emerald-500',
    },
];

export const ProcessSection: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase"
                    >
                        How It Works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        The Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Recruitment Lifecycle</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400"
                    >
                        Experience a seamless, AI-powered workflow from job creation to final offer.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Desktop Connecting Line */}
                    <div className="hidden xl:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className={`h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 ${step.border} hover:border-opacity-50`}>
                                    {/* Step Number */}
                                    <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 dark:text-gray-800 select-none transition-colors group-hover:text-gray-50 dark:group-hover:text-gray-800/50">
                                        0{index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector for Mobile/Tablet */}
                                {index < steps.length - 1 && (
                                    <div className="xl:hidden absolute left-1/2 bottom-[-24px] -translate-x-1/2 text-gray-300 dark:text-gray-700 z-0">
                                        <ArrowRight className="w-5 h-5 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
