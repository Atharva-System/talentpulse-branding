import React from 'react';
import { FeaturesSection } from '../../components/FeaturesSection';
import { AIScreeningSection } from '../../components/AIScreeningSection';
import { JobPublishSection } from '../../components/JobPublishSection';

export const Features = () => {
    return (
        <div className="pt-16">
            <FeaturesSection />
            <AIScreeningSection />
            <JobPublishSection />
        </div>
    );
};
