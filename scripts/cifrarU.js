document.addEventListener("DOMContentLoaded", function () {
  const moduloInput = document.getElementById("modulo");
  const textoInput = document.getElementById("texto");
  const resultadoOutput = document.getElementById("resultado");
  const errorLabel = document.getElementById("error");

  function cifrar(texto, modulo, cifrar) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
      let nuevoCharCode;
      nuevoCharCode = (charCode + modulo * cifrar) % 65536;
      if (nuevoCharCode < 0) {
        nuevoCharCode += 65536;
      }
      resultado += String.fromCharCode(nuevoCharCode);
    }
    return resultado;
  }

  // #4
  function actualizar() {
    const modulo = parseInt(moduloInput.value);
    if (isFinite(modulo) && modulo >= 1 && modulo <= 65535) {
      errorLabel.style.opacity = 0;
      const textoOriginal = textoInput.value;
      const textoCifrado = cifrar(textoOriginal, modulo, 1);
      resultadoOutput.value = textoCifrado;
    } else {
      errorLabel.style.opacity = 1;
      return;
    }
  }

  function actualizarR() {
    const modulo = parseInt(moduloInput.value);
    if (isFinite(modulo) && modulo >= 1 && modulo <= 65535) {
      errorLabel.style.opacity = 0;
      const textoCifrado = resultadoOutput.value;
      const textoDescifrado = cifrar(textoCifrado, modulo, -1);
      textoInput.value = textoDescifrado;
    } else {
      errorLabel.style.opacity = 1;
      return;
    }
  }

  textoInput.addEventListener("input", actualizar);
  moduloInput.addEventListener("input", actualizar);
  resultadoOutput.addEventListener("input", actualizarR);
});
