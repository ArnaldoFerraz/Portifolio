document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-theme');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  const updateButton = () => {
    const isLight = body.classList.contains('light-mode');
    button.textContent = isLight ? '🌙' : '☀️';
  };

  updateButton();

  button.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    updateButton();
  });
});