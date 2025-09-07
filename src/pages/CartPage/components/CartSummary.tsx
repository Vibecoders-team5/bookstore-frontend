import { useTranslation } from 'react-i18next';
import { DialogWindow } from './DialogWindow';

type CartSummaryProps = {
  totalPrice: number;
  quantity: number;
};

export const CartSummary = ({ totalPrice, quantity }: CartSummaryProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full lg:max-w-92 lg:h-47 dark:text-white dark:bg-brown-dark bg-white
                    border dark:border-brown-dark border-custom-elements rounded-2xl p-6 flex flex-col
                    lg:flex-shrink-0 gap-4 justify-between items-center text-center"
    >
      <span className="text-[22px] sm:text-[32px] font-bold">
        ${totalPrice}
      </span>
      <span className="body-text">{`${t('cart.totalFor')} ${quantity} ${t('ui.items')}`}</span>

      <DialogWindow />
    </div>
  );
};
