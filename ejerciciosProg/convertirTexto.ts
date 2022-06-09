let botonaso = document.getElementById("ingreso");

function posicionEspacioEnTexto(
  texto: string,
  posicionEspacio: number
): number {
  let tamanioTexto: number = texto.length - 1;
  let hayEspacio: boolean = false;
  for (
    let elemento: number = posicionEspacio;
    elemento <= tamanioTexto;
    elemento++
  ) {
    if (texto[elemento] === " ") {
      posicionEspacio = elemento;
      hayEspacio = true;
    }
  }
  if (hayEspacio === false) {
    posicionEspacio = -1;
  }
  return posicionEspacio;
}

function reemplazarEspacio(texto: string[], posicionEspacio: number) {
  let tamanioTexto: number = texto.length - 1;
  for (let elemento = posicionEspacio; elemento <= tamanioTexto; elemento++) {
    texto[elemento] = texto[elemento + 1];
  }
}

function verificacionIngreso(texto: string[]): boolean {
  let textoValido: boolean = true;
  let tamanioTexto = texto.length;
  if (tamanioTexto < 1 || texto[0] === null) {
    textoValido = false;
  }
  return textoValido;
}

botonaso.addEventListener("click", () => {
  let lugarEspacio: number = 0;
  let textoIngresado: string;
  let ingresoValido: boolean;
  let textoFinal: string;

  textoIngresado = prompt("ingrese el texto a modificar");
  ingresoValido = verificacionIngreso(textoIngresado);

  if (ingresoValido === true) {
    textoFinal = textoIngresado;
    console.log("El texto de partida es: " + textoFinal);
    lugarEspacio = posicionEspacioEnTexto(textoFinal, lugarEspacio);
    while (lugarEspacio !== -1) {
      reemplazarEspacio(textoFinal, lugarEspacio);
      console.log(textoFinal + " paso por aca");
      if (lugarEspacio !== -1) {
        lugarEspacio = posicionEspacioEnTexto(textoFinal, lugarEspacio);
      }
    }
    console.log("El texto final es: " + textoFinal);
  } else {
    console.log("texto ingresado incorrecto, intentelo nuevamente");
  }
});
