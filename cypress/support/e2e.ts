// e2e support file
// Add custom commands and global configuration for e2e tests

// Example: Custom command for login
// Cypress.Commands.add('login', (email, password) => { ... })

// Hide fetch/XHR requests from command log (reduces noise)
const app = window.top;
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}
