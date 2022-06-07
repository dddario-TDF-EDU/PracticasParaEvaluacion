let botonaso = document.getElementById("ingreso");

function tamanioArrayValido(tamanioArray: number): boolean {
  let numValido: boolean = !isNaN(tamanioArray);
  if (numValido === true && tamanioArray < 1) {
    numValido = false;
  }
  return numValido;
}

function cargaArray(arrayACargar: number[]) {
  let tamanioArray: number = arrayACargar.length - 1;
  for (let indice: number = 0; indice <= tamanioArray; indice++) {
    arrayACargar[indice] = Math.floor(Math.random() * (101 - 0) + 0);
  }
}

function encuentraElMenor(arrayACargar: number[]): number {
  let menor: number = arrayACargar[0];
  let tamanioArray: number = arrayACargar.length - 1;
  for (let indice: number = 1; indice <= tamanioArray; indice++) {
    if (menor > arrayACargar[indice]) {
      menor = arrayACargar[indice];
    }
  }
  return menor;
}

botonaso.addEventListener("click", () => {
  let datoValido: boolean;
  let tamanioArray: number;

  tamanioArray = Number(prompt("Ingrese el tamaño del array:"));
  datoValido = tamanioArrayValido(tamanioArray);

  if (datoValido === true) {
    let arrayCreado: number = new Array(tamanioArray);

    cargaArray(arrayCreado);
    //no especificaron como debia mostrarse, el simple console.log muestra todo el arreglo
    console.log(arrayCreado);
    console.log(
      "El menor elemento dentro del array es: " + encuentraElMenor(arrayCreado)
    );
  } else {
    alert("Dato ingresado invalido, intente nuevamente.");
  }
});
