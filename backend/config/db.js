const { Sequelize } = require('sequelize');

// Corrected: Database name should be 'securesight_db'
const sequelize = new Sequelize('securesight_db', 'root', 'Prapul@66', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
