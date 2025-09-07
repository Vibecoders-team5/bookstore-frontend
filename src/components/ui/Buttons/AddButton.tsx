import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

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
    | null;
  className?: string;
};

export const AddButton: React.FC<AddButtonProps> = ({
  onClick,
  isSelected = false,
  size,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <Button
      variant={isSelected ? 'addToCartAdded' : 'addToCartNormal'}
      size={size}
      onClick={onClick}
      className={className}
    >
      {isSelected ? t('ui.added') : t('ui.addToCart')}
    </Button>
  );
};
