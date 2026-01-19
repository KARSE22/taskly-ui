import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-10 w-full rounded-[4px] border bg-transparent px-4 py-2 text-[0.8125rem] leading-[1.4375rem] font-medium transition-colors',
        'border-input hover:border-primary',
        'file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'placeholder:text-muted-foreground/40',
        'focus-visible:border-primary focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
