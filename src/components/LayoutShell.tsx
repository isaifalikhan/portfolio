"use client";
import { useState } from 'react';
import Sidebar from '@/src/components/Sidebar/Sidebar';
import { X } from 'lucide-react';
import NavbarIcon from '@/src/components/icons/NavbarIcon';
import Navbar from '@/src/components/Navbar/Navbar';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Global top navigation for mobile & desktop */}
      <Navbar />

      {/* Top-left toggle icon (desktop only) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        className="hidden md:flex fixed top-4 left-4 z-50 w-10 h-10 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <NavbarIcon className="w-5 h-5" />}
      </button>

      {/* Sliding sidebar (desktop only) */}
      <Sidebar open={sidebarOpen} />

      {/* Content shifts when sidebar is open and has top padding for fixed navbar */}
      <main className={`${sidebarOpen ? 'md:ml-40 ml-0' : 'ml-0'} pt-20 md:pt-0 transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
}