import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AddButton() {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded((prev) => !prev);
  };

  return (
    <div
      className={cn(
        'inline-flex rounded-[8px] transition-all duration-500 ease-in-out',
        added && 'outline text-[#E2E6E9]',
      )}
      style={{ borderRadius: '8px' }}
    >
      <Button
        variant={added ? 'addToCartAdded' : 'addToCartNormal'}
        size="custom"
        className="w-40 h-10"
        onClick={handleClick}
      >
        {added ? 'Added' : 'Add to cart'}
      </Button>
    </div>
  );
}
