import { useNavigate } from 'react-router-dom';
import { DropdownSelect } from '../ui/DropdownSelect';

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
      className="w-full sm:w-[176px]"
      onChange={(value) => {
        navigate(value);
      }}
    />
  );
};
