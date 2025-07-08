import { Button } from '@/components/ui/button';
import cn from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type PaginationButtonProps = {
  num: number;
  onClick: (targetPage: number) => void;
};

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  num,
  onClick,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') || 1;

  const handleClick = (targetPage: number) => {
    setIsSelected(!isSelected);
    onClick(targetPage);
  };

  const isCurrentPageTarget = +currentPage === num;

  return (
    <Button
      variant="default"
      size="s32"
      className={cn({
        'bg-[#313237] text-white border-[#313237]': isCurrentPageTarget,
      })}
      onClick={() => handleClick(num)}
    >
      {num}
    </Button>
  );
};
