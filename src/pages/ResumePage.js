import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResumePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 font-medium backdrop-blur-sm"
                aria-label="Go back to portfolio"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Portfolio
              </button>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Harry's Resume
              </h1>
            </div>
            <a
              href="/Harry_ResumeA.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-white text-navy-900 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
      
      {/* PDF Viewer - Full Screen */}
      <div className="flex-1 w-full">
        <iframe
          src="/Harry_ResumeA.pdf#zoom=88&toolbar=1&navpanes=0"
          className="w-full h-full border-0"
          title="Resume"
          style={{ minHeight: 'calc(100vh - 80px)' }}
        />
      </div>
    </div>
  );
};

export default ResumePage;
