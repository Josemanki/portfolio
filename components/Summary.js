import React from 'react';
import { BiCode } from 'react-icons/bi';
import { FaDatabase } from 'react-icons/fa';

const Summary = () => {
  return (
    <section className="p-6 pb-12">
      <div className="mb-12">
        <h2 className="font-poppins text-4xl font-semibold text-center">
          What I do
        </h2>
        <p className="text-center font-light">Let's get you a summary!</p>
      </div>

      <div className="bg-custom-navy-light p-6 flex flex-col mb-6 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <BiCode style={{ height: '40', width: '40', color: '#2FA4FF' }} />
          <h3 className="text-2xl font-poppins font-semibold">
            On the <span className="text-custom-blue">Front End</span>
          </h3>
        </div>
        <div>
          <ul className="list-disc pl-5">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-custom-navy-light p-6 flex flex-col mb-6 shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <FaDatabase style={{ height: '30', width: '30', color: '#2FA4FF' }} />
          <h3 className="text-2xl font-poppins font-semibold">
            On the <span className="text-custom-blue">Back End</span>
          </h3>
        </div>
        <div>
          <ul className="list-disc pl-5">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              repellendus.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Summary;
