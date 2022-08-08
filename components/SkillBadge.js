import React from 'react';
import * as SimpleIcons from 'react-icons/si';

const SkillBadge = ({ title, icon, bgColor, textColor }) => {
  const IconComponent = SimpleIcons[icon];
  return (
    <div>
      <div
        className={`flex m-2 py-1 px-2 justify-center items-center space-x-2 rounded`}
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        <IconComponent />
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
};

export default SkillBadge;
