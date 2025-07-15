import { Trans } from 'react-i18next';

export const EmptyFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <img
        src="/books/img/favorites-is-empty.png"
        alt="Favorites empty"
        className="w-48 h-auto"
      />

      <p className="text-[#89939A] text-base sm:text-lg">
        <Trans i18nKey="emptyFav">
          Your favorites is still sad...
          <br />
          Add some books to make it happy
        </Trans>
      </p>
    </div>
  );
};
