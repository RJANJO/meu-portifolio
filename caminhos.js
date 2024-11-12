// Detectar o ambiente e definir o caminho base
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const baseURL = isLocal ? '' : '/meu-portifolio';

// Função para corrigir caminhos de elementos
function corrigirCaminho(elementos, atributo) {
    elementos.forEach(elemento => {
        const caminhoAtual = elemento.getAttribute(atributo);
        if (caminhoAtual && !caminhoAtual.startsWith('http')) { // Ignorar URLs absolutas
            elemento.setAttribute(atributo, baseURL + caminhoAtual);
        }
    });
}

// Corrigir favicon
const favicons = document.querySelectorAll('link[rel="shortcut icon"], link[rel="icon"]');
corrigirCaminho(favicons, 'href');

// Corrigir estilos (CSS)
const estilos = document.querySelectorAll('link[rel="stylesheet"]');
corrigirCaminho(estilos, 'href');

// Corrigir scripts (JS)
const scripts = document.querySelectorAll('script[src]');
corrigirCaminho(scripts, 'src');

