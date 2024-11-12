// Selecionando elementos
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Função para alternar o menu
menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !isExpanded);
  dropdownMenu.classList.toggle('show');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    menuButton.setAttribute('aria-expanded', 'false');
    dropdownMenu.classList.remove('show');
  }
});
