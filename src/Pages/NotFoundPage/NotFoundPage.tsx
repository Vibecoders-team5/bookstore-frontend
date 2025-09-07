import { Trans } from 'react-i18next';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-20">
      <img
        src="/books/img/page-not-found.webp"
        alt="Page not found"
        className="w-100"
      />
      <p className="text-custom-secondary text-base sm:text-lg">
        <Trans i18nKey="errors.pageNotFound">
          Oops something went wrong...
          <br />
          Try another page
        </Trans>
      </p>
    </div>
  );
};
