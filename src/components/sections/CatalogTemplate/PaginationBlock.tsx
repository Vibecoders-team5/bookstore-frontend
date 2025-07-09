import { Button } from '@/components/ui/button';
import { PaginationButton } from '@/components/ui/Buttons/PaginationButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

type PaginationBlockProps = {
  totalBooks: number;
  perPage: string | null;
};

export const PaginationBlock: React.FC<PaginationBlockProps> = ({
  totalBooks,
  perPage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') || '1';

  const handlePageChangeNumber = (targetPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('page', targetPage.toString());

    navigate({
      pathname: location.pathname,
      search: `?${newSearchParams.toString()}`,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChangeArrow = (order: 'left' | 'right') => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    const targetPage = order === 'left' ? +currentPage - 1 : +currentPage + 1;

    newSearchParams.set('page', targetPage.toString());

    navigate({
      pathname: location.pathname,
      search: `?${newSearchParams.toString()}`,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const safePerPage = perPage ? +perPage : 1;
  const totalPages = Math.ceil(totalBooks / safePerPage);
  const buttons = Array.from({ length: totalPages }, (_, i) => i + 1);

  let startPage = Math.max(+currentPage - 1, 1);
  let endPage = startPage + 3;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - 3, 1);
  }

  const visibleButtons = buttons.slice(startPage - 1, endPage);

  return (
    <div className="h-8 inline-flex items-center justify-center gap-4 pb-16">
      <Button
        variant="paginationArrow"
        size="s32"
        disabled={+currentPage === 1}
        onClick={() => handlePageChangeArrow('left')}
      >
        <ChevronLeft />
      </Button>
      <div className="inline-flex items-center justify-center gap-2">
        {visibleButtons.map((n) => (
          <PaginationButton key={n} num={n} onClick={handlePageChangeNumber} />
        ))}
      </div>
      <Button
        variant="paginationArrow"
        disabled={+currentPage === endPage}
        onClick={() => handlePageChangeArrow('right')}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
