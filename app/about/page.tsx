"use client";
import { motion } from 'framer-motion';
import { 
  Code2, Database, Cloud, Shield, 
  Award, Users, Calendar, MapPin,
  Mail, Download
} from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
      icon: <Code2 className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'GraphQL', 'REST APIs'],
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins'],
      icon: <Cloud className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      category: 'Database & Security',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Web Security', 'OAuth', 'JWT'],
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '50+ Projects Delivered',
      description: 'Successfully completed projects across various industries'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '30+ Happy Clients',
      description: 'Built lasting relationships with satisfied customers'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: '5+ Years Experience',
      description: 'Continuous learning and professional growth'
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8">
              <span className="text-blue-400 text-sm font-semibold">About Me</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Passionate
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I{"'"}m a full-stack developer with a passion for creating innovative web applications 
              that solve real-world problems. With expertise in modern technologies and a focus 
              on clean, efficient code.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-8xl shadow-2xl">
                👨‍💻
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🚀
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                  My Journey
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Started my journey in web development 5 years ago, I{"'"}ve had the privilege of working 
                with startups and established companies to bring their digital visions to life. 
                My approach combines technical expertise with creative problem-solving.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies and best practices. When I{"'"}m not coding, you{"'"}ll find me exploring new 
                frameworks, contributing to open-source projects, or mentoring aspiring developers.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <MapPin className="w-5 h-5" />
                  <span>Remote / Global</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Calendar className="w-5 h-5" />
                  <span>Available for Projects</span>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${skill.gradient} mb-6`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 mb-6 text-white">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;