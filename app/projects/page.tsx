"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Enterprise SaaS Platform',
      description: 'A comprehensive business management solution with real-time analytics and AI-powered insights for enterprise clients.',
      image: '💼',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
      category: 'Full Stack',
      status: 'Live',
      gradient: 'from-blue-600 to-indigo-700',
      features: ['Real-time Dashboard', 'AI Analytics', 'Multi-tenant Architecture'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Financial Analytics Dashboard',
      description: 'Advanced financial data visualization and predictive analytics platform for investment firms and financial institutions.',
      image: '📊',
      technologies: ['TypeScript', 'Python', 'D3.js', 'FastAPI', 'MongoDB'],
      category: 'Data Visualization',
      status: 'Live',
      gradient: 'from-emerald-600 to-teal-700',
      features: ['Interactive Charts', 'Predictive Models', 'Real-time Data'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      description: 'Secure patient management platform with telemedicine capabilities and EHR integration for healthcare providers.',
      image: '🏥',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker', 'Kubernetes'],
      category: 'Enterprise',
      status: 'In Development',
      gradient: 'from-violet-600 to-purple-700',
      features: ['HIPAA Compliant', 'Video Consultations', 'EHR Integration'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'E-commerce Mobile App',
      description: 'Cross-platform mobile application with advanced features for modern e-commerce businesses.',
      image: '📱',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      category: 'Mobile',
      status: 'Live',
      gradient: 'from-rose-600 to-red-700',
      features: ['Push Notifications', 'Payment Gateway', 'Offline Support'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'Intelligent content creation platform powered by machine learning algorithms.',
      image: '🤖',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Elasticsearch'],
      category: 'AI/ML',
      status: 'Beta',
      gradient: 'from-cyan-600 to-blue-700',
      features: ['AI Generation', 'Content Optimization', 'Multi-language Support'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'Modern real estate marketplace with virtual tours and advanced search capabilities.',
      image: '🏠',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3', 'WebRTC'],
      category: 'Full Stack',
      status: 'Live',
      gradient: 'from-amber-600 to-orange-600',
      features: ['Virtual Tours', 'Advanced Search', 'Property Management'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Full Stack', 'Mobile', 'AI/ML', 'Enterprise', 'Data Visualization'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
              <span className="text-amber-400 text-sm font-semibold">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in modern web development, 
              from enterprise applications to innovative AI-powered solutions.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
              >
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <span className="relative z-10">{project.image}</span>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-100 border border-green-500/30'
                        : project.status === 'Beta'
                        ? 'bg-yellow-500/20 text-yellow-100 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-100 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-400">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-400">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;