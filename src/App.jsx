import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { LinkedInIntegrationSection } from './components/LinkedInIntegrationSection';
import { AIScreeningSection } from './components/AIScreeningSection';
import { JobPublishSection } from './components/JobPublishSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import './index.css';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Talent Pulse Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Talent Pulse</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#integrations" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Integrations</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
          </div>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-semibold transition-all shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </nav>

      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <LinkedInIntegrationSection />
        <AIScreeningSection />
        <JobPublishSection />
        <IntegrationsSection onContactClick={() => setIsContactModalOpen(true)} />
        <TestimonialsSection />
        <PricingSection />
        <CTASection onContactClick={() => setIsContactModalOpen(true)} />
      </main>

      <Footer />

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

export default App;
