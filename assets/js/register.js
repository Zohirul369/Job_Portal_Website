const form = document.getElementById('registerForm');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get selected user role
  const roles = document.getElementsByName('role');
  let userType = '';
  for (const role of roles) {
    if (role.checked) {
      userType = role.value; // Keep value as-is (job_seeker / employer)
      break;
    }
  }

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validation
  if (!name || !email || !password || !confirmPassword || !userType) {
    result.innerHTML = `<div class="alert alert-danger">All fields are required.</div>`;
    return;
  }

  if (password !== confirmPassword) {
    result.innerHTML = `<div class="alert alert-danger">Passwords do not match.</div>`;
    return;
  }

  // Save user data in localStorage
  const userData = {
    userType,
    name,
    email,
    password,
  };

  localStorage.setItem(email, JSON.stringify(userData));

  result.innerHTML = `<div class="alert alert-success">
    ${userType === 'job_seeker' ? 'Job Seeker' : 'Employer'} <strong>${name}</strong> registered successfully!
  </div>`;

  form.reset();
});
