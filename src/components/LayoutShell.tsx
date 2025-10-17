"use client";
import { useState } from 'react';
import Sidebar from '@/src/components/Sidebar/Sidebar';
import { Menu } from 'lucide-react';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {sidebarOpen ? (
        <Sidebar onToggle={() => setSidebarOpen(false)} />
      ) : (
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15 text-white"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      <main className={sidebarOpen ? 'ml-40' : 'ml-0'}>{children}</main>
    </div>
  );
}