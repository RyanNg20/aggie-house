'use client';
import React, { useState, useEffect } from 'react';
import Scheduler from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.light.css';
import { withAuthInfo } from '@propelauth/react';

const UserCalendar = withAuthInfo((props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://aggie-house-backend.onrender.com/availableTimeSlots/all')
        .then(response => response.json())
        .then(data => {
            const transformedData = data.map(item => ({
                id: item._id,
                text: 'Event',
                startDate: new Date(item.startTime),
                endDate: new Date(item.endTime)
            }));
            setEvents(transformedData);
        })
        .catch(error => console.error('Error fetching events:', error));
}, []);

  const handleAppointmentAdded = (e) => {
    const { startDate, endDate } = e.appointmentData;
    const text = e.appointmentData.text || 'Event';
    const description = e.appointmentData.description || '';

    const newSlot = {
      date: startDate.toISOString(),
      startTime: startDate.toISOString(),
      endTime: endDate.toISOString(),
      text,
      description
    };

    fetch('https://aggie-house-backend.onrender.com/availableTimeSlots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSlot)
    })
    .then(response => response.json())
    .then(data => {
      console.log('New time slot created:', data);
      setEvents(prevEvents => [...prevEvents, {
        id: data._id,
        text: 'Event',
        startDate: new Date(data.startTime),
        endDate: new Date(data.endTime)
      }]);
      window.location.reload();
    })
    .catch(error => console.error('Error creating time slot:', error));
};

  const handleAppointmentDeleted = (e) => {
    const { appointmentData } = e;
    const { id } = appointmentData;
    console.log(id);
    fetch(`https://aggie-house-backend.onrender.com/availableTimeSlots/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        console.log('Time slot deleted successfully');
        setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
      } else {
        throw new Error('Failed to delete time slot');
      }
    })
    .catch(error => console.error('Error deleting time slot:', error));
  };

  return (
    <div className='bg-grey rounded-2xl p-4 drop-shadow-lg gap-4 flex flex-col'>
      <h2 className="text-xl font-josefin_sans text-white">Calendar</h2>
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
        onAppointmentAdded={handleAppointmentAdded}
        onAppointmentDeleted={handleAppointmentDeleted}
      />
    </div>
  );
});

export default UserCalendar;