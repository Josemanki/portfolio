import React from 'react';
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
} from 'react-icons/hi';

const Contact = () => {
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({});

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
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
        setFormData({ message: '', email: '', name: '' });
      })
      .catch((error) => {
        console.log(error);
        setResult('Oops! There was an error sending your message.');
      });
  };

  const { name, email, message } = formData;

  return (
    <section id="contact" className="section-home container mb-12">
      <div className="px-6 h-full flex flex-col items-center justify-around">
        <SectionTitle
          title="Contact"
          subtitle="Drop me a line and let's talk!"
        />
        <div className="sm:flex w-full sm:mt-8">
          <div className="self-start sm:self-auto flex-1">
            <div>
              <div className="flex items-center space-x-4">
                <HiOutlineMail className="icon-lg" />
                <div>
                  <h3 className="text-lg font-medium">Email address</h3>
                  <span className="font-light">hello@hernandez-jose.com</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4">
                <HiOutlineLocationMarker className="icon-lg" />
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <span className="font-light">Berlin, Germany</span>
                </div>
              </div>
            </div>
          </div>

          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col mt-8 flex-1 sm:max-w-[700px] sm:mt-0"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            {result && (
              <span className="text-xl text-center mb-6">{result}</span>
            )}
            <label htmlFor="name" className="font-poppins">
              Name <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="contact-input"
              required
            />
            <label htmlFor="email" className="font-poppins mt-8">
              Email address <span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="contact-input"
              required
            />
            <label htmlFor="message" className="font-poppins mt-8">
              Message <span className="text-rose-600">*</span>
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="contact-input"
              value={message}
              onChange={handleChange}
              rows={5}
              required
            />
            <div>
              <button
                type="submit"
                className="bg-custom-blue flex items-center justify-start font-poppins rounded-lg py-3 px-4 mt-6 hover:bg-rose-500"
              >
                Send message
                <HiOutlinePaperAirplane
                  style={{
                    height: '20',
                    width: '20',
                    transform: 'rotate(90deg)',
                    marginLeft: '.75rem',
                  }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
