const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');

// Get all incidents
router.get('/', incidentController.getAllIncidents);

// Get one incident by ID
router.get('/:id', incidentController.getIncidentById);

// Create a new incident
router.post('/', incidentController.createIncident);

// Delete an incident
router.delete('/:id', incidentController.deleteIncident);

module.exports = router;
