import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

type BackButtonProps = {
  onClick?: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({
  onClick = () => {},
}) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="ghost"
      size="sm"
      className="inline-flex text-custom-secondary dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white hover:text-custom-primary !pl-0"
      onClick={onClick}
    >
      <ChevronLeft className="text-custom-primary dark:text-white/60" />
      {t('backBtn')}
    </Button>
  );
};
