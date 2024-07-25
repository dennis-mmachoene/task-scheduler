const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user')(sequelize, Sequelize);
db.tasks = require('./task')(sequelize, Sequelize);

db.users.hasMany(db.tasks, { as: 'tasks' });
db.tasks.belongsTo(db.users, { foreignKey: 'userId', as: 'user' });

module.exports = db;
