// Array com os nomes das páginas
const pageNames = ["exemplo1", "exemplo2", "exemploLogin", "fastfood", "jogos", "modelo1", "modelo2", "modelo3", "viagem"];
const menu = document.getElementById("dropdownMenu");

// Função para verificar se o arquivo existe e adicionar ao menu
async function checkAndAddPage(pageName) {
  // Caminho base
  const paths = [
    `src/pages/${pageName}/${pageName}.html`,  // Caminho direto
    `src/pages/${pageName}/index.html`       // Caminho com index.html
  ];

  for (const path of paths) {
    try {
      // Usando fetch para tentar acessar o arquivo
      const response = await fetch(path, { method: 'GET' });  // Usando GET para pegar o conteúdo
      if (response.ok) {
        addLinkToMenu(pageName, path);
        return;
      }
    } catch (error) {
      console.error(`Erro ao verificar o arquivo ${path}:`, error);
    }
  }

  console.log(`Nenhum arquivo encontrado para ${pageName}`);
}

// Função para adicionar o link ao menu
function addLinkToMenu(pageName, path) {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${path}" target="_blank" rel="noopener noreferrer">${pageName}</a>`;
  menu.appendChild(li);
}

// Itera sobre o array de nomes e verifica cada página
pageNames.forEach(pageName => checkAndAddPage(pageName));
