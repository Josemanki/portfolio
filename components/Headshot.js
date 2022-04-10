import React from 'react';

const Headshot = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center mt-12 bg-black/[.3] rounded min-w-[350px] 2xl:min-w-[400px] 2xl:min-h-[400px] 2xl:justify-around">
      <div className="rounded-full bg-rose-600 w-44 h-44 bg-[url('/headshot.jpeg')] bg-[length:350px_350px] bg-[center_left_-7rem] bg-no-repeat border-4 border-custom-teal"></div>
      <div className="grid grid-cols-about-grid grid-rows-about-grid gap-2 mt-6">
        <div>
          <p className="uppercase font-black">Location:</p>
        </div>
        <div>
          <p className="text-sm">Berlin</p>
        </div>
        <div>
          <p className="uppercase font-black">Languages:</p>
        </div>
        <div>
          <p className="text-sm">
            Spanish (Native), English (Full proficiency)
          </p>
        </div>
        <div>
          <p className="uppercase font-black">Interests:</p>
        </div>
        <div>
          <p className="text-sm">Gaming, Cooking, Reading</p>
        </div>
      </div>
    </div>
  );
};

export default Headshot;
