function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: 
  // "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if(letra.length===1 && letra==="a"){
  return "Es vocal";
  }
  else if (letra.length===1 && letra==="e"){
    return "Es vocal";
    }
  else if (letra.length===1 && letra==="i"){
      return "Es vocal";
      }  
  else if (letra.length===1 && letra==="o"){
    return "Es vocal";
    }
  else if (letra.length===1 && letra==="u"){
    return "Es vocal";
    }
  else{
    return "Dato incorrecto";
  }  
}

module.exports = esVocal;
