import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [Page.Works, Page.Design, Page.About];

  return (
    <nav className="flex space-x-4">
      {navItems.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-full text-lg md:text-xl font-semibold transition-colors duration-200 focus:outline-none
            ${
              currentPage === page
                ? 'bg-gray-100 text-black'
                : 'text-gray-500 hover:bg-gray-100 hover:text-black'
            }`}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
