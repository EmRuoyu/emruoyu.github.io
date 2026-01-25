import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import WorksPage from './pages/WorksPage';
import DesignPage from './pages/DesignPage';
import AboutPage from './pages/AboutPage';
import CarcasPage from './pages/CarcasPage';
import WeblingoPage from './pages/WeblingoPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Works);
  const [selectedWorkId, setSelectedWorkId] = useState<number | null>(null);

  const handleWorkClick = (workId: number) => {
    setSelectedWorkId(workId);
    setCurrentPage(Page.WorkDetail);
  };

  const handleBackToHome = () => {
    setCurrentPage(Page.Works);
    setSelectedWorkId(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Works:
        return <WorksPage onWorkClick={handleWorkClick} />;
      case Page.Design:
        return <DesignPage />;
      case Page.About:
        return <AboutPage />;
      case Page.WorkDetail:
        if (selectedWorkId === 1) {
          return <CarcasPage onBack={handleBackToHome} />;
        }
        if (selectedWorkId === 2) {
          return <WeblingoPage onBack={handleBackToHome} />;
        }
        return <WorksPage onWorkClick={handleWorkClick} />;
      default:
        return <WorksPage onWorkClick={handleWorkClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-8 lg:px-8">
        {currentPage !== Page.WorkDetail && (
          <>
            <Header />
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        )}
        <main className={currentPage === Page.WorkDetail ? '' : 'mt-16'}>
          <div 
            key={currentPage === Page.WorkDetail ? `work-${selectedWorkId}` : currentPage}
            className="animate-fade-in"
          >
            {renderPage()}
          </div>
        </main>
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            transform: translateY(12px);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.35s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
