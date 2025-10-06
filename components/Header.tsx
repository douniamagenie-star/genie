
import React from 'react';
import { NotificationIcon } from './icons';

interface HeaderProps {
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header className="h-20 bg-white flex items-center justify-between px-8 border-b border-slate-200">
      <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-genie-gold-400 transition-colors duration-200 ease-in-out hover:border-genie-gold-400"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <button className="relative text-slate-500 hover:text-genie-gold-600 transition-all duration-200 transform hover:scale-110">
          <NotificationIcon className="w-7 h-7" />
          <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
