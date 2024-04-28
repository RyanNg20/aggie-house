'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withAuthInfo } from '@propelauth/react';
import moment from 'moment';

const ShiftsComponent = withAuthInfo((props) => {
  const [upcomingShifts, setUpcomingShifts] = useState([]);
  const [availableShifts, setAvailableShifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.user && props.user.email) {
      const userEmail = props.user.email;

      const fetchShifts = async () => {
        try {
          const response = await axios.get(`https://aggie-house-backend.onrender.com/timeSlots/upcoming/${userEmail}`);
          const { userShifts, availableShifts } = response.data;
          setUpcomingShifts(userShifts);
          setAvailableShifts(availableShifts);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching shifts:', error);
          setLoading(false);
        }
      };

      fetchShifts();
    } else {
      setLoading(false);
    }
  }, [props]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="w-full bg-grey flex flex-col gap-4 px-4 py-4 rounded-2xl drop-shadow-lg">
        <h1 className="font-josefin_sans text-xl text-white">Upcoming Shifts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='flex flex-col gap-4'>
            {upcomingShifts.length > 0 ? (
              upcomingShifts.map((shift, index) => {
                // console.log(shift.date, typeof(shift.date.toString()))
                return (
                  <div key={index} className="w-full py-3 px-8 flex flex-col justify-between bg-white rounded-2xl md:flex-row">
                    <div className="flex flex-col">
                      <p className="font-montserrat text-lg font-bold">{moment(shift.date).format("MMM DD, YYYY HH:MM")}</p>
                      <p className="font-montserrat text-lg font-medium">{moment(shift.startTime).format("MMM DD, YYYY HH:MM")} - {moment(shift.endTime).format("MMM DD, YYYY HH:MM")}</p>
                    </div>
                    <div className="font-montserrat bg-grey text-white rounded-md transition duration-500 hover:bg-beige px-8 py-2 hover:text-grey flex items-center cursor-pointer justify-center">Remove</div>
                  </div>
                )
            })
            ) : (
              <p className='text-white font-josefin_sans'>No upcoming shifts</p>
            )}
          </div>
        )}
      </div>

      <div className="w-full bg-beige flex flex-col gap-4 px-4 py-4 rounded-2xl drop-shadow-lg">
        <h1 className="font-josefin_sans text-xl text-grey">Available Shifts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='flex flex-col gap-4'>
            {availableShifts.length > 0 ? (
              availableShifts.map((shift, index) => (
                <div key={index} className="w-full py-3 px-8 flex flex-col justify-between bg-white rounded-2xl md:flex-row">
                  <div className="flex flex-col">
                    <p className="font-montserrat text-lg font-bold">{moment(shift.date).format("MMM DD, YYYY HH:MM")}</p>
                    <p className="font-montserrat text-lg font-medium">{moment(shift.startTime).format("MMM DD, YYYY HH:MM")} - {moment(shift.endTime).format("MMM DD, YYYY HH:MM")}</p>
                  </div>
                  <div className="font-montserrat bg-grey text-white rounded-md transition duration-500 hover:bg-beige px-8 py-2 hover:text-grey flex items-center cursor-pointer justify-center">Remove</div>
                </div>
              ))
            ) : (
              <p className='font-josefin_sans'>No available shifts</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export default ShiftsComponent;
