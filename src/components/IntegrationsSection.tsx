import React from 'react';
import { motion } from 'framer-motion';
import acSpaceLogo from '../assets/ac-logo-fe52db2548daad24aa44.svg';

const integrations = [
    { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', color: 'text-[#0077b5]', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail/EA4335', color: 'text-[#EA4335]', bg: 'bg-red-50 dark:bg-red-900/20' },
    { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B', color: 'text-[#4A154B]', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg', color: 'text-[#5059C9]', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { name: 'Zoom', logo: 'https://cdn.simpleicons.org/zoom/2D8CFF', color: 'text-[#2D8CFF]', bg: 'bg-sky-50 dark:bg-sky-900/20' },
    { name: 'Google Calendar', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg', color: 'text-[#4285F4]', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'Greenhouse', logo: 'https://cdn.simpleicons.org/greenhouse/00A878', color: 'text-[#00A878]', bg: 'bg-green-50 dark:bg-green-900/20' },
    { name: 'Workday', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjRjI2NTIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIj5XPC90ZXh0Pjwvc3ZnPg==', color: 'text-[#F26522]', bg: 'bg-orange-50 dark:bg-orange-900/20' },
    { name: 'BambooHR', logo: 'https://cdn.simpleicons.org/bamboo/73C41D', color: 'text-[#73C41D]', bg: 'bg-lime-50 dark:bg-lime-900/20' },
    { name: 'Indeed', logo: 'https://cdn.simpleicons.org/indeed/2164F3', color: 'text-[#2164F3]', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'AC Space', logo: acSpaceLogo, color: 'text-[#e55f64]', bg: 'bg-red-50 dark:bg-red-900/20' },
    { name: 'Google Meet', logo: 'https://cdn.simpleicons.org/googlemeet/00897B', color: 'text-[#00897B]', bg: 'bg-teal-50 dark:bg-teal-900/20' },
];

interface IntegrationsSectionProps {
    onContactClick: () => void;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ onContactClick }) => {
    return (
        <section id="integrations" className="py-24 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Integrates with Your Existing Stack
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Connect Talent Pulse with the tools you already use to create a unified hiring workflow
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`${integration.bg} rounded-2xl p-6 text-center hover:shadow-xl transition-all cursor-pointer border border-gray-100 dark:border-gray-800 group`}
                        >
                            <div className="mb-3 flex justify-center transition-transform group-hover:scale-110">
                                <img
                                    src={integration.logo}
                                    alt={`${integration.name} logo`}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">
                                {integration.name}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-purple-100 dark:border-purple-900/30 max-w-2xl mx-auto"
                >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Need a Custom Integration?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Our team can build custom integrations with your existing tools and workflows
                    </p>
                    <button
                        onClick={onContactClick}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition-all shadow-lg hover:shadow-xl"
                    >
                        Request Integration
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
