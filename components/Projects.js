import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="recent-work" className="section-home">
      <div className="mb-12">
        <h2 className="font-poppins text-4xl font-semibold text-center">
          Projects
        </h2>
        <p className="text-center font-light">
          Click the title for project details!
        </p>
      </div>
      <div className="grid grid-cols-1 auto-rows-min mb-12 gap-4 px-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:px-12">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.github} />
        ))}
      </div>
      <div className="lg:h-[80px]"></div>
    </section>
  );
};

export default Projects;
