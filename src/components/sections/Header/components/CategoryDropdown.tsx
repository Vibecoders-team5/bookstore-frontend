import { DropdownSelect } from '@/components/ui/Dropdowns';
import { useNavigate } from 'react-router-dom';

export const CategoryDropdown = () => {
  const navigate = useNavigate();

  return (
    <DropdownSelect
      options={[
        { label: 'Books', value: '/paperback' },
        { label: 'Audio Books', value: '/audiobook' },
        { label: 'E-books', value: '/kindle' },
      ]}
      placeholder="Choose category"
      className="w-full sm:w-[176px] text-[#B4BDC3] h-10"
      onChange={(value) => {
        navigate(value);
      }}
    />
  );
};
