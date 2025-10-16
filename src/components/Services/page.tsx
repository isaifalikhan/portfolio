/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from 'framer-motion';
import { 
  Code2, Palette, Database, Cloud, Shield, 
  Rocket, BarChart3,
  CheckCircle, ArrowRight,
  Lightbulb, Star, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  // removed unused state

  const services = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: 'Custom Web Development',
      description: 'Tailored web applications built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'Single Page Applications',
        'Cross-browser Compatibility',
        'Performance Optimization',
        'SEO Optimization'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-600 to-indigo-700',
      price: 'Starting at $5,000',
      delivery: '4-8 weeks',
      highlights: ['Custom Design', 'Mobile-First', 'SEO Ready']
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Backend & API Development',
      description: 'Robust server-side solutions and RESTful/GraphQL APIs for your applications.',
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'Database Architecture',
        'Authentication Systems',
        'API Documentation',
        'Third-party Integrations'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
      gradient: 'from-emerald-600 to-green-700',
      price: 'Starting at $4,500',
      delivery: '3-6 weeks',
      highlights: ['Scalable Architecture', 'Secure APIs', 'Comprehensive Docs']
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions & DevOps',
      description: 'Scalable cloud infrastructure and deployment automation for growing businesses.',
      features: [
        'Cloud Architecture',
        'CI/CD Pipelines',
        'Containerization',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Disaster Recovery'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      gradient: 'from-violet-600 to-purple-700',
      price: 'Starting at $6,000',
      delivery: '2-4 weeks',
      highlights: ['Auto-scaling', 'High Availability', 'Cost Optimized']
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design & Development',
      description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'User Testing',
        'Accessibility Compliance'
      ],
      technologies: ['Figma', 'Adobe XD', 'Framer Motion', 'CSS3', 'WebGL'],
      gradient: 'from-amber-600 to-orange-600',
      price: 'Starting at $3,500',
      delivery: '3-5 weeks',
      highlights: ['User-Centered', 'Pixel Perfect', 'Accessible']
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Data Visualization & Analytics',
      description: 'Interactive dashboards and data visualization solutions for business intelligence.',
      features: [
        'Interactive Charts',
        'Real-time Dashboards',
        'Data Processing',
        'Business Intelligence',
        'Custom Metrics',
        'Report Generation'
      ],
      technologies: ['D3.js', 'Chart.js', 'Python', 'Tableau', 'Power BI'],
      gradient: 'from-rose-600 to-pink-700',
      price: 'Starting at $4,000',
      delivery: '4-6 weeks',
      highlights: ['Real-time Data', 'Interactive', 'Insightful']
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Security & Performance Audit',
      description: 'Comprehensive security reviews and performance optimization for existing applications.',
      features: [
        'Security Assessment',
        'Performance Testing',
        'Code Review',
        'Vulnerability Scanning',
        'Load Testing',
        'Best Practices Implementation'
      ],
      technologies: ['OWASP', 'Lighthouse', 'WebPageTest', 'Security Headers', 'SSL/TLS'],
      gradient: 'from-cyan-600 to-blue-700',
      price: 'Starting at $2,500',
      delivery: '1-2 weeks',
      highlights: ['Comprehensive Audit', 'Actionable Insights', 'Performance Boost']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your requirements, goals, and technical constraints.',
      icon: <Lightbulb className="w-8 h-8" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and prototypes to visualize the final product.',
      icon: <Palette className="w-8 h-8" />,
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Agile development with regular updates and continuous integration.',
      icon: <Code2 className="w-8 h-8" />,
      duration: '4-8 weeks'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including unit, integration, and user acceptance testing.',
      icon: <CheckCircle className="w-8 h-8" />,
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Smooth deployment to production environment with proper monitoring.',
      icon: <Rocket className="w-8 h-8" />,
      duration: '1 week'
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance to ensure optimal performance.',
      icon: <Shield className="w-8 h-8" />,
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'The custom web application delivered exceeded our expectations. The attention to detail and performance optimization was remarkable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Analytics',
      role: 'CTO',
      content: 'Outstanding backend architecture work. Our API performance improved by 300% and the documentation was comprehensive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DesignFirst Studio',
      role: 'Creative Director',
      content: 'The UI/UX design work was exceptional. Users love the intuitive interface and the mobile experience is flawless.',
      rating: 5
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-semibold cursor-pointer"
            >
              Portfolio
            </motion.div>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link href="/">
              <motion.button
                whileHover={{ y: -2 }}
                className="transition-all relative group text-sm text-gray-400 hover:text-white"
              >
                Home
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ y: -2 }}
              className="transition-all relative group text-sm text-blue-400"
            >
              Services
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 w-full"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-blue-400 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8"
          >
            <span className="text-blue-400 text-sm font-semibold">Professional Services</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Development
            </span>
            <br />
            <span className="text-white">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive development services to bring your digital ideas to life with quality and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="#services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
              >
                Explore Services
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <span className="text-emerald-400 text-sm font-semibold">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                Comprehensive Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From concept to deployment, I provide end-to-end solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-blue-400 border border-blue-500/20">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-400">{service.price}</span>
                      <span className="text-sm text-gray-400">{service.delivery}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm font-semibold"
                    >
                      Start Project
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-4">
              <span className="text-violet-400 text-sm font-semibold">Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A structured approach to ensure quality, transparency, and successful project delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full">
                  <div className="text-3xl font-black text-gray-400 mb-4">{step.step}</div>
                  <div className="text-blue-400 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>
                  <div className="text-sm text-blue-400 font-semibold">
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
              <span className="text-amber-400 text-sm font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create something amazing together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-semibold">
              Portfolio
            </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              <Link href="/">
                <button className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </Link>
              <button className="text-blue-400">
                Services
              </button>
              <Link href="/#contact">
                <button className="hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>© 2025 Portfolio. Professional Development Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;