import React from 'react';
import Blob from './Blob';
import LinkButton from './LinkButton';
import { AiOutlineFilePdf } from 'react-icons/ai';
import SectionTitle from './SectionTitle';

const AboutMe = ({ about }) => {
  return (
    <section id="about-me" className="nav-section container p-6 pb-24">
      <SectionTitle
        title="About Me"
        subtitle="May I interest you in some personal information?"
      />
      <div className="flex flex-col items-center justify-center sm:space-x-12 sm:flex-row">
        <div className="flex-1">
          <Blob alt />
        </div>
        <div>
          <p className="whitespace-pre-wrap mt-8 sm:mt-0">{about}</p>
          <LinkButton
            title={'Download my CV'}
            icon={AiOutlineFilePdf}
            link={'/resume.pdf'}
            classes={'self-start mt-6'}
            blank
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
