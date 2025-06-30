import React, { useState, useEffect } from 'react';
import './App.css';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import CitySearch from './CitySearch'; // ✅ NEW
import mockData from '../mock-data'; // Replace with getEvents later if needed

function App() {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState('all'); // ✅ NEW

  useEffect(() => {
    const fetchEvents = async () => {
      let data = mockData; // Replace with real API later
      if (currentCity !== 'all') {
        data = data.filter(event => event.location === currentCity);
      }
      setEvents(data.slice(0, numberOfEvents));
    };

    fetchEvents();
  }, [currentCity, numberOfEvents]); // ✅ update for city AND count

  const allCities = [...new Set(mockData.map(event => event.location))];

  return (
    <div>
      <CitySearch onCitySelect={setCurrentCity} allCities={allCities} />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <EventList events={events} />
    </div>
  );
}

export default App;
