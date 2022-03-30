import React from 'react';
import Headshot from './Headshot';

const AboutMe = () => {
  return (
    <section id="about-me" className="min-h-screen bg-neutral-800 text-white">
      <div className="py-12 px-6">
        <h2 className="text-white font-semibold font-poppins text-5xl text-center ">
          About Me<span className="text-rose-600 font-black">.</span>
        </h2>
        <Headshot />
        <div className="my-12 text-justify">
          <p className="mt-6">
            Hey there! - My name is Jose and I am a Fullstack Web Developer recently graduated from SPICED Academy, and
            based in Berlin.
          </p>
          <p className="mt-6">
            Coding has, ever since I can recall, been something I was eager to follow, so last year I took the first
            steps in the right direction and started my self-directed studies on the matter, specializing mostly in
            Frontend Development.
          </p>
          <p className="mt-6">
            Flash forward, I decided taking it a step further and joining SPICED. During my time there I learned even
            more technologies and polished my existing ones, and found myself in love with the idea of being a Fullstack
            developer.
          </p>
          <p className="mt-6">
            At this point, I am a competent Fullstack Web Developer with excellent communication skills and an avid
            problem solver due to my previous work experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
