const Sequelize = require('sequelize');
const sequelize = new Sequelize('gradovi', 'User', '', {host: '172.0.0.1', dialect: 'mysql', logging: false});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;


db.gradovi = sequelize.import(__dirname + '/gradovi.js');

module.exports = db;