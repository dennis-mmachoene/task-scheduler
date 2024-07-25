document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = 'login.html';
    }
  
    const logoutBtn = document.getElementById('logoutBtn');
    const addTaskForm = document.getElementById('addTaskForm');
    const tasksList = document.getElementById('tasksList');
  
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('token');
      window.location.href = 'login.html';
    });
  
    const loadTasks = async () => {
      try {
        const response = await fetch('/api/tasks', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const tasks = await response.json();
        tasksList.innerHTML = '';
        tasks.forEach(task => {
          const taskItem = document.createElement('a');
          taskItem.className = 'list-group-item list-group-item-action flex-column align-items-start';
          taskItem.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${task.title}</h5>
              <small>${new Date(task.due_date).toLocaleString()}</small>
            </div>
            <p class="mb-1">${task.description}</p>
            <small>Reminder: ${task.reminder_time ? new Date(task.reminder_time).toLocaleString() : 'No reminder set'}</small>
          `;
          tasksList.appendChild(taskItem);
        });
      } catch (err) {
        console.error(err);
      }
    };
  
    loadTasks();
  
    addTaskForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = addTaskForm.title.value;
      const description = addTaskForm.description.value;
      const due_date = addTaskForm.due_date.value;
      const reminder_time = addTaskForm.reminder_time.value;
  
      try {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ title, description, due_date, reminder_time })
        });
  
        const data = await response.json();
        if (response.ok) {
          $('#addTaskModal').modal('hide');
          loadTasks();
        } else {
          alert(`Error: ${data.error}`);
        }
      } catch (err) {
        console.error(err);
      }
    });
  });
  