import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-950 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
                            Let's start a <br />
                            <span className="text-purple-600">conversation.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-light">
                            Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-400">support@talentpulse.ai</p>
                                    <p className="text-gray-600 dark:text-gray-400">sales@talentpulse.ai</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-gray-900 dark:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                                    <p className="text-gray-600 dark:text-gray-400">Mon-Fri from 9am to 6pm PST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-gray-900 dark:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Office</h3>
                                    <p className="text-gray-600 dark:text-gray-400">123 AI Boulevard, Tech City</p>
                                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem]">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border-0 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white placeholder-gray-400" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border-0 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white placeholder-gray-400" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-900 dark:text-white">Email Address</label>
                                <input type="email" className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border-0 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white placeholder-gray-400" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-900 dark:text-white">Message</label>
                                <textarea rows="4" className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border-0 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white placeholder-gray-400" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
