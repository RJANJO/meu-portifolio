const conteudo = document.getElementById("conteudo");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  conteudo.textContent = "Texto alterado pelo JavaScript!";
  conteudo.style.color = "blue";
  conteudo.style.fontSize = "24px";
  conteudo.style.border = "1px solid black";
});

const conteudo2 = document.getElementById("conteudo2");
const botao2 = document.getElementById("botao2");

botao2.addEventListener("click", () => {
  conteudo2.textContent = "Texto alterado pelo CSS!";
  conteudo2.classList.toggle("borda-preta");

});