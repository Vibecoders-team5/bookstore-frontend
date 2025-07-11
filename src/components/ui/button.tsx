import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        addToCartNormal: 'rounded-sm bg-[#313237] text-white hover:shadow-lg',
        addToCartAdded:
          'rounded-sm bg-white text-[#27AE60] border border-[#E2E6E9]',
        default:
          'rounded-lg border-gray-200 border hover:border-[#313237] box-border',
        defaultHeart:
          'rounded-lg border-gray-200 border hover:border-[#313237]',
        paginationArrow: 'w-8 h-8 rounded-lg',
        selected:
          'rounded-[8px] bg-[#313237] text-white hover:shadow-[0_0_13px_0_#17203166]',
        backToTop:
          'uppercase text-[#89939A] hover:text-[#313237] transition-colors',
      },
      size: {
        s32: 'size-8',
        s40: 'size-10',
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        customAddButton: 'w-40 h-10',
        bookPageAddButton:
          'w-full max-w-[250px] h-[40px] text-[14px] rounded-md',
        bookPageLangButton: 'h-10 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        adaptiveHeart: 'w-full max-w-[40px] h-10 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
