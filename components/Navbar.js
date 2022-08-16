import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

const Navbar = ({ currentSection, links }) => {
  return (
    <nav className="hidden w-screen h-16 fixed z-50 bg-custom-navy shadow-md sm:block">
      <div className="px-6 h-full container flex justify-between items-center">
        <div>
          <a
            href="#"
            className="text-white text-4xl font-semibold font-poppins"
          >
            JH
            <span className="text-blue-500">.</span>
          </a>
        </div>
        <ul className="flex flex-row space-x-6">
          {links.map((link) => (
            <Link key={link._key} href={link.url}>
              <a
                className={cx('ease-in duration-200 transition-all', {
                  ' text-custom-blue': currentSection === link.sectionId,
                })}
              >
                {link.section}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
