import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
    product: [
        { name: 'Features', href: '#features' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Security', href: '#' },
        { name: 'API', href: '#' },
    ],
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    resources: [
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Webinars', href: '#' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
        { name: 'Compliance', href: '#' },
    ],
};

const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-[#FF0000]' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/logo.png"
                                alt="Talent Pulse Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-2xl font-bold">Talent Pulse</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            AI-powered recruitment platform that revolutionizes the entire hiring workflow from job requisition to candidate onboarding.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-purple-400" />
                                <a href="mailto:info@talentpulse.ai" className="hover:text-purple-400 transition-colors">
                                    info@talentpulse.ai
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-purple-400" />
                                <a href="tel:+919922963760" className="hover:text-purple-400 transition-colors">
                                    +91-9922963760
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Talent Pulse. All rights reserved.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all ${social.color}`}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>99.9% Uptime</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span>SOC 2 Certified</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span>GDPR Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
