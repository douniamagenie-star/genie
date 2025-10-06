
import React, { useState } from 'react';
import type { Page } from './types';
import AuthPage from './components/AuthPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Wallet from './components/Wallet';
import Transactions from './components/Transactions';
import Settings from './components/Settings';
import Trade from './components/Trade';
import Feedback from './components/Feedback';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [initialWalletAction, setInitialWalletAction] = useState<'deposit' | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setActivePage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard setActivePage={setActivePage} setInitialWalletAction={setInitialWalletAction} />;
      case 'wallet':
        return <Wallet 
                initialAction={initialWalletAction} 
                onActionConsumed={() => setInitialWalletAction(null)}
                setActivePage={setActivePage} 
              />;
      case 'transactions':
        return <Transactions />;
      case 'trade':
        return <Trade />;
      case 'settings':
        return <Settings />;
      case 'feedback':
        return <Feedback />;
      default:
        return <Dashboard setActivePage={setActivePage} setInitialWalletAction={setInitialWalletAction} />;
    }
  };

  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 text-gray-800">
      <Sidebar activePage={activePage} setActivePage={setActivePage} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header pageTitle={activePage.charAt(0).toUpperCase() + activePage.slice(1)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6 md:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;