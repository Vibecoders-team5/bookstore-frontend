import { Button } from '@/components/ui/button';
import { t } from 'i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const DEFAULT_ORDER = 'asc';

export const SortDirectionToggle = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentOrder = searchParams.get('order') ?? DEFAULT_ORDER;
  const isAsc = currentOrder === 'asc';

  const toggleOrder = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('order', isAsc ? 'desc' : 'asc');
    params.set('page', '1');
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-1 items-start">
      <span className="text-[12px] text-custom-secondary dark:text-white">
        {t('order')}
      </span>
      <Button
        size="icon"
        className="w-10 h-10 dark:bg-white/40"
        onClick={toggleOrder}
        aria-label={isAsc ? t('sortDescending') : t('sortAscending')}
        title={isAsc ? t('sortDescending') : t('sortAscending')}
      >
        {isAsc ?
          <ChevronUp className="w-5 h-5 text-muted-foreground dark:text-white/60" />
        : <ChevronDown className="w-5 h-5 text-muted-foreground dark:text-white/60" />
        }
      </Button>
    </div>
  );
};
