'use client';
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Image from 'next/image';

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

      // Rank users based on volunteer hours
      const rankedUsers = data.users.sort((a, b) => b.volunteerHours - a.volunteerHours);
      console.log(rankedUsers);
      setUsers(rankedUsers);
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

  const renderLevelImage = (level) => {
    switch (level) {
      case 'bronze':
        return <Image src={require("../../../assets/bronze.png")} width={50} />;
      case 'silver':
        return <Image src={require("../../../assets/silver.png")} width={50} />;
      case 'gold':
        return <Image src={require("../../../assets/gold.png")} width={50} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="w-full bg-beige flex flex-col gap-4 px-4 pt-4 rounded-2xl drop-shadow-lg items-center">
            <ul className='w-full'>
              <li className='md:flex flex-row px-8 py-5 hidden'>
                <p className='w-1/4'> Rank </p>
                <p className='w-1/4'> Name </p>
                <p className='w-1/4'> Levels </p>
                <p className='w-1/4'> Volunteer Hours </p>
              </li>
              {users.map((user, index) => (
                <li key={user._id} className='flex flex-row bg-white px-8 py-3 rounded-2xl mb-2 items-center'>
                  <div className='flex md:flex-row flex-col w-1/2 items-center'>
                    <p className='w-1/2'>{`#${index + 1}`}</p>
                    <p className='w-1/2'>{user.name}</p>
                  </div>
                  <div className='flex md:flex-row flex-col w-1/2 items-center'>
                    <p className='w-1/2'>{renderLevelImage(user.levels)}</p>
                    <p className='w-1/2'>{user.volunteerHours} hours</p>
                  </div>
                </li>
              ))}
            </ul>
            <Pagination
              currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;