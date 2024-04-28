'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNonAdminUsers = async () => {
      try {
        const response = await axios.get('https://aggie-house-backend.onrender.com/users/');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching non-admin users:', error);
        setLoading(false);
      }
    };

    fetchNonAdminUsers();
  }, []);

  return (
    <div className="w-full bg-grey flex flex-col px-4 pt-4 rounded-2xl drop-shadow-lg">
      <h2 className="text-xl font-josefin_sans text-white mb-4">Manage Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user._id} className='rounded-2xl bg-white w-full flex flex-row justify-between px-8 py-3 items-center mb-4'>
            <p>{user.name}</p>
            <div className="font-montserrat bg-grey text-white rounded-md transition duration-500 hover:bg-beige px-8 py-2 hover:text-grey flex items-center cursor-pointer justify-center">Remove</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ManageUsers;