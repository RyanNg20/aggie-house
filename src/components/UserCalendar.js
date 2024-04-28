'use client';
import React, { useState, useEffect } from 'react';
import Scheduler from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.light.css';

const UserCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://aggie-house-backend.onrender.com/timeSlots/available')
      .then(response => response.json())
      .then(data => {
        const transformedData = data.map(item => ({
          id: item._id,
          text: 'Event', // You can customize the text as needed
          startDate: new Date(item.startTime),
          endDate: new Date(item.endTime)
        }));
        setEvents(transformedData);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Calendar</h2>
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={events}
        views={['week', 'month']}
        defaultCurrentView="week"
        defaultCurrentDate={new Date()}
        startDayHour={6}
        endDayHour={22}
        height={530}
        showAllDayPanel={false}
      />
    </div>
  );
};

export default UserCalendar;