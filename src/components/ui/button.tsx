import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-colors disabled:pointer-events-none disabled:opacity-25 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover rounded-full',
        secondary: 'bg-primary/10 text-primary hover:bg-primary/25 rounded-full',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive-hover rounded-full',
      },
      size: {
        lg: 'h-12 px-6 text-[0.9375rem] leading-[1.1875rem]',
        sm: 'h-10 px-5 text-[0.8125rem] leading-[1.4375rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  }
);

function Button({
  className,
  variant = 'primary',
  size = 'lg',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
