import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function AddButton() {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded((prev) => !prev);
  };

  return (
    <Button
      variant={added ? 'addToCartAdded' : 'addToCartNormal'}
      size="customAddButton"
      onClick={handleClick}
    >
      {added ? 'Added' : 'Add to cart'}
    </Button>
  );
}
