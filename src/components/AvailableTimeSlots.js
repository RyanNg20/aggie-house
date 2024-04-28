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

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div>
        <DateCalendar
          date={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
          views={['year', 'month', 'day']}
        />
        {availableSlots.length > 0 ? (
          <ul>
            {availableSlots.map(slot => (
              <li key={slot._id}>
                {dayjs(slot.startTime).format('HH:mm')} - {dayjs(slot.endTime).format('HH:mm')}
                <button>Reserve</button> 
              </li>
            ))}
          </ul>
        ) : (
          <p>No available time slots for selected date</p>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default AvailableTimeSlots;