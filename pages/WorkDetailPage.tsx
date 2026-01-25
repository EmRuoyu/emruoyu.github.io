import React from 'react';

interface WorkDetailPageProps {
  title: string;
  subtitle: string;
  date: string;
  onBack: () => void;
  children?: React.ReactNode;
}

const WorkDetailPage: React.FC<WorkDetailPageProps> = ({ 
  title, 
  subtitle, 
  date, 
  onBack,
  children 
}) => {
  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-gray-600 hover:text-black transition-colors duration-200 group"
        aria-label="Go back to homepage"
      >
        <svg 
          className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-lg">Back</span>
      </button>
      
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4">{subtitle}</p>
        <p className="text-lg text-gray-500">{date}</p>
      </div>
      
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
};

export default WorkDetailPage;
