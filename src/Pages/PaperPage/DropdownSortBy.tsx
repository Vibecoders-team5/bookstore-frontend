import { DropdownSelect, Option } from '@/components/ui/DropdownSelect';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const DropdownSortBy = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortOptions: Option[] = [
    { label: 'Newest', value: 'newest' },
    { label: 'Alphabetically', value: 'alphabetically' },
    { label: 'Cheapest', value: 'cheapest' },
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
      defaultValue="newest"
      label="Sort by"
      className="w-[176px] h-15"
      onChange={handleSortChange}
    />
  );
};
