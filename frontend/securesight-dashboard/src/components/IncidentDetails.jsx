import React from 'react';

const IncidentDetails = ({ selectedIncident }) => {
  return (
    <div className="incident-details-card">
      {!selectedIncident ? (
        <p className="placeholder">🔍 Select an incident to view details</p>
      ) : (
        <>
          <h3>📌 Incident Details</h3>
          <p><strong>📖 Title:</strong> {selectedIncident.title}</p>
          <p><strong>🕒 Time:</strong> {new Date(selectedIncident.timestamp).toLocaleString()}</p>
          <p><strong>📷 Camera:</strong> {selectedIncident.cameraName}</p>
          <p><strong>📝 Description:</strong> {selectedIncident.description || 'No additional info'}</p>
        </>
      )}
    </div>
  );
};

export default IncidentDetails;
