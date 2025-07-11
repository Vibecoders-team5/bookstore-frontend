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
        'w-full h-full pr-4 py-2 pl-10 bg-[#FAFBFC]/40 border border-[#E2E6E9] hover:border-[#B4BDC3] font-sans text-sm font-normal rounded-[8px] placeholder:text-[#B4BDC3] transition-colors outline-none',
        className,
      )}
      {...props}
    />
  );
};
