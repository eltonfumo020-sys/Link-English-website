// Demo-only login page. Authentication is not connected yet.
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
if (loginForm) loginForm.addEventListener('submit', event => {
  event.preventDefault();
  loginMessage.textContent = 'The sign-in interface is ready, but authentication is not connected yet. Connect your Supabase project before using real accounts.';
});