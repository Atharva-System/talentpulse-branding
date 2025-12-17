import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, Calendar, BarChart3, FileText, Linkedin, Sparkles, Share2, CheckCircle2 } from 'lucide-react';

const features = [
    {
        icon: Database,
        title: 'Database Management',
        description: 'Search, communicate, and engage with potential candidates using our AI-powered candidate management system. Get through the bulk and reach the best candidates faster.',
        points: ['Centralised Database', 'Duplicate Detection', 'Source Management', 'Advanced Search'],
        color: 'text-blue-600',
        bg: 'bg-blue-50 dark:bg-blue-900/10',
        iconBg: 'bg-white dark:bg-blue-900/30',
    },
    {
        icon: Users,
        title: 'Applicant Tracking',
        description: 'Accelerate your hiring process with visibility. Reduce frustration of disparate systems and save time with our comprehensive tracking module.',
        points: ['Automated Workflows', 'Automatic To-do', 'Visibility', 'Role-based Access'],
        color: 'text-green-600',
        bg: 'bg-green-50 dark:bg-green-900/10',
        iconBg: 'bg-white dark:bg-green-900/30',
    },
    {
        icon: Calendar,
        title: 'Interview Management',
        description: 'Simplify manual interview scheduling and eliminate conflicts with automatic scheduling, calendar integration, and automated reminders.',
        points: ['Automate interview management', 'Virtual Recruiter: Maya', 'Feedback Management', 'Calendar Integration'],
        color: 'text-purple-600',
        bg: 'bg-purple-50 dark:bg-purple-900/10',
        iconBg: 'bg-white dark:bg-purple-900/30',
    },
    {
        icon: BarChart3,
        title: 'Reports and Analytics',
        description: 'Get real-time visibility into recruitment performance with ready analytics and interactive dashboards to identify trends and improve decisions.',
        points: ['Report Builder', 'Personalised Dashboard', 'Track Performance'],
        color: 'text-orange-600',
        bg: 'bg-orange-50 dark:bg-orange-900/10',
        iconBg: 'bg-white dark:bg-orange-900/30',
    },
    {
        icon: FileText,
        title: 'Resume Management',
        description: 'Leverage AI-powered resume processing to automatically screen, parse, and rank candidates based on job requirements.',
        points: ['AI Screening', 'Resume Parsing', 'Resume Ranking'],
        color: 'text-pink-600',
        bg: 'bg-pink-50 dark:bg-pink-900/10',
        iconBg: 'bg-white dark:bg-pink-900/30',
    },
    {
        icon: Sparkles,
        title: 'AI Screening',
        description: 'Intelligent AI algorithms analyze resumes in seconds, matching candidates to job requirements with 95%+ accuracy.',
        points: ['Automated Parsing', 'Smart Matching', 'Bias Elimination', 'Instant Scoring'],
        color: 'text-indigo-600',
        bg: 'bg-indigo-50 dark:bg-indigo-900/10',
        iconBg: 'bg-white dark:bg-indigo-900/30',
    },
    {
        icon: Linkedin,
        title: 'LinkedIn Integration',
        description: 'One-click profile import from LinkedIn. Import candidate profiles instantly and expand your reach with seamless integration.',
        points: ['One-click Import', 'Auto Data Parsing', 'Rich Profiles', 'Real-time Updates'],
        color: 'text-sky-600',
        bg: 'bg-sky-50 dark:bg-sky-900/10',
        iconBg: 'bg-white dark:bg-sky-900/30',
    },
    {
        icon: Share2,
        title: 'Easy Job Publishing',
        description: 'Publish jobs as easily as a Google Form. Create a job, get a unique link, and share it anywhere. Candidates can apply instantly.',
        points: ['Simple Link Generation', 'Shareable Forms', 'Mobile-Friendly', 'Instant Applications'],
        color: 'text-emerald-600',
        bg: 'bg-emerald-50 dark:bg-emerald-900/10',
        iconBg: 'bg-white dark:bg-emerald-900/30',
    },
];

export const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Powerful Features for Modern Recruiting
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Discover the comprehensive suite of tools designed to streamline your hiring process and help you find the best talent faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${feature.bg} rounded-3xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-800`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} ${feature.color} flex items-center justify-center mb-5 shadow-sm`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm">
                                    {feature.description}
                                </p>

                                <div className="w-full space-y-2.5 text-left">
                                    {feature.points.map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5">
                                            <div className={`flex-shrink-0 w-4 h-4 rounded-full ${feature.iconBg} flex items-center justify-center`}>
                                                <CheckCircle2 className={`w-3 h-3 ${feature.color}`} />
                                            </div>
                                            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
