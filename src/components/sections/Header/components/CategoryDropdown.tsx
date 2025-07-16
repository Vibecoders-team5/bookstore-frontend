import { DropdownSelect } from '@/components/ui/Dropdowns';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const CategoryDropdown = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <DropdownSelect
      options={[
        { label: t('programming'), value: '/category/programming' },
        { label: t('psyhology'), value: '/category/psychology' },
        { label: t('fantasy'), value: '/category/fantasy' },
        { label: t('drama'), value: '/category/drama' },
        { label: t('detective'), value: '/category/detective' },
      ]}
      placeholder={t('chooseCat')}
      className="w-full sm:w-[176px] text-white/60 dark:text-white/80"
      onChange={(value) => {
        navigate(value);
      }}
    />
  );
};
