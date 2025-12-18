import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { LinkedInIntegrationSection } from '../components/LinkedInIntegrationSection';
import { AIScreeningSection } from '../components/AIScreeningSection';
import { JobPublishSection } from '../components/JobPublishSection';
import { ProcessSection } from '../components/ProcessSection';
import { StatsSection } from '../components/StatsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { PricingSection } from '../components/PricingSection';

export const Home = () => {
    const { setIsContactModalOpen } = useOutletContext();

    return (
        <>
            <HeroSection />
            <StatsSection />
            <ProcessSection />
            <FeaturesSection />
            <LinkedInIntegrationSection />
            <AIScreeningSection />
            <JobPublishSection />
            <IntegrationsSection onContactClick={() => setIsContactModalOpen(true)} />
            <TestimonialsSection />
            <PricingSection />
            <CTASection onContactClick={() => setIsContactModalOpen(true)} />
        </>
    );
};
