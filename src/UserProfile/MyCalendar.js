import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import './MyCalendar.css';
import FooterPlain from '../Elements/Footerplain';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Event 1',
    start: new Date(2023, 9, 10),
    end: new Date(2023, 9, 11),
  },
  {
    title: 'Event 2',
    start: new Date(2023, 9, 15),
    end: new Date(2023, 9, 16),
  },
];

const CustomCalendar = () => {
  return (
    <>
    <div className="flex flex-col h-screen justify-between">
    <br></br>
    <div className="bg-domino-gray p-4 rounded-3xl h-full shadow-2xl">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
        components={{
          event: Event,
        }}
      />
    </div>
    <footer>
      <FooterPlain/>
    </footer>
    </div>
    </>
  );
};

const Event = ({ event }) => {
  return (
    <div className=" p-2 rounded-lg">
      {event.title}
    </div>
  );
};

export default CustomCalendar;
