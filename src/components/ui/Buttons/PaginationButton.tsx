import { Button } from '@/components/ui/button';
import cn from 'classnames';
import { useState } from 'react';

type PaginationButtonProps = {
  num: number;
};

export const PaginationButton: React.FC<PaginationButtonProps> = ({ num }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Button
      variant="default"
      className={cn({ 'bg-[#313237] text-white border-[#313237]': isSelected })}
      onClick={() => setIsSelected(!isSelected)}
    >
      {num}
    </Button>
  );
};
