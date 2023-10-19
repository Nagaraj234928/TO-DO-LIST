// This script is optional and can be used to validate the form data before submitting it

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username');
  const password = document.getElementById('password');

  if (username.value.trim() === '' || password.value.trim() === '') {
    alert('Please enter a username and password');
    return;
  }

  form.submit();
});
