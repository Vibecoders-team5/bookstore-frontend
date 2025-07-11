import { Input } from '@/components/ui/Input/input';
import { useBookStore } from '@/store/useBookStore';
import { Search } from 'lucide-react';
import debounce from 'lodash/debounce';
import { useEffect, useMemo, useState } from 'react';

export function SearchBar() {
  const { setQuery } = useBookStore();
  const query = useBookStore((state) => state.query);
  const [inputValue, setInputValue] = useState(query);

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

  return (
    <form onSubmit={handleSubmit} className="relative w-[290px] h-[40px]">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B4BDC3]"
        size={18}
      />
      <Input
        type="text"
        placeholder="Find a book or author"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
