const Incident = require('../models/Incident');

// Get all incidents
exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.findAll();
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get single incident by ID
exports.getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findByPk(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    res.json(incident);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new incident
exports.createIncident = async (req, res) => {
  const { title, cameraName, timestamp, videoUrl, description } = req.body;
  try {
    const newIncident = await Incident.create({
      title,
      cameraName,
      timestamp,
      videoUrl,
      description
    });
    res.status(201).json(newIncident);
  } catch (err) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Delete an incident
exports.deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByPk(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    await incident.destroy();
    res.json({ message: 'Incident deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
