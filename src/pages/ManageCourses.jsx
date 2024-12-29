import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    category: '',
  });

  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('/api/courses');
      setCourses(res.data);
    } catch (err) {
      toast.error('Error fetching courses');
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/categories');
      setCategories(res.data);
    } catch (err) {
      toast.error('Error fetching categories');
    }
  };

  const handleAddCourse = async () => {
    if (!newCourse.title.trim()) {
      toast.error('Course title is required');
      return;
    }
    try {
      const res = await axios.post('/api/courses', newCourse);
      setCourses([...courses, res.data]);
      setNewCourse({ title: '', description: '', price: '', duration: '', category: '' });
      toast.success('Course added successfully');
    } catch (err) {
      toast.error('Error adding course');
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`/api/courses/${id}`);
      setCourses(courses.filter((course) => course._id !== id));
      toast.success('Course deleted successfully');
    } catch (err) {
      toast.error('Error deleting course');
    }
  };

  return (
    <div className="shadow rounded-lg p-6">
      <h2 className="text-xl text-black font-bold mb-6">Manage Courses</h2>
      <div className="mb-6 grid grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          className="border rounded-lg px-4 py-2 bg-gray-300 text-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          className="border rounded-lg px-4 py-2 bg-gray-300 text-black"
        />
        <input
          type="number"
          placeholder="Price"
          value={newCourse.price}
          onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
          className="border rounded-lg px-4 py-2 bg-gray-300 text-black"
        />
        <input
          type="text"
          placeholder="Duration"
          value={newCourse.duration}
          onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
          className="border rounded-lg px-4 py-2 bg-gray-300 text-black"
        />
        <select
          value={newCourse.category}
          onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
          className="border rounded-lg px-4 py-2 bg-gray-300 text-black"
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddCourse}
          className="bg-pink-700 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
        >
          Add Course
        </button>
      </div>
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left px-4 py-2 border-r text-black">Title</th>
            <th className="text-left px-4 py-2 border-r text-black">Description</th>
            <th className="text-left px-4 py-2 border-r text-black">Price</th>
            <th className="text-left px-4 py-2 border-r text-black">Duration</th>
            <th className="text-left px-4 py-2 border-r text-black">Category</th>
            <th className="text-center px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 border-r text-black">{course.title}</td>
              <td className="px-4 py-2 border-r text-black">{course.description}</td>
              <td className="px-4 py-2 border-r text-black">{course.price}</td>
              <td className="px-4 py-2 border-r text-black">{course.duration}</td>
              <td className="px-4 py-2 border-r text-black">{course.category?.name || 'N/A'}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDeleteCourse(course._id)}
                  className="bg-pink-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCourses;
