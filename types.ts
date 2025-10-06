// Fix: Import React to use its types.
import type React from 'react';

export enum TransactionType {
  DEPOSIT = 'Deposit',
  WITHDRAWAL = 'Withdrawal',
  BUY = 'Buy',
  SELL = 'Sell',
  TRANSFER = 'Transfer'
}

export enum TransactionStatus {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
  FAILED = 'Failed'
}

export interface Transaction {
  id: string;
  date: string;
  type: TransactionType;
  asset: string;
  amount: number;
  value: number;
  status: TransactionStatus;
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  // Fix: Changed from JSX.Element to React.ReactElement to resolve namespace issue and correctly type React elements.
  icon: React.ReactElement;
  balance: number;
  value: number;
  price: number;
  change24h: number;
}

export interface Country {
  name: string;
  dial_code: string;
  code: string;
}

export type Page = 'dashboard' | 'wallet' | 'transactions' | 'trade' | 'settings' | 'feedback';