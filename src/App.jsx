import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Features } from './pages/product/Features';
import { Integrations } from './pages/product/Integrations';
import { Pricing } from './pages/product/Pricing';
import { Security } from './pages/product/Security';
import { APIPage } from './pages/product/APIPage';
import { AboutUs } from './pages/company/AboutUs';
import { Contact } from './pages/company/Contact';
import { ContentPage } from './pages/ContentPage';
import { PrivacyPolicyContent, TermsOfServiceContent, CookiePolicyContent, GDPRContent, ComplianceContent } from './data/legalContent';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Product Routes */}
          <Route path="features" element={<Features />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="security" element={<Security />} />
          <Route path="api" element={<APIPage />} />

          {/* Company Routes */}
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<ContentPage title="Blog" subtitle="Latest insights from the Talent Pulse team" />} />
          <Route path="press" element={<ContentPage title="Press Kit" subtitle="Resources for media and partners" />} />

          {/* Resources Routes */}
          <Route path="docs" element={<ContentPage title="Documentation" subtitle="Everything you need to know about Talent Pulse" />} />
          <Route path="help" element={<ContentPage title="Help Center" subtitle="Find answers to common questions" />} />
          <Route path="community" element={<ContentPage title="Community" subtitle="Connect with other Talent Pulse users" />} />
          <Route path="tutorials" element={<ContentPage title="Tutorials" subtitle="Step-by-step guides to master our platform" />} />
          <Route path="webinars" element={<ContentPage title="Webinars" subtitle="Live sessions with our product experts" />} />

          {/* Legal Routes */}
          <Route path="privacy" element={<ContentPage title="Privacy Policy" subtitle="How we protect your data" content={PrivacyPolicyContent} />} />
          <Route path="terms" element={<ContentPage title="Terms of Service" subtitle="Rules for using our platform" content={TermsOfServiceContent} />} />
          <Route path="cookies" element={<ContentPage title="Cookie Policy" subtitle="How we use cookies" content={CookiePolicyContent} />} />
          <Route path="gdpr" element={<ContentPage title="GDPR" subtitle="Our commitment to data protection" content={GDPRContent} />} />
          <Route path="compliance" element={<ContentPage title="Compliance" subtitle="Industry standards and certifications" content={ComplianceContent} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
