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
      className="inline-flex text-[#89939A] hover:text-[#313237] p-0"
      onClick={onClick}
    >
      <ChevronLeft className="text-[#313237]" /> Back
    </Button>
  );
};
