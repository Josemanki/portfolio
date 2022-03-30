import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-200 h-screen">
      <div className="px-6 h-full">
        <div className="py-12">
          <h2 className="text-regular-800 font-semibold font-poppins text-5xl text-center">
            Contact Me<span className="text-rose-600 font-black">.</span>
          </h2>
        </div>
        <form name="contact-form" className="flex flex-col mt-8">
          <label htmlFor="name" className="uppercase font-poppins">
            Name <span className="text-rose-600 font-black">*</span>
          </label>
          <input type="text" id="name" name="name" className="p-2" required />
          <label htmlFor="email" className="uppercase font-poppins mt-8">
            Email <span className="text-rose-600 font-black">*</span>
          </label>
          <input type="email" id="email" name="email" className="p-2" required />
          <label htmlFor="message" className="uppercase font-poppins mt-8">
            Message <span className="text-rose-600 font-black">*</span>
          </label>
          <textarea type="text" id="name" name="name" className="p-2" rows={5} required />
          <button type="submit" className="bg-custom-teal text-white font-poppins uppercase rounded p-2 mt-2">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
