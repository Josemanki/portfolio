import React from 'react';
import SkillBadge from './SkillBadge';

const Skills = () => {
  return (
    <section className="p-6 pb-12" id="skills">
      <div className="mb-12">
        <h2 className="font-poppins text-4xl font-semibold text-center">
          Skills
        </h2>
        <p className="text-center font-light">Stuff I have used before!</p>
      </div>
      <div className="flex flex-wrap">
        <SkillBadge
          icon={'SiJavascript'}
          title={'Javascript'}
          bgColor={'#EAB307'}
          textColor={'#041C32'}
        />
      </div>
    </section>
  );
};

export default Skills;
