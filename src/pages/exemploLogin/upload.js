document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Impede o envio real do formulário

  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];  // Pega o arquivo selecionado

  if (file) {
    // Simula o upload (não envia para um servidor, apenas exibe informações sobre o arquivo)
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("uploadMessage").innerText = `Arquivo '${file.name}' enviado com sucesso!`;
      // Aqui você pode simular o processamento do arquivo
      console.log("Conteúdo do arquivo:", e.target.result);  // Exibe o conteúdo do arquivo no console
    };
    reader.readAsText(file);  // Lê o arquivo como texto (para arquivos de texto)
  } else {
    alert("Por favor, selecione um arquivo.");
  }
});
