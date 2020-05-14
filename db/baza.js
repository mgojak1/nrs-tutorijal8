const Sequelize = require('sequelize');
const sequelize = new Sequelize('gradovi', 'User', 'Pass', {host: '127.0.0.1', dialect: 'mysql', logging: false});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

// Import modela
db.gradovi = sequelize.import(__dirname + '/gradovi.js');

module.exports = db;