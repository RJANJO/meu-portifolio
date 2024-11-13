document.addEventListener('DOMContentLoaded', function() {
    const modoToggle = document.getElementById('modoToggle');
    const body = document.body;
  
    // Verificar o tema atual e aplicar
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        modoToggle.textContent = '🌙'; // Ícone da lua para tema escuro
    } else {
        body.setAttribute('data-theme', 'light');
        modoToggle.textContent = '🌞'; // Ícone do sol para tema claro
    }
  
    modoToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            modoToggle.textContent = '🌞'; // Troca para o sol no modo claro
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            modoToggle.textContent = '🌙'; // Troca para a lua no modo escuro
        }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileMenuToggle');
    const profileMenu = document.getElementById('profileMenu');
  
    profileImg.addEventListener('click', function() {
        // Alterna a visibilidade do menu de perfil
        profileMenu.classList.toggle('active');
        // Opcionalmente, adicionar ou remover uma classe "active" para a imagem do perfil também
        profileImg.classList.toggle('active');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    menuButton.addEventListener('click', function() {
        // Alterna a visibilidade do menu lateral
        dropdownMenu.classList.toggle('active');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Botão de menu lateral
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    // Alterna a visibilidade do menu lateral
    menuButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show'); // Adiciona ou remove a classe 'show'
    });
  
    // Menu de perfil
    const profileImg = document.getElementById('profileMenuToggle');
    const profileMenu = document.getElementById('profileMenu');
  
    // Alterna a visibilidade do menu de perfil
    profileImg.addEventListener('click', function() {
        profileMenu.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    });
  });
  