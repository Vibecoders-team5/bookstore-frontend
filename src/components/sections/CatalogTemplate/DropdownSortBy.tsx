import { DropdownSelect, Option } from '@/components/ui/Dropdowns';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const DropdownSortBy = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentSort = searchParams.get('sort');

  const sortOptions: Option[] = [
    { label: t('newest'), value: 'newest' },
    { label: t('alphabetically'), value: 'alphabetically' },
    { label: t('cheapest'), value: 'cheapest' },
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
      placeholder="Newest"
      defaultValue={currentSort ?? 'newest'}
      label={t('sortBy')}
      className="w-[176px] h-15 text-black/80"
      onChange={handleSortChange}
    />
  );
};
