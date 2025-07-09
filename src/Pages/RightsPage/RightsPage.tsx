export const RightsPage = () => {
  const sections = [
    {
      title: '1. Content Ownership',
      text: 'All materials on the site — including texts, cover images, book descriptions, illustrations, visual styles, and other content — are the intellectual property of the Nice Books store or our publishing partners. Use of this content outside the site is only permitted with our written consent.',
    },
    {
      title: '2. Website Use',
      text: 'You’re welcome to browse, read, and share links to our pages — we encourage it! However, downloading, copying, or modifying materials for commercial purposes is not allowed without permission from our administration.',
    },
    {
      title: '3. Protection Against Automated Collection',
      text: 'We value transparent interaction. Any unauthorized use of scripts, bots, or other automated tools to collect data from our site is a violation of these terms.',
    },
    {
      title: '4. Data Handling',
      text: 'We respect your privacy. No personal information is collected without your consent. We may store only basic data related to your orders and saved items to improve your user experience.',
    },
    {
      title: '5. Terms Updates',
      text: 'This website is constantly evolving, and we may occasionally update these terms. Any changes will be published on this page. By continuing to use the site, you automatically agree to the updated terms.',
    },
    {
      title: '6. Contact Us',
      text: 'Have questions or suggestions? Feel free to reach out via our Contacts page — we’re always happy to hear from you.',
    },
  ];

  return (
    <div className="max-w-[1136px] mx-auto mt-[64px]">
      <h2 className="font-extrabold text-[2rem] text-[#313237] mb-[23px]">
        Terms of Use — Nice Books👌
      </h2>

      <p className="text-base text-[#313237]">
        Welcome to Nice Books — a place where books live online! To ensure our
        service is convenient, safe, and understandable for all users, we’ve
        created these simple yet important rules.
      </p>

      {sections.map(({ title, text }, index) => (
        <div key={index}>
          <h3 className="mt-8 text-2xl text-[#313237] font-bold mb-[30px]">
            {title}
          </h3>
          <p className="mb-[40px] text-[#6c6c76]">{text}</p>
        </div>
      ))}
    </div>
  );
};
