import { cn } from '@/lib/utils';
import iconHideSidebar from '@/assets/icon-hide-sidebar.svg';
import iconShowSidebar from '@/assets/icon-show-sidebar.svg';
import iconBoard from '@/assets/icon-board.svg';
import { ThemeToggle } from '@/components/ui';

interface Board {
  id: string;
  name: string;
}

interface SideNavProps {
  isCollapsed: boolean;
  onToggle: () => void;
  boards?: Board[];
  activeBoardId?: string;
  onBoardSelect?: (boardId: string) => void;
  onCreateBoard?: () => void;
}

export function SideNav({
  isCollapsed,
  onToggle,
  boards = [],
  activeBoardId,
  onBoardSelect,
  onCreateBoard,
}: SideNavProps) {
  return (
    <>
      <aside
        className={cn(
          'border-lines-light dark:border-lines-dark bg-background flex h-full flex-col border-r transition-all duration-300',
          isCollapsed ? 'w-0 overflow-hidden' : 'w-[300px]'
        )}
      >
        {/* Board list */}
        <nav className="flex flex-1 flex-col overflow-y-auto pr-6">
          <h2 className="text-medium-grey mb-5 px-6 text-xs font-bold tracking-[2.4px] uppercase">
            All Boards ({boards.length})
          </h2>

          <ul className="flex flex-col">
            {boards.map((board) => {
              const isActive = board.id === activeBoardId;
              return (
                <li key={board.id}>
                  <button
                    onClick={() => onBoardSelect?.(board.id)}
                    className={cn(
                      'flex w-full items-center gap-4 rounded-r-full py-4 pl-6 text-[0.9375rem] font-bold transition-colors',
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-medium-grey hover:bg-primary/10 hover:text-primary'
                    )}
                  >
                    <img
                      src={iconBoard}
                      alt=""
                      className={cn('size-4', isActive && 'brightness-0 invert')}
                    />
                    <span>{board.name}</span>
                  </button>
                </li>
              );
            })}

            {/* Create New Board */}
            <li>
              <button
                onClick={onCreateBoard}
                className="text-primary hover:text-primary-hover flex w-full items-center gap-4 rounded-r-full py-4 pl-6 text-[0.9375rem] font-bold transition-colors"
              >
                <img src={iconBoard} alt="" className="size-4" />
                <span>+ Create New Board</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4">
          <ThemeToggle className="mb-2" />

          <button
            onClick={onToggle}
            className="text-medium-grey hover:bg-primary/10 hover:text-primary -ml-2 flex w-full items-center gap-4 rounded-r-full py-4 pl-6 text-[0.9375rem] font-bold transition-colors"
          >
            <img src={iconHideSidebar} alt="" className="size-[18px]" />
            <span>Hide Sidebar</span>
          </button>
        </div>
      </aside>

      {/* Show sidebar button when collapsed */}
      {isCollapsed && (
        <button
          onClick={onToggle}
          className="bg-primary hover:bg-primary-hover fixed bottom-8 left-0 z-50 flex h-12 w-14 items-center justify-center rounded-r-full transition-colors"
        >
          <img src={iconShowSidebar} alt="Show sidebar" className="size-4" />
        </button>
      )}
    </>
  );
}
