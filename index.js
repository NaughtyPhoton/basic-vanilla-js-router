// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


const colorRouter = new class {
  constructor() {
    this.bindToUserNavigation();

    if (!window.history.state) {
      const color = window.location.pathname.replace(/^\//, '');
      window.history.replaceState({color}, color, '/' + color);
    }

    this.render(window.history.state.color);
  }

  bindToUserNavigation() {
    window.addEventListener('popstate', event => {
      this.render(event.state.color);
    });
  }

  go(color) {
    window.history.pushState({color}, color, '/' + color);
    this.render(color);
  }

  render(color) {
    document.title = color + '!';
    document.body.innerHTML = '';
    document.body.appendChild(
      document.createElement('h1')
    ).textContent = `Hello ${color}!`;

  }
}

setTimeout(() => {
  colorRouter.go('red');
}, 2000)