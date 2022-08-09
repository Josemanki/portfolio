import React from 'react';
import LinkButton from './LinkButton';
import { SiGithub } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ProjectCard = ({ title, description, github, image, projectUrl }) => {
  return (
    <div className="bg-custom-navy-light flex flex-col justify-between">
      <div>
        <div className="px-5 py-4">
          <a target="_blank" rel="noreferrer" href={projectUrl}>
            <h4 className="text-2xl font-poppins font-semibold tracking-tight">
              {title}
            </h4>
          </a>
          <p className="mb-3 mt-4 font-normal">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around mb-4">
        <LinkButton
          title={'Live Demo'}
          icon={AiOutlineArrowRight}
          link={projectUrl}
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
  );
};

export default ProjectCard;
