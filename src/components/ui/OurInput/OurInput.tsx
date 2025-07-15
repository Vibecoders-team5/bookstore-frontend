import * as React from 'react';
import { cn } from '@/lib/utils';

export const OurInput = ({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'w-full h-full pr-4 py-2 pl-10 bg-[#FAFBFC]/40 border border-custom-elements hover:border-custom-icons font-sans text-sm font-normal rounded-[8px] placeholder:text-custom-icons transition-colors outline-none',
        className,
      )}
      {...props}
    />
  );
};
