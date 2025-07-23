import React from 'react';

const IncidentList = ({ incidents, selectedIncident, setSelectedIncident }) => {
  return (
    <div className="incident-list-section">
      <h3>📋 Incident List</h3>

      {incidents.map((incident) => {
        const isSelected = selectedIncident?.id === incident.id;
        const statusClass = incident.status?.toLowerCase() === 'resolved' ? 'resolved' : 'unresolved';

        return (
          <div
            key={incident.id}
            className={`incident-card ${statusClass} ${isSelected ? 'selected' : ''}`}
            onClick={() => setSelectedIncident(incident)}
          >
            <p><strong>{incident.title}</strong></p>
            <p>🕒 {new Date(incident.timestamp).toLocaleString()}</p>
            <p>📷 Camera: {incident.cameraName}</p>
            <p>
              🚩 Status: <span style={{ fontWeight: 'bold' }}>{incident.status || 'Unresolved'}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default IncidentList;
