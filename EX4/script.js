const form = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;
  if (username.value.trim() === "") {
    username.nextElementSibling.style.display = 'block';
    valid = false;
  } else {
    username.nextElementSibling.style.display = 'none';
  }
  if (email.value.trim() === "") {
    email.nextElementSibling.style.display = 'block';
    valid = false;
  } else {
    email.nextElementSibling.style.display = 'none';
  }
  if (password.value.trim() === "") {
    password.nextElementSibling.style.display = 'block';
    valid = false;
  } else {
    password.nextElementSibling.style.display = 'none';
  }
  if (confirmPassword.value.trim() !== password.value.trim() || confirmPassword.value.trim() === "") {
    confirmPassword.nextElementSibling.style.display = 'block';
    valid = false;
  } else {
    confirmPassword.nextElementSibling.style.display = 'none';
  }
  if (valid) {
    alert("Submitted Successfully!");
    form.reset();
  }
});
