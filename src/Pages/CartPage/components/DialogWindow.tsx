import { useTranslation } from 'react-i18next';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogHeader } from '@/components/ui/dialog';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';

export const DialogWindow = () => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="addToCartNormal"
          className="w-full btn-text h-12 dark:bg-white dark:text-[#493929] rounded-lg cursor-pointer"
          size="customAddButton"
        >
          {t('checkout')}
        </Button>
      </DialogTrigger>

      <DialogOverlay className="fixed inset-0 bg-black/80" />

      <DialogContent
        className="fixed top-1/2 left-1/2 w-160 max-w-[90vw] -translate-x-1/2 -translate-y-1/2
                      rounded-3xl bg-white p-8 shadow-2xl flex flex-col items-center"
      >
        <DialogClose className="absolute top-4 right-4 rounded-md hover:bg-gray-200 p-1">
          <X className="w-5 h-5 cursor-pointer" />
        </DialogClose>

        <DialogHeader className="mb-6 text-center">
          <DialogTitle className="text-2xl font-semibold mb-3 text-center">
            {t('whoops')}
          </DialogTitle>
          <DialogDescription className="mx-auto max-w-105 text-center text-muted-foreground">
            {t('hustling')}
          </DialogDescription>
        </DialogHeader>

        <img
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="Typing Cat"
          className="w-80 sm:w-100 h-auto select-none pointer-events-none"
        />
      </DialogContent>
    </Dialog>
  );
};
