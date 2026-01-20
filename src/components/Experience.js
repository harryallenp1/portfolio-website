import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer - QA & Automation',
      company: 'Government of Ontario',
      companyUrl: 'https://www.ontario.ca/page/government-ontario',
      period: 'May 2023 – Present',
      location: 'Toronto, ON',
      logo: '/logos/government_of_ontario_logo.jpeg',
      current: true,
      description: 'Analyze complex system behaviour and large datasets across cloud-hosted OACIS modules to support accurate reporting, workflow validation, and requirement alignment. Perform data-driven testing using SQL, defect tracking, and scenario analysis to ensure reliability of province-wide digital services supporting thousands of users.',
      highlights: [
        'Translate technical findings into clear, actionable insights for business teams',
        'Create structured documentation and governance-ready artifacts for leadership',
        'Support continuous-improvement initiatives through root-cause assessments'
      ],
      skills: ['SQL', 'Python', 'Process Mapping', 'Data Validation', 'Analytics', 'Agile/Scrum', 'Cloud Systems', 'Testing & QA']
    },
    {
      title: 'Coding Instructor (iOS Development)',
      company: 'Career Education Council',
      companyUrl: 'https://www.careereducationcouncil.ca/',
      period: 'June 2025 – Present',
      location: 'Guelph, ON',
      logo: '/logos/career_education_council_logo.jpeg',
      current: false,
      partTime: true,
      description: 'Teach Swift programming, app design fundamentals, and mobile development workflows to high-school students through hands-on projects. Create clear, beginner-friendly technical content that simplifies complex concepts.',
      highlights: [
        'Lead workshops strengthening problem-solving and computational thinking',
        'Adapt instructions for diverse learners using feedback loops',
        'Build inclusive learning environment promoting collaboration with emerging technologies'
      ],
      skills: ['Swift', 'Xcode', 'Teaching', 'Documentation', 'UX Thinking', 'Workshop Facilitation', 'Technical Content Creation']
    }
  ];

  return (
    <section id="experience" className="min-h-full flex items-center py-8 px-4 bg-white/30 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* Company Logo */}
                  {exp.logo && (
                    <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-md flex items-center justify-center">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
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
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full animate-pulse">
                          CURRENT
                        </span>
                      )}
                      {exp.partTime && (
                        <span className="px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white text-xs font-semibold rounded-full">
                          PART-TIME
                        </span>
                      )}
                    </div>
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-navy-900 dark:text-navy-700 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-lg text-navy-900 dark:text-navy-700 font-medium">
                        {exp.company}
                      </p>
                    )}
                    {exp.location && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        📍 {exp.location}
                      </p>
                    )}
                  </div>
                </div>
                
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              {exp.highlights && (
                <ul className="mb-4 space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-navy-900 mr-2 mt-1">▸</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
