const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_scheduler', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
