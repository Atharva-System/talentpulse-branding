import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'HR Director',
        company: 'TechCorp Inc.',
        image: '/1.jpg',
        quote: 'Talent Pulse transformed our hiring process. We reduced time-to-hire by 60% and found better candidates faster.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Recruitment Lead',
        company: 'StartupXYZ',
        image: '/2.jpg',
        quote: 'The AI screening is incredibly accurate. It saved us hundreds of hours reviewing resumes manually.',
        rating: 5,
    },
    {
        name: 'Emily Rodriguez',
        role: 'Talent Acquisition Manager',
        company: 'Global Solutions',
        image: '/3.jpg',
        quote: 'Best recruitment platform we\'ve used. The LinkedIn integration alone is worth it. Highly recommend!',
        rating: 5,
    },
];

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Loved by Recruiters Worldwide
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        See what our customers have to say about their experience with Talent Pulse.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-200 dark:text-purple-900/30" />

                            <div className="flex items-center gap-5 mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-2 border-white dark:border-gray-700">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
