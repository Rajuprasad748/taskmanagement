import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState('');
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  useEffect(() => {
    // Simulated user session check
    const storedRole = localStorage.getItem('role'); // 'admin' or 'user'
    const storedName = localStorage.getItem('name'); // name of user/admin

    if (!storedRole) {
      window.location.href = '/login'; // Redirect to login if no role is found
    } else {
      setRole(storedRole);
      setUsername(storedName);
    }
  }, []);

  const adminTabs = [
    { title: 'Manage Users', content: 'Here you can manage users.' },
    { title: 'Assign Tasks', content: 'Here you can assign tasks to users.' },
    { title: 'View All Tasks', content: 'Here you can view all tasks.' },
    { title: 'Promote or Remove Users', content: 'Here you can promote or remove users.' },
  ];

  const userTabs = [
    { title: 'View Assigned Tasks', content: 'Here you can view your assigned tasks.' },
    { title: 'Update Task Status', content: 'Here you can update the status of your tasks.' },
    { title: 'Check Deadlines', content: 'Here you can check task deadlines.' },
    { title: 'Mark Tasks as Completed', content: 'Here you can mark tasks as completed.' },
  ];

  const tabs = role === 'admin' ? adminTabs : userTabs;

  const handleTabClick = (index) => {
    setActiveTab(index); // Update the active tab index
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-black mb-6">Welcome, {username}</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg h-[60vh] w-full">
        <div className="flex space-x-4 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)} // Handle tab click
              className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-700">{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;