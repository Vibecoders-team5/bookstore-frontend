import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type BackButtonProps = {
  onClick?: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({
  onClick = () => {},
}) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="inline-flex text-[#89939A] dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white hover:text-[#313237] !pl-0"
      onClick={onClick}
    >
      <ChevronLeft className="text-[#313237] dark:text-white/60" />
      Back
    </Button>
  );
};
