// AddSesion.js
import React, { useState } from 'react';
import './AddSesion.css';

const AddSesion = () => {
  const [sessions, setSessions] = useState([{ id: 1, date: new Date().toISOString().slice(0, 10) }]);

  const handleAddSession = () => {
    const newSession = {
      id: sessions.length + 1,
      date: new Date().toISOString().slice(0, 10),
    };
    setSessions([...sessions, newSession]);
  };

  const handleRemoveSession = () => {
    if (sessions.length > 1) {
      setSessions(sessions.slice(0, -1));
    }
  };

  const handleDateChange = (id, newDate) => {
    setSessions(
      sessions.map((session) => (session.id === id ? { ...session, date: newDate } : session))
    );
  };

  return (
    <>
        <section className="attendance-controls">
          <div className="session-controls">
            <div className="session-header">
              <span className="session-label">Nro. Asist.</span>
              <div className="session-dates-container">
                <div className="session-dates">
                  {sessions.map((session) => (
                    <div key={session.id} className="session-date-group">
                      <button className="date">{session.id}</button>
                      <input
                        type="date"
                        className="date-input"
                        value={session.date}
                        onChange={(e) => handleDateChange(session.id, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="controls">
        <button onClick={handleAddSession} className="add-session">
          +
        </button>
        <button onClick={handleRemoveSession} className="remove-session">
          -
        </button>
        </div>
            </div>
          </div>
          
        </section>
        
        </>
  );
};

export default AddSesion;
