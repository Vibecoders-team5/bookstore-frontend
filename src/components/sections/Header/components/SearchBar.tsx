import { useBookStore } from '@/store/useBookStore';
import { Search, X } from 'lucide-react';
import debounce from 'lodash/debounce';
import { useEffect, useMemo, useState } from 'react';
import { OurInput } from '@/components/ui/OurInput/OurInput';
import { useTranslation } from 'react-i18next';

export function SearchBar() {
  const { query, setQuery } = useBookStore();
  const [inputValue, setInputValue] = useState(query);
  const { t } = useTranslation();

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const debouncedSetQuery = useMemo(
    () => debounce((value: string) => setQuery(value), 300),
    [setQuery],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetQuery(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setInputValue('');
    setQuery('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-1 relative sm:max-w-70 h-10"
    >
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 lg:text-white/60 dark:text-white/80"
        size={18}
      />
      <OurInput
        type="text"
        placeholder={t('searchPHolder')}
        value={inputValue}
        onChange={handleChange}
        className="w-full placeholder:font-[600] text-black/70 dark:text-white lg:text-white placeholder:text-white/60 hover:border-custom-secondary  dark:placeholder:text-white/80"
      />
      {inputValue && (
        <X
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black/30 lg:text-white/60 dark:text-white/80"
          size={18}
          onClick={handleClear}
        />
      )}
    </form>
  );
}
