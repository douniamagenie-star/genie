import React, { useState, useEffect } from 'react';
import { CreditCardIcon, MobileMoneyIcon, CryptoDepositIcon, CloseIcon, BackIcon } from './icons';
import CardDepositForm from './forms/CardDepositForm';

interface DepositModalProps {
  onClose: () => void;
}

type DepositView = 'options' | 'card' | 'mobile_money' | 'crypto';

const DepositModal: React.FC<DepositModalProps> = ({ onClose }) => {
  const [view, setView] = useState<DepositView>('options');

  // Effect to handle Escape key press for closing the modal or going back
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (view !== 'options') {
          setView('options');
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, view]);

  const getTitle = () => {
    switch(view) {
      case 'card':
        return 'Card Deposit';
      case 'mobile_money':
        return 'Mobile Money Deposit';
      case 'crypto':
        return 'Crypto Deposit';
      default:
        return 'Choose Deposit Method';
    }
  };

  const handleDepositSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Deposit submitted successfully! (This is a demo)');
      onClose();
  }

  const renderContent = () => {
    switch (view) {
      case 'card':
        return <CardDepositForm onBack={() => setView('options')} onSubmit={handleDepositSubmit} />;
      default:
        return (
          <div className="space-y-4 animate-fade-in">
            <DepositOption
              icon={<CreditCardIcon className="w-8 h-8 text-genie-gold-700" />}
              title="Credit / Debit Card"
              description="Use your Visa, Mastercard, and more."
              onClick={() => setView('card')}
            />
            <DepositOption
              icon={<MobileMoneyIcon className="w-8 h-8 text-genie-gold-700" />}
              title="MTN Mobile Money"
              description="For users in supported regions."
              onClick={() => alert('Mobile Money form coming soon!')}
            />
            <DepositOption
              icon={<CryptoDepositIcon className="w-8 h-8 text-genie-gold-700" />}
              title="Cryptocurrency"
              description="Transfer from another wallet."
              onClick={() => alert('Crypto deposit form coming soon!')}
            />
          </div>
        );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center font-sans backdrop-blur-sm"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 md:p-8 m-4 transform transition-all animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            {view !== 'options' && (
              <button onClick={() => setView('options')} className="text-gray-400 hover:text-gray-600 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-genie-gold-500 transition-all duration-200 ease-in-out hover:bg-slate-100 -ml-2">
                <BackIcon className="w-6 h-6" />
              </button>
            )}
            <h2 id="modal-title" className="text-xl font-bold text-gray-900">{getTitle()}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-genie-gold-500 transition-all duration-200 ease-in-out hover:bg-slate-100">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        {renderContent()}

      </div>
      <style>{`
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

interface DepositOptionProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
}

const DepositOption: React.FC<DepositOptionProps> = ({ icon, title, description, onClick }) => (
    <button onClick={onClick} className="w-full flex items-center text-left p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-genie-gold-300 focus:outline-none focus:ring-2 focus:ring-genie-gold-400 transition-all duration-200 ease-in-out transform hover:scale-[1.02]">
        <div className="flex-shrink-0 bg-genie-gold-100 p-3 rounded-full">
            {icon}
        </div>
        <div className="ml-4 flex-grow">
            <p className="font-semibold text-gray-800">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <svg className="w-5 h-5 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
    </button>
);

export default DepositModal;