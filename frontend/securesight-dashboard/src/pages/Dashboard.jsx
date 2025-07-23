import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import IncidentPlayer from '../components/IncidentPlayer';
import IncidentList from '../components/IncidentList';
import IncidentDetails from '../components/IncidentDetails';
import { fetchIncidents } from '../api/api';

const Dashboard = () => {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchIncidents();
        setIncidents(res.data);
      } catch (err) {
        console.error('Failed to fetch incidents', err);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="top-section">
          <IncidentPlayer selectedIncident={selectedIncident} />
          <IncidentList
            incidents={incidents}
            selectedIncident={selectedIncident}
            setSelectedIncident={setSelectedIncident}
          />
        </div>
        <IncidentDetails selectedIncident={selectedIncident} />
      </div>
    </div>
  );
};

export default Dashboard;
