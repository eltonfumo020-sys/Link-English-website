// Registration interface: connect this form to the school's authentication backend before accepting real accounts.
const form = document.getElementById('signupForm');
const message = document.getElementById('signupMessage');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const password = document.getElementById('signupPassword').value;
  const confirmation = document.getElementById('confirmPassword').value;
  if (password !== confirmation) {
    message.textContent = 'Your passwords do not match. Please check and try again.';
    return;
  }
  message.textContent = 'Your details look good. Online account creation is not active yet; the registration form must be connected to the Link English student database first.';
});
