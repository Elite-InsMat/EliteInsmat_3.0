import React from 'react';

import Calendar from '@ericz1803/react-google-calendar';

import './CalendarC.css';

const API_KEY = 'AIzaSyDNijd3taUL19DeJui8Gg6zp2yDYkl3Q7M';

const calendars = [{ calendarId: 's19gucl4e6t66nai3g3472gr8s@group.calendar.google.com', color: '#d64400' }];

const styles = {
  today: {
    backgroundColor: '#ff6347',
    color: '#3d3b3b',
  },

  tooltip: {
    backgroundColor: '#ff6347',
    color: '#3d3b3b',
    border: '5px dotted #3d3b3b',
  },
};

const CalendarC = (): JSX.Element => {
  return (
    <div>
      <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
    </div>
  );
};

export default CalendarC;
