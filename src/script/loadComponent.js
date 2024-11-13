function loadComponent(selector, filePath) {
  const element = document.querySelector(selector);
  if (element) {
    fetch(filePath)  // Caminho correto para os arquivos na pasta 'public'
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar o componente: ${filePath}`);
        }
        return response.text();
      })
      .then(data => {
        element.innerHTML = data;
      })
      .catch(error => console.error(error));
  }
}

// Carregar o header, footer e main em todas as páginas
document.addEventListener('DOMContentLoaded', function () {
  loadComponent("header", "/public/components/header.html"); // Caminho correto
  loadComponent("footer", "/public/components/footer.html");
});

