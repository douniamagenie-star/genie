
import React from 'react';
import type { Page } from '../types';
import { DashboardIcon, WalletIcon, TransactionsIcon, TradeIcon, SettingsIcon, LogoutIcon, FeedbackIcon } from './icons';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, onLogout }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'wallet', label: 'Wallet', icon: WalletIcon },
    { id: 'transactions', label: 'Transactions', icon: TransactionsIcon },
    { id: 'trade', label: 'Trade', icon: TradeIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
    { id: 'feedback', label: 'Feedback', icon: FeedbackIcon },
  ];

  return (
    <div className="w-64 bg-white text-gray-800 flex flex-col shadow-lg border-r border-slate-200">
      <div className="h-20 flex items-center justify-center border-b border-slate-200 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <svg className="w-10 h-10 text-genie-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
        <h1 className="text-2xl font-bold ml-2">Genie Pay</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.id as Page);
                }}
                className={`flex items-center px-4 py-3 my-1 rounded-lg transition-all duration-200 ease-in-out transform hover:translate-x-1 ${
                  activePage === item.id
                    ? 'bg-genie-gold-100 text-genie-gold-800 font-semibold'
                    : 'text-gray-600 hover:bg-slate-100'
                }`}
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-4 py-6 border-t border-slate-200">
        <div className="flex items-center mb-4 p-2 -m-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 ease-in-out cursor-pointer">
            <img src="https://picsum.photos/40/40" alt="User" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
                <p className="font-semibold text-sm">John Doe</p>
                <p className="text-xs text-gray-500">john.doe@email.com</p>
            </div>
        </div>
        <button
          onClick={onLogout}
          className="flex w-full items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-slate-100 transition-all duration-200 ease-in-out transform hover:translate-x-1"
        >
          <LogoutIcon className="w-6 h-6 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;