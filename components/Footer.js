import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="px-2 mb-4 flex flex-col items-center text-center uppercase font-poppins text-sm font-semibold text-neutral-400 gap-2">
        <div className="w-36 h-36">
          <Image src={'/logo-footer.svg'} width="100%" height="100%" layout="responsive" />
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#">
            <a>Home</a>
          </Link>
          <Link href="#recent-work">
            <a>Recent Work</a>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#about-me">
            <a>About</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
