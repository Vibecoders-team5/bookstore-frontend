import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      <img
        src="/books/img/cart-is-empty.png"
        alt="Empty cart illustration"
        className="w-48 h-auto opacity-80"
      />

      <p className="text-[#89939A] text-base sm:text-lg pb-8">
        Your cart is still sleeping...
        <br />
        Add some books to gently wake it up
      </p>

      <Button
        variant={'addToCartNormal'}
        className="w-full btn-text h-12 rounded-[8px] md:w-80 hover:cursor-pointer"
        size="customAddButton"
        onClick={() => {
          navigate('/');
        }}
      >
        Go back to shopping...
      </Button>
    </div>
  );
};
