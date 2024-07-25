const cron = require('node-cron');
const db = require('../models');

const sendReminder = async () => {
  const now = new Date();
  const tasks = await db.tasks.findAll({
    where: {
      reminder_time: {
        [db.Sequelize.Op.lte]: now
      }
    }
  });

  tasks.forEach(task => {
    console.log(`Reminder: ${task.title} is due soon!`);
  });
};

cron.schedule('* * * * *', sendReminder); // Run every minute

module.exports = sendReminder;
