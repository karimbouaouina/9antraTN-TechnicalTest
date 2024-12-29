import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorMessages, setErrorMessages] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrorMessages(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!form.email) {
      setErrorMessages(prev => ({ ...prev, email: 'Email is required' }));
      setIsSubmitting(false);
      return;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErrorMessages(prev => ({ ...prev, email: 'Email is invalid' }));
      setIsSubmitting(false);
      return;
    }

    if (!form.password) {
      setErrorMessages(prev => ({ ...prev, password: 'Password is required' }));
      setIsSubmitting(false);
      return;
    }

    axios.post('/api/auth/login', form)
      .then(res => {
        const { token, isAdmin } = res.data;
        localStorage.setItem('token', token);
        navigate(isAdmin ? '/admin-dashboard' : '/browse');
      })
      .catch(err => {
        setErrorMessages({ email: 'Invalid email or password', password: 'Invalid email or password' });
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          or <a href="/register" className="font-medium text-pink-700 hover:opacity-75">Create an account</a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none bg-gray-100 text-black block w-full px-3 py-2 border ${errorMessages.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="you@example.com"
                  onChange={handleChange}
                />
                {errorMessages.email && <p className="mt-2 text-sm text-red-600">{errorMessages.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`appearance-none text-black bg-gray-100 block w-full px-3 py-2 border ${errorMessages.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Your password"
                  onChange={handleChange}
                />
                {errorMessages.password && <p className="mt-2 text-sm text-red-600">{errorMessages.password}</p>}
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-700 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
