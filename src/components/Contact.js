import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-full flex items-center py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a href="mailto:harryallen.net@gmail.com" className="group relative">
                  <button className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group-hover:ring-4 ring-white/50 dark:ring-gray-800/50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-sm">Email</span>
                  </button>
                  <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-300 -z-10"></div>
                </a>

                <a href="tel:+19057826838" className="group relative">
                  <button className="bg-green-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group-hover:ring-4 ring-white/50 dark:ring-gray-800/50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-sm">Phone</span>
                  </button>
                  <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-300 -z-10"></div>
                </a>

                <a href="https://www.linkedin.com/in/harryallenp" target="_blank" rel="noopener noreferrer" className="group relative">
                  <button className="bg-blue-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group-hover:ring-4 ring-white/50 dark:ring-gray-800/50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </button>
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-300 -z-10"></div>
                </a>

                <a href="https://github.com/harryallenp1" target="_blank" rel="noopener noreferrer" className="group relative">
                  <button className="bg-gray-800 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group-hover:ring-4 ring-white/50 dark:ring-gray-800/50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span className="text-sm">GitHub</span>
                  </button>
                  <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-300 -z-10"></div>
                </a>

                <a href="https://devpost.com/harryallenp1" target="_blank" rel="noopener noreferrer" className="group relative">
                  <button className="bg-indigo-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group-hover:ring-4 ring-white/50 dark:ring-gray-800/50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853H10.112z"/>
                    </svg>
                    <span className="text-sm">Devpost</span>
                  </button>
                  <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-300 -z-10"></div>
                </a>

                <div className="group relative">
                  <button className="bg-teal-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg flex items-center gap-3 cursor-default">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-sm">Oakville, ON</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-navy-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-navy-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-navy-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
