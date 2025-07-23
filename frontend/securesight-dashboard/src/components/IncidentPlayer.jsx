import React from 'react';

const IncidentPlayer = ({ selectedIncident }) => {
  return (
    <div className="incident-player-section">
      <h3>{selectedIncident ? selectedIncident.timestamp : 'No Incident Selected'}</h3>
      <video src={selectedIncident?.videoUrl || ''} controls />
      <div className="camera-label">
        Camera - {selectedIncident?.camera || 'N/A'}
      </div>
    </div>
  );
};

export default IncidentPlayer;
