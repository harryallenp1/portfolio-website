import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Journey = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeStep, setActiveStep] = useState(-1);
  const milestones = [
    {
      grade: 'Grade 5',
      title: 'First PC',
      icon: '🖥️',
      description: 'Got my first PC and became obsessed with how every part fit together. The beginning of my tech journey.'
    },
    {
      grade: 'Grade 8',
      title: 'SSD Discovery',
      icon: '💾',
      description: 'My real turning point came when I opened up that same PC to replace its SSD. What I thought would be a quick fix ended up teaching me more than I expected. Seeing the hardware up close, understanding how storage functioned, and bringing the system back to life on my own made me realize how much I enjoyed solving technical problems.'
    },
    {
      grade: 'Grade 10',
      title: 'First Steps Into Tech',
      icon: '💻',
      description: 'This was the stage where I shifted from just using technology to wanting to understand it. I started experimenting with small software scripts, learning how computers process information, and exploring IoT with my dad. We built simple home automations like motion-based lights and sensor systems, and that hands-on experience showed me how hardware and software come together to solve real problems.'
    },
    {
      grade: 'University',
      title: 'The Big Move — Starting My Journey',
      icon: '✈️',
      description: 'Moving 13,000 km away from home to study Computer Science shaped everything about who I am today. Being on my own pushed me to grow fast in every way. It also reinforced how deeply I cared about cloud computing, cybersecurity, and building systems that are reliable, scalable, and genuinely useful.'
    },
    {
      grade: 'University',
      title: 'Finding My Direction',
      icon: '🎓',
      description: 'As I dug deeper into my degree, I realized that cloud systems, AI, and automation were where I felt most at home. Every project, from distributed systems to analytics dashboards, made me more certain that this is the field I want to grow in. I started building real applications, working on large-scale system testing, and taking on projects that aligned with the future of computing.'
    },
    {
      grade: 'Present',
      title: 'Cloud, AI and Systems Engineering',
      icon: '☁️',
      description: 'Now I\'m focused on applying everything I\'ve learned by building cloud applications, AI tools, automation scripts, and data-driven solutions. Whether it\'s optimizing workflows, creating smarter systems, or improving user experiences, this is where all the curiosity from my childhood finally connects to real impact.'
    }
  ];

  // Animate through steps when visible
  useEffect(() => {
    if (isVisible) {
      const timeouts = [];
      milestones.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setActiveStep(index);
        }, index * 1500); // 1.5 seconds per step
        timeouts.push(timeout);
      });
      
      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    } else {
      setActiveStep(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section id="journey" className="min-h-full flex items-center py-8 px-4 bg-white/30 dark:bg-gray-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
          My Journey — The Real Story
        </h2>
        
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          My passion for technology started way before university. Here's the real story of how curiosity turned into a career path.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>



          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 300}ms`
                }}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className={`backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-navy-900/70 to-navy-600/70 dark:from-dark-accent/70 dark:to-dark-secondary/70 scale-105 shadow-2xl ring-4 ring-navy-900 dark:ring-dark-accent' 
                      : 'bg-white/50 dark:bg-gray-800/50 hover:shadow-xl hover:scale-105'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{milestone.icon}</span>
                      <div>
                        <p className={`text-sm font-semibold ${
                          activeStep === index ? 'text-white' : 'text-navy-900 dark:text-dark-accent'
                        }`}>
                          {milestone.grade}
                        </p>
                        <h3 className={`text-xl font-bold ${
                          activeStep === index ? 'text-white' : 'text-gray-800 dark:text-white'
                        }`}>
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className={`leading-relaxed ${
                      activeStep === index ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block relative z-10">
                  <div 
                    className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transition-all duration-500 ${
                      activeStep >= index 
                        ? 'bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 scale-100'
                    }`}
                  >
                    {/* Active pulse ring */}
                    {activeStep === index && (
                      <div className="absolute inset-0 rounded-full bg-navy-900 dark:bg-dark-accent animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary rounded-lg p-8 shadow-2xl">
          <p className="text-lg md:text-xl text-white leading-relaxed text-center">
            <span className="font-bold">Today,</span> I bring that same curiosity into everything I build — from cloud projects to AI tools, from analytics dashboards to automation scripts. My journey isn't just about learning tech; it's about <span className="font-bold">staying curious</span>, <span className="font-bold">improving every day</span>, and <span className="font-bold">building things I'm proud of</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
