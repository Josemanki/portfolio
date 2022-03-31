import React from 'react';
import ProjectCard from './ProjectCard';

const RecentWork = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This exact portfolio website! Made using NextJS and TailwindCSS.',
      github: 'https://github.com/Josemanki/portfolio',
      extended:
        'This exact portfolio website! Made using NextJS and TailwindCSS. Design work was in order. Future additions to come.',
      image: '/portfolio.png',
      projectUrl: 'https://www.hernandez-jose.com',
    },
    {
      title: 'Dofus Craftlist',
      description:
        'Small craft list (shopping list) generator for Dofus items. Made with React using Hooks and an external API.',
      github: 'https://github.com/Josemanki/craftlist-dev',
      extended: 'This is an extended description',
      image: '/craftlist.png',
      projectUrl: 'https://dofuscraftlist-dev.netlify.com',
    },
    {
      title: 'AlmanaxApp',
      description:
        'Filter for the Dofus Almanax, able to get a list with the specific day bonuses for the following days. Made with React and an external API',
      github: 'https://github.com/Josemanki/almanax-app',
      extended:
        'Filter for the Dofus Almanax, able to get a list with the specific day bonuses for the following days. Made with React and an external API',
      image: '/almanax.png',
      projectUrl: 'https://almanaxapp.netlify.app/',
    },
    {
      title: 'PokéApp',
      description:
        'PokeDex-like app, made using PokeAPI and React. Integrates a filtering function, evolution trees and the ability to open any evolution from any pokemon in its chain.',
      github: 'https://github.com/Josemanki/PokeApp',
      extended:
        'PokeDex-like app, made using PokeAPI and React. This PokeDex integrates a comfortable filtering function, working evolution trees and the ability to open any evolution from any pokemon in its chain.',
      image: '/pokeapp.png',
      projectUrl: 'https://pokeapp-side.netlify.app/',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Small HTML/CSS/JS social media dashboard, presentational only. Features Dark Mode.',
      github: 'https://github.com/Josemanki/socialmedia-dashboard',
      extended:
        'Small HTML/CSS/JS social media dashboard, presentational only, not connected to any backend or API yet. Features Dark Mode.',
      image: '/socialmedia.png',
      projectUrl: 'https://josemanki.github.io/socialmedia-dashboard/',
    },
  ];

  return (
    <section id="recent-work" className="section-home min-h-screen bg-white">
      <div className="py-12 px-6 h-full flex flex-col items-center justify-around">
        <h2 className="text-regular-800 font-semibold font-poppins text-5xl text-center ">
          Recent Work<span className="text-rose-600 font-black">.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 auto-rows-min mb-12 gap-4 px-12 place-items-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.github} />
        ))}
      </div>
      <div className="lg:h-[80px]"></div>
    </section>
  );
};

export default RecentWork;
