// src/components/Event.jsx
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>{new Date(event.start.dateTime).toLocaleString()}</p>

      {showDetails && (
        <div className="event-details">
          <p>{event.description}</p>
          {event.htmlLink && (
            <a href={event.htmlLink} target="_blank" rel="noreferrer">View on Google Calendar</a>
          )}
        </div>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

export default Event;
