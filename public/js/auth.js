document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
  
        try {
          const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          });
  
          const data = await response.json();
          if (response.ok) {
            localStorage.setItem('token', data.token);
            window.location.href = 'dashboard.html';
          } else {
            alert(`Error: ${data.message}`);
          }
        } catch (err) {
          alert('An error occurred. Please try again.');
        }
      });
    }
  
    if (registerForm) {
      registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = registerForm.username.value;
        const email = registerForm.email.value;
        const password = registerForm.password.value;
  
        try {
          const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
          });
  
          const data = await response.json();
          if (response.ok) {
            alert('Registration successful. Please login.');
            window.location.href = 'login.html';
          } else {
            alert(`Error: ${data.error}`);
          }
        } catch (err) {
          alert('An error occurred. Please try again.');
        }
      });
    }
  });
  