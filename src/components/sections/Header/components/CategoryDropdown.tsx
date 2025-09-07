import { DropdownSelect } from '@/components/ui/Dropdowns';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const CategoryDropdown = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <DropdownSelect
      options={[
        { label: t('categories.programming'), value: '/category/programming' },
        { label: t('categories.psychology'), value: '/category/psychology' },
        { label: t('categories.fantasy'), value: '/category/fantasy' },
        { label: t('categories.drama'), value: '/category/drama' },
        { label: t('categories.detective'), value: '/category/detective' },
      ]}
      placeholder={t('books.chooseCategory')}
      className="w-full sm:w-[176px] text-white/60 dark:text-white/80"
      onChange={(value) => {
        navigate(value);
      }}
    />
  );
};
