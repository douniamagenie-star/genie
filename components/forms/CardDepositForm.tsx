import React from 'react';

interface CardDepositFormProps {
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CardDepositForm: React.FC<CardDepositFormProps> = ({ onBack, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 animate-fade-in">
      <div>
        <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          required
          placeholder="JOHN DOE"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400"
        />
      </div>
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          required
          placeholder="0000 0000 0000 0000"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            required
            placeholder="MM/YY"
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            required
            placeholder="123"
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400"
          />
        </div>
      </div>
       <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (USD)</label>
        <div className="mt-1 relative rounded-md shadow-sm">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
                type="number"
                name="amount"
                id="amount"
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-genie-gold-500 focus:ring-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400 py-3"
                placeholder="0.00"
                required
            />
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm" id="price-currency">USD</span>
            </div>
        </div>
      </div>
      <div className="pt-2">
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-genie-gold-600 hover:bg-genie-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-genie-gold-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
          Deposit Securely
        </button>
      </div>
    </form>
  );
};

export default CardDepositForm;