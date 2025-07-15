import { useTranslation } from 'react-i18next';

export const RightsPage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('contentOwnership'),
      text: t('contentOwnershipText'),
    },
    {
      title: t('websiteUse'),
      text: t('websiteUseText'),
    },
    {
      title: t('protection'),
      text: t('protectionText'),
    },
    {
      title: t('dataRights'),
      text: t('dataRightsText'),
    },
    {
      title: t('termsUpdates'),
      text: t('termsUpdatesText'),
    },
    {
      title: t('contactUs'),
      text: t('contactUsText'),
    },
  ];

  return (
    <div className="max-w-[1136px] mx-auto mt-[64px]">
      <h2 className="font-extrabold text-[2rem] text-custom-primary dark:text-white/80  mb-[23px]">
        {t('termsOfUse')}
      </h2>

      <p className="text-base text-custom-primary dark:text-[#d6c5b1]">
        {t('termsOfUseText')}
      </p>

      {sections.map(({ title, text }, index) => (
        <div key={index}>
          <h3 className="mt-8 text-2xl text-custom-primary dark:text-white/70 font-bold mb-[30px]">
            {title}
          </h3>
          <p className="mb-[40px] text-[#6c6c76] dark:text-[#c5bbb0]">{text}</p>
        </div>
      ))}
    </div>
  );
};
