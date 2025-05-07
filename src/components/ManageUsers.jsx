import React from 'react';

const users = [
  {
    id: 'u001',
    username: 'john_doe',
    role: 'user',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'u002',
    username: 'admin_01',
    role: 'admin',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'u003',
    username: 'jane_smith',
    role: 'user',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'u004',
    username: 'manager_mike',
    role: 'admin',
    image: 'https://i.pravatar.cc/150?img=4',
  },
];

const ManageUsers = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Users</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-4 bg-white shadow rounded hover:shadow-md transition"
          >
            <img
              src={user.image}
              alt={user.username}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-semibold text-lg">{user.username}</p>
              <p className="text-sm text-gray-500">ID: {user.id}</p>
              <p className={`text-sm ${user.role === 'admin' ? 'text-red-500' : 'text-blue-500'}`}>
                Role: {user.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
