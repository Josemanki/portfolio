import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({});

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...formData,
      }),
    })
      .then(() => {
        setResult('Great! Your message has been sent!');
        setFormData({});
      })
      .catch((error) => {
        console.log(error);
        setResult('Oops! There was an error sending your message.');
      });
  };

  const { name, email, message } = formData;

  return (
    <section id="contact" className="section-home bg-neutral-200 min-h-screen">
      <div className="px-6 h-full flex flex-col items-center justify-around">
        <div className="py-12">
          <h2 className="text-regular-800 font-semibold font-poppins text-5xl text-center">
            Contact Me<span className="text-rose-600 font-black">.</span>
          </h2>
        </div>
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col mt-8 w-full sm:max-w-[700px]"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          {result && <span className="text-xl text-center mb-6">{result}</span>}
          <label htmlFor="name" className="uppercase font-poppins">
            Name <span className="text-rose-600 font-black">*</span>
          </label>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} className="p-2" required />
          <label htmlFor="email" className="uppercase font-poppins mt-8">
            Email <span className="text-rose-600 font-black">*</span>
          </label>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} className="p-2" required />
          <label htmlFor="message" className="uppercase font-poppins mt-8">
            Message <span className="text-rose-600 font-black">*</span>
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="p-2"
            value={message}
            onChange={handleChange}
            rows={5}
            required
          />
          <button type="submit" className="bg-custom-teal text-white font-poppins uppercase rounded p-2 mt-2">
            Send message
          </button>
        </form>
        <div className="h-[100px]"></div>
      </div>
    </section>
  );
};

export default Contact;
