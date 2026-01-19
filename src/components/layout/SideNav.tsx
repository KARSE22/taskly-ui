import { cn } from '@/lib/utils';
import iconHideSidebar from '@/assets/icon-hide-sidebar.svg';
import iconShowSidebar from '@/assets/icon-show-sidebar.svg';
import { ThemeToggle } from '@/components/ui';

interface SideNavProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function SideNav({ isCollapsed, onToggle }: SideNavProps) {
  return (
    <>
      <aside
        className={cn(
          'bg-background flex flex-col border-r transition-all duration-300',
          isCollapsed ? 'w-0 overflow-hidden' : 'w-64'
        )}
      >
        <nav className="flex-1 overflow-y-auto p-4">{/* Board list will go here */}</nav>

        <div className="border-t p-4">
          <ThemeToggle className="mb-4" />

          <button
            onClick={onToggle}
            className="text-muted-foreground hover:text-foreground flex w-full items-center gap-2 rounded-r-full py-3 text-sm font-medium transition-colors"
          >
            <img src={iconHideSidebar} alt="" className="h-4 w-4" />
            <span>Hide Sidebar</span>
          </button>
        </div>
      </aside>

      {isCollapsed && (
        <button
          onClick={onToggle}
          className="bg-primary hover:bg-primary/90 fixed bottom-8 left-0 z-50 flex h-12 w-14 items-center justify-center rounded-r-full transition-colors"
        >
          <img src={iconShowSidebar} alt="Show sidebar" className="h-4 w-4" />
        </button>
      )}
    </>
  );
}
