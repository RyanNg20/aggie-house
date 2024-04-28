import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withAuthInfo } from '@propelauth/react';

const HourTracker = withAuthInfo(({ props }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://aggie-house-backend.onrender.com/users/email/${props.user.email}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [props]);

  return (
    <div className='bg-beige rounded-2xl p-4 md:w-calc(1/2 - 20px) w-full flex flex-col gap-4 drop-shadow-lg'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {userData ? (
            <div>
              <h2>Level: {userData.level}</h2>
              <h2>Hours: {userData.volunteerHours}</h2>
            </div>
          ) : (
            <p>User not found</p>
          )}
        </div>
      )}
    </div>
  );
});

export default HourTracker;