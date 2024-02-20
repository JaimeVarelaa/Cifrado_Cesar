document.addEventListener("DOMContentLoaded", function () {
  var resultados = document.getElementById("result");
  const textoInput = document.getElementById("texto");

  // #5
  function descifrar(texto, modulo) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
      if (charCode >= 32 && charCode <= 126 && charCode !== 127) {
        let nuevoCharCode;
        nuevoCharCode = ((charCode - 32 - modulo) % 95) + 32;
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

  // #6
  function actualizar() {
    const texto = textoInput.value;
    let resultadosD = "";
    for (var i = 0; i < 32; i++) {
      for (var ii = 0; ii < 3; ii++) {
        var contador = i * 3 + ii + 1;
        if (contador <= 94) {
          resultadosD +=
            "<p>Modulo: " +
            contador +
            "<br>" +
            descifrar(texto, contador) +
            "</p>";
        }
      }
    }
    resultados.innerHTML = resultadosD;
  }

  textoInput.addEventListener("input", actualizar);
});
