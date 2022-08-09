import React from 'react';

const LinkButton = ({ icon, title, link, classes }) => {
  const Icon = icon;
  return (
    <a
      href={link}
      className={`inline-block rounded-lg text-center bg-blue-500 px-6 py-3 hover:bg-rose-500 ${
        classes ? classes : ''
      }`}
    >
      <span className="flex items-center justify-center gap-2">
        {title}
        <Icon style={{ height: '20', width: '20' }} />
      </span>
    </a>
  );
};

export default LinkButton;
