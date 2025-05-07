import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace URL with your backend API endpoint
      const token = localStorage.getItem('token'); // Assuming user is authenticated
      const response = await axios.post('http://localhost:5000/api/tasks', task, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response)

      alert('Task created successfully!');
      setTask({ title: '', description: '', dueDate: '', priority: 'Low' });
    } catch (err) {
      console.error(err);
      alert('Failed to create task');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        {/* Due Date */}
        <div>
          <label className="block font-medium">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block font-medium">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
