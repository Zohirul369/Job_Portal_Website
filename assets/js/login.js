const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const storedUser = localStorage.getItem(email);

  if (storedUser) {
    const user = JSON.parse(storedUser);

    if (user.password === password) {
      localStorage.setItem('currentUser', email);

      if (user.userType === 'job_seeker') {
        window.location.href = 'job-seeker-profile.html';   
      } else if (user.userType === 'employer') {
        window.location.href = 'employer-profile.html';
      }
    } else {
      message.innerHTML = '<div class="alert alert-danger">Incorrect password!</div>';
    }
  } else {
    message.innerHTML = '<div class="alert alert-danger">User not found!</div>';
  }
});
