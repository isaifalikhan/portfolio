"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Contact', href: '/contact' }
  ];

  // removed unused scrollTo helper

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5"
      >
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
            {navItems.map(item => (
              <Link key={item.name} href={item.href}>
                <motion.button
                  whileHover={{ y: -2 }}
                  className={`transition-all relative group text-sm ${
                    pathname === item.href 
                      ? 'text-blue-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  <motion.span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 ${
                      pathname === item.href 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="md:hidden text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5"
            >
              {navItems.map(item => (
                <Link key={item.name} href={item.href}>
                  <motion.button
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-6 py-4 hover:bg-blue-500/10 transition-colors ${
                      pathname === item.href ? 'text-blue-400 bg-blue-500/5' : 'text-gray-400'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;