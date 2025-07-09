import { Button } from '@/components/ui/button';
import cn from 'classnames';
import { Heart } from 'lucide-react';
import { useState } from 'react';

type HeartButtonProps = {
  onClick?: () => void;
  isSelected?: boolean;
};

export const HeartButton: React.FC<HeartButtonProps> = ({
  onClick = () => {},
  isSelected = false,
}) => {
  const [isButtonSelected, setIsButtonSelected] = useState(isSelected);

  const handleClick = () => {
    setIsButtonSelected(!isButtonSelected);
    onClick();
  };

  return (
    <Button variant="defaultHeart" size="s40" onClick={handleClick}>
      <Heart
        className={cn('h-full', {
          'text-red-500 fill-red-500': isButtonSelected,
        })}
      />
    </Button>
  );
};
