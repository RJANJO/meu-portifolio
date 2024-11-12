const loggedIn = localStorage.getItem("loggedIn");
if (loggedIn === "true") {
  const username = localStorage.getItem("username");
  document.getElementById("welcomeMessage").innerText = `Bem-vindo, ${username}!`;
} else {
  // Atraso antes do redirecionamento para mostrar que é necessário login
  setTimeout(() => {
    window.location.href = "login.html";  // Redireciona para o login se não estiver autenticado
  }, 1500);  // 1.5 segundos para mostrar a mensagem
}
