import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export const Nav = ({ showSidebar, setShowSidebar, currentSection }) => {
  const links = [
    {
      name: 'Home',
      link: '#',
      id: 'hero',
    },
    {
      name: 'Recent Work',
      link: '#recent-work',
      id: 'recent-work',
    },
    {
      name: 'About Me',
      link: '#about-me',
      id: 'about-me',
    },
    {
      name: 'Contact',
      link: '#contact',
      id: 'contact',
    },
  ];
  return (
    <nav>
      <aside
        className={`transform top-0 left-0 w-screen bg-white fixed h-full overflow-auto ease-in-out duration-300 transition-all z-30 sm:max-w-[350px] ${
          !showSidebar ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <button
          className="flex text-4xl text-regular-800 items-center cursor-pointer fixed left-6 top-4 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <div className="h-screen flex flex-col items-center justify-center gap-14 text-4xl font-bold text-regular-800">
          {links.map((link) => (
            <Link key={link.id} href={link.link}>
              <a
                className={cx(
                  'ease-in duration-200 transition-all hover:bg-rose-600 hover:text-white hover:p-4 hover:-skew-x-6',
                  { 'bg-rose-600 text-white p-4 -skew-x-6': currentSection === link.id }
                )}
                onClick={() => setShowSidebar(!showSidebar)}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </aside>
      <div onClick={() => setShowSidebar(!showSidebar)} className="fixed p-4 z-20 cursor-pointer mix-blend-difference">
        <Image src={'/NavHamburger.svg'} height={40} width={40} className="text-rose-600 " />
      </div>
    </nav>
  );
};
