function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:

  var contador = 0;
  var i = 1;

  while (true) {
    if (contador + i > 100) {
      break; 
    }
    contador += i;
    i++;
  }

  return contador;
}

module.exports = sumarHastaNConBreak;
