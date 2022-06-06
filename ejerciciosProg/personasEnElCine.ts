let botonaso = document.getElementById("ingreso");

function verificacionNumero(numLocal: number): boolean {
  let datoValido: boolean = !isNaN(numLocal);
  if (numLocal < 1 && datoValido === true) {
    datoValido = false;
  }
  return datoValido;
}

function asignarBoolean(): boolean {
  let valorBoolean: boolean;
  let valor: number = Math.floor(Math.random() * (2 - 0) + 0);
  if (valor === 1) {
    valorBoolean = true;
  } else {
    valorBoolean = false;
  }
  return valorBoolean;
}

function cargaButacas(arrayButaca: boolean[]) {
  let longitudArray: number = arrayButaca.length - 1;
  for (let elemento: number = 0; elemento <= longitudArray; elemento++) {
    arrayButaca[elemento] = asignarBoolean();
  }
}

function contarButacas(arrayButaca: boolean[]) {
  let longitudArray: number = arrayButaca.length - 1;
  let butacaOcupada: number = 0;
  let butacaDesocupada: number = 0;
  for (let elemento: number = 0; elemento <= longitudArray; elemento++) {
    if (arrayButaca[elemento] === true) {
      butacaOcupada++;
    } else {
      butacaDesocupada++;
    }
  }
  console.log("La cantidad de butacas ocupadas es: " + butacaOcupada);
  console.log("La cantidad de butacas desocupadas es: " + butacaDesocupada);
}

botonaso.addEventListener("click", () => {
  let numeroValido: boolean;
  numeroValido = verificacionNumero(Number(numIngresado.value));
  if (numeroValido === true) {
    let cantidadButacas: boolean = new Array(Number(numIngresado.value));
    cargaButacas(cantidadButacas);
    contarButacas(cantidadButacas);
    console.log("La cantidad de butacas es: " + cantidadButacas.length);
  } else {
    console.log("El dato ingresado no es correcto, intentelo nuevamente");
  }
});
