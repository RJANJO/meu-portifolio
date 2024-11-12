// Seleciona o botão de alternância e o elemento body
const modoToggle = document.getElementById('modoToggle');
const body = document.body;

// Função para alternar entre modo claro e escuro
function alternarModo() {
    if (body.classList.contains('modo-escuro')) {
        body.classList.remove('modo-escuro');
        body.classList.add('modo-claro');
        modoToggle.textContent = '☀️';
        localStorage.setItem('tema', 'claro');
    } else {
        body.classList.remove('modo-claro');
        body.classList.add('modo-escuro');
        modoToggle.textContent = '🌙';
        localStorage.setItem('tema', 'escuro');
    }
}

// Evento de clique no botão de alternância
modoToggle.addEventListener('click', alternarModo);

// Verifica a preferência do usuário ao carregar a página
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'claro') {
    body.classList.add('modo-claro');
    modoToggle.textContent = '☀️';
} else {
    body.classList.add('modo-escuro');
    modoToggle.textContent = '🌙';
}