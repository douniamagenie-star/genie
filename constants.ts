
// Fix: Import React to use React.createElement for creating icon elements.
import React from 'react';
import type { Country, Asset, Transaction } from './types';
import { TransactionType, TransactionStatus } from './types';
import { BtcIcon, EthIcon, UsdtIcon } from './components/icons';

export const COUNTRIES: Country[] = [
  { name: 'United States', dial_code: '+1', code: 'US' },
  { name: 'United Kingdom', dial_code: '+44', code: 'GB' },
  { name: 'France', dial_code: '+33', code: 'FR' },
  { name: 'Germany', dial_code: '+49', code: 'DE' },
  { name: 'Canada', dial_code: '+1', code: 'CA' },
  { name: 'Australia', dial_code: '+61', code: 'AU' },
  { name: 'Japan', dial_code: '+81', code: 'JP' },
];

export const ASSETS: Asset[] = [
  // Fix: Changed icon from component to React element to match type and usage.
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: React.createElement(BtcIcon), balance: 0.5234, value: 35289.45, price: 67421.58, change24h: 2.5 },
  // Fix: Changed icon from component to React element to match type and usage.
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: React.createElement(EthIcon), balance: 10.12, value: 35726.80, price: 3530.32, change24h: -1.2 },
  // Fix: Changed icon from component to React element to match type and usage.
  { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: React.createElement(UsdtIcon), balance: 15234.87, value: 15234.87, price: 1.00, change24h: 0.01 },
];

export const TRANSACTIONS: Transaction[] = [
  { id: '1', date: '2024-07-29', type: TransactionType.DEPOSIT, asset: 'USD', amount: 5000, value: 5000, status: TransactionStatus.COMPLETED },
  { id: '2', date: '2024-07-29', type: TransactionType.BUY, asset: 'BTC', amount: 0.074, value: 5000, status: TransactionStatus.COMPLETED },
  { id: '3', date: '2024-07-28', type: TransactionType.WITHDRAWAL, asset: 'ETH', amount: 2, value: 7060.64, status: TransactionStatus.COMPLETED },
  { id: '4', date: '2024-07-27', type: TransactionType.TRANSFER, asset: 'USDT', amount: 1000, value: 1000, status: TransactionStatus.COMPLETED },
  { id: '5', date: '2024-07-26', type: TransactionType.SELL, asset: 'BTC', amount: 0.01, value: 674.21, status: TransactionStatus.COMPLETED },
  { id: '6', date: '2024-07-25', type: TransactionType.DEPOSIT, asset: 'USD', amount: 10000, value: 10000, status: TransactionStatus.PENDING },
  { id: '7', date: '2024-07-24', type: TransactionType.BUY, asset: 'ETH', amount: 5, value: 17651.60, status: TransactionStatus.FAILED },
];

export const CHART_DATA = [
  { name: 'Mon', value: 66500 },
  { name: 'Tue', value: 67100 },
  { name: 'Wed', value: 67800 },
  { name: 'Thu', value: 67400 },
  { name: 'Fri', value: 68200 },
  { name: 'Sat', value: 67900 },
  { name: 'Sun', value: 67421 },
];