const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const sequelize = require('./config/db');
const incidentRoutes = require('./routes/incidentRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 Log the absolute path of the video folder
const videoPath = path.join(__dirname, 'videos');
console.log('Serving videos from:', videoPath);

// 🔥 Serve static videos
app.use('/videos', express.static(videoPath));

// Routes
app.use('/api/incidents', incidentRoutes);

// DB Sync & Start Server
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
    app.listen(5000, () => {
      console.log('Server running at http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('Database sync error:', err);
  });
