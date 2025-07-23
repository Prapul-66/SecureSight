const Incident = require('./models/Incident');

const seedIncidents = async () => {
  try {
    await Incident.sync({ force: true }); // Recreate table

    await Incident.bulkCreate([
      {
        title: 'Suspicious Activity',
        cameraName: 'CAM-001',
        videoUrl: 'http://localhost:5000/videos/cctv1.mp4',
        timestamp: new Date('2025-07-20T10:00:00'),
        description: 'Suspicious movement near restricted area.',
      },
      {
        title: 'Smoke Detected',
        cameraName: 'CAM-002',
        videoUrl: 'http://localhost:5000/videos/cctv2.mp4',
        timestamp: new Date('2025-07-20T12:30:00'),
        description: 'Smoke detected in hallway.',
      },
      {
        title: 'Unauthorized Entry',
        cameraName: 'CAM-003',
        videoUrl: 'http://localhost:5000/videos/cctv3.mp4',
        timestamp: new Date('2025-07-21T03:45:00'),
        description: 'Unknown person entered through back door.',
      },
    ]);

    console.log('Seeding successful ✅');
  } catch (error) {
    console.error('Seeding failed ❌:', error);
  }
};

seedIncidents();
