import React from 'react';
import LinkButton from './LinkButton';
import { MdWork } from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <div className="hero-background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <section
          id="hero"
          className="absolute container section-home min-h-screen flex justify-center align-center flex-col p-6 pt-0"
        >
          <div className="flex justify-center mb-12">
            <div className="w-64 h-64 bg-white rounded-full"></div>
          </div>
          <div>
            <h1 className="font-poppins font-semibold text-3xl">
              <span className="text-blue-500">Hey there,</span> I'm Jose
            </h1>
            <h2 className="mt-2 text-xl font-bold">Full Stack Developer</h2>
            <p className="text-md mt-2">
              Fully committed with bringing maximum quality to awesome products.
              I enjoy making beautiful, responsive web experiences.
            </p>
            <LinkButton
              icon={MdWork}
              link={'#projects'}
              title={'Check my Work'}
              classes={'mt-3'}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
