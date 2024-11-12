const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
  try {
    const filePath = req.url === '/' ? './index.html' : `.${req.url}`;
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    // Determinar o Content-Type com base na extensão do arquivo
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
      case '.ico':
        contentType = 'image/x-icon';
        break;
      default:
        contentType = 'text/html';
    }

    // Ler e servir o arquivo solicitado
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          // Arquivo não encontrado
          fs.readFile('./404.html', (err, errorContent) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(errorContent || '<h1>404 - Not Found</h1>', 'utf-8');
          });
        } else {
          // Outro erro
          res.writeHead(500);
          res.end(`Server Error: ${error.code}`);
        }
      } else {
        // Sucesso
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`<h1>Erro Interno</h1><p>${error.message}</p>`);
    console.error('Erro no servidor:', error);
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
