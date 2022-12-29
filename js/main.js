function encriptar() {
  let texto = document.getElementById("main-textarea").value.toLowerCase();

  let txtoCifrado = texto.replace(/e/gim, "enter");
  txtoCifrado = txtoCifrado.replace(/o/gim, "ober");
  txtoCifrado = txtoCifrado.replace(/i/gim, "imes");
  txtoCifrado = txtoCifrado.replace(/a/gim, "ai");
  txtoCifrado = txtoCifrado.replace(/u/gim, "ufat");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("no-text").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("second-textarea").innerHTML = txtoCifrado;
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  let texto = document.getElementById("main-textarea").value.toLowerCase();

  let textoCifrado = texto.replace(/enter/gim, "e");
  textoCifrado = textoCifrado.replace(/ober/gim, "o");
  textoCifrado = textoCifrado.replace(/imes/gim, "i");
  textoCifrado = textoCifrado.replace(/ai/gim, "a");
  textoCifrado = textoCifrado.replace(/ufat/gim, "u");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("no-text").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("second-textarea").innerHTML = textoCifrado;
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  let contenido = document.querySelector("#second-textarea");
  contenido.select();
  document.execCommand("copy");
  alert("¡¡¡Texto Copiado!!!");
}
