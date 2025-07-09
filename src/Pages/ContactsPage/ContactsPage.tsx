import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const ContactsPage = () => {
  const members = [
    {
      name: 'Yura Styslo',
      position: 'Tech Lead (тут будуть ще наші заслуги)',
      image: '../../../public/books/img/contactsphotoyura.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor.',
      telegram: 'https://t.me/yurii_st1',
      linkedin: '',
      github: '',
      email: '',
    },
    {
      name: 'Anastasiia Zuieva',
      position: 'Product Manager (тут будуть ще наші заслуги)',
      image: '../../../public/books/img/contactsphotonika.png',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur. Sed posuere consectetur est at lobortis. Integer posuere erat a ante.',
      telegram: 'https://t.me/anastasiia_zuieva',
      linkedin: '',
      github: '',
      email: '',
    },
    {
      name: 'Nika Okhten',
      position: 'Frontend Developer (тут будуть ще наші заслуги)',
      image: '../../../public/books/img/contactsphotonika.png',
      description:
        'Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo. Cras justo odio, dapibus ac facilisis in.',
      telegram: 'https://t.me/nicaaok',
      linkedin: '',
      github: '',
      email: '',
    },
    {
      name: 'Lidiia Tsymborovych',
      position: 'Frontend Developer (тут будуть ще наші заслуги)',
      image: '../../../public/books/img/contactsphotoyura.jpg',
      description:
        'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet. Donec ullamcorper nulla non metus auctor fringilla.',
      telegram: 'https://t.me/liduska_05',
      linkedin: '',
      github: '',
      email: '',
    },
  ];

  return (
    <div className="max-w-[1136px] mx-auto px-4 mt-12">
      <h2 className="text-[2rem] font-bold text-[#313237] mb-8 text-center">
        Meet Our Team
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-2">
        {members.map(
          (
            {
              name,
              position,
              image,
              description,
              telegram,
              linkedin,
              github,
              email,
            },
            index,
          ) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 text-center flex flex-col items-center"
            >
              <img
                src={image}
                alt={name}
                className="w-[100px] h-[100px] rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-[#313237]">{name}</h3>
              <p className="text-sm text-[#89939A] mb-3">{position}</p>
              <p className="text-sm text-[#6c6c76] mb-4 w-[200px]">
                {description}
              </p>

              <div className="flex space-x-3">
                <a href={telegram} target="_blank" rel="noopener noreferrer">
                  <Send
                    size={20}
                    className="text-[#313237] hover:text-[#27AE60]"
                  />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin
                    size={20}
                    className="text-[#313237] hover:text-[#27AE60]"
                  />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github
                    size={20}
                    className="text-[#313237] hover:text-[#27AE60]"
                  />
                </a>
                <a href={`mailto:${email}`}>
                  <Mail
                    size={20}
                    className="text-[#313237] hover:text-[#27AE60]"
                  />
                </a>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
