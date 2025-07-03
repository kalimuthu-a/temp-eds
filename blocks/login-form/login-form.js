export default function decorate(block) {
  block.classList.add('login-form-container');

  const hiThere = document.createElement('h2');
  hiThere.textContent = "Hi there,\\nWelcome Back!";
  hiThere.classList.add('login-form-title');

  const partnerLogin = document.createElement('h3');
  partnerLogin.textContent = "Partner Login";
  partnerLogin.classList.add('login-form-partner-login');

  const userIdInput = document.createElement('input');
  userIdInput.type = 'text';
  userIdInput.placeholder = 'Enter User Id';
  userIdInput.classList.add('login-form-input');

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Enter Password';
  passwordInput.classList.add('login-form-input');

  const forgotPassword = document.createElement('a');
  forgotPassword.href = '#';
  forgotPassword.textContent = 'Forgot Password';
  forgotPassword.classList.add('login-form-forgot-password');

  const loginButton = document.createElement('button');
  loginButton.textContent = 'Login';
  loginButton.classList.add('login-form-button');

  const registerAgency = document.createElement('a');
  registerAgency.href = '#';
  registerAgency.textContent = 'Register Agency';
  registerAgency.classList.add('login-form-register-link');

  const registerCorporate = document.createElement('a');
  registerCorporate.href = '#';
  registerCorporate.textContent = 'Register Corporate';
  registerCorporate.classList.add('login-form-register-link');

  const registerSeparator = document.createElement('span');
  registerSeparator.textContent = '|';
  registerSeparator.classList.add('login-form-register-separator');

  const registerLinks = document.createElement('div');
  registerLinks.classList.add('login-form-register-links');
  registerLinks.append(registerAgency, registerSeparator, registerCorporate);

  block.append(hiThere, partnerLogin, userIdInput, passwordInput, forgotPassword, loginButton, registerLinks);
}