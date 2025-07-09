import { useState } from 'react';
import { Button } from '@/components/ui/button';

type AddButtonProps = {
  onClick?: () => void;
  isSelected?: boolean;
};

export const AddButton: React.FC<AddButtonProps> = ({
  onClick = () => {},
  isSelected = false,
}) => {
  const [isButtonSelected, setIsButtonSelected] = useState(isSelected);

  const handleClick = () => {
    setIsButtonSelected((prev) => !prev);
    onClick();
  };

  return (
    <Button
      variant={isButtonSelected ? 'addToCartAdded' : 'addToCartNormal'}
      size="customAddButton"
      onClick={handleClick}
    >
      {isButtonSelected ? 'Added' : 'Add to cart'}
    </Button>
  );
};
