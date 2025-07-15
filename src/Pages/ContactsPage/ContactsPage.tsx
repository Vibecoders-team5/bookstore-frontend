import { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { members } from '@/data/members';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

export const ContactsPage = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-[1136px] mx-auto px-4 mt-25">
      <h2 className="text-[2rem] font-bold text-custom-primary mb-8 text-center dark:text-white">
        {t('meetOurTeam')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={classNames(
                'relative h-[400px] cursor-pointer overflow-hidden rounded-lg shadow-md border border-gray-200 bg-white dark:bg-brown-dark dark:border-none transition-all duration-500 group',
                { 'bg-white': isActive },
              )}
              onClick={() => toggleCard(index)}
            >
              <div
                className={classNames(
                  'absolute inset-0 transition-transform duration-500',
                  {
                    'scale-105 blur-sm': isActive,
                    'scale-100': !isActive,
                  },
                )}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={classNames(
                  'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transition-opacity duration-300 z-10',
                  { 'opacity-0': isActive, 'opacity-100': !isActive },
                )}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm">{member.position}</p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="hover:text-[#958565] dark:hover:text-[#958565]"
                  />
                </div>
              </div>

              <div
                className={classNames(
                  'absolute inset-0 flex flex-col justify-between p-4 bg-white dark:bg-brown-dark text-custom-primary dark:text-white transition-transform duration-500 transform z-20',
                  {
                    'translate-y-0 opacity-100': isActive,
                    'translate-y-full opacity-0 pointer-events-none': !isActive,
                  },
                )}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-custom-secondary dark:text-[#ead7d1]">
                        {member.position}
                      </p>
                    </div>
                    <ArrowLeft
                      size={20}
                      className="cursor-pointer hover:text-[#958565] dark:hover:text-[#958565]"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(index);
                      }}
                    />
                  </div>

                  <p className="text-sm text-[#6c6c76] dark:text-[#ead7d1] text-left">
                    {member.description}
                  </p>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  {member.telegram && (
                    <a
                      href={member.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send className="hover:text-[#443e32] dark:hover:text-[#443e32]" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="hover:text-[#625842] dark:hover:text-[#625842]" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="hover:text-[#625842] dark:hover:text-[#625842]" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`}>
                      <Mail className="hover:text-[#625842] dark:hover:text-[#625842]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
