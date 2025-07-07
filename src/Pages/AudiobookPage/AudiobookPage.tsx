import { DropdownSelect } from '@/components/ui/DropdownSelect';

export const AudiobookPage = () => {
  return (
    <>
      <h1 className="btn-text">AUDIOBOOK PAGE</h1>
      <br />
      <DropdownSelect
        options={[
          { label: 'Books', value: 'books' },
          { label: 'Audio Books', value: 'audio' },
          { label: 'E-books', value: 'ebooks' },
        ]}
        placeholder="Choose category"
        className="w-full sm:w-[176px]"
      />

      <br />

      <DropdownSelect
        label="Sort by"
        options={[
          { label: 'Newest', value: 'newest' },
          { label: 'Price: Low to High', value: 'low-high' },
          { label: 'Price: High to Low', value: 'high-low' },
        ]}
        defaultValue="newest"
        className="w-[136px] sm:w-[186px] xl:w-[176px]"
      />

      <br />

      <DropdownSelect
        label="Items per page"
        options={[
          { label: '16', value: '16' },
          { label: '24', value: '24' },
          { label: '48', value: '48' },
        ]}
        defaultValue="16"
        className="w-[136px] xl:w-[128px]"
      />
    </>
  );
};
