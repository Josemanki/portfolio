import React from 'react';
import * as SimpleIcons from 'react-icons/si';

const SkillBadge = ({ name, iconName, bgColor, textColor }) => {
  const IconComponent = SimpleIcons[iconName];
  return (
    <div className="flex-1 sm:flex-none">
      <div
        className={`flex py-1 px-2 justify-center items-center space-x-2 rounded shadow-lg`}
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        <IconComponent />
        <p className="font-medium">{name}</p>
      </div>
    </div>
  );
};

export default SkillBadge;
