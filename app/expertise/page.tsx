"use client";
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Shield } from 'lucide-react';

export default function ExpertisePage() {
  const expertise = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building responsive, modern web applications with React and Next.js frameworks.',
      technologies: ['React JS', 'Next JS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'CMS & E-commerce',
      description: 'Creating powerful websites and online stores with WordPress and e-commerce platforms.',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Divi', 'Shopify', 'Custom Themes'],
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Development Tools',
      description: 'Utilizing modern development tools and state management for efficient workflows.',
      technologies: ['Redux Toolkit', 'API Integration', 'GitHub', 'Hooks & Context', 'Deployment'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Performance & UX',
      description: 'Optimizing websites for performance, accessibility, and exceptional user experience.',
      technologies: ['Responsive Design', 'Performance Optimization', 'Form Handling', 'Lazy Loading', 'Error Boundaries'],
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
            <span className="text-emerald-400 text-sm font-semibold">My Expertise</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized expertise in frontend development, WordPress, and e-commerce solutions with focus on modern technologies and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}