import React from 'react';
import LinkButton from './LinkButton';
import { SiGithub } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SkillBadge from './SkillBadge';

const ProjectCard = ({ name, description, github, live, skills }) => {
  return (
    <div className="bg-custom-navy-light flex flex-col justify-between gap-y-4">
      <div>
        <div className="px-5 pt-4">
          <a target="_blank" rel="noreferrer" href={live}>
            <h4 className="text-2xl font-poppins font-semibold tracking-tight">
              {name}
            </h4>
          </a>
          <p className="mt-4 font-normal">{description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 px-4 gap-2">
          {skills.map((badge) => (
            <SkillBadge key={badge._id} {...badge} />
          ))}
        </div>
        <div className="flex flex-wrap justify-around px-2">
          <LinkButton
            title={'Live Demo'}
            icon={AiOutlineArrowRight}
            link={live}
            classes={'mb-4'}
          />
          <LinkButton
            title={'GitHub'}
            icon={SiGithub}
            link={github}
            classes={'mb-4'}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
