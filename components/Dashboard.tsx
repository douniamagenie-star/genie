
import React from 'react';
import Card from './common/Card';
import PriceChart from './PriceChart';
import { TRANSACTIONS, ASSETS } from '../constants';
import { TransactionStatus, Page } from '../types';

interface DashboardProps {
  setActivePage: (page: Page) => void;
  setInitialWalletAction: (action: 'deposit' | null) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setActivePage, setInitialWalletAction }) => {
  const totalBalance = ASSETS.reduce((sum, asset) => sum + asset.value, 0);

  const handleDepositClick = () => {
    setInitialWalletAction('deposit');
    setActivePage('wallet');
  };

  const handleWithdrawClick = () => {
    setActivePage('wallet');
  };

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.COMPLETED: return 'bg-green-100 text-green-800';
      case TransactionStatus.PENDING: return 'bg-yellow-100 text-yellow-800';
      case TransactionStatus.FAILED: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-sm text-gray-500">Total Balance</p>
          <p className="text-3xl font-bold text-gray-900">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-500">24h Portfolio Change</p>
          <p className="text-3xl font-bold text-green-600">+ $1,250.78 (3.1%)</p>
        </Card>
        <Card className="flex flex-col justify-center">
            <div className="flex space-x-4">
                <button onClick={handleDepositClick} className="flex-1 py-3 bg-genie-gold-500 text-white rounded-lg font-semibold hover:bg-genie-gold-600 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Deposit</button>
                <button onClick={handleWithdrawClick} className="flex-1 py-3 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Withdraw</button>
            </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Price Chart */}
        <Card className="lg:col-span-2" title="Bitcoin (BTC) Price">
          <PriceChart />
        </Card>

        {/* My Assets */}
        <Card title="My Assets">
            <div className="space-y-4">
            {ASSETS.map(asset => (
                <div key={asset.id} className="flex items-center justify-between p-2 -m-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 ease-in-out cursor-pointer">
                    <div className="flex items-center">
                        <div className="p-2 bg-slate-100 rounded-full">{asset.icon}</div>
                        <div className="ml-3">
                            <p className="font-semibold">{asset.name}</p>
                            <p className="text-sm text-gray-500">{asset.symbol}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-right">${asset.value.toLocaleString()}</p>
                        <p className={`text-sm text-right ${asset.change24h > 0 ? 'text-green-600' : 'text-red-600'}`}>{asset.change24h > 0 ? '+' : ''}{asset.change24h}%</p>
                    </div>
                </div>
            ))}
            </div>
        </Card>
      </div>

       {/* Recent Transactions */}
      <Card title="Recent Transactions">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-slate-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Asset</th>
                        <th scope="col" className="px-6 py-3">Amount</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {TRANSACTIONS.slice(0, 5).map((tx) => (
                        <tr key={tx.id} className="bg-white border-b hover:bg-slate-50 transition-colors duration-200 ease-in-out cursor-pointer">
                            <td className="px-6 py-4 font-medium text-gray-900">{tx.type}</td>
                            <td className="px-6 py-4">{tx.asset}</td>
                            <td className="px-6 py-4">${tx.value.toLocaleString()}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}`}>
                                    {tx.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">{tx.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;