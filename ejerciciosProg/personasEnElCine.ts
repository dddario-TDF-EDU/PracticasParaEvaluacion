let botonaso = document.getElementById("ingreso");

function verificacionNumero(numLocal: number): boolean {
  let datoValido: boolean = !isNaN(numLocal);
  if (numLocal < 1 && datoValido === true) {
    datoValido = false;
  }
  return datoValido;
}

function asignarBoolean(): boolean {
  let valor: number = math.floor(math.random() * (1 - 0) + 0);
  return valor;
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

botonaso?.addEventListener("click", () => {
  let numeroValido: boolean;
  let tamanioArray: number;

  numeroValido = verificacionNumero(Number(numIngresado.value));

  if (numeroValido === true) {
    tamanioArray = Number(numIngresado.value);
    let cantidadButacas: boolean = new Array(tamanioArray);
    cargaButacas(cantidadButacas);
    contarButacas(cantidadButacas);
  } else {
    console.log("El dato ingresado no es correcto, intentelo nuevamente");
  }
});
