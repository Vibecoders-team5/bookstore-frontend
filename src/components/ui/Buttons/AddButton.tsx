import { useState } from 'react';
import { Button } from '@/components/ui/button';

type AddButtonProps = {
  onClick?: () => void;
  isSelected?: boolean;
  size?:
    | 'default'
    | 'sm'
    | 'lg'
    | 's32'
    | 's40'
    | 'icon'
    | 'customAddButton'
    | 'bookPageAddButton'
    | null
    | undefined;
};

export const AddButton: React.FC<AddButtonProps> = ({
  onClick = () => {},
  isSelected = false,
  size,
}) => {
  const [isButtonSelected, setIsButtonSelected] = useState(isSelected);

  const handleClick = () => {
    setIsButtonSelected((prev) => !prev);
    onClick();
  };

  return (
    <Button
      variant={isButtonSelected ? 'addToCartAdded' : 'addToCartNormal'}
      size={size}
      onClick={handleClick}
    >
      {isButtonSelected ? 'Added' : 'Add to cart'}
    </Button>
  );
};
