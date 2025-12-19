import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    Youtube,
    Hexagon,
} from "lucide-react";

const footerLinks = {
    product: [
        { name: "Features", href: "/features" },
        { name: "Integrations", href: "/integrations" },
        { name: "Pricing", href: "/pricing" },
        { name: "Security", href: "/security" },
        { name: "API", href: "/api" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Press Kit", href: "/press" },
        { name: "Contact", href: "/contact" },
    ],
    resources: [
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Webinars", href: "/webinars" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Compliance", href: "/compliance" },
    ],
};

const socialLinks = [
    {
        icon: Linkedin,
        href: "#",
        label: "LinkedIn",
        color: "hover:text-[#0077b5]",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    {
        icon: Facebook,
        href: "#",
        label: "Facebook",
        color: "hover:text-[#1877F2]",
    },
    {
        icon: Instagram,
        href: "#",
        label: "Instagram",
        color: "hover:text-[#E4405F]",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-[#FF0000]" },
];

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-100 text-gray-900 border-t border-gray-200">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/logo1.png"
                                alt="Talent Pulse Logo"
                                className="h-20 w-auto object-contain"
                            />
                            <span className="text-3xl font-bold text-gray-900">Talent Pulse</span>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            AI-powered recruitment platform that revolutionizes the entire
                            hiring workflow from job requisition to candidate onboarding.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-purple-600" />
                                <a
                                    href="mailto:support@talentpulse.ai"
                                    className="hover:text-purple-600 transition-colors"
                                >
                                    support@talentpulse.ai
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-purple-600" />
                                <a
                                    href="tel:+15550123456"
                                    className="hover:text-purple-600 transition-colors"
                                >
                                    +1 (555) 012-3456
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-purple-600 mt-1" />
                                <span>100 Innovation Way, Suite 500<br />San Francisco, CA 94105, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright & Organized By */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Talent Pulse. All rights reserved.
                        </div>
                        <div className="hidden md:block w-px h-4 bg-gray-300"></div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Developed by</span>
                            <a
                                href="https://www.atharvasystem.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <img
                                    src="/logo.png"
                                    alt="Atharva System"
                                    className="h-10 object-contain hover:opacity-80 transition-opacity"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-purple-500 flex items-center justify-center transition-all shadow-sm ${social.color}`}
                            >
                                <social.icon className="w-5 h-5 text-gray-600" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
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
