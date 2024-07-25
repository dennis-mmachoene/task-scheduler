# Task Scheduler

A simple task scheduling application built with Node.js, Express, Sequelize, MySQL, and Bootstrap. This application allows users to register, log in, manage tasks, and receive reminders for upcoming tasks.

## Features

- **User Authentication**: Register and log in using email and password.
- **Task Management**: Create, view, and manage tasks.
- **Reminders**: Receive reminders for tasks via scheduled checks.
- **Real-Time Updates**: Real-time communication using WebSockets.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/dennis-mmachoene/task-scheduler.git
    cd task-scheduler
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up MySQL Database**

    Create a MySQL database named `task_scheduler`.

4. **Run Migrations**

    Ensure the `config/database.js` file is properly configured with your MySQL credentials.

5. **Start the Application**

    ```bash
    npm start
    ```

6. **Access the Application**

    Open a browser and navigate to `http://localhost:3000/`.

## Usage

- **Home Page**: Provides options to register or log in.
- **Register**: Create a new account.
- **Login**: Access your dashboard after logging in.
- **Dashboard**: Manage your tasks, view reminders, and log out.

## Files

- **`app.js`**: Main application entry point.
- **`config/database.js`**: Database configuration.
- **`controllers/`**: Contains controllers for handling requests.
- **`models/`**: Sequelize models for database tables.
- **`routes/`**: Express routes for API endpoints.
- **`public/`**: Static files (HTML, CSS, JS) for the frontend.
- **`utils/`**: Utility functions (reminder scheduling and WebSocket initialization).

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the ISC License.

## Contact

For any questions or issues, please contact [dennismmachoene@gmail.com](mailto:dennismmachoene@gmail.com).
