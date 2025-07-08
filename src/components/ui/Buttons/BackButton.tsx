import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function BackButton() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="inline-flex text-[#89939A] hover:text-[#313237]"
    >
      <ChevronLeft className="text-[#313237]" /> Back
    </Button>
  );
}
