import { Button } from '@/components/ui/button';
import cn from 'classnames';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export const HeartButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Button
      variant="defaultHeart"
      size="s40"
      onClick={() => setIsSelected(!isSelected)}
    >
      <Heart
        className={cn('h-full', {
          'text-red-500 fill-red-500': isSelected,
        })}
      />
    </Button>
  );
};
