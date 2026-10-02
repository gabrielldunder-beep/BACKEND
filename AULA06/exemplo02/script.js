let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imagem");

// selecionar por classe
let caixas = document.getElementsByClassName("box");

// Mostra no console.log o conteúdo do elemento
  console.log(titulo);
  console.log(caixas);
  console.log(imagem);

  //================================
  // Alterar o conteúdo do elemento
  //================================
  function alterar() {
  titulo.innerText = "jarvis dominou tudo";
  subtitulo.innerText = "Alterando o conteúdo do elemento";
  paragrafo.innerText = "Este é um parágrafo alterado pelo JavaScript";
  }