import { Button } from '@/components/ui/button';

type CartSummaryProps = {
  totalPrice: number;
  quantity: number;
};

export const CartSummary = ({ totalPrice, quantity }: CartSummaryProps) => {
  return (
    <div className="w-full xl:w-[368px] xl:h-[188px] bg-white border border-[#E2E6E9] rounded-[16px] p-6 flex flex-col gap-4 justify-between items-center text-center">
      <span className="text-[22px] sm:text-[32px] font-[700]">
        ${totalPrice}
      </span>
      <span className="body-text">Total for {quantity} items</span>

      <Button
        variant={'addToCartNormal'}
        className="w-full btn-text h-12 rounded-[8px]"
        size="customAddButton"
      >
        Chekout
      </Button>
    </div>
  );
};
