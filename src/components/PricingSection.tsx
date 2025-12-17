import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '$49',
        period: '/month',
        description: 'Perfect for small teams getting started',
        features: [
            'Up to 50 candidates/month',
            'AI Resume Parsing',
            'Basic Analytics',
            'Email Support',
            '2 Team Members',
            'Job Board Integration',
        ],
        popular: false,
        color: 'border-gray-200 dark:border-gray-700',
    },
    {
        name: 'Professional',
        price: '$149',
        period: '/month',
        description: 'For growing teams with advanced needs',
        features: [
            'Up to 500 candidates/month',
            'AI Screening & Matching',
            'Advanced Analytics',
            'Priority Support',
            '10 Team Members',
            'LinkedIn Integration',
            'Custom Workflows',
            'Interview Scheduling',
        ],
        popular: true,
        color: 'border-purple-500 dark:border-purple-400',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations with custom requirements',
        features: [
            'Unlimited candidates',
            'Full AI Suite',
            'Custom Analytics',
            'Dedicated Support',
            'Unlimited Team Members',
            'All Integrations',
            'Custom Integrations',
            'SSO & Advanced Security',
            'API Access',
        ],
        popular: false,
        color: 'border-gray-200 dark:border-gray-700',
    },
];

export const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Choose the plan that fits your hiring needs. All plans include a 14-day free trial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${plan.color} ${plan.popular ? 'shadow-2xl scale-105' : 'shadow-lg'
                                } hover:shadow-xl transition-all`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold shadow-lg">
                                        <Sparkles className="w-4 h-4" />
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400">
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-full font-semibold transition-all ${plan.popular
                                        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
                                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                                    }`}
                            >
                                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 text-gray-600 dark:text-gray-400">
                    <p className="text-sm">
                        All plans include 14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};
