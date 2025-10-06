
import React, { useState, useEffect } from 'react';
import Card from './common/Card';
import { ASSETS } from '../constants';
import DepositModal from './DepositModal';
import type { Page } from '../types';

interface WalletProps {
  initialAction: 'deposit' | null;
  onActionConsumed: () => void;
  setActivePage: (page: Page) => void;
}

const Wallet: React.FC<WalletProps> = ({ initialAction, onActionConsumed, setActivePage }) => {
  const totalBalance = ASSETS.reduce((sum, asset) => sum + asset.value, 0);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  useEffect(() => {
    if (initialAction === 'deposit') {
      setIsDepositModalOpen(true);
      onActionConsumed(); // Reset the action state in the parent
    }
  }, [initialAction, onActionConsumed]);

  return (
    <div className="space-y-8">
      <Card>
        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-gray-500 text-sm">Total Wallet Balance</p>
            <p className="text-4xl font-bold text-gray-900">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <div className="flex space-x-3">
            <button onClick={() => setIsDepositModalOpen(true)} className="px-6 py-3 bg-genie-gold-500 text-white rounded-lg font-semibold hover:bg-genie-gold-600 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Deposit</button>
            <button onClick={() => alert('Withdrawal modal coming soon!')} className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Withdraw</button>
            <button onClick={() => alert('Transfer functionality coming soon!')} className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Transfer</button>
          </div>
        </div>
      </Card>

      <Card title="Asset Balances">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3">Asset</th>
                <th scope="col" className="px-6 py-3">Balance</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Value (USD)</th>
                <th scope="col" className="px-6 py-3 text-center">24h Change</th>
                <th scope="col" className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ASSETS.map((asset) => (
                <tr key={asset.id} className="bg-white border-b hover:bg-slate-50 transition-colors duration-200 ease-in-out cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-slate-100 rounded-full">{asset.icon}</div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{asset.name}</p>
                        <p className="text-gray-500">{asset.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{asset.balance.toFixed(4)} {asset.symbol}</p>
                  </td>
                  <td className="px-6 py-4">${asset.price.toLocaleString()}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">${asset.value.toLocaleString()}</td>
                  <td className={`px-6 py-4 text-center font-medium ${asset.change24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => setActivePage('trade')} className="font-medium text-genie-gold-600 hover:underline transition-colors duration-200 ease-in-out">Buy</button>
                    <button onClick={() => setActivePage('trade')} className="font-medium text-genie-gold-600 hover:underline transition-colors duration-200 ease-in-out">Sell</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {isDepositModalOpen && <DepositModal onClose={() => setIsDepositModalOpen(false)} />}
    </div>
  );
};

export default Wallet;