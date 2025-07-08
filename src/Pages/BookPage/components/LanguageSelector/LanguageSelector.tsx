import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LANGUAGES = ['UA', 'ENG'];

export const LanguageSelector = () => {
  const [selected, setSelected] = useState('UA');

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {LANGUAGES.map((lang) => (
          <Button
            key={lang}
            variant={selected === lang ? 'selected' : 'default'}
            size="sm"
            onClick={() => setSelected(lang)}
            className={cn(
              'w-[56px] h-[40px] px-0 py-0 text-[16px] leading-6',
              selected !== lang && 'text-[#313237]',
            )}
          >
            {lang}
          </Button>
        ))}
      </div>
    </div>
  );
};
