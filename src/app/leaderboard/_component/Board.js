'use client';
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Board = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchLeaderboard(currentPage);
  }, [currentPage]);

  const fetchLeaderboard = async (page) => {
    try {
      const response = await fetch(`https://aggie-house-backend.onrender.com/users/leaderboard?page=${page}`);
      const data = await response.json();
      setUsers(data.users);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <div className="w-full bg-beige flex flex-col gap-4 px-4 pt-4 rounded-2xl drop-shadow-lg">
            <h1>Leaderboard</h1>
            <ul>
                {users.map((user) => (
                <li key={user._id}>
                    <p>{user.name}</p>
                    {/* Add other user details here */}
                </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </div>
        </>
      )}
    </div>
  );
};

export default Board;
