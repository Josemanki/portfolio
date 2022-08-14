import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import SectionTitle from './SectionTitle';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="nav-section container">
      <SectionTitle
        title="Projects"
        subtitle="Click the title for project details!"
      />
      <div className="grid grid-cols-1 auto-rows-min mb-12 gap-4 px-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.github} />
        ))}
      </div>
      <div className="lg:h-[80px]"></div>
    </section>
  );
};

export default Projects;
