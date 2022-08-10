import React from 'react';
import SectionTitle from './SectionTitle';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const testBadges = [
    {
      icon: 'SiJavascript',
      title: 'Javascript',
      bgColor: '#EAB307',
      textColor: '#041C32',
    },
    {
      icon: 'SiReact',
      title: 'React',
      bgColor: '#61DAFB',
      textColor: '#041C32',
    },
  ];
  return (
    <section className="p-6 pb-12" id="skills">
      <SectionTitle title="Skills" subtitle="Stuff I have used before!" />
      <div className="flex flex-wrap">
        {testBadges.map((badge) => (
          <SkillBadge {...badge} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
