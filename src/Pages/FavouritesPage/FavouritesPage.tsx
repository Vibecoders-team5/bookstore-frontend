import { Button } from '@/components/ui/button';
import { PaginationButton } from '../../components/ui/Buttons/PaginationButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FavouritesPage = () => {
  return (
    <>
      <h1>FAVOURITES PAGE</h1>
      <div className="h-8 inline-flex items-center justify-center gap-4">
        <Button variant="paginationArrow" size="s32" disabled>
          <ChevronLeft />
        </Button>
        <div className="inline-flex items-center justify-center gap-2">
          {[1, 2, 3].map((n) => (
            <PaginationButton key={n} num={n} />
          ))}
        </div>
        <Button variant="paginationArrow">
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};
