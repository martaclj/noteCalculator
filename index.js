function notaFinal(bien1, mal1, bien2, mal2) {
  let resultado = (bien1 - (mal1/3)) + ((bien2 * 4) - (mal2 * 1.33));
  return resultado;
}
// console.log(notaFinal(26, 3, 2, 1));
function solicitarDatos() {
  let bien1 = parseInt(prompt("Ingrese la cantidad de respuestas correctas en la primera parte:"));
  let mal1 = parseInt(prompt("Ingrese la cantidad de respuestas incorrectas en la primera parte:"));
  let bien2 = parseInt(prompt("Ingrese la cantidad de respuestas correctas en la segunda parte:"));
  let mal2 = parseInt(prompt("Ingrese la cantidad de respuestas incorrectas en la segunda parte:"));

  return { bien1, mal1, bien2, mal2 };
}

let datos = solicitarDatos();
console.log(notaFinal(datos.bien1, datos.mal1, datos.bien2, datos.mal2));

let parrafo = document.getElementById('resultado');
parrafo.innerHTML = notaFinal(datos.bien1, datos.mal1, datos.bien2, datos.mal2);

//aprobar 48 aprox.