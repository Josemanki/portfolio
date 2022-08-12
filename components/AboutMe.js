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
      <div className="flex flex-col items-center justify-center sm:space-x-12 sm:flex-row ">
        <div className="flex-1">
          <Blob />
        </div>
        <div>
          <p className="whitespace-pre-wrap">{about}</p>
          <LinkButton
            title={'Download my CV'}
            icon={AiOutlineFilePdf}
            link={'#'}
            classes={'self-start mt-6'}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
