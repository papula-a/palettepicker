// src/portfolio/page.jsx

import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="bg-white text-center pt-0">
        <img 
          src="/static/simone-biles-hero.jpg" 
          alt="Simone Biles" 
          className="w-full h-96 object-cover mb-4" 
        />
        <h1 className="text-5xl font-bold text-gray-800">Simone Biles</h1>
        <p className="mt-4 text-xl text-gray-600">World Champion Gymnast and Olympic Gold Medalist</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">View Achievements</a>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About Simone</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Simone Biles is an American gymnast and one of the most decorated gymnasts in Olympic history. 
          Known for her extraordinary athleticism, she has inspired millions with her performances and resilience.
        </p>
      </section>

      {/* Achievements Section */}
      <section id="projects" className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Achievement Item */}
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src="/static/achievement1.jpg" alt="2016 Rio Olympics" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">2016 Rio Olympics</h3>
              <p className="mt-2 text-gray-600">Won 4 Gold and 1 Bronze medal, becoming the most decorated gymnast at a single Olympics.</p>
            </div>
          </div>
          {/* Repeat for more achievements */}
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src="/static/achievement2.jpg" alt="2019 World Championships" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">2019 World Championships</h3>
              <p className="mt-2 text-gray-600">Secured 5 Gold medals, further solidifying her status as a top gymnast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-gray-800">What People Say</h2>
        <blockquote className="mt-4 italic text-gray-600">
          "Simone is a true inspiration and a role model for athletes everywhere."
        </blockquote>
        <p className="mt-2 text-gray-700">- Coach Aimee Boorman</p>
        <blockquote className="mt-4 italic text-gray-600">
          "She truly shows how women can become unstoppable and are capable of almost anything. Always amazed by her!!"
        </blockquote>
        <p className="mt-2 text-gray-700">- Diya Mustafa</p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <form className="mt-8 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="border rounded-lg px-4 py-2 w-full mb-4" 
            disabled // Disabling input
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="border rounded-lg px-4 py-2 w-full mb-4" 
            disabled // Disabling input
          />
          <textarea placeholder="Your Message" className="border rounded-lg px-4 py-2 w-full mb-4" disabled ></textarea>
          <button type="submit" className="mt-4 bg-blue-500 text-white rounded-lg px-6 py-2 transition-colors hover:bg-blue-600">Send</button>
        </form>
      </section>

    </div>
  );
};

export default Portfolio;
