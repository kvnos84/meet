import React, { useState, useEffect } from 'react';
import './App.css';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import mockData from '../mock-data'; // or import getEvents from '../api'

function App() {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate API call: you can replace with getEvents() if using a real function
    const fetchEvents = async () => {
      const data = mockData; // or: const data = await getEvents();
      setEvents(data.slice(0, numberOfEvents));
    };

    fetchEvents();
  }, [numberOfEvents]);

  return (
    <div>
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <EventList events={events} />
    </div>
  );
}

export default App;
