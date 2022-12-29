function encriptar() {
  let texto = document.getElementById("main-textarea").value.toLowerCase();

  var txtoCifrado = texto.replace(/e/gim, "enter");
  var txtoCifrado = txtoCifrado.replace(/o/gim, "ober");
  var txtoCifrado = txtoCifrado.replace(/i/gim, "imes");
  var txtoCifrado = txtoCifrado.replace(/a/gim, "ai");
  var txtoCifrado = txtoCifrado.replace(/u/gim, "ufat");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("no-text").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("second-textarea").innerHTML = txtoCifrado;
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  let texto = document.getElementById("main-textarea").value.toLowerCase();

  var textoCifrado = texto.replace(/enter/gim, "e");
  var textoCifrado = textoCifrado.replace(/ober/gim, "o");
  var textoCifrado = textoCifrado.replace(/imes/gim, "i");
  var textoCifrado = textoCifrado.replace(/ai/gim, "a");
  var textoCifrado = textoCifrado.replace(/ufat/gim, "u");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("no-text").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("second-textarea").innerHTML = textoCifrado;
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#second-textarea");
  contenido.select();
  document.execCommand("copy");
  alert("Se copio!!!");
}
