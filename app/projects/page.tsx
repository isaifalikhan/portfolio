"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Anemoia.dev',
      description: 'Professional web development agency website showcasing modern design principles and interactive user experiences. Built with cutting-edge technologies to deliver exceptional performance.',
      image: '🌐',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Development',
      status: 'Live',
      gradient: 'from-blue-600 to-indigo-700',
      features: ['Responsive Design', 'Interactive Animations', 'Modern UI/UX'],
      liveUrl: 'https://anemoia.dev',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Overnight Glasses',
      description: 'E-commerce platform for prescription glasses with advanced product customization, virtual try-on features, and seamless checkout experience.',
      image: '👓',
      technologies: ['WordPress', 'WooCommerce', 'JavaScript', 'CSS3', 'PHP'],
      category: 'E-commerce',
      status: 'Live',
      gradient: 'from-emerald-600 to-teal-700',
      features: ['Product Customization', 'Payment Integration', 'Inventory Management'],
      liveUrl: 'https://overnightglasses.com',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Lin Manuel Portfolio',
      description: 'Personal portfolio website for Lin-Manuel Miranda featuring elegant design, smooth animations, and comprehensive showcase of achievements and works.',
      image: '🎭',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
      category: 'Portfolio',
      status: 'Live',
      gradient: 'from-violet-600 to-purple-700',
      features: ['Elegant Design', 'Smooth Animations', 'Content Showcase'],
      liveUrl: 'https://linmanuel.com',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Navi Auto Transport',
      description: 'Professional auto transport service website with quote calculator, service booking system, and comprehensive vehicle shipping solutions.',
      image: '🚛',
      technologies: ['WordPress', 'Elementor', 'CSS3', 'JavaScript', 'PHP'],
      category: 'Business Website',
      status: 'Live',
      gradient: 'from-rose-600 to-red-700',
      features: ['Quote Calculator', 'Service Booking', 'Responsive Design'],
      liveUrl: 'https://naviautotransport.com',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Neufluence',
      description: 'Digital marketing agency platform featuring modern design, service showcases, and client portfolio with advanced content management capabilities.',
      image: '📈',
      technologies: ['WordPress', 'Divi', 'CSS3', 'JavaScript', 'PHP'],
      category: 'Agency Website',
      status: 'Live',
      gradient: 'from-cyan-600 to-blue-700',
      features: ['Service Showcase', 'Client Portfolio', 'Content Management'],
      liveUrl: 'https://neufluence.com',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'STK Steakhouse',
      description: 'Premium restaurant website with elegant design, menu showcase, reservation system, and location finder for the luxury dining experience.',
      image: '🥩',
      technologies: ['WordPress', 'Custom Theme', 'CSS3', 'JavaScript', 'PHP'],
      category: 'Restaurant Website',
      status: 'Live',
      gradient: 'from-amber-600 to-orange-600',
      features: ['Menu Showcase', 'Reservation System', 'Location Finder'],
      liveUrl: 'https://stksteakhouse.com',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Web Development', 'E-commerce', 'Portfolio', 'Business Website', 'Agency Website', 'Restaurant Website'];

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
              A collection of real-world projects showcasing my expertise in web development, 
              from e-commerce platforms to professional business websites and portfolio sites.
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