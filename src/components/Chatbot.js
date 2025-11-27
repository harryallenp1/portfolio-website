import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Harry's AI assistant. Ask me about his experience, skills, or education!" }
  ]);
  const [input, setInput] = useState('');

  const knowledgeBase = {
    experience: {
      keywords: ['experience', 'work', 'job', 'career', 'worked', 'position', 'role'],
      response: "Harry has worked as a QA Analyst at the Government of Ontario and as a Product Analyst Intern at Career Education Council. He has experience in AI chatbot improvement, data analysis, test automation, and product management."
    },
    skills: {
      keywords: ['skills', 'technology', 'programming', 'languages', 'tools', 'tech stack'],
      response: "Harry's skills include Python, JavaScript, Java, C#, SQL, Excel, Power BI, AI Chatbot Development, Azure AI Studio, Agile/Scrum, JIRA, and more. He's proficient in data analysis, automation, and quality assurance."
    },
    education: {
      keywords: ['education', 'school', 'university', 'degree', 'study', 'college', 'waterloo', 'sheridan'],
      response: "Harry completed an AI & Applied Machine Learning certification at University of Waterloo (Nov 2025 - Feb 2026) and is pursuing a Bachelor of Computer Science at Sheridan College (Expected 2027)."
    },
    projects: {
      keywords: ['projects', 'built', 'created', 'developed', 'portfolio'],
      response: "Harry has worked on various projects including AI chatbot improvements, data analysis dashboards, test automation frameworks, and this portfolio website built with React and TailwindCSS!"
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'phone', 'linkedin', 'github', 'devpost', 'location', 'where'],
      response: "You can reach Harry at:\n📧 Email: harryallen.net@gmail.com\n📱 Phone: +1 (905) 782-6838\n📍 Location: Oakville, ON\n💼 LinkedIn: linkedin.com/in/harryallenp\n💻 GitHub: github.com/harryallenp1\n🚀 Devpost: devpost.com/harryallenp1"
    },
    ai: {
      keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'chatbot'],
      response: "Harry has expertise in AI and machine learning, including chatbot development, Azure AI Studio, and completed a certification in AI & Applied Machine Learning from University of Waterloo covering neural networks, NLP, computer vision, and more."
    }
  };

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (/^(hi|hello|hey|greetings)/.test(input)) {
      return "Hello! How can I help you learn more about Harry?";
    }
    
    // Check knowledge base
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        return data.response;
      }
    }
    
    // Default response
    return "I can help you with questions about Harry's experience, skills, education, projects, or contact information. What would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse = { type: 'bot', text: getResponse(input) };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
    
    setInput('');
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
                <h3 className="text-white font-bold">Harry's AI Assistant</h3>
                <p className="text-white/70 text-xs">Ask me anything!</p>
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
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
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
                className="px-4 py-2 bg-navy-900 dark:bg-dark-accent text-white rounded-full hover:scale-105 transition-transform"
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
