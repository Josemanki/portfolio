import React from 'react';

const TalkTech = () => {
  return (
    <section id="talk-tech" className="bg-custom-teal">
      <div className="h-full py-10 px-6">
        <h3 className="uppercase text-center text-white font-black">Let's Talk Tech</h3>
        <div className="my-6">
          <h4 className="uppercase text-white font-black underline underline-offset-2">Frontend:</h4>
          <p className="text-white text-lg mt-2 font-light">
            Experienced in planning, designing and developing websites using{' '}
            <span className="text-neutral-800">HTML, CSS and Javascript with and without jQuery</span>, as well as
            Single Page Applications using <span className="text-neutral-800">Vue or React</span>, and lately{' '}
            <span className="text-neutral-800">Next JS (including this website!)</span> - including responsible
            consumption of REST APIs.
          </p>
        </div>
        <div className="my-6">
          <h4 className="uppercase text-white font-black underline underline-offset-2">Backend:</h4>
          <p className="text-white text-lg mt-2 font-light">
            Acquainted with powerful technologies such as <span className="text-neutral-800">NodeJS and Express</span>,
            as well as relational databases with <span className="text-neutral-800">PostgreSQL</span>.
          </p>
        </div>
        <div className="my-6">
          <h4 className="uppercase text-white font-black underline underline-offset-2">Other:</h4>
          <p className="text-white text-lg mt-2 font-light">
            Certain degree of familiarity with technologies like <span className="text-neutral-800">GraphQL</span> and{' '}
            <span className="text-neutral-800">Emotion (CSS)</span> due to past Open Source Contributions. Experience
            with <span className="text-neutral-800">TailwindCSS and Bootstrap</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TalkTech;
