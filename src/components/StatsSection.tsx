import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: TrendingUp, value: '95%', label: 'Match Accuracy', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
    { icon: Clock, value: '12hrs', label: 'Time Saved', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: Award, value: '500+', label: 'Companies Trust Us', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
];

export const StatsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
