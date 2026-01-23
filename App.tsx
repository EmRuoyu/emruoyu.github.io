import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import WorksPage from './pages/WorksPage';
import DesignPage from './pages/DesignPage';
import AboutPage from './pages/AboutPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Works);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Works:
        return <WorksPage />;
      case Page.Design:
        return <DesignPage />;
      case Page.About:
        return <AboutPage />;
      default:
        return <WorksPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-8 lg:px-8">
        <Header />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="mt-16">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
