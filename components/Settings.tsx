
import React from 'react';
import Card from './common/Card';

const Settings: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card title="Profile Information">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" defaultValue="John Doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 transition-colors duration-200 ease-in-out hover:border-genie-gold-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" defaultValue="john.doe@email.com" readOnly className="mt-1 block w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="px-6 py-2 bg-genie-gold-500 text-white rounded-lg font-semibold hover:bg-genie-gold-600 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Save Changes</button>
          </div>
        </form>
      </Card>

      <Card title="Security">
        <div className="space-y-6">
            {/* Change Password */}
            <div>
                <h4 className="font-semibold text-gray-800">Change Password</h4>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="password" placeholder="Current Password" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 transition-colors duration-200 ease-in-out hover:border-genie-gold-400" />
                    <input type="password" placeholder="New Password" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 transition-colors duration-200 ease-in-out hover:border-genie-gold-400" />
                </div>
                <button className="mt-2 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Update Password</button>
            </div>
            <hr/>
            {/* Two-Factor Authentication */}
            <div>
                <h4 className="font-semibold text-gray-800">Two-Factor Authentication (2FA)</h4>
                <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account.</p>
                <div className="mt-4 flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                        <p className="font-medium text-green-800">Authenticator App is Enabled</p>
                        <p className="text-sm text-green-700">Your account is protected with 2FA.</p>
                    </div>
                    <button className="px-4 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-semibold hover:bg-red-200 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">Disable</button>
                </div>
            </div>
        </div>
      </Card>

      <Card title="Account Verification (KYC)">
        <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div>
                <p className="font-medium text-blue-800">Level 2 Verified</p>
                <p className="text-sm text-blue-700">Your identity and address have been verified. You have full access to all features.</p>
            </div>
            <button className="font-medium text-genie-gold-600 hover:underline transition-colors duration-200 ease-in-out">View Limits</button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
