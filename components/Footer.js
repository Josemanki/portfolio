import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';
import Link from 'next/link';

const Footer = ({ links, github, linkedin, email }) => {
  return (
    <footer id="footer" className="p-6 bg-custom-navy-light">
      <div className="container sm:flex sm:justify-between">
        <div>
          <h3 className="uppercase font-poppins text-xl font-medium">
            Jose <span className="text-custom-blue">Hernandez</span>
          </h3>
          <p className="font-light text-lg">Full Stack Developer</p>
          <div className="flex space-x-12 mt-2">
            <a href={github}>
              <SiGithub className={'icon-lg'} />
            </a>
            <a href={linkedin}>
              <SiLinkedin className={'icon-lg'} />
            </a>
            <a href={`mailto:${email}`}>
              <MdOutlineMail className={'icon-xl'} />
            </a>
          </div>
        </div>

        <div className="mt-4 sm:mt-0">
          <h3 className="text-lg">Navigation</h3>
          <ul className="mt-2 flex flex-col gap-y-4">
            {links.map((link) => (
              <Link key={link._key} href={link.url}>
                <a className="ease-in duration-200 transition-all hover:text-rose-500">
                  {link.section}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
