
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Hexagon } from 'lucide-react';
import { Footer } from './Footer';
import { ContactModal } from './ContactModal';

export const Layout = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    const location = useLocation();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-sans selection:bg-purple-500/30 transition-colors duration-300 flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/logo2.png"
                                alt="Talent Pulse Logo"
                                className="h-45 w-auto object-contain"
                            />
                            {/* <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Talent Pulse</span> */}
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</Link>
                        <Link to="/integrations" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Integrations</Link>
                        <Link to="/pricing" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</Link>

                    </div>

                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-semibold transition-all shadow-lg"
                    >
                        Contact Us
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">

                        <button
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
                        <Link
                            to="/features"
                            className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
                        >
                            Features
                        </Link>
                        <Link
                            to="/integrations"
                            className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
                        >
                            Integrations
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
                        >
                            Pricing
                        </Link>
                        <button
                            onClick={() => {
                                setIsContactModalOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-base font-semibold transition-all shadow-lg"
                        >
                            Contact Us
                        </button>
                    </div>
                )}
            </nav>

            <main className="flex-grow pt-16">
                <Outlet context={{ setIsContactModalOpen }} />
            </main>

            <Footer />

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    );
};
