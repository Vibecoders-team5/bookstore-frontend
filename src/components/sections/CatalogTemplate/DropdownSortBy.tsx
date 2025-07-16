import { DropdownSelect, Option } from '@/components/ui/Dropdowns';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

const DEFAULT_SORT = 'newest';

export const DropdownSortBy = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentSort = searchParams.get('sort') ?? DEFAULT_SORT;

  const sortOptions: Option[] = [
    { label: t('date'), value: 'newest' },
    { label: t('name'), value: 'alphabetically' },
    { label: t('price'), value: 'cheapest' },
  ];

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    params.set('page', '1');
    navigate(`?${params.toString()}`);
  };

  return (
    <DropdownSelect
      options={sortOptions}
      placeholder={t('date')}
      value={currentSort}
      label={t('sortBy')}
      className="w-[176px] h-15 text-black/80 dark:text-white"
      onChange={handleSortChange}
    />
  );
};
