/*
case Sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por ID: getElementByID
por nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

// nome.style.width = "100%";
// email.style.width = "100%";

function validaNome() {
  let txt = document.querySelector("#mensagem");

  if (nome.value.length < 3) {
    txt.innerHTML = "Nome invalido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome valido";
    txt.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#mensagemEmail");

  if (email.value.indexOf("@") == -1) {
    txtEmail.innerHTML = "Email invalido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "Email valido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Maximo 100 caracteressadasd";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.innerHTML = "";
    // txtAssunto.style.display ="none"
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("formulario enviado com sucesso");
  } else {
    alert("preencha todos os campos");
  }
}

function mapaZoom() {
  mapa.style.width = "700px";
  mapa.style.height = "500px";
}

function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}
