import React from 'react';
import { BiCode } from 'react-icons/bi';
import { FaDatabase } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Summary = ({ frontend, backend }) => {
  return (
    <section className="p-6 pb-12 container">
      <SectionTitle title="What I do" subtitle="Let's get you a summary!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="bg-custom-navy-light p-6 flex flex-col mb-6 shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <BiCode style={{ height: '40', width: '40', color: '#2FA4FF' }} />
            <h3 className="text-2xl font-poppins font-semibold">
              On the <span className="text-custom-blue">Front End</span>
            </h3>
          </div>
          <ul className="list-disc space-y-3 pl-5">
            {frontend.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <div className="bg-custom-navy-light p-6 flex flex-col mb-6 shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <FaDatabase
              style={{ height: '30', width: '30', color: '#2FA4FF' }}
            />
            <h3 className="text-2xl font-poppins font-semibold">
              On the <span className="text-custom-blue">Back End</span>
            </h3>
          </div>
          <ul className="list-disc space-y-3 pl-5">
            {backend.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Summary;
