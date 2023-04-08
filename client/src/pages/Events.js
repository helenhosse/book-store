import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const events = [
  { title: 'Event 1', date: '2023-04-05' },
  { title: 'Event 2', date: '2023-04-08' },
  { title: 'Event 3', date: '2023-04-10' },
];

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;
