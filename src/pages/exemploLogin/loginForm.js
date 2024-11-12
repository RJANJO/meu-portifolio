document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Impede o envio real do formulário

  // Coleta os dados inseridos
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulação da verificação de dados
  if (username === "usuario" && password === "senha123") {
    // Salva os dados no localStorage (simulando o login)
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    // Exibe mensagem de boas-vindas
    document.getElementById("welcomeMessage").innerText = `Bem-vindo, ${username}!`;

    // Esconde o formulário de login e exibe o de upload
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("uploadFormContainer").style.display = "block";
  } else {
    alert("Credenciais inválidas.");
  }
});
