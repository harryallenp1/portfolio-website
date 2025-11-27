import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Artificial Intelligence & Applied Machine Learning',
      school: 'University of Waterloo',
      schoolUrl: 'https://uwaterloo.ca/',
      period: 'Nov 2025 – Feb 2026',
      location: 'Ontario, Canada',
      logo: '/logos/uwaterloo_logo.jpeg',
      description: 'Completed a technical certification focused on real-world AI applications including machine learning, neural networks, NLP, computer vision, robotics, and forecasting.',
      highlights: [
        'Gained hands-on experience with AI development workflows—data preparation, model evaluation, algorithm selection, and responsible AI practices',
        'Explored industry use cases across finance, healthcare, logistics, and cloud-based AI systems to strengthen applied problem-solving skills'
      ]
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Sheridan College',
      schoolUrl: 'https://www.sheridancollege.ca/',
      period: 'Expected Graduation: 2027',
      location: 'Ontario, Canada',
      logo: '/logos/sheridan_logo.jpeg',
      scholarship: true,
      scholarshipCount: 1,
      description: 'Pursuing a comprehensive computer science education with focus on software development, algorithms, and modern technologies.',
      highlights: [
        'Software Development & Engineering',
        'Data Structures & Algorithms',
        'Web & Mobile Development',
        'Database Management & Cloud Computing'
      ]
    }
  ];

  return (
    <section id="education" className="min-h-full flex items-center py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* School Logo */}
                  {edu.logo && (
                    <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-md flex items-center justify-center">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>
                      {edu.scholarship && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-slow hover:scale-110 transition-transform duration-300">
                          <svg className="w-4 h-4 animate-bounce-slow" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {edu.scholarshipCount}x Scholarship
                        </div>
                      )}
                    </div>
                    {edu.schoolUrl ? (
                      <a 
                        href={edu.schoolUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-navy-900 dark:text-navy-700 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        {edu.school}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-lg text-navy-900 dark:text-navy-700 font-medium">
                        {edu.school}
                      </p>
                    )}
                    {edu.location && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        📍 {edu.location}
                      </p>
                    )}
                  </div>
                </div>
                
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {edu.description}
              </p>
              
              {edu.highlights && (
                <div className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-navy-900 text-lg">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
