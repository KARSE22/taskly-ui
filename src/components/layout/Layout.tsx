import { Outlet } from 'react-router-dom';
import { TopNav } from './TopNav';
import { SideNav } from './SideNav';
import { useSidebar } from '@/hooks/useSidebar';

export function Layout() {
  const { isCollapsed, toggle } = useSidebar();

  return (
    <div className="bg-background flex h-screen flex-col">
      <TopNav onMenuClick={toggle} />

      <div className="flex flex-1 overflow-hidden">
        <SideNav isCollapsed={isCollapsed} onToggle={toggle} />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
