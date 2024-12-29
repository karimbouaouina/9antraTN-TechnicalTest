import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ManageCategories from './ManageCategories';
import ManageCourses from './ManageCourses';
import { ToastContainer } from 'react-toastify';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <ToastContainer />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-8">Admin Dashboard</h1>
        <div className="space-y-4">
          <Link
            to="/categories"
            className="block bg-pink-700 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md"
          >
            Manage Categories
          </Link>
          <Link
            to="/courses"
            className="block bg-pink-700 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md"
          >
            Manage Courses
          </Link>
        </div>
      </div>

      <main className="w-full mt-12">
        <Routes>
          <Route path="/categories" element={<ManageCategories />} />
          <Route path="/courses" element={<ManageCourses />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminDashboard;
