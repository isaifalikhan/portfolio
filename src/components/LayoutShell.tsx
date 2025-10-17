"use client";
import { useState } from 'react';
import Sidebar from '@/src/components/Sidebar/Sidebar';
import { X } from 'lucide-react';
import NavbarIcon from '@/src/components/icons/NavbarIcon';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top-left toggle icon */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        className="fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <NavbarIcon className="w-5 h-5" />}
      </button>

      {/* Sliding sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Content shifts when sidebar is open */}
      <main className={`${sidebarOpen ? 'ml-40' : 'ml-0'} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
}