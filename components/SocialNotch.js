import Link from 'next/link';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const SocialNotch = ({ github, linkedin, email }) => {
  return (
    <div className="z-50 hidden flex-col fixed bg-custom-navy-light px-4 py-6 space-y-4 rounded-l-lg right-0 my-auto top-1/2 translate-y-[-50%] xl:flex">
      <Link href={github}>
        <a>
          <SiGithub className="icon-lg" />
        </a>
      </Link>
      <Link href={linkedin}>
        <a>
          <SiLinkedin className="icon-lg" />
        </a>
      </Link>
      <Link href={`mailto:${email}`}>
        <a>
          <HiOutlineMail className="icon-lg" />
        </a>
      </Link>
    </div>
  );
};

export default SocialNotch;
