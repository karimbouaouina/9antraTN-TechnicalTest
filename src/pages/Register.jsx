import React, { useState } from 'react';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    password: '',
    address: '',
    terms: false
  });
  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMessages(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.fullname.trim()) {
      errors.fullname = 'Full Name is required';
      formIsValid = false;
    }
    if (!formData.phonenumber.trim()) {
      errors.phonenumber = 'Phone Number is required';
      formIsValid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      formIsValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      formIsValid = false;
    }

    if (!formData.address.trim()) {
      errors.address = 'Address is required';
      formIsValid = false;
    }
    if (!formData.terms) {
      errors.terms = 'You must accept the Terms of Service';
      formIsValid = false;
    }

    setErrorMessages(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    axios.post('/api/auth/register', formData)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate('/user-dashboard');
      })
      .catch(err => {
        if (err.response && err.response.data) {
          setErrorMessages(prev => ({ ...prev, ...err.response.data.errors }));
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          or <Link to="/login" className="font-medium text-pink-700 hover:opacity-75">already have an account?</Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <InputField label="Full Name" name="fullname" value={formData.fullname} handleChange={handleChange} errorMessage={errorMessages.fullname} />
            <InputField label="Phone Number" name="phonenumber" value={formData.phonenumber} handleChange={handleChange} errorMessage={errorMessages.phonenumber} />
            <InputField label="Email Address" name="email" value={formData.email} handleChange={handleChange} errorMessage={errorMessages.email} />
            <InputField label="Password" name="password" type="password" value={formData.password} handleChange={handleChange} errorMessage={errorMessages.password} />
            <InputField label="Address" name="address" value={formData.address} handleChange={handleChange} errorMessage={errorMessages.address} />
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I accept the <Link to="/terms" className="text-pink-700 hover:underline">Terms of Service</Link>
              </label>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-700 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, type = 'text', placeholder, value, handleChange, errorMessage }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className={`text-black bg-gray-100 appearance-none block w-full px-3 py-2 border ${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        placeholder={placeholder || label}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default RegisterPage;
