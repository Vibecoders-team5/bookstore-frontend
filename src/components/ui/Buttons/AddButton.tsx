// import { useState } from 'react';
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
  className?: string;
};

export const AddButton: React.FC<AddButtonProps> = ({
  onClick = () => {},
  isSelected = false,
  size,
  className,
}) => {
  //   const [isButtonSelected, setIsButtonSelected] = useState(isSelected);

  const handleClick = () => {
    //  setIsButtonSelected((prev) => !prev);
    onClick();
  };

  return (
    <Button
      variant={isSelected ? 'addToCartAdded' : 'addToCartNormal'}
      size={size}
      onClick={handleClick}
      className={className}
    >
      {isSelected ? 'Added' : 'Add to cart'}
    </Button>
  );
};
