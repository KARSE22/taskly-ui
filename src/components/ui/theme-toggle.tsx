'use client';

import * as React from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div
      className={cn(
        'bg-light-grey dark:bg-very-dark-grey flex items-center justify-center gap-6 rounded-md px-14 py-3.5',
        className
      )}
    >
      <Sun
        className={cn('size-5 transition-colors', isDark ? 'text-medium-grey' : 'text-medium-grey')}
      />
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={handleToggle}
        className="bg-primary hover:bg-primary-hover focus-visible:ring-primary relative h-5 w-10 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <span
          className={cn(
            'absolute top-0.5 size-[14px] rounded-full bg-white transition-transform duration-200',
            isDark ? 'left-[23px]' : 'left-[3px]'
          )}
        />
      </button>
      <Moon
        className={cn('size-5 transition-colors', isDark ? 'text-medium-grey' : 'text-medium-grey')}
      />
    </div>
  );
}
