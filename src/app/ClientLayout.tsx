'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header onToggleSidebar={() => setCollapsed(c => !c)} sidebarCollapsed={collapsed} />
      <div className="app-layout">
        <Sidebar collapsed={collapsed} />
        <main className={`main-content ${collapsed ? 'sidebar-collapsed' : ''}`}>
          {children}
        </main>
      </div>
    </>
  );
}
