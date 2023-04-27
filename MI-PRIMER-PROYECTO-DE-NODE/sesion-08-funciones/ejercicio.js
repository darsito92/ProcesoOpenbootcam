
// Función que devuelve siempre "true"

function siempreTrue() {
    return true;
  }
  
  // Función asíncrona que pasa por consola un mensaje después de 5 segundos

  async function mensajePromesa() {
    await new Promise(tiempo => setTimeout(tiempo, 5000));
    console.log("Hola soy una promesa");
  }
  
  // Función generadora de índices pares automáticos

  function* generadorPares() {
    let i = 0;
    while (true) {
      yield i;
      i += 2;
    }
  }