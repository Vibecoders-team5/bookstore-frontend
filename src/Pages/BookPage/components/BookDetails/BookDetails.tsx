// import React from 'react'
import { Book } from '@/types/Book';

import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';

type Props = {
  book: Book;
};

export function BookDetails({ book }: Props) {
  return (
    <div className="w-full max-w-[320px] flex flex-col gap-6 text-sm text-[#313237]">
      <div>
        <p className="text-[#89939A] text-sm font-bold leading-6 mb-2">
          Category
        </p>
        <p className="px-3 py-1 border border-[#E2E6E9] rounded-md w-fit text-[16px] font-medium leading-6 text-[#313237]">
          {book.category?.[0]}
        </p>
      </div>

      <div>
        <p className="text-[#89939A] text-[16px] font-bold leading-6 mb-2">
          Select language
        </p>
        <LanguageSelector />
      </div>

      <div className="border-t border-[#89939A] pt-6">
        <div className="flex items-center gap-2 mb-4">
          <p className="text-[32px] font-bold">
            ₴{book.priceDiscount || book.priceRegular}
          </p>
          {book.priceDiscount && (
            <p className="line-through text-[#89939A] text-[22px] font-medium">
              ₴{book.priceRegular}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <AddButton />
          <HeartButton />
        </div>
      </div>

      <div className="border-t border-[#89939A] pt-6 text-[#89939A] text-[14px] font-medium leading-6">
        <div className="flex justify-between py-1">
          <span>Author</span>
          <span className="text-[#313237] text-[14px]">{book.author}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Cover type</span>
          <span className="text-[#313237]">{book.coverType}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Number of pages</span>
          <span className="text-[#313237]">{book.numberOfPages}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Year of publication</span>
          <span className="text-[#313237] text-[14px]">
            {book.publicationYear}
          </span>
        </div>
      </div>
    </div>
  );
}
