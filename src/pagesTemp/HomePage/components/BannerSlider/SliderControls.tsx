import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SliderControlsProps = {
  showPrevButton?: boolean;
  showNextButton?: boolean;
  goToNext?: () => void;
  goToPrev?: () => void;
};

const SliderControls = ({
  showPrevButton = true,
  showNextButton = true,
  goToNext,
  goToPrev,
}: SliderControlsProps) => (
  <>
    {showPrevButton && (
      <Button
        variant="ghost"
        onClick={goToPrev}
        className="hidden sm:flex z-30 w-12 h-full dark:text-white bg-white dark:bg-[#443e32] p-2 items-center justify-center"
      >
        <ChevronLeft />
      </Button>
    )}
    {showNextButton && (
      <Button
        variant="ghost"
        onClick={goToNext}
        className="hidden sm:flex z-30 w-12 h-full bg-white dark:bg-[#443e32] dark:text-white p-2 items-center justify-center"
      >
        <ChevronRight />
      </Button>
    )}
  </>
);

export default SliderControls;
