import React from 'react';

const ProjectCard = ({ title, description, github, extended, image, projectUrl }) => {
  return (
    <div className="flex h-full flex-col justify-evenly max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-gray-700">
      <a target="_blank" rel="noreferrer" href={projectUrl ? projectUrl : '#recent-work'}>
        <img className="rounded-t-lg" src={image} alt={`Screenshot from ${title}`} />
      </a>
      <div className="p-5">
        <a target="_blank" rel="noreferrer" href={projectUrl}>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h4>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-gray-400">{description}</p>
        <div className="flex justify-around">
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Visit Site
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Github
            <svg
              className="ml-2 -mr-1 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.24658C9.6255 2.24668 7.32849 3.0917 5.51999 4.63043C3.71149 6.16916 2.50953 8.3012 2.12916 10.6451C1.74879 12.9889 2.21485 15.3917 3.44393 17.4233C4.67301 19.455 6.58491 20.9831 8.83755 21.7341C9.33755 21.8216 9.52505 21.5216 9.52505 21.2591C9.52505 21.0216 9.51254 20.2341 9.51254 19.3966C7.00003 19.8591 6.35003 18.7841 6.15003 18.2216C5.9281 17.6745 5.5763 17.1897 5.12503 16.8091C4.77503 16.6216 4.27503 16.1591 5.11252 16.1466C5.4323 16.1813 5.73901 16.2926 6.00666 16.471C6.2743 16.6494 6.49499 16.8897 6.65003 17.1716C6.7868 17.4173 6.97071 17.6336 7.19122 17.8081C7.41173 17.9826 7.6645 18.1118 7.93506 18.1885C8.20562 18.2651 8.48864 18.2876 8.76791 18.2547C9.04717 18.2218 9.3172 18.134 9.56251 17.9966C9.6058 17.4882 9.83237 17.0129 10.2 16.6591C7.97503 16.4091 5.65003 15.5466 5.65003 11.7216C5.63597 10.7278 6.00271 9.76619 6.67503 9.03411C6.36931 8.17033 6.40508 7.2224 6.77503 6.38411C6.77503 6.38411 7.6125 6.1216 9.52503 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0494 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0762 16.901 14.26 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
