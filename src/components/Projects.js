import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const projects = [
    {
      title: 'AI Budget Tracker',
      date: 'September 2024',
      description: 'Developed an AI-assisted financial dashboard that automatically categorizes transactions and generates spending trends using Python automation. Improved reporting accuracy and reduced manual effort by automating monthly pipelines and designing KPI visualizations.',
      tech: ['Python', 'Power BI', 'Excel Automation', 'AI'],
      image: '💰',
      github: 'https://github.com/harryallenp1/ai_budget_tracker',
      demo: 'https://www.youtube.com/watch?v=nLeJTOa5qwM'
    },
    {
      title: 'Project Memora',
      date: 'December 2024',
      description: 'Designed and built an assistive mobile app that supports individuals with memory impairments using reminders, photo recognition, and voice-driven prompts. Developed cloud-enabled workflows using Firebase for real-time syncing and performed QA testing to ensure reliability.',
      tech: ['Flutter', 'Firebase', 'AI Analytics', 'Mobile Development'],
      image: '🧠',
      github: 'https://github.com/harryallenp1/ProjectMemora',
      demo: null
    },
    {
      title: 'StudentNest Prototype',
      date: 'June 2024 - SpurHacks 2024',
      description: 'Built a prototype platform connecting international students with housing, jobs, and essential services through a cloud-integrated front end. Conducted user interviews and market analysis to refine product direction, validate user needs, and optimize usability.',
      tech: ['React', 'Firebase', 'Cloud APIs', 'UX Research'],
      image: '🏠',
      github: null,
      demo: 'https://devpost.com/software/studentnest',
      hackathon: true,
      devpost: true
    },
    {
      title: 'Aging Population Forecast',
      date: 'May 2025',
      description: 'Built predictive models to forecast long-term population changes across Canada and assess resource demand under multiple scenarios. Designed comparative dashboards and visual summaries to support planning, analytics, and insight-driven decision-making.',
      tech: ['Python', 'Excel', 'Regression Modeling', 'Data Analytics'],
      image: '📈',
      github: null,
      demo: null
    }
  ];

  return (
    <section id="projects" className="min-h-full flex items-center py-8 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary h-48 flex items-center justify-center relative overflow-hidden group">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy-900 dark:from-dark-secondary dark:to-dark-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {project.image === '📈' && (
                    <svg className="w-32 h-32 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-8v8m-4-8v8" />
                    </svg>
                  )}
                  {project.image === '🧠' && (
                    <svg className="w-32 h-32 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {project.image === '💰' && (
                    <svg className="w-32 h-32 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {project.image === '🏠' && (
                    <svg className="w-32 h-32 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                
                {project.hackathon && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg animate-bounce-slow">
                    🏆 HACKATHON
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex-1">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] px-4 py-2 border-2 border-navy-900 dark:border-dark-accent text-navy-900 dark:text-dark-accent rounded-lg text-center font-medium hover:bg-navy-900 dark:hover:bg-dark-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] px-4 py-2 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white rounded-lg text-center font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {project.devpost ? (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853H10.112z"/>
                          </svg>
                          Devpost
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Demo
                        </>
                      )}
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <div className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-center font-medium">
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
