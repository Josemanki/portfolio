import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Accordion = ({ title, content, icon, contentIcon }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mb-12">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        {icon}
        <div className="text-xl font-poppins font-medium">{title}</div>
        <RiArrowDropDownLine
          style={{
            height: '40',
            width: '40',
            color: '#2FA4FF',
            transform: `${isActive ? 'rotate(0.5turn)' : ''}`,
            transition: 'all .2s linear',
          }}
        />
      </div>
      {isActive && <div className="flex flex-wrap"></div>}
    </div>
  );
};

export default Accordion;
