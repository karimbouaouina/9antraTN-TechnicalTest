import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/categories');
      setCategories(res.data);
    } catch (err) {
      toast.error('Error fetching categories');
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.name.trim()) {
      toast.error('Category name is required');
      return;
    }
    try {
      const res = await axios.post('/api/categories', newCategory);
      setCategories([...categories, res.data]);
      setNewCategory({ name: '', description: '' });
      toast.success('Category added successfully');
    } catch (err) {
      toast.error('Error adding category');
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`/api/categories/${id}`);
      setCategories(categories.filter((category) => category._id !== id));
      toast.success('Category deleted successfully');
    } catch (err) {
      toast.error('Error deleting category');
    }
  };

  return (
    <div className="shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Manage Categories</h2>
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Category Name"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          className="border rounded-lg px-4 py-2 flex-1 bg-gray-300 text-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
          className="border rounded-lg px-4 py-2 flex-1 bg-gray-300 text-black"
        />
        <button
          onClick={handleAddCategory}
          className="bg-pink-700 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
        >
          Add Category
        </button>
      </div>

      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left px-4 py-2 border-r text-black">Name</th>
            <th className="text-left px-4 py-2 border-r text-black">Description</th>
            <th className="text-center px-4 py-2 text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 border-r text-black">{category.name}</td>
              <td className="px-4 py-2 border-r text-black">{category.description}</td>
              <td className="px-4 py-2 text-center ">
                <button
                  onClick={() => handleDeleteCategory(category._id)}
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

export default ManageCategories;
