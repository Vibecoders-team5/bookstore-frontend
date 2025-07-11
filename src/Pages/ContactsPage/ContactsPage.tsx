import { Mail, Github, Linkedin, Send } from 'lucide-react';
import PhotoYura from 'public/books/img/contactsphotoyura.jpg';
import PhotoNastya from 'public/books/img/contactsphotonastya.png';
import PhotoNika from 'public/books/img/contactsphotonika.jpg';
import PhotoLida from 'public/books/img/contactsphotolida.jpg';

export const ContactsPage = () => {
  const members = [
    {
      name: 'Yura Styslo',
      position: 'Tech Lead',
      image: PhotoYura,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor.',
      telegram: 'https://t.me/yurii_st1',
      linkedin: 'https://www.linkedin.com/in/yurii-styslo-608800366/',
      github: 'https://github.com/ystyslo',
      email: 'yurii.st11@gmail.com',
    },
    {
      name: 'Anastasiia Zuieva',
      position: 'Product Manager',
      image: PhotoNastya,
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur. Sed posuere consectetur est at lobortis. Integer posuere erat a ante.',
      telegram: 'https://t.me/anastasiia_zuieva',
      linkedin: 'https://www.linkedin.com/in/anastasiia-zuieva-17324a350/',
      github: 'https://github.com/anastasiia-zu',
      email: 'anastasiia.zuieva4@gmail.com',
    },
    {
      name: 'Nika Okhten',
      position: 'Frontend Developer',
      image: PhotoNika,
      description:
        'Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo. Cras justo odio, dapibus ac facilisis in.',
      telegram: 'https://t.me/nicaaok',
      linkedin: 'https://www.linkedin.com/in/veronika-okhten-a75098300/',
      github: 'https://github.com/Clubbnika',
      email: 'veronika.oxt12@gmail.com',
    },
    {
      name: 'Lidiia Tsymborovych',
      position: 'Frontend Developer',
      image: PhotoLida,
      description:
        'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet. Donec ullamcorper nulla non metus auctor fringilla.',
      telegram: 'https://t.me/liduska_05',
      linkedin: 'https://www.linkedin.com/in/lidiia-tsymborovych-898977342/',
      github: 'https://github.com/lidiia-tsymborovych',
      email: 'lidacimborovich@icloud.com',
    },
  ];

  return (
    <div className="max-w-[1136px] mx-auto px-4 mt-25">
      <h2 className="text-[2rem] font-bold text-[#313237] mb-8 text-center">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="h-[400px] flex flex-col justify-between items-center border border-gray-200 rounded-lg bg-white p-4 hover:shadow-md"
            >
              <div className="flex flex-col items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-[100px] h-[100px] rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-[#313237]">{name}</h3>
                <p className="text-sm text-[#89939A] mb-7">{position}</p>
                <p className="text-sm text-[#6c6c76] text-center w-full mb-4">
                  {description}
                </p>
              </div>

              <div className="w-full flex flex-col items-center mt-auto">
                <div className="w-40 h-px bg-[#89939A] mb-4 mx-auto" />

                <div className="flex space-x-3">
                  <a
                    href={telegram || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send
                      size={20}
                      className="text-[#313237] hover:text-[#27AE60]"
                    />
                  </a>
                  <a
                    href={linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={20}
                      className="text-[#313237] hover:text-[#27AE60]"
                    />
                  </a>
                  <a
                    href={github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      size={20}
                      className="text-[#313237] hover:text-[#27AE60]"
                    />
                  </a>
                  <a href={email ? `mailto:${email}` : '#'}>
                    <Mail
                      size={20}
                      className="text-[#313237] hover:text-[#27AE60]"
                    />
                  </a>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
