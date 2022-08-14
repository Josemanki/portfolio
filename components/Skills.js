import React from 'react';
import SectionTitle from './SectionTitle';
import SkillBadge from './SkillBadge';

const Skills = ({ skills }) => {
  return (
    <section className="nav-section p-6 pb-12 container" id="skills">
      <SectionTitle title="Skills" subtitle="Stuff I have used before!" />
      <div className="flex flex-wrap gap-2">
        {skills.map((badge) => (
          <SkillBadge key={badge._id} {...badge} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
