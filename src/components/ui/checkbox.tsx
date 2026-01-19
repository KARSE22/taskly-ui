import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer flex size-4 shrink-0 items-center justify-center rounded-[2px] border transition-colors',
        'border-input bg-card',
        'hover:border-primary',
        'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white"
      >
        <CheckIcon className="size-2.5" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

interface SubtaskCheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
  className?: string;
}

function SubtaskCheckbox({
  checked,
  onCheckedChange,
  label,
  disabled,
  className,
}: SubtaskCheckboxProps) {
  const id = React.useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        'group bg-background flex cursor-pointer items-center gap-4 rounded-[4px] p-3 transition-colors',
        'hover:bg-primary/25',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(state) => {
          if (typeof state === 'boolean') {
            onCheckedChange?.(state);
          }
        }}
        disabled={disabled}
      />
      <span
        className={cn(
          'text-[0.75rem] leading-[0.9375rem] font-bold transition-all',
          checked && 'text-muted-foreground line-through opacity-50'
        )}
      >
        {label}
      </span>
    </label>
  );
}

export { Checkbox, SubtaskCheckbox };
