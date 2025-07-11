import { Button } from '@/components/ui/button';
import cn from 'classnames';
import { Heart } from 'lucide-react';
import { useState } from 'react';

type HeartButtonProps = {
  onClick?: () => void;
  isSelected?: boolean;
  size?: 'default' | 's40' | 'adaptiveHeart';
};

export const HeartButton: React.FC<HeartButtonProps> = ({
  onClick = () => {},
  isSelected = false,
  size,
}) => {
  const [isButtonSelected, setIsButtonSelected] = useState(isSelected);

  const handleClick = () => {
    setIsButtonSelected(!isButtonSelected);
    onClick();
  };

  return (
    <Button
      variant="defaultHeart"
      size={size}
      onClick={handleClick}
      className="shrink-0"
    >
      <Heart
        className={cn('h-full', {
          'text-red-500 fill-red-500': isButtonSelected,
        })}
      />
    </Button>
  );
};
