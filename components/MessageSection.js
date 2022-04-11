import React from 'react';

const MessageSection = () => {
  return (
    <section
      id="message"
      className="min-h-screen bg-custom-teal px-6 flex items-center"
    >
      <div className="relative decoration-top decoration-bottom lg:px-42 xl:px-80 xl:decoration-top-alt xl:decoration-bottom-alt">
        <p className="text-white font-black text-3xl leading-relaxed sm:text-5xl sm:leading-normal lg:p-10">
          I am a developer who prioritizes{' '}
          <span className="text-neutral-800 font-normal">
            bringing maximum quality and value to amazing products.
          </span>{' '}
          Currently moving towards the start of my professional career.
        </p>
      </div>
    </section>
  );
};

export default MessageSection;
