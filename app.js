const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const reminder = require('./utils/reminder');
const initWebSocket = require('./utils/websocket');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Sync database and start server
db.sequelize.sync().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // Initialize WebSocket
  const io = initWebSocket(server);

  // Run reminders
  reminder();
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
