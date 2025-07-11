import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { members } from '@/data/members.ts';

export const ContactsPage = () => {
  return (
    <div className="max-w-[1136px] mx-auto px-4 mt-12">
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
