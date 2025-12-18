import React from 'react';
import { Code2, Zap, Globe, Cpu } from 'lucide-react';

const apiFeatures = [
    {
        icon: Zap,
        title: 'High Performance',
        description: 'Built on FastAPI for lightning-fast asynchronous operations and low latency.',
    },
    {
        icon: Globe,
        title: 'RESTful Architecture',
        description: 'Comprehensive REST API with auto-generated documentation for easy integration.',
    },
    {
        icon: Code2,
        title: 'Multi-Language Support',
        description: 'Client libraries available for Python, JavaScript, and more.',
    },
    {
        icon: Cpu,
        title: 'AI-First Design',
        description: 'Endpoints specifically optimized for AI agent orchestration and document processing.',
    },
];

export const APIPage = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Developer-First API
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Integrate Talent Pulse's intelligence directly into your existing HR systems and workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {apiFeatures.map((feature, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-400 text-sm ml-2 font-mono">POST /api/v1/resume/upload</span>
                    </div>
                    <pre className="text-blue-400 font-mono text-sm overflow-x-auto">
                        <code>{`curl -X 'POST' \\
  'https://api.talentpulse.ai/v1/resume/upload' \\
  -H 'accept: application/json' \\
  -H 'Content-Type: multipart/form-data' \\
  -F 'file=@my_resume.pdf;type=application/pdf'`}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};
