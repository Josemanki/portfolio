import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const RecentWork = () => {
  return (
    <section id="recent-work" className="section-home min-h-screen bg-white">
      <div className="py-12 px-6 h-full flex flex-col items-center justify-around">
        <h2 className="text-regular-800 font-semibold font-poppins text-5xl text-center ">
          Recent Work<span className="text-rose-600 font-black">.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 auto-rows-min mb-12 gap-4 px-6 place-items-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:px-12">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.github} />
        ))}
      </div>
      <div className="lg:h-[80px]"></div>
    </section>
  );
};

export default RecentWork;
