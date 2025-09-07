import { useTranslation } from 'react-i18next';

export const RightsPage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('legal.contentOwnership'),
      text: t('legal.contentOwnershipText'),
    },
    {
      title: t('legal.websiteUse'),
      text: t('legal.websiteUseText'),
    },
    {
      title: t('legal.protection'),
      text: t('legal.protectionText'),
    },
    {
      title: t('legal.dataRights'),
      text: t('legal.dataRightsText'),
    },
    {
      title: t('legal.termsUpdates'),
      text: t('legal.termsUpdatesText'),
    },
    {
      title: t('legal.contactUs'),
      text: t('legal.contactUsText'),
    },
  ];

  return (
    <div className="max-w-[1136px] px-6 pt-18 lg:pt-25 mx-auto">
      <h2 className="font-extrabold text-[2rem] text-custom-primary dark:text-white/80  mb-[23px]">
        {t('legal.termsOfUse')}
      </h2>

      <p className="text-base text-custom-primary dark:text-[#d6c5b1]">
        {t('legal.termsOfUseText')}
      </p>

      {sections.map(({ title, text }, index) => (
        <div key={index}>
          <h3 className="mt-8 text-2xl text-custom-primary dark:text-white/70 font-bold mb-[30px]">
            {title}
          </h3>
          <p className="mb-10 text-[#6c6c76] dark:text-[#c5bbb0]">{text}</p>
        </div>
      ))}
    </div>
  );
};
