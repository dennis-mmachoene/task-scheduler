const db = require('../models');

exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date, reminder_time } = req.body;
    const newTask = await db.tasks.create({
      title,
      description,
      userId: req.user.id,
      due_date,
      reminder_time
    });

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await db.tasks.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
