import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-full flex items-center py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-navy-900 to-navy-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <img 
                  src="/profile-picture.jpeg" 
                  alt="Harry - Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden aspect-square bg-gradient-to-br from-navy-800 to-navy-600 rounded-lg items-center justify-center text-white text-6xl absolute inset-0">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-glow card-entrance">
              <h3 className="text-xl font-bold text-navy-900 dark:text-dark-accent mb-3">
                Third-Year Computer Science Student
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a third-year Computer Science student specializing in <span className="font-semibold text-navy-900 dark:text-dark-accent">cloud computing</span>, <span className="font-semibold text-navy-900 dark:text-dark-accent">cybersecurity</span>, and <span className="font-semibold text-navy-900 dark:text-dark-accent">AI-driven systems</span>. I enjoy solving technical problems that sit at the intersection of scalability, security, and user impact.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-glow">
              <h3 className="text-xl font-bold text-navy-900 dark:text-dark-accent mb-3">
                What I Do
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether I'm optimizing a workflow, validating system behaviour, or building small AI tools, I'm happiest when I'm improving how things work. I care deeply about <span className="font-semibold text-navy-900 dark:text-dark-accent">secure design</span>, <span className="font-semibold text-navy-900 dark:text-dark-accent">automation</span>, and <span className="font-semibold text-navy-900 dark:text-dark-accent">reliable system architecture</span>.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-glow">
              <h3 className="text-xl font-bold text-navy-900 dark:text-dark-accent mb-3">
                Career Vision
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm working toward a career where I can combine <span className="font-semibold text-navy-900 dark:text-dark-accent">cloud engineering</span>, <span className="font-semibold text-navy-900 dark:text-dark-accent">AI systems</span>, and <span className="font-semibold text-navy-900 dark:text-dark-accent">security-first thinking</span> to build technology that is both powerful and safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
