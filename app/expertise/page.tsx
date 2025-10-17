"use client";
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Shield } from 'lucide-react';

export default function ExpertisePage() {
  const expertise = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern frameworks.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure and deployment automation.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Performance',
      description: 'Secure, optimized applications with best practices.',
      technologies: ['Web Security', 'Performance Optimization', 'Testing', 'Monitoring'],
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
            Deep expertise across the full development stack with focus on modern technologies and best practices.
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