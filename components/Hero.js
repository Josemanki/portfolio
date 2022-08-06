import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="container section-home min-h-screen bg-custom-navy flex justify-center align-center flex-col p-6 pt-0"
    >
      <div className="flex justify-center mb-12">
        <div className="w-64 h-64 bg-white rounded-full"></div>
      </div>
      <div>
        <h1 className="font-poppins font-semibold text-3xl">
          <span className="text-blue-500">
            Hey there,
          </span>{' '}
          I'm Jose
        </h1>
        <h2 className="mt-2 text-xl font-bold">
          Full Stack Developer
        </h2>
        <p className="text-md mt-2">
          Fully committed with bringing
          maximum quality to awesome
          products. I enjoy making
          beautiful, responsive web
          experiences.
        </p>
        <a
          className="block rounded-lg text-center w-40 bg-blue-500 px-6 py-3 mt-4"
          href="#about"
        >
          More About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
