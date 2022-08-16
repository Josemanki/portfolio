import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="font-poppins text-4xl font-semibold text-center">
        {title}
        <span className="text-rose-500">.</span>
      </h2>
      <p className="text-center font-light">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
