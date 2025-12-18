import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Shield, ArrowRight, Globe, Award, Heart, Zap, Cpu, Rocket } from 'lucide-react';

export const AboutUs = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-gray-950 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-semibold mb-6"
          >
            Our Vision
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight"
          >
            Reimagining Recruitment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">for the AI Era.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Talent Pulse isn't just a platform; it's a movement to make hiring faster, fairer, and more intelligent. We bridge the gap between human potential and technological innovation.
          </motion.p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center mb-32">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl transform -rotate-3 opacity-20 blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Future of Work"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why We Exist
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Traditional hiring is broken. It's slow, biased, and often leaves both candidates and recruiters frustrated. We founded Talent Pulse with a singular belief: <strong>technology should serve talent, not the other way around.</strong>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              By harnessing the power of advanced AI and machine learning, we are automating the mundane to liberate the human. Our platform empowers organizations to discover hidden gems, reduce time-to-hire by 50%, and build diverse, high-performing teams with confidence.
            </p>
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="font-medium">10x Faster Hiring</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-medium">AI-Driven Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Innovation Stack */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Innovation Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Built on the pillars of modern technology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Cpu,
                title: 'Cognitive AI',
                description: 'Proprietary algorithms that understand context, nuance, and potential beyond just keywords.'
              },
              {
                icon: Shield,
                title: 'Ethical Design',
                description: 'Bias-mitigation engines built into the core to ensure fair and equitable hiring practices.'
              },
              {
                icon: Rocket,
                title: 'Scalable Architecture',
                description: 'Cloud-native infrastructure designed to grow with your organization, from startup to enterprise.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The values that define our culture and product.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: 'Empathy First', desc: 'We build for people, not just users.' },
              { icon: Lightbulb, title: 'Relentless Innovation', desc: 'We never settle for the status quo.' },
              { icon: Users, title: 'Radical Transparency', desc: 'Trust is our most valuable currency.' },
              { icon: Award, title: 'Obsessive Quality', desc: 'Excellence is our baseline.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className="w-10 h-10 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
              alt="Join us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 py-24 px-6 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to shape the future?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of forward-thinking companies who are transforming their hiring process with Talent Pulse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
              <button className="px-8 py-4 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
