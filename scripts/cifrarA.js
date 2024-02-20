document.addEventListener("DOMContentLoaded", function () {
  const moduloInput = document.getElementById("modulo");
  const textoInput = document.getElementById("texto");
  const resultadoOutput = document.getElementById("resultado");
  const errorLabel = document.getElementById("error");

  // #3
  function cifrar(texto, modulo, cifrar) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
      if (charCode >= 32 && charCode <= 126 && charCode !== 127) {
        let nuevoCharCode;
        //console.log(charCode);
        nuevoCharCode = ((charCode - 32 + modulo * cifrar) % 95) + 32;
        if (nuevoCharCode < 32) {
          nuevoCharCode += 95;
        }
        resultado += String.fromCharCode(nuevoCharCode);
      } else {
        resultado += texto[i];
      }
    }
    return resultado;
  }

  // #2
  function actualizar() {
    const modulo = parseInt(moduloInput.value);
    if (isFinite(modulo) && modulo >= 1 && modulo <= 94) {
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
    if (isFinite(modulo) && modulo >= 1 && modulo <= 94) {
      errorLabel.style.opacity = 0;
      const textoCifrado = resultadoOutput.value;
      const textoDescifrado = cifrar(textoCifrado, modulo, -1);
      textoInput.value = textoDescifrado;
    } else {
      errorLabel.style.opacity = 1;
      return;
    }
  }
  // #1
  textoInput.addEventListener("input", actualizar);
  moduloInput.addEventListener("input", actualizar);
  resultadoOutput.addEventListener("input", actualizarR);
});
