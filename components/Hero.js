import React from 'react';
import LinkButton from './LinkButton';
import { MdWork } from 'react-icons/md';
import Blob from './Blob';

const Hero = ({ title, subtitle, cta }) => {
  return (
    <>
      <div className="hero-background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>

        <section id="hero" className="hero nav-section">
          <div className="flex justify-center mb-12">
            <Blob />
          </div>
          <div>
            <h1 className="font-poppins font-semibold text-3xl sm:text-6xl">
              <span className="text-custom-blue">Hey there,</span> I&apos;m Jose
            </h1>
            <h2 className="mt-2 text-xl font-bold">{title}</h2>
            <p className="text-md mt-2">{subtitle}</p>
            <LinkButton
              icon={MdWork}
              link={'#projects'}
              title={cta}
              classes={'mt-4'}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
