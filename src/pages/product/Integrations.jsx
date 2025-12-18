import React from 'react';
import { IntegrationsSection } from '../../components/IntegrationsSection';
import { LinkedInIntegrationSection } from '../../components/LinkedInIntegrationSection';

export const Integrations = () => {
    return (
        <div className="pt-16">
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Seamless Integrations</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Connect Talent Pulse with your favorite tools to streamline your recruitment workflow.
                </p>
            </div>
            <LinkedInIntegrationSection />
            <IntegrationsSection />
        </div>
    );
};
