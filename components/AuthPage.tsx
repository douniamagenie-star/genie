
import React, { useState } from 'react';
import { COUNTRIES } from '../constants';

interface AuthPageProps {
  onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
            <div className="flex justify-center items-center mb-4">
                <svg className="w-12 h-12 text-genie-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
          <h1 className="text-3xl font-bold text-gray-900">Genie Pay</h1>
          <p className="mt-2 text-sm text-gray-600">
            {isLoginView ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        {isLoginView ? <LoginForm onLogin={onLogin} /> : <SignUpForm onLogin={onLogin} />}

        <div className="text-center">
          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="text-sm font-medium text-genie-gold-600 hover:text-genie-gold-500 transition-colors duration-200 ease-in-out"
          >
            {isLoginView ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
    <div className="rounded-md shadow-sm -space-y-px">
      <div>
        <input id="email-address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 focus:z-10 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400" placeholder="Email address" />
      </div>
      <div>
        <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 focus:z-10 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400" placeholder="Password" />
      </div>
    </div>
    <div className="flex items-center justify-between">
        <div className="text-sm">
            <a href="#" className="font-medium text-genie-gold-600 hover:text-genie-gold-500 transition-colors duration-200 ease-in-out">Forgot your password?</a>
        </div>
    </div>
    <AuthButtons onLogin={onLogin} />
  </form>
);

const SignUpForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
    <div className="rounded-md shadow-sm space-y-4">
      <input name="fullName" type="text" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400" placeholder="Full Name" />
      <input name="email" type="email" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400" placeholder="Email address" />
      <input name="password" type="password" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400" placeholder="Password" />
      <div className="flex space-x-2">
        <select name="countryCode" className="w-1/3 appearance-none block px-3 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400">
          {COUNTRIES.map(country => (
            <option key={country.code} value={country.dial_code}>{country.code} ({country.dial_code})</option>
          ))}
        </select>
        <input name="phone" type="tel" required className="appearance-none relative block w-2/3 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400" placeholder="Phone Number" />
      </div>
    </div>
    <AuthButtons onLogin={onLogin} isLoginView={false}/>
  </form>
);

const AuthButtons: React.FC<{ onLogin: () => void; isLoginView?: boolean }> = ({ onLogin, isLoginView = true }) => (
  <div>
    <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-genie-gold-600 hover:bg-genie-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-genie-gold-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
      {isLoginView ? 'Log In' : 'Sign Up'}
    </button>
    <div className="my-4 flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0 text-gray-500">OR</p>
    </div>
    <button type="button" onClick={onLogin} className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-genie-gold-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
        <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.426 44 30.638 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
        Sign in with Google
    </button>
  </div>
);

export default AuthPage;
