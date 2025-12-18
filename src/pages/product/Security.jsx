import React from 'react';
import { Shield, Lock, Key, FileCheck } from 'lucide-react';

const securityFeatures = [
    {
        icon: Key,
        title: 'JWT Token Management',
        description: 'Secure session handling with JSON Web Tokens for stateless authentication.',
    },
    {
        icon: Shield,
        title: 'Role-Based Protection',
        description: 'Granular access control ensuring users only access authorized resources.',
    },
    {
        icon: Lock,
        title: 'Input Validation',
        description: 'Strict sanitization and validation of all user inputs to prevent injection attacks.',
    },
    {
        icon: FileCheck,
        title: 'Secure File Handling',
        description: 'Safe processing and storage of uploaded documents with malware scanning.',
    },
];

export const Security = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Enterprise-Grade Security
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        We prioritize the security and privacy of your data with industry-leading standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {securityFeatures.map((feature, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
