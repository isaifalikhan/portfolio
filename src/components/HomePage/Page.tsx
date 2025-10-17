"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Calendar, Rocket, Heart, Code2, Database, ChevronDown, ArrowRight, Cloud, Shield, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Move initParticles function here, before the useEffect that calls it
    const initParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const particles = Array.from({ length: 20 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      }));
  
      const animate = () => {
        ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        particles.forEach(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;
  
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
  
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
          ctx.fill();
  
          particles.forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
  
            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        });
  
        requestAnimationFrame(animate);
      };
  
      animate();
    };

  // Move projects array here as well, before any useEffect that uses it
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
      title: 'E-commerce Intelligence Platform',
      description: 'AI-powered analytics and automation suite for e-commerce businesses with multi-channel integration capabilities.',
      image: '🛒',
      technologies: ['Vue.js', 'NestJS', 'MySQL', 'Elasticsearch', 'RabbitMQ'],
      category: 'AI/ML',
      status: 'Live',
      gradient: 'from-amber-600 to-orange-600',
      features: ['AI Recommendations', 'Inventory Management', 'Sales Analytics'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      const sections = ['hero', 'about', 'expertise', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };


    initParticles(); // Now this will work because initParticles is defined above

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, projects.length]);

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

  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise SaaS products, mentor junior developers, and implement scalable architectures.',
      achievements: ['Improved performance by 40%', 'Led team of 5 developers', 'Reduced costs by 25%'],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Developed full-stack applications for various clients, focusing on scalability and user experience.',
      achievements: ['Delivered 15+ projects', 'Increased user satisfaction by 35%', 'Implemented CI/CD pipelines'],
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker']
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Web Agency',
      period: '2019 - 2020',
      description: 'Built responsive web interfaces and collaborated with design teams to create engaging user experiences.',
      achievements: ['Built 20+ websites', 'Improved load times by 60%', 'Mobile-first approach'],
      technologies: ['JavaScript', 'CSS3', 'WordPress', 'PHP']
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-blue-400 font-semibold"
          >
            Loading Portfolio...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-30"
      />

      {/* Grid Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>



      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full"
          >
            <span className="text-blue-400 text-sm font-semibold">Welcome to My Portfolio</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Professional
            </span>
            <br />
            <span className="text-white">Full Stack Developer</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable web applications with modern technologies and clean, efficient code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
            >
              View My Work
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 justify-center items-center text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Based Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for Projects</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-32 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl border border-white/10 p-8 flex items-center justify-center">
              <div className="text-9xl">👨‍💻</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
              <span className="text-blue-400 text-sm font-semibold">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting Digital
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"> Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating robust, 
              scalable web applications that drive business growth. My expertise spans modern JavaScript 
              frameworks, cloud technologies, and agile development methodologies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">50+</div>
                <div className="text-gray-400 text-sm mt-2">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">30+</div>
                <div className="text-gray-400 text-sm mt-2">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <span className="text-emerald-400 text-sm font-semibold">My Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
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
                transition={{ delay: idx * 0.2 }}
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
      </section>

      {/* Projects Carousel Section */}
      <section id="projects" className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
              <span className="text-amber-400 text-sm font-semibold">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Project Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work delivering innovative solutions across various industries.
            </p>
          </motion.div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className={`h-full bg-gradient-to-br ${projects[currentProject].gradient} rounded-3xl p-8 md:p-12`}>
                    <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
                      {/* Project Content */}
                      <div className="space-y-6 text-white">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-3xl">
                            {projects[currentProject].image}
                          </div>
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold">{projects[currentProject].title}</h3>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                                {projects[currentProject].category}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                projects[currentProject].status === 'Live' 
                                  ? 'bg-green-500/20 text-green-100 border border-green-500/30'
                                  : 'bg-blue-500/20 text-blue-100 border border-blue-500/30'
                              }`}>
                                {projects[currentProject].status}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-xl leading-relaxed text-white/90">
                          {projects[currentProject].description}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-white text-lg">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {projects[currentProject].features.map((feature, i) => (
                              <span key={i} className="px-3 py-2 bg-white/20 backdrop-blur-xl rounded-xl text-sm font-semibold border border-white/20">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                          {projects[currentProject].technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-sm font-semibold border border-white/20">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-6">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={projects[currentProject].liveUrl}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-lg transition-all"
                          >
                            <Eye className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={projects[currentProject].githubUrl}
                            className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl font-semibold hover:bg-white/30 transition-all"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </motion.a>
                        </div>
                      </div>
                      
                      {/* Project Visual */}
                      <div className="flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-full h-80 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-8xl shadow-2xl"
                        >
                          {projects[currentProject].image}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevProject}
                  className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextProject}
                  className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Project Indicators */}
              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentProject(idx);
                      setAutoPlay(false);
                      setTimeout(() => setAutoPlay(true), 10000);
                    }}
                    className={`transition-all rounded-full ${
                      idx === currentProject 
                        ? 'w-8 h-2 bg-white' 
                        : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Project Counter */}
              <div className="text-sm text-gray-400 font-mono">
                {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">Want to see more of my work?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              View Complete Portfolio
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
              <span className="text-blue-400 text-sm font-semibold">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Work History
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            
            <div className="space-y-12">
              {experience.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold">{job.role}</h3>
                      <span className="text-blue-400 font-semibold">{job.period}</span>
                    </div>
                    <p className="text-xl text-blue-400 mb-3">{job.company}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-300 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <span className="text-emerald-400 text-sm font-semibold">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                Lets Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-400">Ready to start your next project? Get in touch today.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                  <textarea 
                    placeholder="Tell me about your project..." 
                    rows={6} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Send Message
                </motion.button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-12 pt-12 border-t border-white/10">
                {[
                  { icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                  { icon: <Mail className="w-5 h-5" />, label: 'Email' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                  >
                    {social.icon}
                    <span className="font-semibold">{social.label}</span>
                  </motion.a>
                ))}
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
              {['Hero', 'About', 'Projects', 'Contact'].map(item => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <Link href="/services">
                <button className="hover:text-blue-400 transition-colors">
                  Services
                </button>
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>© 2025 Portfolio. Crafted with <Heart className="inline w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;