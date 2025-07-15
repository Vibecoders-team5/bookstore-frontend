import { Button } from '@/components/ui/button';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const EmptyCart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      <img
        src="/books/img/cart-is-empty.png"
        alt="Empty cart illustration"
        className="w-48 h-auto opacity-80"
      />

      <p className="text-custom-secondary dark:text-white/50 text-base sm:text-lg pb-8">
        <Trans i18nKey="emptyCart">
          Your cart is still sleeping...
          <br />
          Add some books to gently wake it up
        </Trans>
      </p>

      <Button
        variant={'addToCartNormal'}
        className="w-full btn-text h-12 rounded-[8px] md:w-80 hover:cursor-pointer dark:bg-white dark:text-header-footer-light"
        size="customAddButton"
        onClick={() => {
          navigate('/');
        }}
      >
        {t('backToShopBtn')}
      </Button>
    </div>
  );
};
