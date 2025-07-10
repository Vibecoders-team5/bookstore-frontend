import { DropdownSelect, Option } from '@/components/ui/DropdownSelect';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const DropdownItemsOnPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPerPage = searchParams.get('perPage');

  const itemsOnPageOptions: Option[] = [
    { label: '4', value: '4' },
    { label: '8', value: '8' },
    { label: '16', value: '16' },
    { label: 'All', value: 'all' },
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
      defaultValue={currentPerPage ?? '16'}
      label="Items on page"
      className="w-32 h-15"
      onChange={handleItemsChange}
    />
  );
};
