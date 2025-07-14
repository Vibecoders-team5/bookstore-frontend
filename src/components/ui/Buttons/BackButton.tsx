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
      className="inline-flex text-[#89939A] dark:text-white/50 dark:hover:text-white hover:text-[#313237] !pl-0"
      onClick={onClick}
    >
      <ChevronLeft className="text-[#313237] dark:text-white" /> Back
    </Button>
  );
};
