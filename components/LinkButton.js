import React from 'react';

const LinkButton = ({ icon, title, link, classes, blank, disabled }) => {
  const Icon = icon;
  return (
    <a
      href={link}
      className={`inline-block rounded-lg text-center bg-blue-500 px-6 py-3 hover:bg-rose-500 ${
        classes ? classes : ''
      }`}
      target={blank ? '_blank' : '_self'}
      rel="noreferrer"
    >
      <span className="flex items-center justify-center gap-2">
        {title}
        <Icon style={{ height: '20', width: '20' }} />
      </span>
    </a>
  );
};

export default LinkButton;
