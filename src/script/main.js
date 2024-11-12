// scripts.js

// Função para carregar um componente e inserir no DOM
function loadComponent(selector, filePath) {
    const element = document.querySelector(selector);
    if (element) {
      fetch(filePath)
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
  
  // Carregar o header e footer em todas as páginas
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/src/components/header.html");
    loadComponent("footer", "/src/components/footer.html");
    loadComponent("main", "/src/components/main.html");
  });
  