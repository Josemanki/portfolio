import React from 'react';

const TalkTech = () => {
  return (
    <section id="talk-tech" className="bg-custom-teal">
      <div className="h-full py-10 px-6 lg:px-10 2xl:px-40">
        <h3 className="uppercase text-center text-white text-xl font-black font-poppins">Let's Talk Tech</h3>
        <div className="my-6">
          <h4 className="uppercase text-white font-black font-poppins text-xl">Frontend:</h4>
          <p className="text-white text-lg mt-2 font-regular">
            Experienced in planning, designing and developing websites using{' '}
            <span className="bg-rose-600">HTML, CSS and Javascript with and without jQuery</span>, as well as Single
            Page Applications using <span className="bg-rose-600">Vue or React</span>, and lately{' '}
            <span className="bg-rose-600">Next JS (including this website!)</span> - with responsible consumption of
            REST APIs.
          </p>
        </div>
        <div className="my-6">
          <h4 className="uppercase text-white font-black font-poppins text-xl">Backend:</h4>
          <p className="text-white text-lg mt-2 font-regular">
            Acquainted with powerful technologies such as <span className="bg-rose-600">NodeJS and Express</span>, as
            well as relational databases with <span className="bg-rose-600">PostgreSQL</span>.
          </p>
        </div>
        <div className="my-6">
          <h4 className="uppercase text-white font-black font-poppins text-xl">Other:</h4>
          <p className="text-white text-lg mt-2 font-regular">
            Certain degree of familiarity with technologies like <span className="bg-rose-600">GraphQL</span> and{' '}
            <span className="bg-rose-600">Emotion (CSS)</span> due to past Open Source Contributions. Experience with{' '}
            <span className="bg-rose-600">TailwindCSS and Bootstrap</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TalkTech;
