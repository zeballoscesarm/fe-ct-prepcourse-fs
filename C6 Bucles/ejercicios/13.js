function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  var numStr=num.toString();

  for (var i=0; i<numStr.length;i++){
    if (numStr[i]==="."){
      return false;
    }
  }
  return true;

}

module.exports = esEntero;
