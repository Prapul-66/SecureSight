import React from 'react';

const IncidentsSection = () => {
  return (
    <div className="section-container">
      <h2>Incident Log</h2>
      <p>Browse all incident records captured by SecureSight.</p>
      <ul className="incident-log">
        <li>[2025-07-21] Unauthorized Access - Main Gate - ❌ Unresolved</li>
        <li>[2025-07-21] Gun Threat - Parking Lot - ✅ Resolved</li>
        <li>[2025-07-20] Suspicious Movement - Backyard - ❌ Unresolved</li>
      </ul>
    </div>
  );
};

export default IncidentsSection;