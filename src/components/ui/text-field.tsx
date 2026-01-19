import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input } from './input';
import { Label } from './label';

interface TextFieldProps extends React.ComponentProps<'input'> {
  error?: string;
  label?: string;
}

function TextField({ className, error, label, id, ...props }: TextFieldProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const hasError = !!error;

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <div className="relative">
        <Input
          id={inputId}
          className={cn(hasError && 'border-destructive pr-28', className)}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
          {...props}
        />
        {hasError && (
          <span
            id={`${inputId}-error`}
            className="text-destructive absolute top-1/2 right-4 -translate-y-1/2 text-[0.8125rem] font-medium"
          >
            {error}
          </span>
        )}
      </div>
    </div>
  );
}

export { TextField };
