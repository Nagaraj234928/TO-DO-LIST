const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  const password_confirm = form.password_confirm.value;
  
  if (password !== password_confirm) {
    alert('Passwords do not match!');
    return;
  }
  
  console.log(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
});
