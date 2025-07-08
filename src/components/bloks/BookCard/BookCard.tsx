import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { HeadphonesRound } from '@/components/ui/Icons/HeadphonesRound';

export const BookCard = () => {
  return (
    <div className="w-[272px] h-[506px] relative flex flex-col p-8 gap-4 rounded-lg border-1 border-gray-200 hover:shadow-sm">
      <HeadphonesRound />
      <Link to="/">
        <img src="/images/5thDiscipline.png" alt="5th discipline" />
      </Link>
      <div className="flex flex-col gap-2">
        <div>
          <h5>The Fifth Discipline</h5>
          <p className="body-text">Peter M. Senge</p>
        </div>
        <div className="flex flex-col">
          <h3>₴450</h3>
          <div className="inline-flex gap-1.5">
            <Truck className="text-green-600 w-[22px] h-[22px]" />
            <p className="btn-text text-green-600">In stock</p>
          </div>
        </div>
      </div>
      <div className="inline-flex gap-2">
        <AddButton />
        <HeartButton />
      </div>
    </div>
  );
};
