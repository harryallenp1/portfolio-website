import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm HarryBot 🤖, Harry's AI assistant. Ask me about his experience, skills, education, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const systemPrompt = `You are Harry Allen's AI assistant on his portfolio website. Your role is to help visitors learn about Harry in a friendly, professional manner.

ABOUT HARRY:
- Location: Oakville, ON
- Email: harryallen.net@gmail.com
- Phone: +1 (905) 782-6838
- LinkedIn: linkedin.com/in/harryallenp
- GitHub: github.com/harryallenp1
- Devpost: devpost.com/harryallenp1

EXPERIENCE:
1. QA Analyst at Government of Ontario (May 2024 - Aug 2024)
   - Improved AI chatbot accuracy by 30% through prompt engineering
   - Automated testing processes, reducing manual testing time by 40%
   - Collaborated with cross-functional teams using Agile/Scrum

2. Coding Instructor at Career Education Council (Sep 2023 - Dec 2023)
   - Taught programming fundamentals to students
   - Developed curriculum and learning materials
   - Mentored students in coding projects and problem-solving

EDUCATION:
- AI & Applied Machine Learning Certification - University of Waterloo (Nov 2025 - Feb 2026)
  Topics: Neural Networks, NLP, Computer Vision, Deep Learning, Reinforcement Learning
- Bachelor of Computer Science - Sheridan College (Expected 2027)
  Focus: Software Development, Data Structures, Algorithms

SKILLS:
- Programming: Python, JavaScript, Java, C#, SQL, HTML/CSS
- Tools: Excel, Power BI, Azure AI Studio, JIRA, Git
- Specialties: AI Chatbot Development, Data Analysis, Test Automation, Agile/Scrum

PROJECTS:
- AI Chatbot improvements with Azure AI Studio
- Data analysis dashboards with Power BI
- Test automation frameworks
- Portfolio website with React and TailwindCSS

Keep responses concise, friendly, and focused on Harry's qualifications. If asked about something not in this information, politely say you don't have that information but encourage them to contact Harry directly.`;

  const getAIResponse = async (userInput) => {
    const input = userInput.toLowerCase();
    
    // Greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/.test(input)) {
      return "Hello! 👋 I'm Harry's AI assistant. I can tell you about his experience, skills, education, projects, or how to contact him. What would you like to know?";
    }
    
    // Thanks / Gratitude
    if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate') || input.includes('helpful')) {
      return "You're very welcome! 😊 I'm glad I could help. If you have any other questions about Harry or would like to get in touch with him, feel free to ask!\n\n📧 harryallen.net@gmail.com";
    }
    
    // Goodbye
    if (input.includes('bye') || input.includes('goodbye') || input.includes('see you') || input.includes('later')) {
      return "Goodbye! 👋 Thanks for your interest in Harry. Feel free to come back anytime if you have more questions. Have a great day!";
    }
    
    // Positive feedback
    if (input.includes('great') || input.includes('awesome') || input.includes('cool') || input.includes('nice') || input.includes('impressive')) {
      return "I'm glad you think so! 😊 Harry has worked hard to build his skills and experience. Would you like to know more about any specific area, or are you interested in connecting with him?";
    }
    
    // Jokes / Fun
    if (input.includes('joke') || input.includes('funny') || input.includes('laugh')) {
      return "😄 Why do programmers prefer dark mode? Because light attracts bugs!\n\nSpeaking of bugs, Harry is excellent at finding and fixing them as a QA Analyst! Want to know more about his testing expertise?";
    }
    
    // How are you
    if (input.includes('how are you') || input.includes('how r u') || input.includes('whats up') || input.includes("what's up")) {
      return "I'm doing great, thanks for asking! 🤖 I'm always ready to help people learn about Harry. How about you? What brings you to Harry's portfolio today?";
    }
    
    // Experience
    if (input.includes('experience') || input.includes('work') || input.includes('job') || input.includes('career') || input.includes('worked') || input.includes('position') || input.includes('role')) {
      return "Harry has impressive work experience:\n\n🏛️ QA Analyst at Government of Ontario (May 2024 - Aug 2024)\n• Improved AI chatbot accuracy by 30% through prompt engineering\n• Automated testing processes, reducing manual testing time by 40%\n• Collaborated with cross-functional teams using Agile/Scrum\n\n� ‍🏫 Coding Instructor at Career Education Council (Sep 2023 - Dec 2023)\n• Taught programming fundamentals to students\n• Developed curriculum and learning materials\n• Mentored students in coding projects and problem-solving";
    }
    
    // Skills
    if (input.includes('skill') || input.includes('technology') || input.includes('programming') || input.includes('language') || input.includes('tool') || input.includes('tech stack')) {
      return "Harry has a diverse skill set:\n\n💻 Programming: Python, JavaScript, Java, C#, SQL, HTML/CSS\n🛠️ Tools: Excel, Power BI, Azure AI Studio, JIRA, Git\n🎯 Specialties: AI Chatbot Development, Data Analysis, Test Automation, Agile/Scrum\n\nHe's particularly strong in AI/ML, data analysis, and quality assurance!";
    }
    
    // Education
    if (input.includes('education') || input.includes('school') || input.includes('university') || input.includes('degree') || input.includes('study') || input.includes('college') || input.includes('waterloo') || input.includes('sheridan')) {
      return "Harry's educational background:\n\n🎓 AI & Applied Machine Learning Certification\nUniversity of Waterloo (Nov 2025 - Feb 2026)\nTopics: Neural Networks, NLP, Computer Vision, Deep Learning, Reinforcement Learning\n\n🎓 Bachelor of Computer Science\nSheridan College (Expected 2027)\nFocus: Software Development, Data Structures, Algorithms";
    }
    
    // Projects
    if (input.includes('project') || input.includes('built') || input.includes('created') || input.includes('developed') || input.includes('portfolio')) {
      return "Harry has worked on several impressive projects:\n\n🤖 AI Chatbot improvements using Azure AI Studio\n📊 Data analysis dashboards with Power BI\n🧪 Test automation frameworks\n💼 This portfolio website built with React and TailwindCSS!\n\nHe's passionate about combining AI, data analysis, and automation to solve real-world problems.";
    }
    
    // Contact
    if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('phone') || input.includes('linkedin') || input.includes('github') || input.includes('devpost') || input.includes('location') || input.includes('where')) {
      return "You can reach Harry through:\n\n📧 Email: harryallen.net@gmail.com\n📱 Phone: +1 (905) 782-6838\n📍 Location: Oakville, ON\n💼 LinkedIn: linkedin.com/in/harryallenp\n💻 GitHub: github.com/harryallenp1\n🚀 Devpost: devpost.com/harryallenp1\n\nFeel free to connect with him on any platform!";
    }
    
    // AI/ML specific
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning') || input.includes('ml') || input.includes('chatbot')) {
      return "Harry has strong expertise in AI and Machine Learning:\n\n🤖 Improved AI chatbot accuracy by 30% at Government of Ontario\n🎓 Completed AI & Applied Machine Learning certification from University of Waterloo\n💡 Skilled in Azure AI Studio, prompt engineering, and chatbot development\n📚 Studied Neural Networks, NLP, Computer Vision, and Deep Learning\n\nHe's passionate about applying AI to solve real-world problems!";
    }
    
    // Should I hire him / Why hire
    if (input.includes('should i hire') || input.includes('why hire') || input.includes('why should') || input.includes('good fit') || input.includes('right candidate')) {
      return "Absolutely! Here's why Harry would be a great addition to your team:\n\n✨ Proven Impact:\n• Improved AI chatbot accuracy by 30% at Government of Ontario\n• Reduced manual testing time by 40% through automation\n• Successfully taught and mentored students as a Coding Instructor\n\n🎯 Unique Combination:\n• Technical skills (Python, JavaScript, SQL, AI/ML)\n• Teaching & mentoring experience (curriculum development, student guidance)\n• Quality focus (QA, Test Automation, Agile/Scrum)\n\n🚀 Fast Learner:\n• Currently pursuing AI & ML certification from University of Waterloo\n• Hands-on experience with cutting-edge tools like Azure AI Studio\n• Proven ability to adapt and deliver results quickly\n\nHarry brings a rare blend of technical expertise, teaching ability, and proven results. Let's connect! 📧 harryallen.net@gmail.com";
    }
    
    // Strengths / What makes him special
    if (input.includes('strength') || input.includes('what makes') || input.includes('stand out') || input.includes('special') || input.includes('unique')) {
      return "Harry's key strengths that make him stand out:\n\n🎯 Results-Driven:\n• 30% improvement in AI chatbot accuracy\n• 40% reduction in manual testing time\n• Successfully mentored students in programming\n\n💡 Technical Versatility:\n• Comfortable with both frontend (React, JavaScript) and backend (Python, SQL)\n• AI/ML expertise with practical applications\n• Strong automation and testing skills\n\n🤝 Collaborative Leader:\n• Experience teaching and mentoring others\n• Agile/Scrum methodology expertise\n• Clear communicator who bridges technical and business needs\n\n📈 Continuous Learner:\n• Actively pursuing AI certifications\n• Stays current with latest technologies\n• Applies learning to real-world problems\n\nHe's not just technically skilled—he delivers measurable business impact!";
    }
    
    // Availability / Looking for
    if (input.includes('available') || input.includes('looking for') || input.includes('seeking') || input.includes('open to') || input.includes('interested in')) {
      return "Harry is actively seeking opportunities in:\n\n🎯 Ideal Roles:\n• QA Engineer / Test Automation Engineer\n• Product Analyst / Data Analyst\n• AI/ML Engineer (Junior/Entry-level)\n• Software Developer (Full-stack or Backend)\n\n📅 Availability:\n• Open to full-time positions\n• Available for internships and co-op opportunities\n• Can start immediately or based on mutual agreement\n\n🌍 Work Preferences:\n• Based in Oakville, ON\n• Open to remote, hybrid, or on-site roles\n• Willing to relocate for the right opportunity\n\nInterested in discussing a role? Reach out at harryallen.net@gmail.com or call +1 (905) 782-6838!";
    }
    
    // About the AI itself
    if ((input.includes('who are you') || input.includes('what are you') || input.includes('your name')) && !input.includes('harry')) {
      return "I'm HarryBot 🤖, an intelligent assistant created specifically for Harry Allen's portfolio!\n\n💡 About me:\n• Built with React and advanced natural language processing\n• Trained on Harry's complete professional profile\n• Designed to help visitors learn about Harry's experience, skills, and projects\n• Always available 24/7 to answer your questions\n\nI'm here to make it easy for you to discover Harry's qualifications and get in touch with him. What would you like to know?";
    }
    
    // About Harry
    if ((input.includes('who') || input.includes('about') || input.includes('tell me')) && (input.includes('harry') || !input.includes('you'))) {
      return "Harry Allen is a skilled QA Analyst and Product Analyst with expertise in AI, data analysis, and automation. He's currently pursuing a Bachelor of Computer Science at Sheridan College and recently completed an AI & Applied Machine Learning certification from University of Waterloo.\n\nHe has hands-on experience improving AI chatbots, automating testing processes, and creating data dashboards. Harry is passionate about leveraging technology to solve complex problems!\n\nWhat specific aspect would you like to know more about?";
    }
    
    // Default response
    return "I can help you learn about Harry's:\n• 💼 Work Experience\n• 🛠️ Skills & Technologies\n• 🎓 Education\n• 🚀 Projects\n• 📧 Contact Information\n\nWhat would you like to know?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const aiResponse = await getAIResponse(input);
      const botResponse = { type: 'bot', text: aiResponse };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse = { type: 'bot', text: "Sorry, I encountered an error. Please try again!" };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-slideInUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-700 dark:from-dark-accent dark:to-dark-secondary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-bold">HarryBot</h3>
                <p className="text-white/70 text-xs">AI Assistant • Always Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-navy-900 dark:bg-dark-accent text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Harry..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-dark-accent"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="px-4 py-2 bg-navy-900 dark:bg-dark-accent text-white rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-navy-900 to-navy-700 dark:from-dark-accent dark:to-dark-secondary text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-slow"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-3xl">💬</span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
