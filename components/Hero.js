import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-neutral-900 flex justify-center align-center flex-col p-4">
      <div className="flex items-center justify-center flex-col">
        <div className="w-64 h-64 sm:w-80 sm:h-80">
          <Image src={'/logo.svg'} width="100%" height="100%" layout="responsive" />
        </div>
        <h1 className="text-5xl text-white font-red-hat text-center sm:text-7xl">Jose Hernández</h1>
        <h2 className="text-2xl text-white font-light text-center sm:text-4xl">Fullstack Web Developer</h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 gap-6">
        <button className="bg-custom-teal text-base py-2 px-6 rounded-3xl text-white uppercase font-black w-64">
          Get an estimate
        </button>
        <button className="border-2 border-custom-teal text-base py-2 px-6 rounded-3xl text-white uppercase font-black w-64">
          Check my Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
