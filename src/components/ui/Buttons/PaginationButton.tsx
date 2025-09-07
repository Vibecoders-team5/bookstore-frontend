import { Button } from '@/components/ui/button';
import clsx from 'clsx';
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
      className={clsx(
        ' dark:bg-[#93785c] dark:border-[#93785c]  dark:text-white dark:hover:border-white/60',
        {
          'bg-custom-primary dark:bg-white text-white dark:text-header-footer-light border-custom-primary dark:border-white':
            isCurrentPageTarget,
        },
      )}
      onClick={() => handleClick(num)}
    >
      {num}
    </Button>
  );
};
