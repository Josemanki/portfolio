import React from 'react';
import LinkButton from './LinkButton';
import { AiOutlineFilePdf } from 'react-icons/ai';
import SectionTitle from './SectionTitle';

const AboutMe = () => {
  return (
    <section id="about-me" className="section-home p-6 pb-12">
      <SectionTitle
        title="About Me"
        subtitle="May I interest you in some personal information?"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="w-64 h-64 bg-white rounded-full mb-12"></div>
        <div>
          <p>
            I am a Full Stack developer eager to find new challenges that will
            allow me to develop my skills further. As a naturally curious
            person, I am always on the lookout for new technologies and
            techniques.
          </p>
          <br />
          <p>
            Born and raised in Venezuela, but currently living in Berlin, where
            I got the chance to participate in SPICED Academy's Web Development
            Bootcamp, graduating as a fully capable developer.
          </p>
        </div>
        <LinkButton
          title={'Download my CV'}
          icon={AiOutlineFilePdf}
          link={'#'}
          classes={'self-start mt-3'}
        />
      </div>
    </section>
  );
};

export default AboutMe;
