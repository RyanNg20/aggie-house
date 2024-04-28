'use client'
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import TextField from '@mui/material/TextField';

const AvailableTimeSlots = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    fetchTimeSlots(newDate);
  };

  const handleReserve = () => {
    // fetch(`https://aggie-house-backend.onrender.com/timeSlots/add`, {
    //   method: "POST"
    // })
  }

  const fetchTimeSlots = (date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    fetch(`https://aggie-house-backend.onrender.com/timeSlots/available`)
      .then(response => response.json())
      .then(data => {
        const filteredSlots = data.filter(slot => dayjs(slot.date).format('YYYY-MM-DD') === formattedDate);
        setAvailableSlots(filteredSlots);
      })
      .catch(error => console.error('Error fetching available time slots:', error));
  };
  console.log(availableSlots)
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className='bg-grey rounded-2xl p-4 md:w-calc(1/2 - 20px) w-full flex flex-col gap-4 drop-shadow-lg'>
        <h1 className='text-white font-josefin_sans text-xl'> Calendar </h1>
        <DateCalendar className='bg-white rounded'
          date={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
          views={['year', 'month', 'day']}
        />
        {availableSlots.length > 0 ? (
          <ul>
            {availableSlots.map(slot => (
              <li key={slot._id} className='bg-beige rounded p-4 flex flex-col gap-2'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {dayjs(slot.startTime).format('HH:mm')} - {dayjs(slot.endTime).format('HH:mm')}
                    <button onClick={handleReserve} className='font-montserrat bg-grey text-white rounded-md transition 
                    duration-500 hover:bg-white px-8 py-2 hover:text-grey flex items-center cursor-pointer justify-center'>Sign Up</button> 
                </div>
                <p className='font-montserrat font-medium'> Kelly Phan is working this shift too.</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className='bg-beige rounded p-4 flex flex-col gap-2'>
            <p className='font-montserrat'>No available time slots for selected date</p>
          </div>        
        )}
      </div>
    </LocalizationProvider>
  );
};

export default AvailableTimeSlots;