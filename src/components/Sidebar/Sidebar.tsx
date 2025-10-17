"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, User, Wrench, Briefcase, Mail, GraduationCap, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: User },
  { name: 'Services', href: '/services', icon: Wrench },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Expertise', href: '/expertise', icon: GraduationCap },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Sidebar({ onToggle }: { onToggle?: () => void }) {
  const pathname = usePathname();
  return (
    <aside
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 text-white"
      aria-label="Sidebar navigation"
    >
      <button
        onClick={() => onToggle?.()}
        aria-label={'Close sidebar'}
        className="w-12 h-12 mb-2 flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15"
      >
        <X className="w-5 h-5" />
      </button>

      <nav className="flex flex-col items-start gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
                className={`w-40 h-12 overflow-hidden flex items-center rounded-full border transition-colors duration-150 ease-out ${
                  active
                    ? 'bg-white/15 border-white/30 text-blue-400'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/15 hover:text-white'
                }`}
                aria-label={item.name}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`pr-3 text-sm whitespace-nowrap origin-left transform transition-transform duration-150 ease-out transition-opacity ${
                    active
                      ? 'opacity-100 scale-x-100 translate-x-1'
                      : 'opacity-0 scale-x-0 translate-x-0'
                  } group-hover:opacity-100 group-hover:scale-x-100 group-hover:translate-x-1`}
                >
                  {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}