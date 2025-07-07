import { Input } from '@/components/ui/input/Input';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // I'll add the real logic later
    console.log('test', query);
    setQuery('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
