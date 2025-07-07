import { Button } from '@/components/ui/button';
import cn from 'classnames';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export const HeartButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Button variant="default" onClick={() => setIsSelected(!isSelected)}>
      <Heart className={cn({ 'text-red-500 fill-red-500': isSelected })} />
    </Button>
  );
};
