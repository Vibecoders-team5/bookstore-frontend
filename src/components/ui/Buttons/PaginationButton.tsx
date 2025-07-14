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
      className={cn(
        ' dark:bg-[#93785c] dark:border-[#93785c]  dark:text-white dark:hover:border-white/60',
        {
          'bg-[#313237] dark:bg-white text-white dark:text-[#493929] border-[#313237] dark:border-white':
            isCurrentPageTarget,
        },
      )}
      onClick={() => handleClick(num)}
    >
      {num}
    </Button>
  );
};
