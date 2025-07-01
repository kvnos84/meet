import React, { useState, useEffect } from 'react';
import './App.css';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import CitySearch from './CitySearch';
import mockData from '../mock-data';
import { InfoAlert, ErrorAlert } from '../Alert'; // ✅ Adjusted import path if Alert.js is in /src

function App() {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState('all');

  // ✅ Alert text states
  const [infoAlertText, setInfoAlertText] = useState('');
  const [errorAlertText, setErrorAlertText] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      let data = mockData;
      if (currentCity !== 'all') {
        data = data.filter(event => event.location === currentCity);
      }
      setEvents(data.slice(0, numberOfEvents));
    };

    fetchEvents();
  }, [currentCity, numberOfEvents]);

  const allCities = [...new Set(mockData.map(event => event.location))];

  return (
    <div>
      {/* ✅ Alert container */}
      <div className="alerts-container">
        <InfoAlert text={infoAlertText} />
        {errorAlertText.length > 0 && <ErrorAlert text={errorAlertText} />}
      </div>

      {/* ✅ Pass alert setter to CitySearch */}
      <CitySearch
        onCitySelect={setCurrentCity}
        allCities={allCities}
        setInfoAlert={setInfoAlertText}
      />

      {/* ✅ Pass alert setter to NumberOfEvents */}
      <NumberOfEvents
        setNumberOfEvents={setNumberOfEvents}
        setErrorAlertText={setErrorAlertText}
      />

      <EventList events={events} />
    </div>
  );
}

export default App;
