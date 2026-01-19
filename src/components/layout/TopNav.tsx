import logoDark from '@/assets/logo-dark.svg';
import logoMobile from '@/assets/logo-mobile.svg';

interface TopNavProps {
  onMenuClick?: () => void;
}

export function TopNav({ onMenuClick: _onMenuClick }: TopNavProps) {
  return (
    <header className="bg-background flex h-16 items-center border-b px-4 md:px-6">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logoMobile} className="h-6 md:hidden" alt="Taskly logo" />
          <img src={logoDark} className="hidden h-6 md:block" alt="Taskly logo" />
        </a>
      </div>

      <div className="ml-auto flex items-center gap-2">
        {/* Add header actions here (e.g., add task button, menu) */}
      </div>
    </header>
  );
}
