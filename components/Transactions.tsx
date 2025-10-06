
import React from 'react';
import Card from './common/Card';
import { TRANSACTIONS } from '../constants';
import { TransactionStatus } from '../types';

const Transactions: React.FC = () => {
  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.COMPLETED: return 'bg-green-100 text-green-800';
      case TransactionStatus.PENDING: return 'bg-yellow-100 text-yellow-800';
      case TransactionStatus.FAILED: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card title="Transaction History">
       <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          placeholder="Search transactions..." 
          className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-genie-gold-400 transition-colors duration-200 ease-in-out hover:border-genie-gold-400"
        />
        <button className="px-4 py-2 bg-genie-gold-500 text-white rounded-lg font-semibold hover:bg-genie-gold-600 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
          Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3">Transaction ID</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3">Asset</th>
              <th scope="col" className="px-6 py-3">Amount</th>
              <th scope="col" className="px-6 py-3">Value (USD)</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((tx) => (
              <tr key={tx.id} className="bg-white border-b hover:bg-slate-50 transition-colors duration-200 ease-in-out cursor-pointer">
                <td className="px-6 py-4 font-mono text-xs text-gray-500">{tx.id}</td>
                <td className="px-6 py-4">{tx.date}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{tx.type}</td>
                <td className="px-6 py-4">{tx.asset}</td>
                <td className="px-6 py-4">{tx.amount.toFixed(4)}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">${tx.value.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Transactions;
