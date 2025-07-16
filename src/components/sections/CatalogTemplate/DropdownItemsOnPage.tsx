import { DropdownSelect, Option } from '@/components/ui/Dropdowns';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const DropdownItemsOnPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentPerPage = searchParams.get('perPage');

  const itemsOnPageOptions: Option[] = [
    { label: '4', value: '4' },
    { label: '8', value: '8' },
    { label: '16', value: '16' },
    { label: t('all'), value: 'all' },
  ];

  const handleItemsChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('perPage', value);
    params.delete('page');
    navigate(`?${params.toString()}`);
  };
  return (
    <DropdownSelect
      options={itemsOnPageOptions}
      placeholder="16"
      value={currentPerPage ?? '16'}
      label={t('itemsOnPage')}
      className="w-32 h-15 text-black/80 dark:text-white"
      onChange={handleItemsChange}
    />
  );
};
